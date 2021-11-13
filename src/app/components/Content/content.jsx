import axios from 'axios';
import React, { useEffect } from 'react';
import { apiReq } from '../../../services/apiReq';

export function Content() {

  useEffect(() => {
    apiReq();
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


