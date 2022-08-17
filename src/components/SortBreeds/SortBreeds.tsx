import React from 'react';
import Select, {SingleValue} from 'react-select';
import {limitsBreeds } from '../../constants/selectOption';

import styles from './SortBreeds.module.scss';

interface SortBreedsProps {
  onLimitButtonClick: (value: SingleValue<{ value: undefined | number; label: string; }>) => void,
}

function SortBreeds({onLimitButtonClick }: SortBreedsProps) {

  return (
    <div className={styles.wrapper}>
      <Select
        classNamePrefix='customSelectLimit'
        options={limitsBreeds}
        placeholder='Limit: 10'
        isSearchable={false}
        onChange={(option) => onLimitButtonClick(option)}
      />
    </div>
  );
}

export default SortBreeds;
