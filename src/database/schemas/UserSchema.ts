export default class UserSchema {
  id!: string;

  name!: string;

  password!: string;

  static schema: Realm.ObjectSchema = {
    name: 'User',
    primaryKey: 'id',
    properties: {
      id: 'string',
      name: 'string',
      password: 'string',
    },
  };
}
