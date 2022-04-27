import React from "react";
import { Table } from "react-bootstrap";
import "./VolunteerList.css";

const VolunteerList = () => {
  return (
    <div className="table-content">
      <Table>
        <thead className="border-0 bg-teal-100 text-gray-500">
          <tr className="border-0">
            <th className="border-0">Full Name</th>
            <th className="border-0">Email ID</th>
            <th className="border-0">Registaitng Date</th>
            <th className="border-0">Volunteer List</th>
            <th className="border-0">Action</th>
          </tr>
        </thead>
        <tbody className="border-0">
          <tr className="border-0">
            <td className="border-0">Mark</td>
            <td className="border-0">Otto</td>
            <td className="border-0">@mdo</td>
            <td className="border-0">@mdo</td>
            <td className="border-0">@mdo</td>
          </tr>
          <tr className="border-0">
            <td className="border-0">Jacob</td>
            <td className="border-0">Thornton</td>
            <td className="border-0">@fat</td>
            <td className="border-0">@fat</td>
            <td className="border-0">@fat</td>
          </tr>
          <tr className="border-0">
            <td className="border-0">Jacob</td>
            <td className="border-0">Thornton</td>
            <td className="border-0">@fat</td>
            <td className="border-0">@fat</td>
            <td className="border-0">@fat</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default VolunteerList;
