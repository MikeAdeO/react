import Home from "./Pages/Home";
import "./Styles/Main.css";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from "./Utils/Layout";
import About from './Pages/About';
import Contact from './Pages/Contact';
import Service from './Pages/Service';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* //parent route  */}
          <Route path="/" element={<Layout />}>
            {/* cildren route */}
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="service" element={<Service />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
