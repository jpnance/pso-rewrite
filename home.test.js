import { test, expect } from '@playwright/test';

test('Has title', async ({ page }) => {
	await page.goto('http://localhost:3000/');

	await expect(page).toHaveTitle(/Players/);
});

test('Can add players to player pool', async ({ page }) => {
	const getPageLocators = (page) => {
		return {
			players: page.getByRole('listitem'),
			nameInput: page.getByRole('textbox', { name: 'Name' }),
			submitButton: page.getByRole('button', { name: 'Add to Player Pool' })
		};
	};

	const addPlayer = async (name, { nameInput, submitButton }) => {
		await nameInput.fill(name);
		await submitButton.click();
	};

	await page.goto('http://localhost:3000/');

	let locators = getPageLocators(page);

	await expect(locators.players).toHaveCount(0);

	await expect(locators.nameInput).toBeVisible();
	await expect(locators.submitButton).toBeVisible();

	await addPlayer('Vince Young', locators);

	locators = getPageLocators(page);

	await expect(locators.players).toHaveCount(1);
	await expect(locators.players).toHaveText('Vince Young');

	await addPlayer('Colt McCoy', locators);

	locators = getPageLocators(page);

	await expect(locators.players).toHaveCount(2);
	await expect(locators.players).toHaveText(['Vince Young', 'Colt McCoy']);
});
