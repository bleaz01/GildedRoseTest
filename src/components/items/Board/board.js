import React from 'react';
import { Table } from 'reactstrap';
//style
import './boardStyle.css'


const Board = (props) => {

  const { name, sellIn, quality, id } = props

  return (
    <>
      <Table bordered responsive size='sm'>
        <thead>
          <tr className='tr-label'>
            <th className='label-1'>Name</th>
            <th className='label-2'>Sell In </th>
            <th className='label-3'>Quality </th>
          </tr>
        </thead>
        <tbody>
          <tr key={id} className='tr-value'>
            <td className='value-1'>{name}</td>
            <td className='value-2'>{sellIn} </td>
            <td className='value-3'>{quality}</td>
          </tr>
        </tbody>
      </Table >
    </>
  );
}

export default Board;