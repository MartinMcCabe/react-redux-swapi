import React from 'react'

import TableHeader from './table/tableHeader'

const renderTd = (row, col, index, onViewClick) => {
  if(col.active){
    if(row[col.field].indexOf('http') > -1){
      return (
        <td key={index} className='table--td'><button onClick={()=> onViewClick(row[col.field])} >View</button></td>
      )
    }else if (col.field === 'created' || col.field === 'edited'){
      const d = new Date (row[col.field])
      const months = [`Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec`]
      const date = `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()} - ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
      return (
        <td key={index} className='table--td'>{date}</td>
      )
    }else{
      return (
        <td key={index} className='table--td'>{row[col.field]}</td>
      )
    }
  }
}

const Table = ({data, display_settings, onViewClick, onHeaderClick}) => {
  const { cols, sort } = display_settings
  const { results } = data

  return (
    <table className='table'>
      <tbody>
        <TableHeader cols={cols} sort={sort} onClick={onHeaderClick}/>
        {
          results.map((row, i) => (
            <tr key={i} className='table--tr'>
              {
                cols.map((col, j) => {
                  return renderTd(row, col, j, onViewClick)
                })
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default Table
