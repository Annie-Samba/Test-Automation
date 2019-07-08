const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('FormIsFull', function() {
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('firefox').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('FormIsFull', async function() {
    await driver.get("https://www.ultimateqa.com/filling-out-forms/")
    await driver.findElement(By.id("et_pb_contact_name_0")).click()
    await driver.findElement(By.id("et_pb_contact_name_0")).sendKeys("My Name Is You")
    await driver.findElement(By.id("et_pb_contact_message_0")).click()
    await driver.findElement(By.id("et_pb_contact_message_0")).sendKeys("This is a test")
    await driver.findElement(By.css(".et_pb_contact_submit:nth-child(1)")).click()
  })
})
