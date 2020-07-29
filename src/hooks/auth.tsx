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
  loading: boolean;
  appStage: string | undefined;
  changeAppStage(stage: '1' | '2' | undefined): Promise<void>;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [appStage, setAppStage] = useState<string | undefined>(undefined);

  useEffect(() => {
    async function loadStoragedData(): Promise<void> {
      const storagedAppStage = await AsyncStorage.getItem('@LockerIO:appStage');

      if (storagedAppStage) {
        setAppStage(storagedAppStage);
      }

      setLoading(false);
    }

    loadStoragedData();
  }, []);

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
