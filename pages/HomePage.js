import { expect } from '@playwright/test'
import * as data from '../data/HomeData'

export class HomePage {
  /**
   * @param {import('@playwright/test').Page} page
   */

  constructor(page) {
    this.page = page
    this.allowAllLoc = this.page.getByRole('button', { name: 'Allow all' })
    this.headingLoc = this.page.locator('.c-hero__title')
  }

  async openHomePage() {
    await this.page.goto('/', { waitUntil: 'commit' })
  }
  async acceptCookies() {
    await this.allowAllLoc.click()
  }
  async confirmeHomePage() {
    await expect(this.headingLoc).toContainText(data.homeTitle)
  }
}
