export default class User {
  constructor(properties = {
    id: undefined,
    username: undefined,
    firstName: undefined,
    lastName: undefined,
    createdAt: undefined,
    updatedAt: undefined
  }) {
    this.id = properties.id;
    this.username = properties.username;
    this.firstName = properties.firstName;
    this.lastName = properties.lastName;
    this.createdAt = properties.createdAt;
    this.updatedAt = properties.updatedAt;
  }
}
