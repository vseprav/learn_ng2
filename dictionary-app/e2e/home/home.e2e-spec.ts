
import {DictionaryHomePage} from "./home.po";
describe('dictionary-app Home', function() {
  let page: DictionaryHomePage;

  beforeEach(() => {
    page = new DictionaryHomePage();
  });

  it('should display content home works!', () => {
    page.navigateTo('/');
    expect(page.getParagraphText()).toEqual('home works!');
  });

  it('should display content home works! on wrong route', () => {
    page.navigateTo('/testUrl');
    expect(page.getParagraphText()).toEqual('home works!');
  });
});
