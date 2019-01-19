const allCities = require('./cities.json')
function city(name) {
  const found = allCities.find(e=> e.name === name)
  if (found) {
    const photo = Math.floor(Math.random() * 26) + 1
    console.log(photo)
    return {
      ...found,
      image: '/images/img ('  + photo + ').jpg'
    }
  }
}
const favCities = ['Moscow', 'Milan', 'Yekaterinburg', 'Domodedovo', 'Pescara', 'Trieste', 'Munich', 'Vienna', 'Verkhnyaya Pyshma']
const selected = favCities.map(name => city(name)).filter(s => !!s)
console.log(JSON.stringify(selected, null, 2))
export default selected
