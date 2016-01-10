module.exports = function () {

  this.Given(/^I can click$/, function () {
    browser.url(process.env.ROOT_URL);
    browser.waitForExist('h1');
  });

  this.Then(/^I can count$/, function () {
    browser.click('button');
    browser.click('button');
    browser.click('button');
    browser.click('button');
    browser.click('button');
    browser.click('button');
    browser.click('button');
    browser.click('button');
    browser.click('button');
    browser.click('button');
  });
};