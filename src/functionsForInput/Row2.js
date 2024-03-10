import {
  error21False,
  error21True,
  error22False,
  error22True,
  error23False,
  error23True,
  error24False,
  error24True,
  error25False,
  error25True,
  error26False,
  error26True,
  error27False,
  error27True,
  error28False,
  error28True,
} from "../Reducer/errorRow2";

export const value21Change = (e, setValue2, value2, dispatch) => {
  if (e.target.value <= 0.25 && e.target.value >= 0.1) {
    setValue2({ ...value2, value1: e.target.value });
    dispatch(error21False());
  } else {
    dispatch(error21True());
    setValue2({ ...value2, value1: e.target.value });
  }
};
export const value22Change = (e, setValue2, value2, dispatch) => {
  if (e.target.value <= 0.25 && e.target.value >= 0.1) {
    setValue2({ ...value2, value2: e.target.value });
    dispatch(error22False());
  } else {
    dispatch(error22True());
    setValue2({ ...value2, value2: e.target.value });
  }
};
export const value23Change = (e, setValue2, value2, dispatch) => {
  if (e.target.value <= 0.25 && e.target.value >= 0.1) {
    setValue2({ ...value2, value3: e.target.value });
    dispatch(error23False());
  } else {
    dispatch(error23True());
    setValue2({ ...value2, value3: e.target.value });
  }
};
export const value24Change = (e, setValue2, value2, dispatch) => {
  if (e.target.value <= 0.25 && e.target.value >= 0.1) {
    setValue2({ ...value2, value4: e.target.value });
    dispatch(error24False());
  } else {
    dispatch(error24True());
    setValue2({ ...value2, value4: e.target.value });
  }
};
export const value25Change = (e, setValue2, value2, dispatch) => {
  if (e.target.value <= 0.25 && e.target.value >= 0.1) {
    setValue2({ ...value2, value5: e.target.value });
    dispatch(error25False());
  } else {
    dispatch(error25True());
    setValue2({ ...value2, value5: e.target.value });
  }
};
export const value26Change = (e, setValue2, value2, dispatch) => {
  if (e.target.value <= 0.25 && e.target.value >= 0.1) {
    setValue2({ ...value2, value6: e.target.value });
    dispatch(error26False());
  } else {
    dispatch(error26True());
    setValue2({ ...value2, value6: e.target.value });
  }
};
export const value27Change = (e, setValue2, value2, dispatch) => {
  if (e.target.value <= 0.25 && e.target.value >= 0.1) {
    setValue2({ ...value2, value7: e.target.value });
    dispatch(error27False());
  } else {
    dispatch(error27True());
    setValue2({ ...value2, value7: e.target.value });
  }
};
export const value28Change = (e, setValue2, value2, dispatch) => {
  if (e.target.value <= 0.25 && e.target.value >= 0.1) {
    setValue2({ ...value2, value8: e.target.value });
    dispatch(error28False());
  } else {
    dispatch(error28True());
    setValue2({ ...value2, value8: e.target.value });
  }
};
