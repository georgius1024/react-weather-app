/* eslint-disable */
import React, { Component } from 'react'
import completeCityList from '../db.json'
import './add-city.css'

export default class AddCity extends Component {
  constructor(props) {
    super(props)
    this.state = { value: '', typeahead: [] }

    this.onChange = this.onChange.bind(this)
    this.onClose = this.onClose.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    window.completeCityList = completeCityList
  }

  onChange(event) {
    this.setValue(event.target.value)
  }
  
  setValue(value) {
    let typeahead = []
    if (value.length > 3) {
      typeahead = completeCityList
        .filter(e => e.name.toLowerCase().includes(value.toLowerCase()))
        .slice(0, 10)
    }
    this.setState({ value, typeahead })
    console.log(typeahead, value)
  }

  onClose() {
    this.props.onClose()
  }

  onSubmit() {
    const city = {
      name: this.state.value,
      lat: 0,
      lng: 0,
      image: '/images/1.jpg',
    }
    this.props.onSubmit(city)
    this.setState({ value: '', typeahead: [] })
  }

  render() {
    let typeahead
    if (this.state.typeahead.length > 1) {
        const items = this.state.typeahead.map((item, index) => {
        const onSelect = () => {
          const city  = {...item}
          city.key = String(city.name) + '.' + String(city.lat) + '.' + String(city.lng)
          city.image = '/images/' + Math.ceil(Math.random() * 26) + '.jpg'
          this.props.onSubmit(city)
        }
        return (
          <a key={index} className="typeahead-item" onClick={onSelect}>
            {item.name}, {item.country}
          </a>
        )
      })
      typeahead = (
      <div className="typeahead">
        { items }
      </div>)
    }
    const selectEkat = () => {
      this.setValue('ekat')
    }
    return (
      <div className={'modal  ' + (this.props.active ? 'is-active' : '')}>
        <div className="modal-background" />
        <div className="modal-content has-background-white has-text-black-ter form">
          <div className="field">
            <label className="label">City name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Enter city name"
                value={this.state.value}
                onChange={this.onChange}
              />
              {typeahead}
            </div>
          </div>

          <a onClick={selectEkat}>EKAT</a>
        </div>
        <button className="modal-close is-large" onClick={this.onClose} />
      </div>
    )
  }
}
