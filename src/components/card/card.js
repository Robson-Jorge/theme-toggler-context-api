import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/theme-context'

export const Card = () => {

    const { theme } = useContext(ThemeContext)

    return (
        <div style={{color: theme.color, backgroundColor: theme.background}}>
            <h1>Titulo do card</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam repellendus eligendi sint, porro tenetur molestiae iste aliquam corporis. Non nesciunt laborum, officiis at et nemo aliquid necessitatibus voluptate magni eum?</p>
        </div>
    )
}
