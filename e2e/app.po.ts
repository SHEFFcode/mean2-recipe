export class RecipeBookPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('js-root h1')).getText();
  }
}
