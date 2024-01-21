import { Routes, Route } from "react-router-dom";
import HomeScreen from "../src/screens/HomeScreen";
import AboutUs from "../src/screens/AboutUs";
import NotFound from "../src/screens/NotFound";
import ContactUs from "../src/screens/ContactUs"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
