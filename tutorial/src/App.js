import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Counter from './components/Counter';
import Number from './components/Number';
import Users from './components/Users';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Counter />
        <Number />
        <Users />
      </div>
    </Provider>
  );
}

export default App;
