import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Academy from "./pages/Academy";
import Centers from "./pages/Centers";
import Blog from "./pages/Blog";
import FormSubmition from "./pages/FormSubmition";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="centers" element={<Centers />} />
        <Route path="academy" element={<Academy />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="thankyou" element={<FormSubmition />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
