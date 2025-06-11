import { test, expect } from '@playwright/test';

test('search for T-shirts and verify Faded Short Sleeve T-shirts is listed', async ({ page }) => {
  // Step 1: Navigate to the homepage
  await page.goto('http://www.automationpractice.pl/index.php');

  // Step 2: Search for 'T-shirts'
  await page.getByRole('textbox', { name: 'Search' }).fill('T-shirts');
  await page.getByRole('textbox', { name: 'Search' }).press('Enter');

  // Step 3: Verify 'Faded Short Sleeve T-shirts' is in the list
  await expect(page.locator('#center_column').getByRole('heading', { name: 'Faded Short Sleeve T-shirts' })).toBeVisible();
});
