import puppeteer from "puppeteer";

// Feature 2: Show/hide an event details
describe("show/hide an event details", () => {
  beforeAll(async () => {
    jest.setTimeout(30000);
  });

  // Senario 1: An event element is collapsed by default.
  test("An event element is collapsed by default", async () => {
    const browser = await puppeteer.launch();

    const page = await browser.newPage();
    await page.goto("http://localhost:3000/");

    await page.waitForSelector(".event");

    const eventDetails = await page.$(".event .event__Details");
    expect(eventDetails).toBeNull();
    browser.close();
  });
});
