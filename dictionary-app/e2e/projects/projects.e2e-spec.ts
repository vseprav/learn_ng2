import {DictionaryProjectsPage} from "./projects.po";
describe('dictionary-app Home', function() {
  let page: DictionaryProjectsPage;

  beforeEach(() => {
    page = new DictionaryProjectsPage();
  });

  it('should display content projects works!', () => {
    page.navigateTo('/projects');
    expect(page.getProjectName()).toEqual('Project 1');
  });

  it('should display content projects works!', () => {
    page.navigateTo('/projects/new');
    expect(page.getNewProjectTitle()).toEqual('New Project');
  });

});
