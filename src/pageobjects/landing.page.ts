import WDIOHelper from "../helpers/wdio-helper";

export class LandingPage extends WDIOHelper {
  private get btn_accept_cookies() {
    return driver.isAndroid
      ? "//android.widget.Button[@resource-id='com.sseairtricity.dev:id/btn_accept_cookies']"
      : "//XCUIElementTypeButton[@name='bannerAllowAllButton']";
  }

  private get landingPageLoginButton() {
    return driver.isAndroid
      ? "//android.widget.Button[@resource-id='landingPageLoginButton']"
      : "//XCUIElementTypeButton[@name='Login']";
  }

  public async acceptCookies() {
    await this.click(this.btn_accept_cookies);
  }

  public async clickLogin() {
    await this.click(this.landingPageLoginButton);
  }
}

export default new LandingPage();
