import React from 'react';
import ReactPaginate from 'react-paginate';

import styles from './pagination.module.scss';

type PaginationProps = {
  onChangePage: any;
  currentPage: number;
};

export const Pagination: React.FC<PaginationProps> = ({
  onChangePage,
  currentPage,
}) => {
  return (
    <div>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={3}
        forcePage={currentPage - 1}
        renderOnZeroPageCount={null}
      />
    </div>
  );
};
