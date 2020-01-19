export interface AnimalI {
  Id: number
  Title: string
  Description: string
  Family: string
  CollectiveNoun: string
  Width: number
  Height: number
  ImageURLs: {
    FullSize: string
    Thumb: string
  }
}

export interface FruitI {
  Id: number
  Title: string
  Description: string
  Family: string
  Genus: string
  Width: number
  Height: number
  ImageURLs: {
    FullSize: string
    Thumb: string
  }
}
