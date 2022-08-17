import { Route, Routes } from 'react-router-dom';
import SignUp from './Pages/Auth/SignUp/SignUp';
import { Home } from './Pages/Home';
import ItemDetails from './Pages/ItemDetails/ItemDetails';
import Navbar from './Pages/Navbar/Navbar';

function App() {
   return (
      <>
         <Navbar />
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/convert' element={<ItemDetails />} />
            <Route path='/signup' element={<SignUp />} />
         </Routes>
      </>
   );
}

export default App;
