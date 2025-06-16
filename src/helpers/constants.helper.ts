export default class Constants {
  private static readonly _result_dir = "_results_";

  static get RESULT_DIR() {
    return this._result_dir;
  }

  static get ALLURE_RESULT_DIR() {
    return `${this._result_dir}/allure-results`;
  }
  static get ALLURE_REPORT_DIR() {
    return `${this._result_dir}/allure-report`;
  }
}
