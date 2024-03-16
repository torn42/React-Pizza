import React from 'react';

import qs from 'qs';

import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import {
  filterSelector,
  setFilters,
  FilterSliceState,
} from '../redux/slices/filterSlice';
import {
  SearchPizzaParams,
  Status,
  fetchPizzas,
  pizzaDataSelector,
} from '../redux/slices/PizzaSlice';
import { useAppDispatch } from '../redux/store';

import { Pagination } from '../components/Pagination';
import { Categories } from '../components/Categories';
import { SortPopup, sortList } from '../components/SortPopup';
import { PizzaBlock, Skeleton } from '../components/PizzaBlock';

function Home() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  const { categoryId, categories, sort, currentPage, searchValue } =
    useSelector(filterSelector);
  const { items, status } = useSelector(pizzaDataSelector);

  const getPizzas = () => {
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
      })
    );

    window.scrollTo(0, 0);
  };

  // React.useEffect(() => {
  //   if (window.location.search) {
  //     const params = qs.parse(
  //       window.location.search.substring(1)
  //     ) as unknown as SearchPizzaParams;

  //     const sort = sortList.find((obj) => obj.sortProperty === params.sortBy);
  //     dispatch(
  //       setFilters({
  //         searchValue: params.search,
  //         categoryId: Number(params.category),
  //         currentPage: Number(params.currentPage),
  //         sort: sort ? sort : sortList[0],
  //         categories: categories,
  //       })
  //     );
  //     isSearch.current = true;

  //     if (!window.location.search) {
  //       dispatch(fetchPizzas({} as SearchPizzaParams));
  //     }
  //   }
  // }, [dispatch]);

  React.useEffect(() => {
    getPizzas();
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  // React.useEffect(() => {
  //   if (isMounted.current) {
  //     const queryString = qs.stringify({
  //       sortProperty: sort.sortProperty,
  //       categoryId,
  //       currentPage,
  //     });

  //     navigate(`?${queryString}`);
  //   }
  //   isMounted.current = true;
  // }, [categoryId, sort.sortProperty, currentPage]);

  const pizzas = items.map((obj: any) => <PizzaBlock {...obj} />);
  const skeletons = [...new Array(4)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories />
          <SortPopup />
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
                {status === Status.LOADING ? skeletons : pizzas}
              </div>
            )}
          </>
        )}
        <Pagination />
      </div>
    </>
  );
}

export default Home;
