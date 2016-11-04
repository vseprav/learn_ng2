import { CrudOperationPage } from './app.po';

describe('crud-operation App', function() {
  let page: CrudOperationPage;

  beforeEach(() => {
    page = new CrudOperationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
