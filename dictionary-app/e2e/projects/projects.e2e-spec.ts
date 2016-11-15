import {DictionaryProjectsPage} from "./projects.po";
describe('dictionary-app Home', function() {
  let page: DictionaryProjectsPage;

  beforeEach(() => {
    page = new DictionaryProjectsPage();
  });

  it('should display content projects works!', () => {
    page.navigateTo('/projects');
    expect(page.getParagraphText()).toEqual('projects works!');
  });
});
