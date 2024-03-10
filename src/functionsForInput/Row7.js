import {
  error71False,
  error71True,
  error72False,
  error72True,
  error73False,
  error73True,
  error74False,
  error74True,
  error75False,
  error75True,
  error76False,
  error76True,
  error77False,
  error77True,
  error78False,
  error78True,
} from "../Reducer/errorRow7";

export const value71Change = (e, setValue7, value7, dispatch) => {
  if (e.target.value <= 0.001) {
    dispatch(error71False());
    setValue7({ ...value7, value1: e.target.value });
  } else {
    dispatch(error71True());
    setValue7({ ...value7, value1: e.target.value });
  }
};
export const value72Change = (e, setValue7, value7, dispatch) => {
  if (e.target.value <= 0.001) {
    dispatch(error72False());
    setValue7({ ...value7, value2: e.target.value });
  } else {
    dispatch(error72True());
    setValue7({ ...value7, value2: e.target.value });
  }
};
export const value73Change = (e, setValue7, value7, dispatch) => {
  if (e.target.value <= 0.001) {
    dispatch(error73False());
    setValue7({ ...value7, value3: e.target.value });
  } else {
    dispatch(error73True());
    setValue7({ ...value7, value3: e.target.value });
  }
};
export const value74Change = (e, setValue7, value7, dispatch) => {
  if (e.target.value <= 0.001) {
    dispatch(error74False());
    setValue7({ ...value7, value4: e.target.value });
  } else {
    dispatch(error74True());
    setValue7({ ...value7, value4: e.target.value });
  }
};
export const value75Change = (e, setValue7, value7, dispatch) => {
  if (e.target.value <= 0.001) {
    dispatch(error75False());
    setValue7({ ...value7, value5: e.target.value });
  } else {
    dispatch(error75True());
    setValue7({ ...value7, value5: e.target.value });
  }
};
export const value76Change = (e, setValue7, value7, dispatch) => {
  if (e.target.value <= 0.001) {
    dispatch(error76False());
    setValue7({ ...value7, value6: e.target.value });
  } else {
    dispatch(error76True());
    setValue7({ ...value7, value6: e.target.value });
  }
};
export const value77Change = (e, setValue7, value7, dispatch) => {
  if (e.target.value <= 0.001) {
    dispatch(error77False());
    setValue7({ ...value7, value7: e.target.value });
  } else {
    dispatch(error77True());
    setValue7({ ...value7, value7: e.target.value });
  }
};
export const value78Change = (e, setValue7, value7, dispatch) => {
  if (e.target.value <= 0.001) {
    dispatch(error78False());
    setValue7({ ...value7, value8: e.target.value });
  } else {
    dispatch(error78True());
    setValue7({ ...value7, value8: e.target.value });
  }
};
