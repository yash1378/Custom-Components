// import logo from './logo.svg';
import './autocomplete.css';
import {Toaster,toast} from 'sonner'
import SearchHook from '../../hooks/search';

function AutoComplete() {
  return (
    <>
    <div className='autocomplete'>
      <div className='heading'>AutoComplete</div>
      <SearchHook/>
    </div>
    </>
  );
}

export default AutoComplete;
