import './App.css';
import { 
  Home, 
  Route,
  Router,
  Routes,
  Login,
  Profile,
  MainHeader
} from './global';
import MainLayout from './Layouts/MainLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainLayout><Home/></MainLayout>  } />
        <Route path='/index' element={<MainLayout><Home/></MainLayout>  } />
        <Route path='/login' element={ <Login />} />
        <Route path='/profile' element={<MainLayout><Profile /></MainLayout> } />
      </Routes>    
  </Router>
  );
}

export default App;
