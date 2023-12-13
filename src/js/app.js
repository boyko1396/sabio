/**
 * !(i)
 * The code is included in the final file only when a function is called, for example: FLSFunctions.spollers();
 * Or when the entire file is imported, for example: import "files/script.js";
 * Unused code does not end up in the final file.

 * If we want to add a module, we should uncomment it.
 */

// support webp, identify device
import BaseHelpers from './helpers/BaseHelpers.js';

// header mobile nav toggle
import HeaderBtnToggle from './modules/HeaderBtnToggle.js';

// box cookie
import BoxCookie from './modules/BoxCookie.js';

// language select
import LanguageSelect from './modules/LanguageSelect.js';

BaseHelpers.checkWebpSupport();
BaseHelpers.addTouchClass();
BaseHelpers.addLoadedClass();

document.addEventListener('DOMContentLoaded', function() {
  const boxCookie = new BoxCookie();
  const headerBtnToggle = new HeaderBtnToggle();
  const languageSelect = new LanguageSelect();
});
