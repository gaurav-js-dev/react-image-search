import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearError } from 'src/store/reducers/errorReducer';
import { IReduxState } from 'src/store/reducers/initialState';

const Error = () => {
  const dispatch = useDispatch();
  const errorMessage = useSelector((s: IReduxState) => s.error.message);

  if (!errorMessage) return null;
  return (
    <div className="Error d-flex justify-content-center mt-4" data-testid="Error">
      <div className="alert alert-danger alert-dismissible fade show" role="alert">
        <p className="m-0">
          Oops! there is an error. <br />
          {errorMessage}
        </p>
        <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={() => dispatch(clearError())}>
          <span aria-hidden="true" data-testid="close">
            &times;
          </span>
        </button>
      </div>
    </div>
  );
};

export default Error;
