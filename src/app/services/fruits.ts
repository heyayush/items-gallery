import { environment } from '../../environment'

const getFruitsList = async () => {
  let fruitsData
  try {
    const res = await fetch(environment.fruitListURL)
    fruitsData = await res.json()
  } catch (err) {
    console.error('Something went wrong', err)
  }
  return fruitsData
}

export { getFruitsList }
