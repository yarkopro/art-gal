import { ArtGal2Page } from './app.po';

describe('art-gal2 App', function() {
  let page: ArtGal2Page;

  beforeEach(() => {
    page = new ArtGal2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
