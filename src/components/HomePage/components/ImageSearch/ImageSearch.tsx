import React from 'react';
import { useDispatch } from 'react-redux';
import { clearImagesList, fetchImagesSearchData } from 'src/store/reducers/imagesReducer';
// import { IReduxState } from 'src/store/reducers/initialState';

const ImageSearch = () => {
  const dispatch = useDispatch();
  // const images = useSelector((s: IReduxState) => s.images.imagesList);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      const { value: searchText } = e.target as HTMLInputElement;
      dispatch(clearImagesList());
      dispatch(fetchImagesSearchData(searchText));
      // console.log(images);
    }
  };

  return (
    <div className="container mt-2">
      <div className="input-group">
        <input type="text" name="search" className="form-control" id="search" placeholder="Search for Images" onKeyDown={handleKeyDown} />
        <label className="btn btn-dark" htmlFor="search">
          <span role="img" aria-label="search">
            🔍
          </span>
          Search
        </label>
      </div>
    </div>
  );
};

export default ImageSearch;
