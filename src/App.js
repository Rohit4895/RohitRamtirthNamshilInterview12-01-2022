import logo from './logo.svg';
import './css/App.css';
import BoxContainer from './components/BoxContainer';
import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';

function App() {
  return (
    <div className="App">
      <BoxContainer />
    </div>
  );
}

const store = configureStore();

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
