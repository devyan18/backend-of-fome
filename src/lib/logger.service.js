export class Logger {
  static async log(message) {
    console.log(message);
  }

  static async error(message) {
    console.error(message);
  }

  static async warn(message) {
    console.warn(message);
  }
}
