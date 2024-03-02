import { Route, Routes } from 'react-router-dom';
import PageNotFound from './pages/pagenotfound/PageNotFound';
import Home from './pages/home/Home';
import Navbar from './component/navbar/Navbar'
import Footer from './component/footer/Footer';
import Projects from './pages/projects/Projects';
import Skills from './pages/skills/Skills';
import Contact from './pages/contact/Contact';

const App = () => {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/#projects' element={<Projects />} />
        <Route path='/#skills' element={<Skills />} />
        <Route path='/#contact' element={<Contact />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>

      <Footer />
    </>
  )
}



export default App
