import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import CounterScreen1 from '../screens/CounterScreen1';
import CounterScreen2 from '../screens/CounterScreen2';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true, // Show header by default
        }}
      >
        <Stack.Screen
          name="CounterScreen1"
          component={CounterScreen1}
          options={{ title: 'Counter Screen 1' }}
        />
        <Stack.Screen
          name="CounterScreen2"
          component={CounterScreen2}
          options={{ title: 'Counter Screen 2' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
