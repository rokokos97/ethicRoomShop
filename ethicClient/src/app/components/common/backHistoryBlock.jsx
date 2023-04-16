import React from 'react';
import history from '../../utils/history';
import {useNavigate} from 'react-router-dom';
const BackHistoryBlock = () => {
  const navigate = useNavigate();
  return (
    <div className="d-flex justify-content-between m-5">
      <i
        className="bi bi-arrow-left"
        role="button"
        onClick={() => history.goBack()}>back to
      </i>
      <i className="bi bi-x-lg" role="button" onClick={() => navigate('/')}/>
    </div>
  );
};

export default BackHistoryBlock;
