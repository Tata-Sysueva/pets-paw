import React, {useMemo} from 'react';
import Select, {SingleValue} from 'react-select';
import {BreedInfo} from '../../types/types';
import {
  getBreedsOptions,
  limitsGallery,
  orderGallery,
  typeGallery,
} from '../../constants/selectOption';

import styles from './SortGallery.module.scss';

interface SortGalleryProps {
  breedsInfo: BreedInfo[],
  onSortButtonClick: (value: SingleValue<{ value: string | undefined; label: string; }>) => void,
  onTypeButtonClick: (value: SingleValue<{ value: string | undefined; label: string; }>) => void,
  onSelectButtonClick: (value: SingleValue<{ value: number; label: string; }>) => void,
  onLimitButtonClick: (value: SingleValue<{ value: undefined | number; label: string; }>) => void,
}

function SortGallery({
  breedsInfo,
  onSortButtonClick,
  onTypeButtonClick,
  onSelectButtonClick,
  onLimitButtonClick}: SortGalleryProps) {

  const breeds = useMemo(() => getBreedsOptions(breedsInfo), [breedsInfo]);

  return (
    <form className={styles.wrapper}>
      <label className={styles.label}>
        <p className={styles.labelName}>Order</p>
        <Select
          classNamePrefix='selectOrder'
          options={orderGallery}
          placeholder='Random'
          onChange={(option) => onSortButtonClick(option)}
          isSearchable={false}
        />
      </label>
      <label className={styles.label}>
        <p className={styles.labelName}>Type</p>
        <Select
          classNamePrefix='selectType'
          options={typeGallery}
          placeholder='Static'
          onChange={(option) => onTypeButtonClick(option)}
          isSearchable={false}
        />
      </label>
      <label className={styles.label}>
        <p className={styles.labelName}>Breed</p>
        <Select
          classNamePrefix='selectBreed'
          options={breeds}
          placeholder='None'
          onChange={(option) => onSelectButtonClick(option)}
          isSearchable={false}
        />
      </label>
      <label className={styles.label}>
        <p className={styles.labelName}>Limit</p>
        <Select
          classNamePrefix='selectLimit'
          options={limitsGallery}
          placeholder='5 items per page'
          isSearchable={false}
          onChange={(option) => onLimitButtonClick(option)}
        />
      </label>
    </form>
  );
}

export default SortGallery;
