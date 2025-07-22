import { Placeholder } from "react-bootstrap";

const SkeletonTable = ({ length = 3, column = 6 }) => {
  return (
    <>
      {Array.from({ length }).map((_, index) => (
        <tr key={index}>
          {Array.from({ length: column }).map((_, indexColumn) => (
            <td key={indexColumn}>
              <Placeholder as="div" animation="glow">
                <Placeholder
                  style={{ height: "10px", width: "60%" }}
                  className="rounded"
                />
              </Placeholder>
            </td>
          ))}
        </tr>
      ))}
    </>
  );
};

export default SkeletonTable;
