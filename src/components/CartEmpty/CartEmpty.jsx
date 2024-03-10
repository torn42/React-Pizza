import React from 'react';

import { Link } from 'react-router-dom';

import emptyCartImg from '../../assets/img/empty-cart.png';

export function CartEmpty() {
  return (
    <div className="wrapper">
      <div className="container container--cart">
        <div className="cart cart--empty">
          <h2>Корзина пустая 😕</h2>
          <p>
            Вы не добавили в корзину ни одной пиццы.
            <br />
            Чтобы заказать пиццу, перейдите на главную страницу.
          </p>
          <img src={emptyCartImg} alt="Empty cart" />
          <Link to="/" className="button button--black">
            <span>Вернуться назад</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
