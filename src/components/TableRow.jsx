import { useState } from "react";
import { Button, Input } from "./StyledComponents";

export const TableRow = ({
  schema,
  editMode,
  item,
  index,
  handleEditRow,
  handleDeleteRow,
  handleSaveRow,
}) => {
  const [state, setState] = useState({
    ...item,
  });

  const onInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onSaveRow = () => {
    if (Object.values(state).every((field) => !!field)) {
      handleSaveRow(state);
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <tr key={index}>
      {schema.map((field, index) => (
        <>
          <td key={index + field.key}>
            {editMode ? (
              <Input
                key={`input-${field.key}-${index}`}
                type={field.inputType}
                name={field.key}
                value={state[field.key]}
                onChange={onInputChange}
                placeholder={field.title}
                disabled={field.disabled}
                required
              />
            ) : (
              item[field.key]
            )}
          </td>
        </>
      ))}
      <td key={`actions-${index}`}>
        {editMode ? (
          <Button onClick={onSaveRow}>Save</Button>
        ) : (
          <>
            <Button onClick={() => handleEditRow(item)}>Edit</Button>
            <Button onClick={() => handleDeleteRow(item)}>Delete</Button>
          </>
        )}
      </td>
    </tr>
  );
};
