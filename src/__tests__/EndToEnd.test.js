import puppeteer from "puppeteer";

jest.setTimeout(30000);

// Feature 2: Show/hide an event details
describe("show/hide an event details", () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 250, // slow down by 250ms
      ignoreDefaultArgs: ["--disable-extensions"], // ignores default setting that causes timeout errors
    });
    page = await browser.newPage();
    await page.goto("http://localhost:3002/");
    await page.waitForSelector(".event-card");
  });

  afterAll(() => {
    browser.close();
  });

  // Feature 1: Filter Events by City
  // Senario 1

  // Senario 2

  // Senario 3

  // Feature 2: Show/Hide an Event's Details
  // Senario 1

  test("An event element is collapsed by default", async () => {
    const eventDetails = await page.$(".event-card .event__Details");
    expect(eventDetails).toBeNull();
  });

  // Senario 2
  test("User can expand an event to see its details", async () => {
    await page.click(".event-card .details-btn");
    const eventDetails = await page.$(".event-card .event__Details");
    expect(eventDetails).toBeDefined();
  });

  // Senario 3
  test("User can collapse an event to hide its details", async () => {
    await page.click(".event-card .details-btn");
    const eventDetails = await page.$(".event-card .event__Details");
    expect(eventDetails).toBeNull();
  });
});
