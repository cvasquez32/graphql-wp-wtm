import React from "react";
import { useQuery } from "@apollo/client";
import stripHtml from "../utils/utils";

const DisplayEvents = ({ GET_EVENTS }) => {
  const { loading, error, data } = useQuery(GET_EVENTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data.events.nodes.map(({ slug, title, content }, index) => (
        <div key={index}>
          <h3>{title}</h3>
          <p>{stripHtml(content)}</p>
          <a
            href={`https://stg-wisconsintechmonth-staging.kinsta.cloud/event/${slug}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Register Now
          </a>
        </div>
      ))}
    </div>
  );
};

export default DisplayEvents;
