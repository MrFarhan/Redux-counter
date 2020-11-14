import React from 'react';
import { Counter } from './Components/Counter';
import { Provider } from 'react-redux';
import { store } from './Components/Redux/Store';


function App() {
  return (
    <Provider store={store}>

      <div className="App">

        <Counter />
      </div>
    </Provider>
  );
}

export default App;
