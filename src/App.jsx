import DisplayEvents from "./Components/DisplayEvents";
import CreateEvent from "./Components/CreateEvents";
import "./App.css";
import { Routes, Route, Link, useLocation } from "react-router";
import Navbar from "./Components/Nav/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/events" element={<DisplayEvents />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route
          path="/"
          element={
            <div style={{ marginTop: "10px" }}>Welcome to the Home Page</div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
