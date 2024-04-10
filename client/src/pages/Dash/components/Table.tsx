import React from "react";
import "./table.styles.css";
interface DataRow {
  id: number;
  assigned: string;
  designation: string;
  name: string;
  priority: string;
  budget: string;
}

interface TableProps {
  data: DataRow[];
}

const TableComponent: React.FC<TableProps> = ({ data }) => {
  return (
    <div className="table-responsive">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Assigned</th>
            <th>Name</th>
            <th>Priority</th>
            <th>Budget</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.id}</td>
              <td>
                <div className="font-semibold">{row.assigned}</div>
                <div className="font-normal text-slate-500">
                  {row.designation}
                </div>
              </td>
              <td className="font-normal text-slate-500">{row.name}</td>
              <td>
                <div
                  className={`priority-${row.priority.toLowerCase()} rounded-full px-2 text-center font-bold text-white`}
                >
                  {row.priority}
                </div>
              </td>
              <td className="font-semibold text-md">{row.budget}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
