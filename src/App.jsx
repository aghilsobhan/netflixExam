import { Routes, Route } from "react-router-dom";
import HomeScreen from "../src/screens/HomeScreen";
import AboutUs from "../src/screens/AboutUs";
import NotFound from "../src/screens/NotFound";
import ContactUs from "../src/screens/ContactUs"

import SingleMovie  from "./screens/SingleMovie";
import MoviesPage from "./screens/Movies";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/movies" element={<MoviesPage />} />
      <Route path="/movie/:id" element={<SingleMovie />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
