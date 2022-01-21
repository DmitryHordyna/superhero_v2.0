import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Pagination } from 'react-bootstrap';
import { Context } from '..';

export const Pages = observer(() => {
  const { superhero } = useContext(Context);
  const pageCount = Math.ceil(superhero.totalCount / superhero.limit);
  const pages = [];

  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1);
  }
  return (
    <Pagination className="mt-3">
      {pages.map(page => (
        <Pagination.Item
          key={page}
          active={superhero.page === page}
          onClick={() => superhero.setPage(page)}
        >
          {page}
        </Pagination.Item>
      ))}
    </Pagination>
  );
});
