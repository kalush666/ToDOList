export class ValidationHelper {
  static isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  static isValidPassword(password: string): boolean {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
    return passwordRegex.test(password);
  }

  static getErrorMessage(email: string, password: string): string {
    let errorMessage = '';
    if (!this.isValidEmail(email)) {
      errorMessage += 'Invalid email address. ';
    }
    if (!this.isValidPassword(password)) {
      errorMessage +=
        'Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, and one number.';
    }
    return errorMessage.trim();
  }
}
