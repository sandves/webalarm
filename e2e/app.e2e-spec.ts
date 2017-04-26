import { WebalarmPage } from './app.po';

describe('webalarm App', () => {
  let page: WebalarmPage;

  beforeEach(() => {
    page = new WebalarmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
