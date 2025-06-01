import DisplayEvents from "./Components/DisplayEvents";
import CreateEvent from "./Components/CreateEvents";
import "./App.css";
import { Routes, Route, Link, useLocation } from "react-router";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <h1>GraphQL using WTM data</h1>

      <nav>
        {location.pathname !== "/events" && (
          <Link style={{marginRight: '10px'}} to="/events">View Events</Link>
        )}
        {location.pathname !== "/create-event" && (
          <Link to="/create-event">Create Event</Link>
        )}
      </nav>

      <Routes>
        <Route
          path="/events"
          element={<DisplayEvents/>}
        />
        <Route
          path="/create-event"
          element={<CreateEvent/>}
        />
        <Route path="/" element={<div>Welcome to the Home Page</div>} />
      </Routes>
    </div>
  );
}

export default App;
