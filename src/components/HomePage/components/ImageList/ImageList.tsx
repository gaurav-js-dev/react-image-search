import './ImageList.scss';

import isEmpty from 'lodash/isEmpty';
import React, { useCallback, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImagesList, fetchImagesSearchData, IImages, setPageIncrement } from 'src/store/reducers/imagesReducer';
import { IReduxState } from 'src/store/reducers/initialState';

const ImageList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((s: IReduxState) => s.loader.isLoading);
  const images = useSelector((s: IReduxState) => s.images.imagesList);
  const noImages = isEmpty(images);

  const searchText = useSelector((s: IReduxState) => s.images.searchText);

  const fetchImages = useCallback(() => {
    dispatch(fetchImagesList());
  }, [dispatch]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const fetchSearchImages = useCallback(() => {
    dispatch(setPageIncrement());
    dispatch(fetchImagesSearchData(searchText));
  }, [searchText, dispatch]);

  const loadNextImages = useCallback(() => {
    dispatch(setPageIncrement());
    fetchImages();
  }, [dispatch, fetchImages]);

  if (isLoading && noImages) return null;

  return (
    <div className="ImageList container py-4">
      <InfiniteScroll dataLength={images.length} next={searchText ? fetchSearchImages : loadNextImages} hasMore={true} loader={''}>
        <div className="row">
          {images.map((image: IImages) => (
            <div className="col-lg-4 text-center " key={image.id}>
              <span className="stats">{`${image.likes} 🧡`}</span>
              <img className="py-1" height={400} width={400} src={image.url} alt={image.url} />
            </div>
          ))}
        </div>
        <div className="text-center py-4">{noImages && <p>No Images Found !!</p>}</div>
      </InfiniteScroll>
    </div>
  );
};

export default ImageList;
