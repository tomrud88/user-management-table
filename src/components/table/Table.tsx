import React from 'react'
import { User } from '../../types';
import './Table.css'

type TableProps = {
  filteredData: User[];
}

export const Table = ({ filteredData }: TableProps) => {
  return (
    <div className='table-wrapper'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length === 0 ? (
            <tr>
              <td colSpan={4} style={{ textAlign: 'center' }}>
                User with searched query does not exist
              </td>
            </tr>
          ) : (
            filteredData.map((item) => (
            <tr key={item.username}>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
            </tr>
             ))
            )}
        </tbody>
      </table>
    </div>
  );
}

