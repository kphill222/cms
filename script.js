// Main entry point for the application
import './js/app.js';

// Add any polyfills if needed
if (!Element.prototype.matches) {
  Element.prototype.matches = 
    Element.prototype.msMatchesSelector || 
    Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
  Element.prototype.closest = function(s) {
    let el = this;
    if (!document.documentElement.contains(el)) return null;
    do {
      if (el.matches(s)) return el;
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);
    return null;
  };
}

// Add loading class to body to prevent FOUC
document.documentElement.classList.add('js-loading');
window.addEventListener('load', () => {
  document.documentElement.classList.remove('js-loading');
});