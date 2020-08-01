import { ObjectSchema } from 'realm';

export default class UserSchema {
  static schema: ObjectSchema = {
    name: 'User',
    primaryKey: 'id',
    properties: {
      id: { type: 'string', indexed: true },
      password: 'string',
    },
  };
}
