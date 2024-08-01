import { test, expect } from "@playwright/test";

test("smoke test", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole(
      "button",

      { name: /take the quiz/i },
    ),
  ).toBeVisible();

  // await expect(
  //   page.getByRole("heading", { name: /is manual right for you/i }),
  // ).toBeVisible();
});
