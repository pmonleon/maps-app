import { FC } from 'react'
import { BtnMyLocation, MapView, ReactLogo, SearchBar } from '../components'

export const HomeScreen:FC = () => {
  return (
    <div>
        <MapView />
        <BtnMyLocation />
        <ReactLogo />
        <SearchBar />
    </div>
  )
}
