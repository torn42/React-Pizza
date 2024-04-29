import React, { useCallback, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { filterSelector } from '../redux/filter/selectors';
import { fetchPizzas } from '../redux/pizza/asyncActions';
import { pizzaDataSelector } from '../redux/pizza/selectors';
import { Status } from '../redux/pizza/types';
import { useAppDispatch } from '../redux/store';

import { Pagination } from '../components/Pagination';
import { Categories, categories } from '../components/Categories';
import { SortPopup } from '../components/SortPopup';
import { PizzaBlock, Skeleton } from '../components/PizzaBlock';

function Home() {

  const dispatch = useAppDispatch();

  const { categoryId, sort, currentPage, searchValue } =
    useSelector(filterSelector);
  const { items, status } = useSelector(pizzaDataSelector);

  const getPizzas = useCallback(() => {
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = sort.sortProperty.replace('-', '');
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    dispatch(
      fetchPizzas({
        order,
        sortBy,
        category,
        search,
        currentPage: String(currentPage),
      }),
    );

    window.scrollTo(0, 0);
  }, [categoryId, currentPage, dispatch, searchValue, sort.sortProperty]);

  useEffect(() => {
    getPizzas();
  }, [categoryId, sort.sortProperty, searchValue, currentPage, getPizzas]);

  const pizzas: ReactElement[] = useMemo(
    () => items.map((obj: any) => <PizzaBlock key={obj.id} {...obj} />),
    [items]);

  const skeleton: ReactElement[] = useMemo(
    () => [...new Array(6)].map((_, index) => <Skeleton key={index} />), []);

  ));

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories/>
          <SortPopup/>
        </div>
        <h2 className="content__title"> {categories[categoryId]} пиццы</h2>
        {status === Status.ERROR && searchValue === '' ? (
          <div className="content__error-info">
            <h2>Произошла ошибка 😕</h2>
            <p>
              К сожалению, не удалось загрузить пиццу. Попробуйте повторить
              попытку позже.
            </p>
          </div>
        ) : (
          <>
            {status === Status.ERROR && searchValue !== '' ? (
              <div className="content__error-info">
                <h2>Пицца не найдена 😕</h2>
                <p>К сожалению, по вашему запросу ничего не найдено.</p>
              </div>
            ) : (
              <div className="content__items">
                {status === Status.LOADING ? skeleton : pizzas}
              </div>
            )}
          </>
        )}
        <Pagination/>
      </div>
    </>
  );
}

export default Home;
