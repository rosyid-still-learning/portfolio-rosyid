import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import GaneshaBooking from "./pages/GaneshaBooking";
import ScrollToTop from "./components/ScrollToTop";
import LaporSkuy from "./pages/LaporSkuy";

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
<Route
  path="/projects/laporskuy"
  element={<LaporSkuy />}
/>
        <Route
          path="/projects/ganesha-booking"
          element={<GaneshaBooking />}
        />
      </Routes>
    </>
  );
}

export default App;