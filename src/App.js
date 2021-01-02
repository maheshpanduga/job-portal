import JobPortal from './components/JobPortal';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
const store = createStore(null);
function App() {
  return (
    <Provider store = {store}>
      <JobPortal/>
    </Provider>
      
  );
}

export default App;
