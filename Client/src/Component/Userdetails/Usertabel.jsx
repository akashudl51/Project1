import React from 'react';

import UserEdit from './UserEdit'
import moment from 'moment';
import Avatar from '@mui/material/Avatar';
export default function Usertabel({post}) {
   
  return (
    
    <div>    
      
       <table>
    <tbody>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Create_dt</th>
        <th>Updated_dt</th>
        <th>Action</th>
      </tr>
      {post.map((item) => (
        <tr key={item.uid}>
          <td>
            <span>
            <Avatar variant="square">{item.ename[0].toUpperCase()} </Avatar> {item.ename}
            </span>
           </td>
          <td>{item.empemail}</td>
          <td>{moment(item.create_dt).format('YYYY-MM-DD HH:mm')}</td>
          <td>{moment(item.updated_at).format('YYYY-MM-DD HH:mm')}</td>
          <td><UserEdit useremail={item.empemail} srno={item.uid}/></td>
        </tr>
      ))}
    </tbody>
  </table>

  </div>
  )
}
