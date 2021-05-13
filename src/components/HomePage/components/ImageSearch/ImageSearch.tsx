import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { clearImagesList, fetchImagesSearchData } from 'src/store/reducers/imagesReducer';

const ImageSearch = () => {
  const dispatch = useDispatch();

  const handleSearch = useCallback(
    (searchText: string) => {
      dispatch(clearImagesList());
      dispatch(fetchImagesSearchData(searchText));
    },
    [dispatch]
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      const { value: searchText } = e.target as HTMLInputElement;
      handleSearch(searchText);
    }
  };

  return (
    <div className="container mt-2">
      <div className="input-group">
        <input type="text" name="search" className="form-control" id="search" placeholder="Search for Images" onKeyDown={handleKeyDown} />
        <label className="btn btn-dark" htmlFor="search" onClick={() => handleSearch('Jaipur')}>
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
