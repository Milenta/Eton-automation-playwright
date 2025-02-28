import { test } from '@playwright/test'
import { HomePage } from '../pages/HomePage'
import { PositionsPage } from '../pages/PositionsPage'

let page
let context

test.beforeAll(async ({ browser }) => {
  context = await browser.newContext()
  page = await browser.newPage()
  const homePage = new HomePage(page)
  await homePage.openHomePage()
  await homePage.acceptCookies()
})

test('Verify title of home page', async ({}) => {
  const homePage = new HomePage(page)
  await homePage.openHomePage()
  await homePage.confirmeHomePage()
})
test('Verify team for Senior QA Specialist Position', async ({}) => {
  const homePage = new HomePage(page)
  const positionPage = new PositionsPage(page)

  await homePage.openHomePage()
  await positionPage.openQaPositions()
})

test('Save all cards titles from Serbia open positions in file', async ({}) => {
  const homePage = new HomePage(page)
  const positionPage = new PositionsPage(page)

  await homePage.openHomePage()
  await positionPage.openSerbiaPositions()
  await positionPage.loadAllPositions()
  await positionPage.iterateTitlesAndWriteInFile()
})
