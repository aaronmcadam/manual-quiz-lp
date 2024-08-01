import { test, expect } from "@playwright/test";

test("smoke test", async ({ page }) => {
  await page.goto("/");

  await page
    .getByRole(
      "button",

      { name: /take the quiz/i },
    )
    .click();

  await expect(
    page.getByRole("heading", { name: /is manual right for you/i }),
  ).toBeVisible();
});
