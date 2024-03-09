import React from 'react';

import debounce from 'lodash.debounce';

import styles from './search.module.scss';

import { setSearchValue } from '../../redux/slices/filterSlice';
import { useDispatch } from 'react-redux';

export function Search() {
  const dispatch = useDispatch();

  const inputRef = React.useRef();
  const [value, setValue] = React.useState('');

  const onClear = () => {
    dispatch(setSearchValue(''));
    setValue('');
    inputRef.current.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 300),
    []
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        height="18"
        viewBox="0 0 512 512"
        width="18"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title />
        <path
          d="M221.09,64A157.09,157.09,0,1,0,378.18,221.09,157.1,157.1,0,0,0,221.09,64Z"
          style={{
            fill: 'none',
            stroke: '#000',
            strokeMiterlimit: 10,
            strokeWidth: 32 + 'px',
          }}
        />
        <line
          style={{
            fill: 'none',
            stroke: '#000',
            strokeLinecap: 'round',
            strokeMiterlimit: 10,
            strokeWidth: 32 + 'px',
          }}
          x1="338.29"
          x2="448"
          y1="338.29"
          y2="448"
        />
      </svg>
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        placeholder="Поиск пиццы..."
      />

      {value && (
        <svg
          onClick={onClear}
          className={styles.clearicon}
          enableBackground="new 0 0 48 48"
          height="48px"
          id="Layer_1"
          version="1.1"
          viewBox="0 0 48 48"
          width="48px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Layer_3">
            <polygon
              fill="#241F20"
              points="47.998,4.247 43.758,0.002 24.001,19.758 4.245,0.002 0.004,4.247 19.758,24.001 0.004,43.755    4.25,47.995 24.001,28.244 43.752,47.995 47.998,43.755 28.244,24.001  "
            />
          </g>
        </svg>
      )}
    </div>
  );
}
