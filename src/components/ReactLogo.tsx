import { FC } from "react"

export const ReactLogo:FC = () => {
    return (
        <img src={ 'logo.svg' } 
             alt="React Logo" 
             style={{
                 position: 'fixed',
                 bottom: '20px',
                 right: '20px',
                 width: '130px'
             }}
        />
    )
}