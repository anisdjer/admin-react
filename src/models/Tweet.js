export default class Tweet {
  constructor(properties = {
    id: undefined,
    body: undefined,
    user_id: undefined,
    created_at: undefined,
    updated_at: undefined
  }) {
    this.id = properties.id;
    this.body = properties.body;
    this.user_id = properties.user_id;
    this.created_at = properties.created_at;
    this.updated_at = properties.updated_at;
  }
}
