import uuid from 'node-uuid';

import User from './User';

export default class Tweet {
  constructor(properties = {
    id: undefined,
    body: undefined,
    userId: undefined,
    createdAt: undefined,
    updatedAt: undefined
  }) {
    this.localId = uuid();
    this.id = properties.id;
    this.body = properties.body;
    this.user = new User(properties.user);
    this.createdAt = properties.createdAt;
    this.updatedAt = properties.updatedAt;
  }
}
