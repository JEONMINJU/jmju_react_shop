import { Outlet } from "react-router-dom";// react-router-dom 제공
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
