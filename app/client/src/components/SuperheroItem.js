import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import star from '../assets/star.png';
import { useNavigate } from 'react-router-dom';
import { REACT_APP_API_URL, SUPERHERO_ROUTE } from '../utils/consts';

export const SuperheroItem = ({ superhero }) => {
  const navigate = useNavigate();
  return (
    <Col
      md={4}
      className="mt-3"
      onClick={() => navigate(SUPERHERO_ROUTE + '/' + superhero.id)}
    >
      <Card style={{ width: '200px', cursor: 'pointer' }} border={'light'}>
        <Image
          width={200}
          height={200}
          src={REACT_APP_API_URL + superhero.images}
        />
        <div className="mt-3 d-flex justify-content-between align-items-center">
          <div className="text-black-50">{superhero.nickname}</div>
          <div className="d-flex justify-content-between align-items-center">
            <div>{superhero.rating}</div>
            <Image width={18} height={18} src={star} />
          </div>
        </div>
      </Card>
    </Col>
  );
};
