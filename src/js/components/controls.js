import React from 'react'

const Controls = ({peopleData, onNext, onPrev}) => {
  return (
    <div className='controls'>
      {peopleData.previous ? <button onClick={onPrev} className='controls--btn-prev'>prev</button> : null }
      {peopleData.next ? <button onClick={onNext} className='controls--btn-next'>next</button> : null }
    </div>
  )
}

export default Controls


