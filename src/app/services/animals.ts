import { environment } from '../../environment'

const getAnimalsList = async () => {
  let animalsData
  try {
    const res = await fetch(environment.animalListURL)
    animalsData = await res.json()
  } catch (err) {
    console.error('Something went wrong', err)
  }
  return animalsData
}

export { getAnimalsList }
