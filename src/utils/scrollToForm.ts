export function scrollToForm() {
    const formElement = document.getElementById("application-form");
    if (formElement) {
        formElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }
}
