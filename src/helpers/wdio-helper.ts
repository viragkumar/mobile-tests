import { $ } from "@wdio/globals";

export default class WDIOHelper {
  async click(selector: string, logical_name = "NOT_PROVIDED"): Promise<void> {
    const element = await $(selector);
    try {
      await element.click();
      console.log(
        `clicked element#<${logical_name}> with selector: <${selector}>`,
      );
    } catch (error) {
      console.error(
        `Error clicking element with selector "${selector}":`,
        error,
      );
      throw error;
    }
  }
}
