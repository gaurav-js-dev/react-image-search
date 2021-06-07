import './ImageSearch.scss';

import React, { FormEvent, useCallback, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { clearImagesList, fetchImagesSearchData } from 'src/store/reducers/imagesReducer';

const ImageSearch = () => {
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [inputSearch, setInputSearch] = useState('');

  const handleSearch = useCallback(
    (e: FormEvent, searchText: string) => {
      e.preventDefault();
      inputRef.current?.blur();
      dispatch(clearImagesList());
      dispatch(fetchImagesSearchData(searchText));
    },
    [dispatch]
  );

  return (
    <div className="ImageSearch">
      <div className="container mt-2">
        <form onSubmit={e => handleSearch(e, inputSearch)}>
          <div className="input-group">
            <input
              type="text"
              autoComplete="off"
              name="search"
              className="form-control"
              id="search"
              placeholder="Search for Images"
              onChange={e => setInputSearch(e.target.value)}
              required
              value={inputSearch}
              ref={inputRef}
              aria-label="search box"
            />
            <button className="btn btn-dark">
              <span role="img" aria-label="search button">
                🔍
              </span>
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ImageSearch;
