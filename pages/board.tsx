import { useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import { Row } from "react-bootstrap";

const AllTasksQuery = gql`
  query {
    tasks {
      id
      title
      description
      status
    }
  }
`;

const board = () => {
  const { data, loading, error } = useQuery(AllTasksQuery, {
    onCompleted: (data) => {
      console.log(data.tasks);
    },
  });

  return (
    <div className="d-flex flex-column pt-3 h-100">
      <Row>
        <h1>Project Title</h1>
      </Row>
    </div>
  );
};

export default board;
