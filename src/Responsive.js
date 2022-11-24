import { css } from "styled-components"

export const desktop=(props)=>{
    return css`
        @media only screen and (min-width:660px){
        ${props}
        }
`
}

export const tablet=(props)=>{
    return css`
        @media only screen and (min-width:1000px){
        ${props}
        }
`
}