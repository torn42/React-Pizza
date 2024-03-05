import React from 'react';

import { Link } from 'react-router-dom';

import emptyCartImg from '../../assets/img/empty-cart.png';

export function CartEmpty() {
  return (
    <div class="wrapper">
      <div class="container container--cart">
        <div class="cart cart--empty">
          <h2>
            Корзина пустая <icon>😕</icon>
          </h2>
          <p>
            Вы не добавили в корзину ни одной пиццы.
            <br />
            Чтобы заказать пиццу, перейдите на главную страницу.
          </p>
          <img src={emptyCartImg} alt="Empty cart" />
          <Link to="/" class="button button--black">
            <span>Вернуться назад</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
