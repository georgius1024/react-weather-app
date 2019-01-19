import React, { Component } from 'react'
import Header from './components/header'
import Footer from './components/footer'
import Cities from './components/cities'
import City from './components/city'
import AddCity from './components/add-city'
import config from './config'
// import cities from './cities.json'
const cities = []
class App extends Component {
  constructor(p, c) {
    super(p, c)
    this.selectCity = this.selectCity.bind(this)
    this.addCity = this.addCity.bind(this)
    this.removeCity = this.removeCity.bind(this)
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.submitCity = this.submitCity.bind(this)
    this.state = {
      cities: [...cities],
      selectedCity: cities[0],
      modalActive: false,
    }
  }
  render() {
    const selectedCity = this.state.selectedCity
    const cities = this.state.cities
    const modalActive = this.state.modalActive
    return (
      <div>
        <AddCity
          active={modalActive}
          onClose={this.closeModal}
          onSubmit={this.submitCity}
        />
        <Header config={config} />
        <div className="columns">
          <div className="column is-two-fifths" style={{ padding: '16px' }}>
            <Cities
              cities={cities}
              selected={selectedCity}
              onselect={this.selectCity}
              onAdd={this.addCity}
            />
          </div>
          <div className="column is-three-fifths">
            {
              (selectedCity) ? <City city={selectedCity} onRemove={this.removeCity} /> : ''
            }
          </div>
        </div>
        <Footer config={config} />
      </div>
    )
  }
  selectCity(city) {
    this.setState({
      selectedCity: city,
    })
  }
  removeCity(city) {
    const cities = this.state.cities.filter(e => e.name !== city.name)
    this.setState({
      cities,
    })
    if (cities.length > 0) {
      this.selectCity(cities[0])
    } else {
      this.selectCity()
    }
  }
  addCity() {
    this.openModal()
  }
  submitCity(city) {
    this.closeModal()
    const cities = [...this.state.cities]
    cities.push(city)
    this.setState({
      cities,
    })
    this.selectCity(city)
  }
  openModal() {
    this.setState({
      modalActive: true,
    })
  }
  closeModal() {
    this.setState({
      modalActive: false,
    })
  }
}

export default App
