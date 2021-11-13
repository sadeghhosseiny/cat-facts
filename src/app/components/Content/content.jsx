import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCatFacts } from 'store/action/action';


export function Content() {

  const dispatch = useDispatch();
  const selector = useSelector(state => state?.facts);

  useEffect(() => {
    dispatch(getCatFacts());
  }, []);

  return (
    <>
      <p>{selector?.data?.text}</p>
      <button>refresh</button>
    </>
  );
}

