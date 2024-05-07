import logo from './logo.svg';
import './App.css';
import SideBar from './Component/SideBar';
import NavBar from './Component/NavBar';

function App() {
  return (
    <div className="flex">
      <div className={`w-72 h-screen bg-dark-purpule p-5 pt-8`}><SideBar/></div>
      <div className=' text-x font-semibol  flex-1 h-screen'>
        <div className='bg-dark-purpule p-3'><NavBar/></div>
        
      </div>
    </div>
  );
}

export default App;
