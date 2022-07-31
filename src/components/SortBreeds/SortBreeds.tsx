import React, {useMemo} from 'react';
import Select, {SingleValue} from 'react-select';
import Button from '../../shared/Button/Button';
import {ReactComponent as SortUp} from '../../assets/icons/sortUp.svg';
import {ReactComponent as SortDown} from '../../assets/icons/sortDown.svg';
import {BtnSize, BtnVariant, SortType, TypeElement} from '../../constants/constans';
import {BreedInfo} from '../../types/types';

import styles from './SortBreeds.module.scss';

interface SortBreedsProps {
  breedsInfo: BreedInfo[],
  onSortButtonClick: (sortType: SortType) => void,
  onSelectButtonClick: (value: SingleValue<{ value: number; label: string; }>) => void,
  onLimitButtonClick: (value: SingleValue<{ value: undefined | number; label: string; }>) => void,
}

function SortBreeds({
  breedsInfo,
  onSortButtonClick,
  onSelectButtonClick,
  onLimitButtonClick }: SortBreedsProps) {
  const limits = [
    { value: 5, label: 'Limit: 5' },
    { value: 10, label: 'Limit: 10' },
    { value: 15, label: 'Limit: 15' },
    { value: 20, label: 'Limit: 20' },
  ];

  const breeds = useMemo(() =>
    breedsInfo.map(({id, name}) => ({
      value: id,
      label: name,
    })),
  [breedsInfo]);

  return (
    <div className={styles.wrapper}>
      <Select
        classNamePrefix='customSelectBreeds'
        options={breeds}
        placeholder='All breeds'
        onChange={(option) => onSelectButtonClick(option)}
        isSearchable={false}
      />
      <Select
        classNamePrefix='customSelectLimit'
        options={limits}
        placeholder='Limit: 10'
        isSearchable={false}
        onChange={(option) => onLimitButtonClick(option)}
      />
      <Button
        icon={<SortUp />}
        size={BtnSize.Square}
        variants={[BtnVariant.Special]}
        type={'submit'}
        element={TypeElement.Button}
        onClick={() => onSortButtonClick(SortType.Asc)}
      >
        <span className="visually-hidden">Sort A to Z</span>
      </Button>
      <Button
        icon={<SortDown />}
        size={BtnSize.Square}
        variants={[BtnVariant.Special]}
        type={'submit'}
        element={TypeElement.Button}
        onClick={() => onSortButtonClick(SortType.Desc)}
      >
        <span className="visually-hidden">Sort Z to A</span>
      </Button>
    </div>
  );
}

export default SortBreeds;
