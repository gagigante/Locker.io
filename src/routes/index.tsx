import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import AppRoutes from './app.routes';

import Presentation from '../pages/Presentation';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';

import { useAuth } from '../hooks/auth';

const Routes: React.FC = () => {
  const { loading, appStage } = useAuth();

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

  // if (user) {
  //   return <AppRoutes />;
  // }

  if (appStage === '1') {
    return <SignUp />;
  }

  if (appStage === '2') {
    return <SignIn />;
  }

  return <Presentation />;
};

export default Routes;
