import store from './Redux/store';
import { Rout } from './Rout';
import { Provider } from 'react-redux';
import './App.css'

function App() {
  return (
    <Provider store={store}>
        <Rout/>
        </Provider>
  );
}

export default App;
