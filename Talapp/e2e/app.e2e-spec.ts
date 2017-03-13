import { TalappPage } from './app.po';

describe('talapp App', function() {
  let page: TalappPage;

  beforeEach(() => {
    page = new TalappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
