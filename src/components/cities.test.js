import React from 'react'
import jest from 'jest-mock'
import renderer from 'react-test-renderer'
import Cities from './cities'
const cities = [
  {
    country: 'RU',
    name: 'Moscow',
    lat: '55.75222',
    lng: '37.61556',
    image: '/images/11.jpg',
    temperature: '-7',
    humidity: '78',
    rain: '0',
    snow: '10',
    cloudiness: '80',
  },
]
describe('Cities', () => {
  it('renders correctly', () => {
    const onAdd = jest.fn()
    const selected = cities[0]
    const DOM = renderer.create(
      <Cities cities={cities} selected={selected} onAdd={onAdd} />
    )
    const html = JSON.stringify(DOM, null, 2)
    expect(html).toContain(selected.name)
    expect(DOM).toMatchSnapshot()
  })
})
