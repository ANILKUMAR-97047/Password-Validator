// Style your elements here
import styled from 'styled-components'

export const BgContainer = styled.div`
background-color:#24263c;
min-height:100vh;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
padding:40px;
`
export const PasswordContainer = styled.div`
border-radius:10px;
background-color:#434451;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
height:340px;
width:450px;
`
export const Heading = styled.h1`
font-size:38px;
font-family:"Roboto";
font-weight:500;
color:#ffffff;
`
export const Description = styled.p`
color:#f8fafc;
font-size:12px;
font-family:"Roboto";
font-weight:bold;
`
export const InputContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
margin-top:40px;
`
export const PasswordInput = styled.input`
padding:5px;
border-width:0px;
min-width:280px;
`

export const AlertMessage = styled.p`
color:#ef4444;
font-size:12px;
font-family:"Roboto";
font-weight:bold;
`
