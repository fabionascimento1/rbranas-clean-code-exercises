class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  validatePassword(password) {
    return this.password === password;
  }
}

const user = new User("John", "john@example.com", "123456");
console.log(user.validatePassword("123456")); // true
console.log(user.validatePassword("abcdef")); // false
