
import {DictionaryDictionariesPage} from "./dictionaries.po";
describe('dictionary-app Dictionaries', function() {
  let page: DictionaryDictionariesPage;

  beforeEach(() => {
    page = new DictionaryDictionariesPage();
  });

  it('should display content dictionaries works!', () => {
    page.navigateTo('/dictionaries');
    expect(page.getParagraphText()).toEqual('dictionaries works!');
  });
});
