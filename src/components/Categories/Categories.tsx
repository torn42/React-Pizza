import React, { memo, useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { filterSelector, setCategoryId } from '../../redux/slices/filterSlice';

export const Categories: React.FC = memo(() => {
  const dispatch = useDispatch();
  const { categoryId } = useSelector(filterSelector);
  const categories = useSelector((state: any) => state.filter.categories);

  const onChangeCategory = useCallback((value: number) => {
    dispatch(setCategoryId(value));
  }, [dispatch]);
  return (
    <div className="categories">
      <ul>
        {categories.map((category: string, index: number) => {
          return (
            <li
              key={index}
              onClick={() => onChangeCategory(index)}
              className={categoryId === index ? 'active' : ''}
            >
              {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
});