import React, { useCallback, useEffect } from 'react';
import { fetchImagesList, IImages, loadMoreImages } from '../../store/reducers/imagesReducer';
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

  const loadNextImages = () => {
    dispatch(loadMoreImages());
    fetchImages();
  };

  return (
    <div className="HomePage">
      {images.map((image: IImages) => (
        <div key={image.url}>
          <img height={300} width={300} src={image.url} alt="User Avatar" />
        </div>
      ))}
      <button onClick={loadNextImages}>Show More </button>
    </div>
  );
};

export default HomePage;
