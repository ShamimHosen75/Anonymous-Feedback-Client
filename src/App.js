import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AddReview from './pages/Dashboard/AddReview';
import Dashboard from './pages/Dashboard/Dashboard';
import User from './pages/Dashboard/User';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import RequireAdmin from './pages/Login/RequireAdmin';
import RequireAuth from './pages/Login/RequireAuth';
import SignUp from './pages/Login/SignUp';
import Navbar from './pages/shared/Navbar';
import NotFound from './pages/shared/NotFound/NotFound';

function App() {

  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route path='user' element={<User></User>}></Route>
          <Route path='user' element={<RequireAdmin><User></User></RequireAdmin>}></Route>
        </Route>
        <Route path='addReview' element={<AddReview></AddReview>}></Route>
        <Route path="adminLogin" element={<Login />} />
        <Route path="adminSignup" element={<SignUp />} />
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
