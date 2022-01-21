import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Context } from '../index';

export const UniversBar = observer(() => {
  const { superhero } = useContext(Context);

  return (
    <ListGroup as="ul">
      {superhero.univers.map(univer => (
        <ListGroup.Item
          style={{ cursor: 'pointer' }}
          active={univer.id === superhero.selectedByUnivers.id}
          onClick={() => superhero.setSelectedByUnivers(univer)}
          key={univer.id}
        >
          {univer.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
});
