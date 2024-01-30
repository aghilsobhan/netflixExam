import { Routes, Route } from "react-router-dom";
import HomeScreen from "../src/screens/HomeScreen";
import AboutUs from "../src/screens/AboutUs";
import NotFound from "../src/screens/NotFound";
import ContactUs from "../src/screens/ContactUs"

import SingleMovie  from "./screens/SingleMovie";
import MoviesPage from "./screens/Movies";
import WatchPage from "./screens/WatchPage";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Profile from "./screens/dashboard/Profile";
import Aos from "aos";
import Password from "./screens/dashboard/Password";
import FavoritesMovies from "./screens/dashboard/FavoritesMovies";
import MovieList from "./screens/dashboard/admin/MovieList";
import Dashboard from "./screens/dashboard/admin/Dashboard";

function App() {
  Aos.init();
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/movies" element={<MoviesPage />} />
      <Route path="/movie/:id" element={<SingleMovie />} />
      <Route path="/watch/:id" element={<WatchPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/password" element={<Password />} />
      <Route path="/favorites" element={<FavoritesMovies />} />
      <Route path="/movielist" element={<MovieList />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
