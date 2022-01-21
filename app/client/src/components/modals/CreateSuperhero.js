import { observer } from 'mobx-react-lite';
import React, { useContext, useState, useEffect } from 'react';
import { Button, Col, Dropdown, Form, Row } from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import Modal from 'react-bootstrap/Modal';
import { Context } from '../..';
import {
  createSupehero,
  fetchPlanets,
  fetchUniverses,
} from '../../http/superheroAPI';

export const CreateSuperhero = observer(({ show, onHide }) => {
  const { superhero } = useContext(Context);
  const [name, setName] = useState('');
  const [realName, setRealName] = useState('');
  const [story, setStory] = useState('');
  const [power, setPower] = useState('');
  const [phrase, setPhrase] = useState('');
  const [file, setFile] = useState(null);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetchUniverses().then(data => superhero.setUnivers(data));
    fetchPlanets().then(data => superhero.setPlanet(data));
  }, []);

  const addInfo = () => {
    setInfo([
      ...info,
      {
        realName,
        story,
        power,
        phrase,
        title: '',
        description: '',
        number: Date.now(),
      },
    ]);
  };
  const removeInfo = number => {
    setInfo(info.filter(i => i.number !== number));
  };
  const changeInfo = (key, value, number) => {
    setInfo(info.map(i => (i.number === number ? { ...i, [key]: value } : i)));
  };

  const selectFile = e => {
    setFile(e.target.files[0]);
  };

  const addSuperhero = () => {
    const formData = new FormData();
    formData.append('nickname', name);
    formData.append('images', file);
    formData.append('universId', superhero.selectedByUnivers.id);
    formData.append('planetId', superhero.selectedByPlanet.id);
    formData.append('info', JSON.stringify(info));
    createSupehero(formData).then(data => onHide());
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
          <Dropdown>
            <Dropdown.Toggle>
              {superhero.selectedByUnivers.name || 'Choose Universe'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {superhero.univers.map(univer => (
                <DropdownItem
                  onClick={() => superhero.setSelectedByUnivers(univer)}
                  key={univer.id}
                >
                  {univer.name}
                </DropdownItem>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-4">
            <Dropdown.Toggle>
              {superhero.selectedByPlanet.name || 'Choose Planet'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {superhero.planet.map(planet => (
                <DropdownItem
                  onClick={() => superhero.setSelectedByPlanet(planet)}
                  required
                  key={planet.id}
                >
                  {planet.name}
                </DropdownItem>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <Form.Control
            required
            value={name}
            onChange={e => setName(e.target.value)}
            className="mt-2"
            placeholder={'Write Superhero name'}
          />

          <Form.Control
            required
            type="file"
            className="mt-2"
            onChange={selectFile}
          />
          <hr />
          <Form.Control
            required
            className="mt-2"
            value={realName}
            onChange={e => setRealName(e.target.value)}
            placeholder={'Write real name'}
          />
          <Form.Control
            required
            value={story}
            onChange={e => setStory(e.target.value)}
            className="mt-2"
            placeholder={'Tell store about this hero'}
          />
          <Form.Control
            required
            value={power}
            onChange={e => setPower(e.target.value)}
            className="mt-2"
            placeholder={'Create superpower'}
          />
          <Form.Control
            required
            value={phrase}
            onChange={e => setPhrase(e.target.value)}
            className="mt-2"
            placeholder={'What favorite catch phrase?'}
          />

          <hr />
          <Button variant={'outline-dark'} onClick={addInfo}>
            Add more
          </Button>
          {info.map(i => (
            <Row className="mt-2" key={i.number}>
              <Col md={4}>
                <Form.Control
                  value={i.title}
                  onChange={e => changeInfo('title', e.target.value, i.number)}
                  placeholder="Write name option"
                />
              </Col>
              <Col md={4}>
                <Form.Control
                  value={i.description}
                  onChange={e =>
                    changeInfo('description', e.target.value, i.number)
                  }
                  placeholder="Write description"
                />
              </Col>
              <Col md={4}>
                <Button
                  onClick={() => removeInfo(i.number)}
                  variant={'outline-danger'}
                >
                  Delete
                </Button>
              </Col>
            </Row>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Close
        </Button>
        <Button variant="outline-success" onClick={addSuperhero}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
});
