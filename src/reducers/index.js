import { PASS_DATA } from '../constants'

const dataPassed = (action) => {
  return {
    text: action.text
  }
}

const passData = (state = [], action) => {
  let data = null;
  switch (action.type) {
    case PASS_DATA:
      data = [...state, dataPassed(action)]
      console.log('data passed', data);
      break;
    default:
  }
}

export default passData;
