import { ACTION_TYPES } from 'actionTypes/actionTypes';

const getCatFacts = payload => ({
  type: ACTION_TYPES.CAT_FACTS.REQUESTING,
  payload,
});

export { getCatFacts };
