import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store';
import NavigationStack from './src/navigation';
import {PaperProvider, Portal} from 'react-native-paper';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PaperProvider>
        <Portal>
          <NavigationStack />
        </Portal>
      </PaperProvider>
    </Provider>
  );
}

export default App;
