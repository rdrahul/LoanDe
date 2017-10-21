import { LoanDePage } from './app.po';

describe('loan-de App', () => {
  let page: LoanDePage;

  beforeEach(() => {
    page = new LoanDePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
