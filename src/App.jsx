import { gql } from "@apollo/client";
import DisplayEvents from "./Components/DisplayEvents";
import "./App.css";

function App() {
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

  return (
    <>
      <h1>GraphQL using WTM data</h1>
      <DisplayEvents GET_EVENTS={GET_EVENTS} />
    </>
  );
}

export default App;
