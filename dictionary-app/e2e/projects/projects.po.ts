import {browser, by, element} from "protractor";

export class DictionaryProjectsPage {
  navigateTo(url:string) {
    return browser.get(url);
  }

  getParagraphText() {
    return element(by.css('app-root p')).getText();
  }
}
