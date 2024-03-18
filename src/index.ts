import { numberGenerator } from './lib/numbers'

export const helloWorld = (num: number) => {
  if (num < 0) {
    return null
  }

  return num + numberGenerator()
}

const main = () => {
  console.log(helloWorld(6))
}

main()
