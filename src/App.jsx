import { gql } from "@apollo/client";
import DisplayEvents from "./Components/DisplayEvents";
import "./App.css";
import { Routes, Route, Link, useLocation } from "react-router";

const GET_EVENTS = gql`
  query WTMEvents {
    events {
      nodes {
        slug
        title
        id
        databaseId
        author {
          node {
            name
          }
        }
        content
        featuredImage {
          node {
            file
            sourceUrl
          }
        }
      }
    }
  }
`;

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <h1>GraphQL using WTM data</h1>

      <nav>
        {location.pathname !== "/events" && (
          <Link to="/events">View Events</Link>
        )}
      </nav>

      <Routes>
        <Route
          path="/events"
          element={<DisplayEvents GET_EVENTS={GET_EVENTS} />}
        />
        <Route path="/" element={<div>Welcome to the Home Page</div>} />
      </Routes>
    </div>
  );
}

export default App;
