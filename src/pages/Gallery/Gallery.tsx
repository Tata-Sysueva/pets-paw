import React, {useEffect, useState} from 'react';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import Navigation from '../../components/Navigation/Navigation';
import PageLayout from '../../layouts/PageLayout/PageLayout';
import PageHeader from '../../components/PageHeader/PageHeader';
import Button from '../../shared/Button/Button';
import {BtnSize, BtnVariant, MimeTypes, SizeImage, SortType, TypeElement} from '../../constants/constans';
import {ReactComponent as UploadSvg} from '../../assets/icons/upload.svg';
import SortGallery from '../../components/SortGallery/SortGallery';
import {AllPictures, BreedInfo} from '../../types/types';
import {getBreeds, getImages} from '../../api/requests';
import NoItemFound from '../../components/NoItemFound/NoItemFound';
import ImagesLayout from '../../layouts/ImagesLayout/ImagesLayout';
import {SingleValue} from 'react-select';
import UploadPhotoModal from '../../components/UploadPhotoModal/UploadPhotoModal';

import styles from './Gallery.module.scss';

type Filter = {
  order: string | undefined,
  limit: undefined | number,
  mime_types: undefined | string,
  breed_id: undefined | number,
  size: string,
}

function Gallery() {
  const [open, setOpen] = useState(false);
  const [pictures, setPictures] = useState<AllPictures[]>([]);
  const [breeds, setBreeds] = useState<BreedInfo[]>([]);
  const [filter, setFilter] = useState<Filter>({
    order: SortType.Random,
    limit: 5,
    'mime_types': MimeTypes.Static,
    'breed_id': undefined,
    size: SizeImage.Med,
  });

  useEffect(() => {
    const fetchPhotos = async () => {
      const data = await getImages(filter);
      setPictures(data);
    };
    fetchPhotos();
  }, [filter]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getBreeds();
      setBreeds(data);
    };
    fetchData();
  }, []);

  const handleSortButtonClick = (option: SingleValue<{ value: string | undefined; label: string; }>) => {
    setFilter((prev) => ({ ...prev, order: option?.value }));
  };

  const handleTypeButtonClick = (option: SingleValue<{ value: string | undefined; label: string; }>) => {
    setFilter((prev) => ({ ...prev, 'mime_types': option?.value }));
  };

  const handleLimitButtonClick = (option: SingleValue<{ value: undefined | number; label: string; }>) => {
    setFilter((prev) => ({ ...prev, limit: option?.value }));
  };

  const handleSelectButtonClick = (option: SingleValue<{ value: number; label: string; }>) => {
    setFilter((prev) => ({ ...prev, 'breed_id': option?.value }));
  };

  return  (
    <MainLayout>
      <section className={styles.containerGallery}>
        <h2 className="visually-hidden">Gallery page</h2>
        <Navigation />
        <PageLayout >
          <PageHeader namePage={'Gallery'}>
            <Button
              className={'uploadBtn'}
              icon={<UploadSvg />}
              type={'button'}
              size={BtnSize.Medium}
              variants={[BtnVariant.Secondary]}
              element={TypeElement.Button}
              onClick={() => setOpen(true)}
            >
              <span>Upload</span>
            </Button>

            <SortGallery
              breedsInfo={breeds}
              onSortButtonClick={handleSortButtonClick}
              onTypeButtonClick={handleTypeButtonClick}
              onSelectButtonClick={handleSelectButtonClick}
              onLimitButtonClick={handleLimitButtonClick}
            />
          </PageHeader>

          { pictures.length <= 0 ? <NoItemFound /> : <ImagesLayout picturesArray={pictures}/> }

        </PageLayout>
      </section>
      {open && (
        <UploadPhotoModal onClose={() => setOpen(false)}/>
      )}
    </MainLayout>
  );
}

export default Gallery;
