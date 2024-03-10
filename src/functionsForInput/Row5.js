import {
  error51False,
  error51True,
  error52False,
  error52True,
  error53False,
  error53True,
  error54False,
  error54True,
  error55False,
  error55True,
  error56False,
  error56True,
  error57False,
  error57True,
  error58False,
  error58True,
} from "../Reducer/errorRow5";

export const value51Change = (e, setValue5, value5, dispatch) => {
  if (e.target.value <= 0.01 && e.target.value >= 0.005) {
    dispatch(error51False());
    setValue5({ ...value5, value1: e.target.value });
  } else {
    dispatch(error51True());
    setValue5({ ...value5, value1: e.target.value });
  }
};
export const value52Change = (e, setValue5, value5, dispatch) => {
  if (e.target.value <= 0.01 && e.target.value >= 0.005) {
    dispatch(error52False());
    setValue5({ ...value5, value2: e.target.value });
  } else {
    dispatch(error52True());
    setValue5({ ...value5, value2: e.target.value });
  }
};
export const value53Change = (e, setValue5, value5, dispatch) => {
  if (e.target.value <= 0.01 && e.target.value >= 0.005) {
    dispatch(error53False());
    setValue5({ ...value5, value3: e.target.value });
  } else {
    dispatch(error53True());
    setValue5({ ...value5, value3: e.target.value });
  }
};
export const value54Change = (e, setValue5, value5, dispatch) => {
  if (e.target.value <= 0.01 && e.target.value >= 0.005) {
    dispatch(error54False());
    setValue5({ ...value5, value4: e.target.value });
  } else {
    dispatch(error54True());
    setValue5({ ...value5, value4: e.target.value });
  }
};
export const value55Change = (e, setValue5, value5, dispatch) => {
  if (e.target.value <= 0.01 && e.target.value >= 0.005) {
    dispatch(error55False());
    setValue5({ ...value5, value5: e.target.value });
  } else {
    dispatch(error55True());
    setValue5({ ...value5, value5: e.target.value });
  }
};
export const value56Change = (e, setValue5, value5, dispatch) => {
  if (e.target.value <= 0.01 && e.target.value >= 0.005) {
    dispatch(error56False());
    setValue5({ ...value5, value6: e.target.value });
  } else {
    dispatch(error56True());
    setValue5({ ...value5, value6: e.target.value });
  }
};
export const value57Change = (e, setValue5, value5, dispatch) => {
  if (e.target.value <= 0.01 && e.target.value >= 0.005) {
    dispatch(error57False());
    setValue5({ ...value5, value7: e.target.value });
  } else {
    dispatch(error57True());
    setValue5({ ...value5, value7: e.target.value });
  }
};
export const value58Change = (e, setValue5, value5, dispatch) => {
  if (e.target.value <= 0.01 && e.target.value >= 0.005) {
    dispatch(error58False());
    setValue5({ ...value5, value8: e.target.value });
  } else {
    dispatch(error58True());
    setValue5({ ...value5, value8: e.target.value });
  }
};
