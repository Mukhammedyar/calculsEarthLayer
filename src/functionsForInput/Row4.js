import {
  error41True,
  error41False,
  error42True,
  error42False,
  error43True,
  error43False,
  error44True,
  error44False,
  error45True,
  error45False,
  error46True,
  error46False,
  error47True,
  error47False,
  error48True,
  error48False,
} from "../Reducer/errorRow4";

export const value41Change = (e, setValue4, value4, dispatch) => {
  if (e.target.value <= 0.05 && e.target.value >= 0.01) {
    dispatch(error41False());
    setValue4({ ...value4, value1: e.target.value });
  } else {
    dispatch(error41True());
    setValue4({ ...value4, value1: e.target.value });
  }
};
export const value42Change = (e, setValue4, value4, dispatch) => {
  if (e.target.value <= 0.05 && e.target.value >= 0.01) {
    dispatch(error42False());
    setValue4({ ...value4, value2: e.target.value });
  } else {
    dispatch(error42True());
    setValue4({ ...value4, value2: e.target.value });
  }
};
export const value43Change = (e, setValue4, value4, dispatch) => {
  if (e.target.value <= 0.05 && e.target.value >= 0.01) {
    dispatch(error43False());
    setValue4({ ...value4, value3: e.target.value });
  } else {
    dispatch(error43True());
    setValue4({ ...value4, value3: e.target.value });
  }
};
export const value44Change = (e, setValue4, value4, dispatch) => {
  if (e.target.value <= 0.05 && e.target.value >= 0.01) {
    dispatch(error44False());
    setValue4({ ...value4, value4: e.target.value });
  } else {
    dispatch(error44True());
    setValue4({ ...value4, value4: e.target.value });
  }
};
export const value45Change = (e, setValue4, value4, dispatch) => {
  if (e.target.value <= 0.05 && e.target.value >= 0.01) {
    dispatch(error45False());
    setValue4({ ...value4, value5: e.target.value });
  } else {
    dispatch(error45True());
    setValue4({ ...value4, value5: e.target.value });
  }
};
export const value46Change = (e, setValue4, value4, dispatch) => {
  if (e.target.value <= 0.05 && e.target.value >= 0.01) {
    dispatch(error46False());
    setValue4({ ...value4, value6: e.target.value });
  } else {
    dispatch(error46True());
    setValue4({ ...value4, value6: e.target.value });
  }
};
export const value47Change = (e, setValue4, value4, dispatch) => {
  if (e.target.value <= 0.05 && e.target.value >= 0.01) {
    dispatch(error47False());
    setValue4({ ...value4, value7: e.target.value });
  } else {
    dispatch(error47True());
    setValue4({ ...value4, value7: e.target.value });
  }
};
export const value48Change = (e, setValue4, value4, dispatch) => {
  if (e.target.value <= 0.05 && e.target.value >= 0.01) {
    dispatch(error48False());
    setValue4({ ...value4, value8: e.target.value });
  } else {
    dispatch(error48True());
    setValue4({ ...value4, value8: e.target.value });
  }
};
