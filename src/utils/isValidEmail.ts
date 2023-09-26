function isValidEmail(email: string): boolean {
  // Regular expression for a valid email address
  const emailPattern: RegExp =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Use the test() method to check if the email matches the pattern
  return emailPattern.test(email);
}
