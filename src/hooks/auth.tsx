import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import getRealm from '../database';

interface User {
  id: string;
  name: string;
}

interface SignInCredentials {
  password: string;
}

interface AuthContextData {
  user: User | undefined;
  loading: boolean;
  isFirstAccess: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isFirstAccess, setIsFirstAccess] = useState(true);
  const [loggedUser, setLoggedUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    async function CheckFirstAccess(): Promise<void> {
      const firstAccess = await AsyncStorage.getItem('@LockerIO:isFirstAccess');

      if (firstAccess === 'false') {
        setIsFirstAccess(false);
      }
    }

    async function loadStoragedData(): Promise<void> {
      const user = await AsyncStorage.getItem('@LockerIO:user');

      if (user) {
        setLoggedUser(JSON.parse(user));
      }
    }

    CheckFirstAccess();

    if (!isFirstAccess) {
      loadStoragedData();
    }

    setLoading(false);
  }, [isFirstAccess]);

  const signIn = useCallback(async ({ password }) => {
    const realm = await getRealm();

    const users = realm.objects('User');

    const user = users.filtered(`password = "${password}"`);

    if (user) {
      await AsyncStorage.setItem('@LockerIO:user', JSON.stringify(user[0]));

      setLoggedUser((user[0] as unknown) as User);

      return;
    }

    setLoggedUser(undefined);
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.removeItem('@LockerIO:user');

    setLoggedUser(undefined);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: loggedUser, loading, isFirstAccess, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
