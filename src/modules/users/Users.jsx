import { useMemo, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_USER,
  DELETE_USER,
  UPDATE_USER,
  USERS_REQUEST,
} from "./store/usersActions";
import { Button, Error, Paper } from "../../components/StyledComponents";
import { Table } from "../../components/Table";
import { TableRow } from "../../components/TableRow";

const schema = {
  id: {
    key: "id",
    title: "Id",
    inputType: "number",
    //should be unique
    disabled: true,
  },
  name: {
    key: "name",
    title: "Name",
    inputType: "text",
  },
  age: {
    key: "age",
    title: "Age",
    inputType: "number",
  },
  about: {
    key: "about",
    title: "About person",
    inputType: "text",
  },
};

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.app.users);
  const { loading, data, error } = users;
  const [editModeIds, setEditModeIds] = useState([]);
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);
  const [usersError, setUsersError] = useState(null);

  const nextUserId = useMemo(() => {
    const ids = data?.map((user) => Number(user.id));
    if (!ids?.length) {
      return 1;
    }
    return (
      ids?.sort(function (a, b) {
        return b - a;
      })[0] + 1
    );
  }, [data]);

  useEffect(() => {
    dispatch({
      type: USERS_REQUEST,
    });
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      setUsersError(error);
      setTimeout(() => {
        setUsersError(null);
      }, 3000);
    }
  }, [error]);

  const onAddUserClick = () => {
    setIsAddFormOpen(true);
  };

  const handleAddNewUser = (item) => {
    dispatch({
      type: ADD_USER,
      payload: {
        body: item,
      },
    });
    setIsAddFormOpen(false);
  };

  const handleEditUser = (item) => {
    setEditModeIds([...editModeIds, item.id]);
  };

  const handleSaveEditedUser = (item) => {
    dispatch({
      type: UPDATE_USER,
      payload: {
        id: item.id,
        body: item,
      },
    });
    setEditModeIds(editModeIds.filter((id) => id !== item.id));
  };

  const handleDeleteUser = (item) => {
    dispatch({
      type: DELETE_USER,
      payload: {
        id: item.id,
      },
    });
  };

  return (
    <>
      {usersError && <Error>{usersError}</Error>}
      {loading && "Loading... Please wait"}
      {data && (
        <Paper>
          {!isAddFormOpen && (
            <Button onClick={onAddUserClick}>Add new user</Button>
          )}
          {isAddFormOpen && (
            <>
              Please type values for a new user here.
              <table>
                <tbody>
                  <TableRow
                    key={`add-user-form`}
                    schema={Object.values(schema)}
                    editMode={true}
                    item={{
                      id: nextUserId,
                      name: "",
                      age: "",
                      about: "",
                    }}
                    index="addUserMode"
                    handleSaveRow={handleAddNewUser}
                  />
                </tbody>
              </table>
            </>
          )}
          <Table
            schema={Object.values(schema)}
            data={data}
            handleEditRow={handleEditUser}
            handleDeleteRow={handleDeleteUser}
            handleSaveRow={handleSaveEditedUser}
            editModeIds={editModeIds}
          />
        </Paper>
      )}
    </>
  );
};

export default Users;
