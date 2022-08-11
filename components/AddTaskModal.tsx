import { useState } from "react";
import { Col, Button, Card, Form, Container, Modal } from "react-bootstrap";
import { gql, useMutation, useQuery } from "@apollo/client";

const AddTaskModal = ({}) => {
  const handleTaskCreate = (e) => {
    e.preventDefault();
    
  };

  return _(
    <Modal>
      <Modal.Header closeButton>
        <Modal.Title>Create a Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleTaskCreate}></Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddTaskModal;
