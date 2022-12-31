import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Blog from './pages/Blog/Blog';
import AddReview from './pages/Dashboard/AddReview';
import Dashboard from './pages/Dashboard/Dashboard';
import MakeAdmin from './pages/Dashboard/MakeAdmin';
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
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route path='addReview' element={<AddReview></AddReview>}></Route>
          <Route path='makeAdmin' element={<RequireAdmin><MakeAdmin></MakeAdmin> 
            </RequireAdmin>}></Route>
        </Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
