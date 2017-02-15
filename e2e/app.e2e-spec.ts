import { NgCustomFormComponentPage } from './app.po';

describe('ng-custom-form-component App', function() {
  let page: NgCustomFormComponentPage;

  beforeEach(() => {
    page = new NgCustomFormComponentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
