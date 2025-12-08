# Google Form Section Implementation

This document provides complete information about the recruitment form implementation in the GoogleFormSection component.

## Overview

A fully functional recruitment/qualification form has been implemented with:

- ✅ 14 form fields extracted from Figma design
- ✅ Real-time validation with Zod
- ✅ Phone number input with country flags
- ✅ Resume file upload to MinIO
- ✅ Google Sheets integration via API
- ✅ Responsive design matching Figma specifications

## Form Fields

All fields are required:

1. **First Name** - Text input
2. **Last Name** - Text input
3. **Email** - Email input with validation
4. **Phone Number** - International phone with country selector
5. **Age** - Number input (18-100)
6. **Speak Mandarin** - Yes/No dropdown
7. **English Rating** - Number input (1-10 scale)
8. **Why do you want to work?** - Text input
9. **What motivates you?** - Text input
10. **What is your goal?** - Text input
11. **Seafood Knowledge** - Number input (1-10 scale)
12. **Work Philosophy** - Textarea (short term vs long term)
13. **Resume** - File upload (PDF/DOCX, max 10MB)
14. **Privacy Agreement** - Checkbox

## Configuration

### 1. Environment Variables

Update `.env.local` with your Google Sheets URL and notification email:

```env
# Google Sheets Form Configuration
NEXT_PUBLIC_SPREADSHEET_URL=https://docs.google.com/spreadsheets/d/YOUR_SPREADSHEET_ID/edit
NEXT_PUBLIC_EMAIL_RECEIVER=your-email@example.com
```

**How to get your Spreadsheet URL:**

1. Create a new Google Sheet
2. Copy the URL from the browser address bar
3. Paste it in `.env.local` replacing `YOUR_SPREADSHEET_ID`

### 2. Initialize Spreadsheet Headers

Before accepting form submissions, initialize the spreadsheet with headers:

```bash
curl -X POST https://api.alphaomegamensgrooming.com/api/form-submissions/init-spreadsheet \
  -H "Content-Type: application/json" \
  -d '{
    "spreadsheetUrl": "YOUR_SPREADSHEET_URL",
    "sampleFormData": {
      "firstName": "Sample",
      "lastName": "User",
      "email": "sample@example.com",
      "phoneNumber": "+61400000000",
      "age": "25",
      "speakMandarin": "yes",
      "englishRating": "8",
      "whyWorkHere": "Sample answer",
      "whatMotivatesYou": "Sample answer",
      "yourGoal": "Sample answer",
      "seafoodKnowledge": "7",
      "workPhilosophy": "Sample philosophy",
      "resumeUrl": "https://example.com/resume.pdf",
      "agreePrivacy": true
    }
  }'
```

Or use JavaScript in the browser console:

```javascript
fetch("https://api.alphaomegamensgrooming.com/api/form-submissions/init-spreadsheet", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        spreadsheetUrl: "YOUR_SPREADSHEET_URL",
        sampleFormData: {
            firstName: "Sample",
            lastName: "User",
            email: "sample@example.com",
            phoneNumber: "+61400000000",
            age: "25",
            speakMandarin: "yes",
            englishRating: "8",
            whyWorkHere: "Sample answer",
            whatMotivatesYou: "Sample answer",
            yourGoal: "Sample answer",
            seafoodKnowledge: "7",
            workPhilosophy: "Sample philosophy",
            resumeUrl: "https://example.com/resume.pdf",
            agreePrivacy: true,
        },
    }),
})
    .then((res) => res.json())
    .then((data) => console.log("Initialized:", data));
```

## Components Created

### UI Components (`src/components/ui/`)

1. **FormInput.tsx** - Text/number input with label and error handling
2. **FormTextarea.tsx** - Multi-line text input
3. **PhoneInput.tsx** - Phone number with country flag selector
4. **FormSelect.tsx** - Dropdown select with options
5. **FormFileUpload.tsx** - File upload with MinIO integration

### Services

1. **googleSheetsApi.ts** - API service for form submission
2. **minio.ts** - MinIO file upload service (already existed)

### Schema

1. **googleFormSchema.ts** - Zod validation schema with all validation rules

### Section Component

