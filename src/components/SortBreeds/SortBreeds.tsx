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
      {/*<Select*/}
      {/*  classNamePrefix='customSelectBreeds'*/}
      {/*  options={breeds}*/}
      {/*  placeholder='All breeds'*/}
      {/*  onChange={(option) => onSelectButtonClick(option)}*/}
      {/*  isSearchable={false}*/}
      {/*/>*/}
      <Select
        classNamePrefix='customSelectLimit'
        options={limitsBreeds}
        placeholder='Limit: 10'
        isSearchable={false}
        onChange={(option) => onLimitButtonClick(option)}
      />
      {/*<Button*/}
      {/*  icon={<SortUp />}*/}
      {/*  size={BtnSize.Square}*/}
      {/*  variants={[BtnVariant.Special]}*/}
      {/*  type={'submit'}*/}
      {/*  element={TypeElement.Button}*/}
      {/*  onClick={() => onSortButtonClick(SortType.Asc)}*/}
      {/*>*/}
      {/*  <span className="visually-hidden">Sort A to Z</span>*/}
      {/*</Button>*/}
      {/*<Button*/}
      {/*  icon={<SortDown />}*/}
      {/*  size={BtnSize.Square}*/}
      {/*  variants={[BtnVariant.Special]}*/}
      {/*  type={'submit'}*/}
      {/*  element={TypeElement.Button}*/}
      {/*  onClick={() => onSortButtonClick(SortType.Desc)}*/}
      {/*>*/}
      {/*  <span className="visually-hidden">Sort Z to A</span>*/}
      {/*</Button>*/}
    </div>
  );
}

export default SortBreeds;
