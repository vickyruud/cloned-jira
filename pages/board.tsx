import { useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";

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
  return <div>Board</div>;
};

export default board;
