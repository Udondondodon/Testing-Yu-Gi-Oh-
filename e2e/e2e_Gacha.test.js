const assert = require('assert');

Feature('Menyukai salah satu restaurant');
Scenario('menyukai satu restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.wait(5);
  I.seeElement('#restaurant-list');
  I.seeElement('#restaurant-name');
  const chooseRestaurant = locate('#restaurant-name').first();
  I.click(chooseRestaurant);
  I.wait(3);
  I.click('#likeButton');
  I.wait(3);
  I.click('#favoriteButton');
  I.wait(3);
  I.seeElement('.container-list');
});

Feature('Batal menyukai restaurant');
Scenario('Batal menyukai salah satu restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.wait(5);
  I.seeElement('#restaurant-list');
  I.seeElement('#restaurant-name');
  const chooseRestaurant = locate('#restaurant-name').first();
  I.click(chooseRestaurant);
  I.wait(3);
  I.click('#likeButton');
  I.wait(3);
  I.click('#favoriteButton');
  I.seeElement('.container-list');
  I.seeElement('#restaurant-name');
  I.click(chooseRestaurant);
  I.wait(3);
  I.click('#likeButton');
  I.wait(3);
  I.click('#favoriteButton');
  I.dontSeeElement('.container-list');
});

Feature('Mengisi Form Review');
Scenario('Bila Form Review Terisi', async ({ I }) => {
  I.amOnPage('/');
  I.wait(5);
  I.seeElement('#restaurant-list');
  I.seeElement('#restaurant-name');
  const chooseRestaurant = locate('#restaurant-name').first();
  I.click(chooseRestaurant);
  I.wait(3);
  I.seeElement('.form');
  const formName = 'Udin';
  I.fillField('#inputReviewName', formName);
  I.wait(2);
  const formReview = 'Walaupun harganya mahal masakannya top banget';
  I.fillField('#inputReview', formReview);
  I.wait(2);
  I.click('#buttonSave');
  I.wait(5);
  I.seeElement('#review');
  const chooseReviewName = locate('#reviewName').last();
  const reviewedName = await I.grabTextFrom(chooseReviewName);
  const fullReviewName = `Nama : ${formName}`;
  assert.strictEqual(fullReviewName, reviewedName);
  const chooseReview = locate('#review').last();
  const reviewed = await I.grabTextFrom(chooseReview);
  const fullReview = `Review : ${formReview}`;
  assert.strictEqual(fullReview, reviewed);
});
