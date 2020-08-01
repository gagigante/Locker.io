import Realm from 'realm';

import UserSchema from './schemas/UserSchema';
import AccountSchema from './schemas/AccountSchema';
import CategorySchema from './schemas/CategorySchema';

export default function getRealm(): Promise<globalThis.Realm> {
  const key = new Int8Array(64); // populate with a secure key

  return Realm.open({
    schema: [UserSchema, AccountSchema, CategorySchema],
    encryptionKey: key,
  });
}
