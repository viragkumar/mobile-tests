import { $ } from "@wdio/globals";

export default class WDIOHelper {
  async click(selector: string): Promise<void> {
    const element = await $(selector);
    try {
      await element.click();
    } catch (error) {
      console.error(
        `Error clicking element with selector "${selector}":`,
        error
      );
      throw error;
    }
  }
}
