import { helloWorld } from '../src'
import * as numbers from '../src/lib/numbers'

jest.mock('../src/lib/numbers')
const spy = jest.mocked(numbers.numberGenerator).mockImplementation(() => 10)

// Alternatively
// const spy = jest.spyOn(numbers, 'numberGenerator').mockReturnValue(10)

describe('default test suite', () => {
  beforeEach(() => {
    spy.mockClear()
  })

  it('should pass on a positive number', () => {
    const res = helloWorld(10)
    expect(res).toBe(20)
    expect(spy).toHaveBeenCalledTimes(1)
  })
  
  it('should return null on a non-zero number', () => {
    const res = helloWorld(-1)
    expect(res).toBeNull()
    expect(spy).toHaveBeenCalledTimes(0)
  })

  it('should fail the test', () => {
    const res = helloWorld(1)
    expect(spy).toHaveBeenCalledTimes(1)
    expect(res).toBeNull()
  })
})
