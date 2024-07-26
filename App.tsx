import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware, Epic } from 'redux-observable'; 
import { Action } from 'redux'; // Import Action type
import { rootReducer, rootEpic } from './src/redux/store';
import AppNavigator from './src/navigation/AppNavigator';
import { StatusBar } from 'react-native';
import { configureStore } from '@reduxjs/toolkit';

// Create the epic middleware
const epicMiddleware = createEpicMiddleware<Action, Action, void, any>(); 

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(epicMiddleware),
});

// Run the epic middleware
epicMiddleware.run(rootEpic as Epic<Action, Action, void, any>); 

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <AppNavigator />
    </Provider>
  );
};

export default App;
