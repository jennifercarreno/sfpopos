import './App.css';
import Title from './title/Title';
import Footer from './footer/Footer';
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Title />
      <Outlet />
      <Footer />

    </div>
  );
}

export default App;
