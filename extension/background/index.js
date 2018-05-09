// import importContent from '../lib/importContent.js';

browser.menus.create({
  id: "speech-selector",
  title: browser.i18n.getMessage("speechSelector"),
  contexts: ["selection"]
});

browser.menus.onClicked.addListener(info => {
  if (info.menuItemId === 'speech-selector') {
    browser.tabs.executeScript({
      // code: importContent('../content/speechSelector.js')
      file: '../content/speechSelector.js'
    });
  }
});