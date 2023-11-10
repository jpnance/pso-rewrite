import { test, expect } from '@playwright/test';

test('Has title', async ({ page }) => {
	await page.goto('http://localhost:3000/');

	await expect(page).toHaveTitle(/Players/);
});

test('Can add players to player pool', async ({ page }) => {
	await page.goto('http://localhost:3000/');

	const beforeSubmit = {
		players: page.getByRole('listitem'),
		nameInput: page.getByRole('textbox', { name: 'Name' }),
		submitButton: page.getByRole('button', { name: 'Add to Player Pool' })
	};

	await expect(beforeSubmit.players).toHaveCount(0);

	await expect(beforeSubmit.nameInput).toBeVisible();
	await expect(beforeSubmit.submitButton).toBeVisible();

	await beforeSubmit.nameInput.fill('Vince Young');

	await beforeSubmit.submitButton.click();

	const afterSubmit = {
		players: page.getByRole('listitem'),
		nameInput: page.getByRole('textbox', { name: 'Name' }),
		submitButton: page.getByRole('button', { name: 'Add to Player Pool' })
	};

	afterSubmit.players = page.getByRole('listitem');

	await expect(afterSubmit.players).toHaveCount(1);
	await expect(afterSubmit.players).toHaveText('Vince Young');

	await afterSubmit.nameInput.fill('Colt McCoy');

	await afterSubmit.submitButton.click();

	const afterSecondSubmit = {
		players: page.getByRole('listitem')
	};

	await expect(afterSecondSubmit.players).toHaveCount(2);
	await expect(afterSecondSubmit.players).toHaveText(['Vince Young', 'Colt McCoy']);
});
