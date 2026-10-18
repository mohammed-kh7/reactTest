import React from 'react';

const Table = ({ columns = [], data = [], striped = false }) => {
  return (
    <div className="table-container">
      <table className={`custom-table ${striped ? 'table-striped' : ''}`}>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((column, colIndex) => {
                  const key =
                    Object.keys(row).find(
                      (k) => k.toLowerCase() === column.toLowerCase()
                    ) || column;

                  return <td key={colIndex}>{row[key] ?? '-'}</td>;
                })}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="empty-row">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
