import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCatFacts } from 'store/action/action';
import styled from 'styled-components/macro';

export function Content() {

  const dispatch = useDispatch();
  const selector = useSelector(state => state?.facts);

  useEffect(() => {
    dispatch(getCatFacts());
  }, []);

  return (
    <>
      <Ptag>
        {selector?.requesting && 'Loading...'}
        {selector?.data?.text}
      </Ptag>
      <Btn onClick={() => dispatch(getCatFacts())}>Refresh</Btn>
    </>
  );
}


const Ptag = styled.p`
  margin: 0px;
  padding: 20px;
  text-align: center;
  color: #5f54b0;
  font-family: cursive;
  font-size: 18px;
`;

const Btn = styled.button`
  display: flex;
  margin: auto;
  padding: 8px 18px;
  font-size: 18px;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 4px;
  transition: 0.2s linear;
  &:hover {
    background: gray;
    color: white;
  }
`;