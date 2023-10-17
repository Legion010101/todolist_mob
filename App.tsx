import React from 'react';
import Routing from "./src/feature/routing/Routing";
import {ReduxProvider} from "./src/feature/redux/ReduxProvider";


function App() {
  return (
    <ReduxProvider>
      <Routing/>
    </ReduxProvider>)
}

export default App;
