import Nav from './components/Nav'
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Nav/>
      <Outlet/>
      <Footer/>
    </>
  )
}


