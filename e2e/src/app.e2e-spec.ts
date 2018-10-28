import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
<<<<<<< HEAD
    expect(page.getParagraphText()).toEqual('Welcome to LMS!');
=======
    expect(page.getParagraphText()).toEqual('Welcome to last!');
>>>>>>> 6b8fade9625374f7cf4ba9a51fc1e58dd2ba0146
  });
});
