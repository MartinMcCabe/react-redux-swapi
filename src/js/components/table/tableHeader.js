import React from 'react'

const renderHeaders = (cols) => {
  return cols.forEach((col, i) => {
    return (
      <th key={i}>col.name</th>
    )
  });
}

const TableHeader = ({cols, onClick}) => (
  <tr>
    {
      cols.map((col, i)=> {
        if(col.active){
          return (
            <th key={i} onClick={()=>{onClick(col.field)}} className='table--th'>{col.name}</th>
          )
        }
    })
    }
  </tr>
)

export default TableHeader
