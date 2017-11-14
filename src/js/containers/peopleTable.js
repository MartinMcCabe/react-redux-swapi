import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  sortPeople,
  toggleOrder
} from '../actions/actionCreators'

import Table from '../components/table'

class PeopleTable extends Component {

  constructor(props) {
    super(props)
  }

  sort(field){
    const { display_settings } = this.props
    if(display_settings.sort.field != field){
      this.props.dispatch(sortPeople(field))
    }else{
      this.props.dispatch(toggleOrder(field))
    }

  }

  render(){
    const { data, display_settings, viewPlanet } = this.props

    return (
      <Table data={data} display_settings={display_settings} onViewClick={viewPlanet} onHeaderClick={this.sort.bind(this)} />
    )
  }
}

function mapStateToProps (state) {
  const { data, display_settings } = state.people
  return {
    data,
    display_settings
  }
}
export default connect(mapStateToProps)(PeopleTable)
