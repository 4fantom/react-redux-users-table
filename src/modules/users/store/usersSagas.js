import { takeEvery, put, call } from "redux-saga/effects";
import {
  USERS_REQUEST,
  USERS_REQUEST_SUCCEED,
  USERS_REQUEST_FAIL,
  DELETE_USER,
  DELETE_USER_SUCCEED,
  DELETE_USER_FAIL,
  UPDATE_USER_SUCCEED,
  UPDATE_USER_FAIL,
  UPDATE_USER,
  ADD_USER,
  ADD_USER_FAIL,
  ADD_USER_SUCCEED,
} from "./usersActions";
import {
  getUsers,
  deleteUserById,
  updateUserById,
  addNewUser,
} from "../../../api/users";

function* fetchUsers() {
  try {
    const usersData = yield call(getUsers);
    yield put({
      type: USERS_REQUEST_SUCCEED,
      payload: {
        data: usersData,
      },
    });
  } catch (e) {
    yield put({
      type: USERS_REQUEST_FAIL,
      payload: {
        message: e.message,
      },
    });
  }
}

function* deleteUser(action) {
  const id = action.payload.id;
  try {
    const deletedUser = yield call(() => deleteUserById(id));
    yield put({
      type: DELETE_USER_SUCCEED,
      payload: {
        data: deletedUser,
      },
    });
  } catch (e) {
    yield put({
      type: DELETE_USER_FAIL,
      payload: {
        message: e.message,
      },
    });
  }
}

function* updateUser(action) {
  const id = action.payload.id;
  const body = action.payload.body;
  try {
    const updatedUser = yield call(() => updateUserById(id, body));
    yield put({
      type: UPDATE_USER_SUCCEED,
      payload: {
        data: updatedUser,
      },
    });
  } catch (e) {
    yield put({
      type: UPDATE_USER_FAIL,
      payload: {
        message: e.message,
      },
    });
  }
}

function* addUser(action) {
  const body = action.payload.body;
  try {
    const updatedUser = yield call(() => addNewUser(body));
    yield put({
      type: ADD_USER_SUCCEED,
      payload: {
        data: updatedUser,
      },
    });
  } catch (e) {
    yield put({
      type: ADD_USER_FAIL,
      payload: {
        message: e.message,
      },
    });
  }
}

export function* saga() {
  yield takeEvery(USERS_REQUEST, fetchUsers);
  yield takeEvery(DELETE_USER, deleteUser);
  yield takeEvery(UPDATE_USER, updateUser);
  yield takeEvery(ADD_USER, addUser);
}
