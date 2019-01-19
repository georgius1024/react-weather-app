/* eslint-disable */
import React from 'react'

export default props => {
  const onAdd = () => {
    props.onAdd()
  }
  const cities = props.cities
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((city, index) => {
      const onclick = () => {
        props.onselect(city)
      }
      const isSelected = props.selected.name === city.name
      return (
        <li key={index}>
          <a
            href="javascript:void(0)"
            onClick={onclick}
            className={isSelected ? 'is-active' : ''}
          >
            {city.name}
          </a>
        </li>
      )
    })
  return (
    <aside className="menu">
      <p className="menu-label">Favorite cities</p>
      <ul className="menu-list">{cities}</ul>
      <div className="menu-label">
        <hr />
      </div>
      <ul className="menu-list">
        <li>
          <a onClick={onAdd}>
            <span className="icon">
              <i className="fas fa-plus" />
            </span>
            Add city
          </a>
        </li>
      </ul>
    </aside>
  )
}
