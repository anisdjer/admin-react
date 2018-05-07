export default class User {
  constructor(properties = {
    id: undefined,
    username: undefined,
    user_id: undefined,
    created_at: undefined,
    updated_at: undefined
  }) {
    this.id = properties.id;
    this.username = properties.username;
    this.first_name = properties.first_name;
    this.last_name = properties.last_name;
    this.created_at = properties.created_at;
    this.updated_at = properties.updated_at;
  }
}
