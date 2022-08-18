import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import RequireAuth from './Pages/Auth/RequireAuth/RequireAuth';

import SignUp from './Pages/Auth/SignUp/SignUp';
import { Home } from './Pages/Home';
import ItemDetails from './Pages/ItemDetails/ItemDetails';
import Navbar from './Pages/Navbar/Navbar';

function App() {
   // might use SignUp for both sign in and sign up
   return (
      <>
         <Navbar />
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route
               path='/convert'
               element={
                  <RequireAuth>
                     <ItemDetails />
                  </RequireAuth>
               }
            />
            <Route path='/signup' element={<SignUp>Sign Up</SignUp>} />
            <Route path='/about' element={<About />} />
         </Routes>
      </>
   );
}

export default App;
