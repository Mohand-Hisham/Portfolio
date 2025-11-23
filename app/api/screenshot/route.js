import puppeteer from "puppeteer";

export async function GET(request) {
  const url = request.nextUrl.searchParams.get("url");

  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 800 });
  await page.goto(url, { waitUntil: "networkidle0" });

  const screenshot = await page.screenshot();
  await browser.close();

  return new Response(screenshot, {
    headers: { "Content-Type": "image/png" },
  });
}
