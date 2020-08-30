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
  password: string;
}

interface SignInCredentials {
  password: string;
}

interface AuthContextData {
  loading: boolean;
  userId: string | undefined;
  appStage: string | undefined;
  changeAppStage(stage: '1' | '2' | undefined): Promise<void>;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [appStage, setAppStage] = useState<string | undefined>(undefined);
  const [userId, setUserId] = useState<string | undefined>(undefined);

  useEffect(() => {
    async function loadStoredData(): Promise<void> {
      // await AsyncStorage.multiRemove(['@LockerIO:appStage', '@LockerIO:user']);
      const [storedAppStage, storedUser] = await AsyncStorage.multiGet([
        '@LockerIO:appStage',
        '@LockerIO:user',
      ]);

      if (storedAppStage[1]) {
        setAppStage(storedAppStage[1]);
      }

      if (storedUser[1]) {
        setUserId(storedUser[1]);
      }

      setLoading(false);
    }

    loadStoredData();
  }, []);

  const signIn = useCallback(async ({ password }) => {
    const realm = await getRealm();

    const users = realm.objects<User>('UserSchema');

    const user = users.filtered(`password = "${password}"`);

    if (user) {
      await AsyncStorage.setItem('@LockerIO:user', user[0].id);

      setUserId(user[0].id);

      return;
    }

    setUserId(undefined);
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.removeItem('@LockerIO:user');

    setUserId(undefined);
  }, []);

  const changeAppStage = useCallback(async (stage: '1' | '2' | undefined) => {
    if (stage) {
      await AsyncStorage.setItem('@LockerIO:appStage', stage);
    } else {
      await AsyncStorage.removeItem('@LockerIO:appStage');
    }

    setAppStage(stage);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        loading,
        userId,
        appStage,
        changeAppStage,
        signIn,
        signOut,
      }}
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
