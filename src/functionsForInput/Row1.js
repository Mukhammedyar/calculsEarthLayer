import {
  error11False,
  error11True,
  error12False,
  error12True,
  error13False,
  error13True,
  error14False,
  error14True,
  error15False,
  error15True,
  error16False,
  error16True,
  error17False,
  error17True,
  error18False,
  error18True,
} from "../Reducer/Input";

export const value1Change = (e, setValue1, values1, dispatch) => {
  if (e.target.value > 0.25) {
    setValue1({ ...values1, value1: e.target.value });
    dispatch(error11False());
  } else {
    dispatch(error11True());
    setValue1({ ...values1, value1: e.target.value });
  }
};
export const value12Change = (e, setValue1, values1, dispatch) => {
  if (e.target.value > 0.25) {
    setValue1({ ...values1, value2: e.target.value });
    dispatch(error12False());
  } else {
    dispatch(error12True());
    setValue1({ ...values1, value2: e.target.value });
  }
};
export const value13Change = (e, setValue1, values1, dispatch) => {
  if (e.target.value > 0.25) {
    setValue1({ ...values1, value3: e.target.value });
    dispatch(error13False());
  } else {
    dispatch(error13True());
    setValue1({ ...values1, value3: e.target.value });
  }
};
export const value14Change = (e, setValue1, values1, dispatch) => {
  if (e.target.value > 0.25) {
    setValue1({ ...values1, value4: e.target.value });
    dispatch(error14False());
  } else {
    dispatch(error14True());
    setValue1({ ...values1, value4: e.target.value });
  }
};
export const value15Change = (e, setValue1, values1, dispatch) => {
  if (e.target.value > 0.25) {
    setValue1({ ...values1, value5: e.target.value });
    dispatch(error15False());
  } else {
    dispatch(error15True());
    setValue1({ ...values1, value5: e.target.value });
  }
};
export const value16Change = (e, setValue1, values1, dispatch) => {
  if (e.target.value > 0.25) {
    setValue1({ ...values1, value6: e.target.value });
    dispatch(error16False());
  } else {
    dispatch(error16True());
    setValue1({ ...values1, value6: e.target.value });
  }
};
export const value17Change = (e, setValue1, values1, dispatch) => {
  if (e.target.value > 0.25) {
    setValue1({ ...values1, value7: e.target.value });
    dispatch(error17False());
  } else {
    dispatch(error17True());
    setValue1({ ...values1, value7: e.target.value });
  }
};
export const value18Change = (e, setValue1, values1, dispatch) => {
  if (e.target.value > 0.25) {
    setValue1({ ...values1, value8: e.target.value });
    dispatch(error18False());
  } else {
    dispatch(error18True());
    setValue1({ ...values1, value8: e.target.value });
  }
};
