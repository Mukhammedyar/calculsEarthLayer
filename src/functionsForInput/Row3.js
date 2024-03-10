import {
  error31False,
  error31True,
  error32False,
  error32True,
  error33False,
  error33True,
  error34False,
  error34True,
  error35False,
  error35True,
  error36False,
  error36True,
  error37False,
  error37True,
  error38False,
  error38True,
} from "../Reducer/errorRow3";

export const value31Change = (e, setValue3, value3, dispatch) => {
  if (e.target.value <= 0.1 && e.target.value >= 0.05) {
    setValue3({ ...value3, value1: e.target.value });
    dispatch(error31False());
  } else {
    dispatch(error31True());
    setValue3({ ...value3, value1: e.target.value });
  }
};
export const value32Change = (e, setValue3, value3, dispatch) => {
  if (e.target.value <= 0.1 && e.target.value >= 0.05) {
    setValue3({ ...value3, value2: e.target.value });
    dispatch(error32False());
  } else {
    dispatch(error32True());
    setValue3({ ...value3, value2: e.target.value });
  }
};
export const value33Change = (e, setValue3, value3, dispatch) => {
  if (e.target.value <= 0.1 && e.target.value >= 0.05) {
    setValue3({ ...value3, value3: e.target.value });
    dispatch(error33False());
  } else {
    dispatch(error33True());
    setValue3({ ...value3, value3: e.target.value });
  }
};
export const value34Change = (e, setValue3, value3, dispatch) => {
  if (e.target.value <= 0.1 && e.target.value >= 0.05) {
    setValue3({ ...value3, value4: e.target.value });
    dispatch(error34False());
  } else {
    dispatch(error34True());
    setValue3({ ...value3, value4: e.target.value });
  }
};
export const value35Change = (e, setValue3, value3, dispatch) => {
  if (e.target.value <= 0.1 && e.target.value >= 0.05) {
    setValue3({ ...value3, value5: e.target.value });
    dispatch(error35False());
  } else {
    dispatch(error35True());
    setValue3({ ...value3, value5: e.target.value });
  }
};
export const value36Change = (e, setValue3, value3, dispatch) => {
  if (e.target.value <= 0.1 && e.target.value >= 0.05) {
    setValue3({ ...value3, value6: e.target.value });
    dispatch(error36False());
  } else {
    dispatch(error36True());
    setValue3({ ...value3, value6: e.target.value });
  }
};
export const value37Change = (e, setValue3, value3, dispatch) => {
  if (e.target.value <= 0.1 && e.target.value >= 0.05) {
    setValue3({ ...value3, value7: e.target.value });
    dispatch(error37False());
  } else {
    dispatch(error37True());
    setValue3({ ...value3, value7: e.target.value });
  }
};
export const value38Change = (e, setValue3, value3, dispatch) => {
  if (e.target.value <= 0.1 && e.target.value >= 0.05) {
    setValue3({ ...value3, value8: e.target.value });
    dispatch(error38False());
  } else {
    dispatch(error38True());
    setValue3({ ...value3, value8: e.target.value });
  }
};
