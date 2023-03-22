import Nav from "./components/navbar/Nav";
import Footer from "./components/footer/Footer";
import { Routes, Route } from 'react-router-dom';
import HomePage from "./pages/homepage/HomePage";
import BookingPage from "./pages/bookings/BookingPage";
import LoginPage from "./pages/login/LoginPage";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/reservations" element={<BookingPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>

      <Footer />
    </div>
  );
};


export default App;
