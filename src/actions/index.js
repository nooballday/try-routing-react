import { PASS_DATA } from '../constants'

export const passData = ( text ) => {
  const action = {
    type: PASS_DATA,
    text
  }
  console.log('action in PASS DATA', action)
  return action;
}
