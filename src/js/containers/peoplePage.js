import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import {
  getPeopleIfNeeded,
  fetchPlanetInfo,
  displayPlanetInfo
} from '../actions/actionCreators'

import Spinner from '../components/spinner'
import PeopleTable from './peopleTable'
import PlanetPopup from '../components/planetPopup'

class PeoplePage extends Component {
  constructor(props){
    super(props)
  }

  componentWillMount() {
    this.props.dispatch(getPeopleIfNeeded())
  }

  viewPlanet(planetUrl) {
    const planetId = planetUrl.split('https://swapi.co/api/planets/').join('').slice(0, -1)
    this.props.dispatch(fetchPlanetInfo(planetId))
  }

  closePlanetPopup() {
    this.props.dispatch(displayPlanetInfo(null))
  }

  render() {

    const { people, planets } = this.props
    const spinner = people.is_fetching || planets.is_fetching ? <Spinner /> : null

    let peopleTable = null
    if(people.data){
      peopleTable = <PeopleTable viewPlanet={this.viewPlanet.bind(this)}/>
    }

    let planetPopup = null
    if( planets.is_displaying ){
      const planetData = planets.data[planets.display_id]
      planetPopup = <PlanetPopup data={planetData} onClose={this.closePlanetPopup.bind(this)} />
    }

    return (
      <div>
        {spinner}
        <div className='people'>
          {peopleTable}
        </div>
        {planetPopup}
      </div>
    )
  }
}

function mapStateToProps( state ){
  const { people, planets } = state
  return {
    people,
    planets
  }
}

export default connect(mapStateToProps)(PeoplePage)
