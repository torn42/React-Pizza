import React from 'react';
import ReactPaginate from 'react-paginate';

import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../redux/slices/filterSlice';

import styles from './pagination.module.scss';

export const Pagination: React.FC = () => {
  const { currentPage } = useSelector((state: any) => state.filter);
  const dispatch = useDispatch();
  const onChangePage = (number: number) => {
    dispatch(setCurrentPage(number));
  };
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
