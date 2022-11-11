// import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import LoginForm from "./components/loginForm/loginForm";
import SignupForm from "./components/SignUpForm/signupForm";


function App() {
  return (
      <Routes>
          {/*Add in new page here. Duplicate the below example*/}
          {/*<Route path="/" element={<loginForm />}/>*/}
          <Route exact path="/" element={<LoginForm />}/>
          <Route exact path="/signUp" element={<SignupForm />}/>
      </Routes>
  );
}

export default App;
