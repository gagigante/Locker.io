import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
// import Profile from '../pages/Profile';
// import CreateAppointment from '../pages/CreateAppointment';
// import AppointmentCreated from '../pages/AppointmentCreated';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="Home"
  >
    <App.Screen name="Home" component={Home} />
    {/* <App.Screen name="CreateAppointment" component={CreateAppointment} />
    <App.Screen name="AppointmentCreated" component={AppointmentCreated} />

    <App.Screen name="Profile" component={Profile} /> */}
  </App.Navigator>
);

export default AppRoutes;
