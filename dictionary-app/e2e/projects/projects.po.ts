import {browser, by, element} from "protractor";

export class DictionaryProjectsPage {
  navigateTo(url:string) {
    return browser.get(url);
  }

  getProjectName() {
    return element(by.css('app-project .name')).getText();
  }

  getNewProjectTitle() {
    return element(by.css('app-project-form .title')).getText();
  }

}
