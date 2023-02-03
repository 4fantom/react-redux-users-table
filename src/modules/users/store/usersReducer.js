import {
  ADD_USER_FAIL,
  ADD_USER_SUCCEED,
  DELETE_USER_FAIL,
  DELETE_USER_SUCCEED,
  UPDATE_USER_FAIL,
  UPDATE_USER_SUCCEED,
  USERS_REQUEST,
  USERS_REQUEST_FAIL,
  USERS_REQUEST_SUCCEED,
} from "./usersActions";

const initialState = {
  users: {
    data: null,
    error: null,
    loading: null,
  },
};
export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS_REQUEST: {
      return {
        ...state,
        users: {
          ...state.users,
          loading: true,
        },
      };
    }
    case USERS_REQUEST_SUCCEED: {
      const users = action.payload?.data;
      return {
        ...state,
        users: {
          ...state.users,
          data: users,
          loading: false,
        },
      };
    }
    case USERS_REQUEST_FAIL: {
      const errorMessage = action.payload?.message;
      return {
        ...state,
        users: {
          ...state.users,
          error: errorMessage,
          loading: false,
        },
      };
    }
    case DELETE_USER_SUCCEED: {
      const deletedUser = action.payload?.data;
      const newUsersData = state.users.data?.filter(
        ({ id }) => id !== deletedUser.id
      );
      return {
        ...state,
        users: {
          ...state.users,
          data: newUsersData,
        },
      };
    }
    case DELETE_USER_FAIL: {
      const errorMessage = action.payload?.message;
      return {
        ...state,
        users: {
          ...state.users,
          error: errorMessage,
        },
      };
    }
    case UPDATE_USER_SUCCEED: {
      const updatedUser = action.payload?.data;
      const newUsersData = state.users.data.map((user) =>
        user.id !== updatedUser.id ? user : updatedUser
      );
      return {
        ...state,
        users: {
          ...state.users,
          data: newUsersData,
        },
      };
    }
    case UPDATE_USER_FAIL: {
      const errorMessage = action.payload?.message;
      return {
        ...state,
        users: {
          ...state.users,
          error: errorMessage,
        },
      };
    }
    case ADD_USER_SUCCEED: {
      const newUser = action.payload?.data;
      const newUsersData = [...state.users.data, newUser];
      return {
        ...state,
        users: {
          ...state.users,
          data: newUsersData,
        },
      };
    }
    case ADD_USER_FAIL: {
      const errorMessage = action.payload?.message;
      return {
        ...state,
        users: {
          ...state.users,
          error: errorMessage,
        },
      };
    }
    default: {
      return state;
    }
  }
};
