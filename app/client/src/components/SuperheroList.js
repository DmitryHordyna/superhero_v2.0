import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Row } from 'react-bootstrap';
import { Context } from '..';
import { SuperheroItem } from './SuperheroItem';

export const SuperheroList = observer(() => {
  const { superhero } = useContext(Context);
  return (
    <Row className="d-flex">
      {superhero.superhero.map(superhero => (
        <SuperheroItem key={superhero.id} superhero={superhero} />
      ))}
    </Row>
  );
});
