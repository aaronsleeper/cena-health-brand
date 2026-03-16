import 'preline';

// Preline v4 ESM does not auto-call autoInit — trigger it manually after DOM is ready.
document.addEventListener('DOMContentLoaded', () => {
  if (window.HSStaticMethods) {
    window.HSStaticMethods.autoInit();
  }
});
