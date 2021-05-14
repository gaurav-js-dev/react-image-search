import isEmpty from 'lodash/isEmpty';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImagesList, fetchImagesSearchData, IImages, loadMoreImages } from 'src/store/reducers/imagesReducer';
import { IReduxState } from 'src/store/reducers/initialState';
import './ImageList.scss';

const ImageList = () => {
  const images = useSelector((s: IReduxState) => s.images.imagesList);
  const searchText = useSelector((s: IReduxState) => s.images.searchText);

  const dispatch = useDispatch();

  const fetchImages = useCallback(() => {
    dispatch(fetchImagesList());
  }, [dispatch]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const fetchSearchImages = useCallback(() => {
    dispatch(loadMoreImages());
    dispatch(fetchImagesSearchData(searchText));
  }, [searchText, dispatch]);

  const noImages = isEmpty(images);

  const loadNextImages = useCallback(() => {
    dispatch(loadMoreImages());
    fetchImages();
  }, [dispatch, fetchImages]);

  return (
    <div className="container py-4">
      <div className="row">
        {images.map((image: IImages) => (
          <div className="col-lg-4 text-center " key={image.id}>
            <span className="stats">{`${image.likes} 🧡`}</span>
            <img className="py-1" height={400} width={400} src={image.url} alt={image.url} />
          </div>
        ))}
      </div>
      <div className="text-center py-4">
        {noImages && <p>No Images Found !!</p>}
        {!noImages && (
          <button className="btn btn-dark btn-md" onClick={searchText ? fetchSearchImages : loadNextImages}>
            Show More..
          </button>
        )}
      </div>
    </div>
  );
};

export default ImageList;
