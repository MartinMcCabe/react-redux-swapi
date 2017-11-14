import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const PlanetPopup = ({ data, onClose }) => {
  return (
    <div className='popup'>
    <ReactCSSTransitionGroup
      transitionName="popup-transition"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnterTimeout={200}
      transitionLeaveTimeout={200}>
    <div key="popupkey" className='popup--content'>
      <div className='popup--btn-close' onClick={onClose}>X</div>
      <h2 className='popup--heading'>{data.name}</h2>
      <div className='popup--table-holder'>
        <table className='popup--table'>
          <tbody>
            <tr>
              <td className='popup--table-property'>Diameter</td>
              <td className='popup--table-value'>{data.diameter}</td>
            </tr>
            <tr>
              <td className='popup--table-property'>Climate</td>
              <td className='popup--table-value'>{data.climate}</td>
            </tr>
            <tr>
              <td className='popup--table-property'>Population</td>
              <td className='popup--table-value'>{data.population}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </ReactCSSTransitionGroup>
    </div>
  )
}

export default PlanetPopup
