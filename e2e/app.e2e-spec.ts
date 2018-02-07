import { HttpsRequestsPage } from './app.po';

describe('https-requests App', () => {
  let page: HttpsRequestsPage;

  beforeEach(() => {
    page = new HttpsRequestsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
