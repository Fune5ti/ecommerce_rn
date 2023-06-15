import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store';
import NavigationStack from './src/navigation';
import { PaperProvider } from 'react-native-paper';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationStack />
      </PaperProvider>
    </Provider>
  );
}

export default App;
