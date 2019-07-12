'use strict';

const User = use('App/Models/User');

class UserController {
  /**
   * attempt to login with user email and password
   * @return {Token Object}
   */
  async login({ auth, request }) {
    const { email, password } = request.only(['email', 'password']);
    const token = await auth.attempt(email, password);
    return token;
  }
}

module.exports = UserController;
