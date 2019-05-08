"use strict";

function isIeBrowser() {
  const userAgent = window.navigator.userAgent;
  const msie = userAgent.indexOf('MSIE '); // IE 10 or older
  const trident = userAgent.indexOf('Trident/'); //IE 11

  return (msie > 0 || trident > 0);
};

if (isIeBrowser()) {
  document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/picturefill/3.0.3/picturefill.js" async></script>');
  document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/svgxuse/1.2.6/svgxuse.min.js" async></script>');
}
