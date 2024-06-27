import logo from './logo.svg';
import './App.css';
import {Toaster,toast} from 'sonner'
import SearchHook from './hooks/search';

function App() {
  return (
    <>
    <div className='autocomplete'>
      <div className='heading'>AutoComplete</div>
      <SearchHook/>
    </div>
    </>
  );
}

export default App;