1. **GoogleFormSection.tsx** - Main form component with complete implementation

## Form Flow

```
User fills form
  ↓
Client-side validation (Zod)
  ↓
Resume upload to MinIO
  ↓
Form submission to Google Sheets API
  ↓
Success/Error feedback
```

## Styling

The form matches the Figma design exactly:

- **Container**: White background, 20px border radius
- **Inputs**: 48px height, 8px border radius, #d0d5dd border
- **Labels**: Inter Medium 500, 14px, #344054 color
- **Placeholders**: Inter Regular 400, 16px, #667085 color
- **Submit Button**: Gradient from #035a7c to #1d3a69, Gotham Rounded Bold
- **Button Text**: "SEE IF YOU QUALIFY"

## Validation Rules

- **First/Last Name**: Min 2 characters
- **Email**: Valid email format
- **Phone**: Valid international phone number
- **Age**: 18-100 years old
- **English/Seafood Rating**: 1-10 scale
- **Text fields**: Minimum character requirements (10-20 chars)
- **Resume**: PDF or DOCX, max 10MB
- **Privacy**: Must be checked

## File Upload

- **Accepted formats**: PDF, DOC, DOCX
- **Max file size**: 10MB
- **Storage**: MinIO bucket named "resumes"
- **URL**: Automatically included in form submission

## Testing the Form

1. **Start development server**:

    ```bash
    npm run dev
    ```

2. **Navigate to the form section** on your page

3. **Fill out all fields** (all are required)

4. **Upload a resume** (PDF or DOCX)

5. **Check the privacy agreement**

6. **Click "SEE IF YOU QUALIFY"**

7. **Check your Google Sheet** for the new submission

## Troubleshooting

### Form won't submit

- Check browser console for errors
- Verify all required fields are filled
- Ensure resume is uploaded successfully
- Check environment variables are set correctly

### File upload fails

- Verify MinIO service is running
- Check MinIO credentials in `.env.local`
- Ensure file is PDF or DOCX and under 10MB
- Check `/api/upload` endpoint is accessible

### Data not appearing in Google Sheets

- Verify spreadsheet URL is correct
- Ensure spreadsheet headers were initialized
- Check API endpoint is accessible
- Review browser network tab for API errors

### Validation errors

- All fields are required
- Age must be 18-100
- Ratings must be 1-10
- Phone number must be valid international format
- Text fields have minimum character requirements

## Dependencies

```json
{
    "react-hook-form": "^7.x",
    "zod": "^3.x",
    "@hookform/resolvers": "^3.x",
    "react-phone-number-input": "^3.x",
    "libphonenumber-js": "^1.x",
    "minio": "^8.x"
}
```

## API Integration

**Endpoint**: `POST https://api.alphaomegamensgrooming.com/api/form-submissions`

**Request Body**:

```json
{
  "formData": {
    "firstName": "string",
    "lastName": "string",
    "email": "string",
    "phoneNumber": "string",
    "age": "string",
    "speakMandarin": "yes|no",
    "englishRating": "1-10",
    "whyWorkHere": "string",
    "whatMotivatesYou": "string",
    "yourGoal": "string",
    "seafoodKnowledge": "1-10",
    "workPhilosophy": "string",
    "resumeUrl": "string",
    "agreePrivacy": boolean
  },
  "spreadsheetUrl": "string",
  "emailReceiver": "string (optional)",
  "metadata": {
    "formType": "recruitment-qualification",
    "subject": "New Recruitment Form Submission"
  }
}
```

**Success Response (201)**:

```json
{
    "data": {
        "submissionId": 123,
        "submittedAt": "2025-12-08T...",
        "warning": "optional warning message"
    },
    "status": 201,
    "message": "Form submitted successfully"
}
```

## Next Steps

1. **Set your Google Sheets URL** in `.env.local`
2. **Initialize spreadsheet headers** using the curl command above
3. **Test the form** in development
4. **Configure email receiver** (optional) for notifications
5. **Deploy to production** when ready

## Support

For issues or questions:

- Check the browser console for error messages
- Review the API documentation at https://api.alphaomegamensgrooming.com/api-docs/
- Verify all environment variables are set correctly
- Test the MinIO upload separately using `/api/upload`
