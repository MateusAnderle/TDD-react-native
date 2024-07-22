import { device, element, by, waitFor } from 'detox';
describe('Favorite', () => {
  beforeAll(async () => {
    await device.launchApp();
  });
  beforeEach(async () => {
    await device.reloadReactNative();
  });
  it('Should favorite a TV show', async () => {
    await element(by.id('search-input')).replaceText('The Big Bang Theory');
    await element(by.id('search-input')).typeText('\n');
    await element(by.text('The Big Bang Theory')).atIndex(1).tap();
    await element(by.id('favorite-button')).tap();
    await expect(element(by.id('heart-icon-true'))).toBeVisible();
  });

  it('Should favorite the first bad TV Show (star < 5)', async () => {
    const starRatingBad = by.id('star-rating-bad');

    const list = by.id('show-list');

    await waitFor(element(starRatingBad).atIndex(0))
      .toBeVisible()
      .whileElement(list)
      .scroll(300, 'down', 0.5, 0.5);

    await element(starRatingBad).atIndex(0).tap();

    await element(by.id('favorite-button'))
      .tap()
      .catch(async () => {
        await element(starRatingBad).atIndex(0).tap();
        await element(by.id('favorite-button')).tap();
      });

    await expect(element(by.id('heart-icon-true'))).toBeVisible();
  });
});
