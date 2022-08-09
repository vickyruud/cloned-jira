import { useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import { Row } from "react-bootstrap";
import { Task } from "../graphql/types";

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
    <div className="pt-3 h-100 d-flex flex-column">
      <Row>
        <h1>Project Title</h1>
      </Row>
      <div className="board-container d-flex flex-row flex-grow-1">
        {data &&
          data.tasks.map((task: any) => {
            return <div>{task.title}</div>;
          })}
      </div>
    </div>
  );
};

export default board;
