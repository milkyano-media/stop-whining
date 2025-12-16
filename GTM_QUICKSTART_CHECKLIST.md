# GTM & GA4 Quick Start Checklist

> A condensed checklist for implementing Google Tag Manager and Google Analytics 4 in Next.js projects.

## Pre-Implementation (15 minutes)

### [ ] 1. Create Accounts

- [ ] Create GTM account at https://tagmanager.google.com/
- [ ] Copy Container ID: `GTM-XXXXXXX`
- [ ] Create GA4 property at https://analytics.google.com/
- [ ] Copy Measurement ID: `G-XXXXXXXXXX`

## Implementation (30 minutes)

### [ ] 2. Install Package

```bash
npm install @next/third-parties
```

### [ ] 3. Create Data Layer Helper

Create `lib/gtm/data-layer.ts`:

<details>
<summary>Click to expand code</summary>

```typescript
declare global {
  interface Window {
    dataLayer: any[];
  }
}

if (typeof window !== "undefined" && !window.dataLayer) {
  window.dataLayer = [];
}

export const dataLayer = {
  push: (data: Record<string, any>) => {
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push(data);
    }
  },

  viewItem: (data: {
    item_id: string | number;
    item_name: string;
    item_category: string;
    price: number;
    currency?: string;
    inStock: boolean;
  }) => {
    dataLayer.push({
      event: "view_item",
      ecommerce: {
        currency: data.currency || "USD",
        value: data.price,
        items: [{
          item_id: String(data.item_id),
          item_name: data.item_name,
          item_category: data.item_category,
          price: data.price,
          quantity: 1,
          in_stock: data.inStock,
        }],
      },
    });
  },

  search: (searchTerm: string, resultsCount: number) => {
    dataLayer.push({
      event: "search",
      search_term: searchTerm,
      results_count: resultsCount,
    });
  },
};
```

</details>

### [ ] 4. Update Root Layout

In `app/layout.tsx`:

```typescript
import { GoogleTagManager } from '@next/third-parties/google';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID || ''} />
        {children}
      </body>
    </html>
  );
}
```

### [ ] 5. Add Environment Variable

In `.env.local`:

```bash
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

In `.env.example`:

```bash
# Google Tag Manager
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

### [ ] 6. Restart Dev Server

```bash
npm run dev
```

## Add Tracking (15 minutes per feature)

### [ ] 7. Track Product Views

```typescript
"use client";
import { useEffect } from "react";
import { dataLayer } from "@/lib/gtm/data-layer";

export function ProductPage({ product }) {
  useEffect(() => {
    dataLayer.viewItem({
      item_id: product.id,
      item_name: product.name,
      item_category: product.category,
      price: parseFloat(product.price),
      currency: "USD",
      inStock: product.inStock,
    });
  }, [product]);

  return <div>{/* Your UI */}</div>;
}
```

### [ ] 8. Track Search

```typescript
"use client";
import { useEffect } from "react";
import { dataLayer } from "@/lib/gtm/data-layer";

export function SearchComponent({ searchTerm, results }) {
  useEffect(() => {
    if (searchTerm) {
      dataLayer.search(searchTerm, results.length);
    }
  }, [searchTerm, results]);

  return <div>{/* Your UI */}</div>;
}
```

## Configure GA4 in GTM (10 minutes)

### [ ] 9. Setup GA4 Tag

1. [ ] Go to GTM → Tags → New
2. [ ] Choose "Google Analytics: GA4 Configuration"
3. [ ] Enter Measurement ID: `G-XXXXXXXXXX`
4. [ ] Trigger: "All Pages"
5. [ ] Save

### [ ] 10. Publish Container

1. [ ] Click "Submit" (top-right)
2. [ ] Add version name
3. [ ] Click "Publish"

## Testing (10 minutes)

### [ ] 11. Test in Browser

```javascript
// Open browser console on your site
console.log(window.dataLayer);
// Should show array with events
```

### [ ] 12. Test with GTM Preview

1. [ ] In GTM, click "Preview"
2. [ ] Enter site URL
3. [ ] Verify tags fire
4. [ ] Check event data

### [ ] 13. Test in GA4 Real-Time

1. [ ] Go to GA4 → Reports → Realtime
2. [ ] Navigate your site
3. [ ] See live events

## Deploy to Production (5 minutes)

### [ ] 14. Set Production Env Variable

In your hosting platform (Vercel/Netlify):

```
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

### [ ] 15. Build & Deploy

```bash
npm run build
# Deploy using your platform
```

### [ ] 16. Verify Production

- [ ] Check GTM script loads
- [ ] Test with GTM Preview on production URL
- [ ] Monitor GA4 Real-Time reports

---

## Quick Troubleshooting

| Issue | Fix |
|-------|-----|
| GTM not loading | Check env variable, restart server |
| Events not firing | Verify "use client" directive |
| No GA4 data | Publish GTM container, wait 24-48h |
| Duplicate events | Check useEffect dependencies |

---

## Time Estimate

- **Setup**: 60 minutes
- **Basic tracking**: 30 minutes
- **Testing**: 20 minutes
- **Deploy**: 10 minutes

**Total**: ~2 hours for complete implementation

---

## Next: Advanced Features

After basic setup, consider adding:

- [ ] Add to cart tracking
- [ ] Checkout tracking
- [ ] Purchase/conversion tracking
- [ ] Video play tracking
- [ ] Form submission tracking
- [ ] Scroll depth tracking
- [ ] File download tracking

---

**See full guide:** `GTM_GA4_IMPLEMENTATION_GUIDE.md`
