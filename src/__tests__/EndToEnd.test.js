import puppeteer from "puppeteer";

// Feature 2: Show/hide an event details
describe("show/hide an event details", () => {
  let browser;
  let page;
  beforeAll(async () => {
    jest.setTimeout(30000);
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto("http://localhost:3002/");
    await page.waitForSelector(".event");
  });

  afterAll(() => {
    browser.close();
  });

  // Senario 1
  test("An event element is collapsed by default", async () => {
    const eventDetails = await page.$(".event .event__Details");
    expect(eventDetails).toBeNull();
  });

  // Senario 2
  test("User can expand an event to see its details", async () => {
    await page.click(".event .details-btn");

    const eventDetails = await page.$(".event .event__Details");
    expect(eventDetails).toBeDefined();
  });

  // Senario 3
  test("User can collapse an event to hide its details", async () => {
    await page.click(".event .details-btn");
    const eventDetails = await page.$(".event .event__Details");
    expect(eventDetails).toBeNull();
  });
});
