import Ship from '../src/ship.js'

test('metadata of the ship', () => {
  let ship = Ship(4)
  expect(ship.length).toBe(4)
  expect(ship.no_of_hits).toBe(0)
  expect(ship.sunk()).toBe(false)
});

test('metadata of the ship', () => {
  let ship = Ship(4)
  ship.hit()
  expect(ship.no_of_hits).toBe(1)
});

test('metadata of the ship', () => {
  let ship = Ship(4)
  for(let i=1; i<=4; i++){
    ship.hit()
  }
  expect(ship.sunk()).toBe(true)
});