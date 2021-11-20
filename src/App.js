import logo from './logo.svg';
import './App.css';
import { HashRouter } from "react-router-dom";
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import NavbarCompo from './components/NavbarCompo';
import CoursesMain from './components/CoursesMain';
import Cart from './components/Cart';
import PayMode from './components/PayMode';
import PaymentFailure from './components/PaymentFailure';
import PaymentSuccess from './components/PaymentSuccess';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import CourseContent from './components/CourseContent';
import Dashboard from './components/Dashboard';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <HashRouter>
      <NavbarCompo />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Courses' element={<CoursesMain />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/Account' element={<UserProfile />} />
        <Route path='/CourseContent' element={<CourseContent />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/SignIn' element={<SignIn />} />
        <Route path='/Pay' element={<PayMode />} />
        <Route path='/PaySuccess' element={<PaymentSuccess />} />
        <Route path='/PayFailure' element={<PaymentFailure />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
