import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

import Presentation from '../pages/Presentation';

import { useAuth } from '../hooks/auth';

const Routes: React.FC = () => {
  const { user, loading, isFirstAccess } = useAuth();

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f83f61',
        }}
      >
        <ActivityIndicator color="#fff" size="large" />
      </View>
    );
  }

  if (isFirstAccess) {
    return <Presentation />;
  }

  return user ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
