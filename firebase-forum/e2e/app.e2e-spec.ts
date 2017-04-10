import { FirebaseForumPage } from './app.po';

describe('firebase-forum App', () => {
  let page: FirebaseForumPage;

  beforeEach(() => {
    page = new FirebaseForumPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
