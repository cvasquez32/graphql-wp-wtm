import { useState } from "react";
import { gql } from "@apollo/client";
import DisplayLocations from "./Components/DisplayLocations";
import "./App.css";

function App() {
  const GET_LOCATIONS = gql`
    query GetLocations {
      locations {
        id
        name
        description
        photo
      }
    }
  `;

  return (
    <>
      <h1>GraphQL using WTM data</h1>
      <DisplayLocations GET_LOCATIONS={GET_LOCATIONS} />
    </>
  );
}

export default App;
