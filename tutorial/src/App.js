import './App.css';
import Counter from './components/Counter';
import Number from './components/Number';
import Users from './components/Users';

import {Provider} from "react-redux";
import store from './redux/store';
import Cake from './components/Cake';
import Name from './components/Name';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
        <Number />
        <Users />
        <Cake />
        <Name/>
      </div>
    </Provider>
  );
}

export default App;
