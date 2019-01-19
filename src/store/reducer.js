import consts from './consts'
function cityReducer (state = [], action) {
  // eslint-disable-next-line
  switch (action.type) {
    case consts.addCity:
      const city = {...action.payload}
      const cities = [...state].filter(e => e.key !== city.key)
      cities.push(city)
      return cities
    case consts.removeCity:
      return [...state].filter(e => e.key !== action.payload)
  }
  return state
}

function wrapper(reducer, key) {
  return (state, action) => {
    if (typeof state === 'undefined') {
      const stored = localStorage.getItem(key)
      if (stored) {
        try {
          state = JSON.parse(stored)
        } catch (error) {
          state = undefined
        }
      }
    }
    const newState = reducer(state, action)
    localStorage.setItem(key, JSON.stringify(newState))
    return newState
  }
}

export default wrapper(cityReducer, 'cities')