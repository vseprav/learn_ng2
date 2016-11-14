import { DictionaryAppPage } from './app.po';

describe('dictionary-app App', function() {
  let page: DictionaryAppPage;

  beforeEach(() => {
    page = new DictionaryAppPage();
  });

  it('should display message saying Pocket Dictionary', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Pocket Dictionary');
  });
});
