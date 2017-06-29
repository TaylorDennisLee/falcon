import { FalconPage } from './app.po';

describe('falcon App', () => {
  let page: FalconPage;

  beforeEach(() => {
    page = new FalconPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
