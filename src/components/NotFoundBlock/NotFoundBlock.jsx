import React from 'react';
import styles from './notfoundblock.module.scss';
export function NotFoundBlock() {
  return (
    <div className={styles.root}>
      <h1>
        <span>😔</span> <br />
        Ничего не найдено
      </h1>
      <p>К сожалению, данная страница отсутствует в нашем интернет-магазине</p>
    </div>
  );
}
