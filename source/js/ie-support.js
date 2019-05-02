"use strict";

const isIeBrowser = function () {
  const ua = window.navigator.userAgent;
  const msie = ua.indexOf('MSIE '); // IE 10 or older
  const trident = ua.indexOf('Trident/'); //IE 11

  return (msie > 0 || trident > 0);
};

if (isIeBrowser()) {
  document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/picturefill/3.0.3/picturefill.js" async></script>');
}
