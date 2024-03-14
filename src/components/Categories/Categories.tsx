import React from 'react';

import { useSelector } from 'react-redux';

type CategoriesProps = {
  value: number;
  onChangeCategory: any;
};

export const Categories: React.FC<CategoriesProps> = ({
  value,
  onChangeCategory,
}) => {
  const categories = useSelector((state: any) => state.filter.categories);
  return (
    <div className="categories">
      <ul>
        {categories.map((category: string, index: number) => {
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
};
