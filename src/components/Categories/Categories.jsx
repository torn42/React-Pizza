import React from 'react';
import { useSelector } from 'react-redux';

export function Categories({ value, onChangeCategory }) {
  const categories = useSelector((state) => state.filter.categories);
  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => {
          return (
            <li
              key={index}
              onClick={() => onChangeCategory(index)}
              className={value === index ? 'active' : ''}
            >
              {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
