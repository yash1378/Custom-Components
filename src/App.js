
import './App.css';
import {Toaster,toast} from 'sonner'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AutoComplete from './pages/autocomplete/AutoComplete';
import UseCallback from './pages/useCallback/UseCallback';
import UseRef from './pages/useRef/UseRef';
import Pagination from './pages/pagination/Pagination';
import ProgressBar from './pages/progressbar/ProgressBar';
import Stepper from './pages/stepper/Stepper';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/autocomplete" element={<AutoComplete/>}/>
          <Route path="/usecallback" element={<UseCallback/>}/>
          <Route path="/useref" element={<UseRef/>}/>
          <Route path="/pagination/:id" element={<Pagination/>}/>
          <Route path="/progressbar" element={<ProgressBar/>}/>
          <Route path="/stepper" element={<Stepper/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
