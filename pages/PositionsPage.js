import { Locator, Page, expect } from '@playwright/test'
import * as data from '../data/PositionsData'
const fs = require('fs')

export class PositionsPage {
  /**
   * @param {import('@playwright/test').Page} page
   */

  constructor(page) {
    this.page = page
    this.careerLoc = this.page.getByText('Career Life at Holycode Open')
    this.openPositionsLoc = this.page.getByRole('banner').getByRole('link', { name: 'Open positions' })
    this.qaLoc = this.page.getByRole('button', { name: 'QA' })
    this.serbiaLoc = this.page.getByRole('button', { name: 'Serbia' })
    this.cardTitle = this.page.locator('.c-careercard__†itle')
    this.cardTeam = this.page.locator('.c-careercard > p')
    this.loadMoreBtn = this.page.locator('.load-more.paged')
  }

  async openQaPositions() {
    await this.careerLoc.hover()
    await this.openPositionsLoc.click()
    await this.qaLoc.click()
    await this.page.waitForTimeout(500)
  }
  async openSerbiaPositions() {
    await this.careerLoc.hover()
    await this.openPositionsLoc.click()
    await this.serbiaLoc.click()
    await this.page.waitForTimeout(500)
  }
  async searchEtonTeam() {
    const elements = await cardTitle.elementHandles()
    let found = false
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i]
      const titleText = await element.textContent()
      if (titleText.includes(data.cardTitle)) {
        // console.log(`Found text Senior QA Specialist at index ${i}.`)
        const teamElements = await cardTeam.elementHandles()
        if (i < teamElements.length) {
          const teamElement = teamElements[i]
          const teamText = await teamElement.textContent()
          // console.log(`Text from another element at the same index: ${teamText}`)
          if (teamText === data.cardTeam) {
            found = true
          }
        }
      }
    }
    expect(found).toBe(true)
  }
  async loadAllPositions() {
    while (await this.loadMoreBtn.isVisible()) {
      await this.loadMoreBtn.click()
      await this.page.waitForTimeout(500)
    }
  }

  async iterateTitlesAndWriteInFile() {
    const elements = await this.cardTitle.elementHandles()
    const filePath = data.fileName
    fs.writeFileSync(filePath, '') // clear file before writing new data
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i]
      const textReceived = await element.textContent()
      const dataToWrite = `${textReceived}\n`

      fs.appendFile(filePath, dataToWrite, (err) => {
        if (err) {
          console.error('Error writing to file:', err)
        }
      })
    }
  }
}
