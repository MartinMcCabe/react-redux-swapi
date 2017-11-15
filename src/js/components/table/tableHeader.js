import React from 'react'

const renderHeaders = (cols) => {
  return cols.forEach((col, i) => {
    return (
      <th key={i}>col.name</th>
    )
  });
}

const TableHeader = ({cols, sort, onClick}) => (
  <tr>
    {
      cols.map((col, i)=> {
        let classes;
        if(col.active){
          if(sort.field == col.field){
            if(sort.ascending){
              classes = 'table--th sort ascending'
            }else{
              classes = 'table--th sort decending'
            }
          }else{
            classes = 'table--th'
          }
          return (
            <th key={i} onClick={()=>{onClick(col.field)}} className={classes}>{col.name}</th>
          )
        }
    })
    }
  </tr>
)

export default TableHeader
