export default class AccountSchema {
  static schema = {
    name: 'Account',
    primaryKey: 'id',
    properties: {
      id: { type: 'string', indexed: true },
      title: 'string',
      account: 'string',
      categoryName: 'string',
      categoryColor: 'string',
      user: 'string',
      password: 'string',
      website: 'string',
      notes: 'string',
    },
  };
}
