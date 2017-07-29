import { Akwa2Page } from './app.po';

describe('akwa2 App', () => {
  let page: Akwa2Page;

  beforeEach(() => {
    page = new Akwa2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
