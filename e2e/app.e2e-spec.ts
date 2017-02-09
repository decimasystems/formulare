import { FormularePage } from './app.po';

describe('formulare App', function() {
  let page: FormularePage;

  beforeEach(() => {
    page = new FormularePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
