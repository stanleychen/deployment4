import { Deployment4Page } from './app.po';

describe('deployment4 App', function() {
  let page: Deployment4Page;

  beforeEach(() => {
    page = new Deployment4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
