import {
  error61False,
  error61True,
  error62False,
  error62True,
  error63False,
  error63True,
  error64False,
  error64True,
  error65False,
  error65True,
  error66False,
  error66True,
  error67False,
  error67True,
  error68False,
  error68True,
} from "../Reducer/errorRow6";

export const value61Change = (e, setValue6, value6, dispatch) => {
  if (e.target.value <= 0.005 && e.target.value >= 0.001) {
    dispatch(error61False());
    setValue6({ ...value6, value1: e.target.value });
  } else {
    dispatch(error61True());
    setValue6({ ...value6, value1: e.target.value });
  }
};
export const value62Change = (e, setValue6, value6, dispatch) => {
  if (e.target.value <= 0.005 && e.target.value >= 0.001) {
    dispatch(error62False());
    setValue6({ ...value6, value2: e.target.value });
  } else {
    dispatch(error62True());
    setValue6({ ...value6, value2: e.target.value });
  }
};
export const value63Change = (e, setValue6, value6, dispatch) => {
  if (e.target.value <= 0.005 && e.target.value >= 0.001) {
    dispatch(error63False());
    setValue6({ ...value6, value3: e.target.value });
  } else {
    dispatch(error63True());
    setValue6({ ...value6, value3: e.target.value });
  }
};
export const value64Change = (e, setValue6, value6, dispatch) => {
  if (e.target.value <= 0.005 && e.target.value >= 0.001) {
    dispatch(error64False());
    setValue6({ ...value6, value4: e.target.value });
  } else {
    dispatch(error64True());
    setValue6({ ...value6, value4: e.target.value });
  }
};
export const value65Change = (e, setValue6, value6, dispatch) => {
  if (e.target.value <= 0.005 && e.target.value >= 0.001) {
    dispatch(error65False());
    setValue6({ ...value6, value5: e.target.value });
  } else {
    dispatch(error65True());
    setValue6({ ...value6, value5: e.target.value });
  }
};
export const value66Change = (e, setValue6, value6, dispatch) => {
  if (e.target.value <= 0.005 && e.target.value >= 0.001) {
    dispatch(error66False());
    setValue6({ ...value6, value6: e.target.value });
  } else {
    dispatch(error66True());
    setValue6({ ...value6, value6: e.target.value });
  }
};
export const value67Change = (e, setValue6, value6, dispatch) => {
  if (e.target.value <= 0.005 && e.target.value >= 0.001) {
    dispatch(error67False());
    setValue6({ ...value6, value7: e.target.value });
  } else {
    dispatch(error67True());
    setValue6({ ...value6, value7: e.target.value });
  }
};
export const value68Change = (e, setValue6, value6, dispatch) => {
  if (e.target.value <= 0.005 && e.target.value >= 0.001) {
    dispatch(error68False());
    setValue6({ ...value6, value8: e.target.value });
  } else {
    dispatch(error68True());
    setValue6({ ...value6, value8: e.target.value });
  }
};
