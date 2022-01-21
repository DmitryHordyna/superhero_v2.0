import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { createUnivers } from '../../http/superheroAPI';

export const CreateUniverse = ({ show, onHide }) => {
  const [value, setValue] = useState('');

  const addUnivers = () => {
    createUnivers({ name: value }).then(data => setValue(''));
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add new Universe
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder={'Write name Universe'}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Close
        </Button>
        <Button variant="outline-success" onClick={addUnivers}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
