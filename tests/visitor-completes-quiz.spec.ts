import { test, expect } from "@playwright/test";

test("smoke test", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: /take the quiz/i }).click();

  await expect(
    page.getByRole("heading", { name: /is manual right for you/i }),
  ).toBeVisible();

  await expect(
    page.getByRole("heading", {
      name: /which image best matches your hair loss/i,
    }),
  ).toBeVisible();
});

test("visitor accepted for treatment", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: /take the quiz/i }).click();

  await expect(
    page.getByRole("heading", {
      name: /which image best matches your hair loss/i,
    }),
  ).toBeVisible();
  await page
    .getByRole("button", { name: /temples/i })
    .first()
    .click();

  await expect(
    page.getByRole("heading", {
      name: /which image best matches your hair loss/i,
    }),
  ).toBeVisible();
  await page.getByRole("button", { name: /no/i }).click();

  await expect(
    page.getByRole("heading", {
      name: /breast cancer/i,
    }),
  ).toBeVisible();
  await page.getByRole("button", { name: /no/i }).click();

  await expect(
    page.getByRole("heading", { name: /eligible for treatment/i }),
  ).toBeVisible();
});

test("visitor rejected for treatment", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: /take the quiz/i }).click();

  await expect(
    page.getByRole("heading", {
      name: /which image best matches your hair loss/i,
    }),
  ).toBeVisible();

  await page
    .getByRole("button", { name: /temples/i })
    .first()
    .click();
  await page.getByRole("button", { name: /yes/i }).click();

  await expect(
    page.getByRole("heading", { name: /not eligible for treatment/i }),
  ).toBeVisible();
});
