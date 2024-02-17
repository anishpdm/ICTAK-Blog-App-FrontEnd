import logo from './logo.svg';
import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreatePost from './components/CreatePost';
import ViewAllPosts from './components/ViewAllPosts';
import ViewMyPost from './components/ViewMyPost';
import Test from './components/Test';

function App() {
  return (
  
<BrowserRouter>
<Routes>

    <Route path='/' element={<SignIn/> } /> 
    <Route path='/signup' element={<SignUp/> } /> 
    <Route path='/create' element={<CreatePost/> } /> 
    <Route path='/viewall' element={<ViewAllPosts/> } /> 
    <Route path='/viewmypost' element={<ViewMyPost/> } /> 
    <Route path='/test' element={<Test/> } /> 


</Routes>

</BrowserRouter>

  );
}

export default App;
