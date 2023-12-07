import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";

import LoginPage from './Components/LogPages/LoginPage.jsx';
import Signup from './Components/SignPages/Signup.jsx';
import SignupD from './Components/SignPages/SignupD.jsx';
import SignupP from './Components/SignPages/SignupP.jsx';
import Home from './Components/Home/Home.jsx';
import LogRegWrapper from './Components/LogRegWrapper.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import ProductPage from './Components/Home/ProductPage/ProductPage.jsx';
import AddPRocust from './Components/AddProduct/AddProduct.jsx';
import { UserContextProvider } from './Context/userContext.jsx';
import Profile from './Components/Profile/Profile.jsx';

function App() {
  

  return (
    <>
    <UserContextProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductPage />} />
        <Route path='/add' element={<AddPRocust/>} />
        <Route path='/profile' element={<Profile />} />
      </Routes>

      {/* Login / Register routes */}
      <Routes>
        <Route exact path='/login' element={<LogRegWrapper><LoginPage /></LogRegWrapper>} />
        <Route exact path='/signup' element={<LogRegWrapper><Signup /></LogRegWrapper>}></Route>
        <Route exact path='/signup/doctor' element={<LogRegWrapper><SignupD /></LogRegWrapper>}></Route>
        <Route exact path='/signup/pharmacist' element={<LogRegWrapper><SignupP /></LogRegWrapper>}></Route>
      </Routes>
      </UserContextProvider>
    </>
  );
}

export default App;
