import React, { useCallback, useEffect } from 'react';
import { fetchImagesList, IImages } from '../../store/reducers/imagesReducer';
import { useDispatch, useSelector } from 'react-redux';
import { IReduxState } from '../../store/reducers/initialState';

const HomePage = () => {
  const dispatch = useDispatch();

  const fetchImages = useCallback(() => {
    dispatch(fetchImagesList());
  }, [dispatch]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const images = useSelector((s: IReduxState) => s.images.imagesList);
  return (
    <div className="HomePage">
      {images.map((image: IImages) => (
        <div key={image.id}>
          <img height={500} width={500} src={image.url} alt="User Avatar" />
        </div>
      ))}
    </div>
  );
};

export default HomePage;
