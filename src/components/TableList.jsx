import React from 'react'
import Table from 'react-bootstrap/Table';

const TableList = ({list}) => {
  return (
    <div>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre del colaborador</th>
          <th>Correo del colaborador</th>
        </tr>
      </thead>
      <tbody>  
          {list.map((employye) =>(
            <tr key={employye.id}>
              <td >{employye.id}</td>
              <td >{employye.nombre}</td>
              <td >{employye.correo}</td>
            </tr>
          ))} 
      </tbody>
    </Table>
    </div>
  )
}

export default TableList