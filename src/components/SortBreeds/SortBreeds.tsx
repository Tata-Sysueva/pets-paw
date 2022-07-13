import React from 'react';
import Select from 'react-select';
import styles from './SortBreeds.module.scss';
import Button from '../../shared/Button/Button';
import {ReactComponent as SortUp} from '../../assets/icons/sortUp.svg';
import {ReactComponent as SortDown} from '../../assets/icons/sortDown.svg';
import {BtnSize, BtnVariant, TypeElement} from '../../constants/constans';
import {BreedInfo} from '../../types/types';

function SortBreeds({ breedsInfo }: { breedsInfo: BreedInfo[] }) {
  const getOptionsInfo = () => breedsInfo.map(({ id, name}) => ({
    value: id,
    label: name,
  }));

  const breeds = getOptionsInfo();

  const limits = [
    { value: '5', label: 'Limit: 5' },
    { value: '10', label: 'Limit: 10' },
    { value: '15', label: 'Limit: 15' },
    { value: '20', label: 'Limit: 20' },
  ];


  return (
    <div className={styles.wrapper}>
      <Select
        classNamePrefix='customSelectBreeds'
        options={breeds}
        placeholder='All breeds'
      />
      <Select
        classNamePrefix='customSelectLimit'
        options={limits}
        placeholder='Limit: 10'
      />
      <Button
        icon={<SortUp />}
        size={BtnSize.Square}
        variants={[BtnVariant.Special]}
        type={'submit'}
        element={TypeElement.Button}
      >
        <span className="visually-hidden">Sort A to Z</span>
      </Button>
      <Button
        icon={<SortDown />}
        size={BtnSize.Square}
        variants={[BtnVariant.Special]}
        type={'submit'}
        element={TypeElement.Button}
      >
        <span className="visually-hidden">Sort Z to A</span>
      </Button>
    </div>
  );
}

export default SortBreeds;
