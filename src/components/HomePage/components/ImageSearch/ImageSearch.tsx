import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { clearImagesList, fetchImagesSearchData } from 'src/store/reducers/imagesReducer';
import './ImageSearch.scss';

const ImageSearch = () => {
  const dispatch = useDispatch();

  const [inputSearch, setInputSearch] = useState('');

  const handleSearch = useCallback(
    (searchText: string) => {
      dispatch(clearImagesList());
      dispatch(fetchImagesSearchData(searchText));
    },
    [dispatch]
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const { value: searchText } = e.target as HTMLInputElement;
      handleSearch(searchText);
      (e.target as HTMLInputElement).blur();
    }
  };

  return (
    <div className="ImageSearch">
      <div className="container mt-2">
        <div className="input-group">
          <input
            type="text"
            autoComplete="off"
            name="search"
            className="form-control"
            id="search"
            placeholder="Search for Images"
            onKeyDown={handleKeyDown}
            onChange={e => setInputSearch(e.target.value)}
          />
          <button className="btn btn-dark" onClick={() => handleSearch(inputSearch)}>
            <span role="img" aria-label="search">
              🔍
            </span>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageSearch;
