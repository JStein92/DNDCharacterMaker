import { DNDCharacterMakerPage } from './app.po';

describe('dndcharacter-maker App', () => {
  let page: DNDCharacterMakerPage;

  beforeEach(() => {
    page = new DNDCharacterMakerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
