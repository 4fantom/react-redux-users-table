import { StyledTable } from "./StyledComponents";
import { TableRow } from "./TableRow";

export const Table = ({
  schema,
  data = [],
  handleEditRow,
  handleDeleteRow,
  handleSaveRow,
  editModeIds,
}) => {
  const isInEditMode = (id) => {
    return editModeIds.includes(id);
  };

  return (
    <StyledTable>
      <thead>
        <tr>
          {schema.map((field, index) => (
            <th key={index}>{field.title}</th>
          ))}
          <th key="actions">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <TableRow
            key={`row-${index}`}
            item={item}
            index={index}
            schema={schema}
            editMode={isInEditMode(item.id)}
            handleDeleteRow={handleDeleteRow}
            handleEditRow={handleEditRow}
            handleSaveRow={handleSaveRow}
          />
        ))}
      </tbody>
    </StyledTable>
  );
};
