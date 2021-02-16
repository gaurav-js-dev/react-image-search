import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImagesList, IImages, loadMoreImages } from 'src/store/reducers/imagesReducer';
import { IReduxState } from 'src/store/reducers/initialState';

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
    <section className="HomePage">
      <div className="container py-4">
        <div className="row">
          {images.map((image: IImages) => (
            <div className="col-lg-4 text-center " key={image.id}>
              <img className="p-3" height={400} width={400} src={image.url} alt={image.url} />
            </div>
          ))}
        </div>
        <div className="text-center py-4">
          <button className="btn btn-dark btn-md" onClick={loadNextImages}>
            Show More..
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
