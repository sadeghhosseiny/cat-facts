import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCatFacts } from 'store/action/action';
import { apiReq } from '../../../services/apiReq';

export function Content() {

  const dispatch = useDispatch();
  useEffect(() => {
    // apiReq();
    dispatch(getCatFacts());
    // axios.get('https://cat-fact.herokuapp.com/facts/random')
    //   .then(res => console.log('RESSSS', res))
    //   .catch(err => console.log('ERRRRRRRRR', err));
  }, []);

  return (
    <>
      <button>refresh</button>
    </>
  );
}


