import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { Link } from "react-router";

const CREATE_EVENT = gql`
  mutation CreateEvent($input: CreateEventInput!) {
    createEvent(input: $input) {
      event {
        id
        title
        slug
        uri
      }
      clientMutationId
    }
  }
`;

const CreateEvent = () => {
  const [formState, setFormState] = useState({
    title: "",
    slug: "",
    content: "",
    status: "",
    date: "",
    clientMutationId: "3",
  });

  const [createLink] = useMutation(CREATE_EVENT, {
    variables: {
      input: {
        title: formState.title,
        slug: formState.slug,
        content: formState.content,
        status: formState.status,
        date: formState.date,
        clientMutationId: "3",
      },
    },
  });

  return (
    <div>
      <h2>Create Event</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createLink();
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <input
            style={{ marginBottom: "10px", padding: "8px" }}
            value={formState.title}
            onChange={(e) =>
              setFormState({
                ...formState,
                title: e.target.value,
              })
            }
            type="text"
            placeholder="Event Title"
          />
          <input
            style={{ marginBottom: "10px", padding: "8px" }}
            value={formState.slug}
            onChange={(e) =>
              setFormState({
                ...formState,
                slug: e.target.value,
              })
            }
            type="text"
            placeholder="Event Slug"
          />
          <input
            style={{ marginBottom: "10px", padding: "8px" }}
            value={formState.content}
            onChange={(e) =>
              setFormState({
                ...formState,
                content: e.target.value,
              })
            }
            type="text"
            placeholder="Event Description"
          />
          <input
            style={{ marginBottom: "10px", padding: "8px" }}
            value={formState.status}
            onChange={(e) =>
              setFormState({
                ...formState,
                status: e.target.value,
              })
            }
            type="text"
            placeholder="Event Status"
          />
          <input
            type="date"
            value={formState.date}
            onChange={(e) =>
              setFormState({
                ...formState,
                date: e.target.value,
              })
            }
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateEvent;
