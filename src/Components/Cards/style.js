import styled from "styled-components";


export const Container = styled.div`
 display: flex;
  align-items: center;
`

export const Contant = styled.div`
 width: 100%;
 height: 100%;
  max-width: 1440px;
 margin: 0 auto;
 padding: 0 80px;
 display: flex;
 align-items: center;
 object-fit: cover;
 justify-content: space-between;
 height: 100%;
  background: rgba(48, 44, 66, 1);
`

export const Card = styled.div`
width: 310px;
height: 511px;
border-radius: 40px;
background: radial-gradient(50% 50% at 50% 50%, #433D60 0%, #211E2E 100%);
margin-top: 80px;
transition: .3s;
cursor: pointer;
&:hover{
  transform: scale(1.1);
}
`
Card.Img=styled.img`
border: 15px solid #0E0E0E52;
border: 50px;
width: 190.92308044433594px;
height: 190.92308044433594px;
margin: 30px 60px;
transition: .3s;

`

Card.Text=styled.h2`
width: 160px;
height: 29px;
font-family: Montserrat;
font-size: 24px;
font-weight: 700;
line-height: 29px;
letter-spacing: 0em;
text-align: left;
color:#fff;
margin-left: 75px;
`

Card.Border=styled.div`
border-bottom: 1px solid #C0B7E854;
margin: 20px 60px;

`
Card.middle=styled.h4`
width: 250px;
height: 57px;
font-family: Montserrat;
font-size: 12px;
font-weight: 400;
line-height: 15px;
letter-spacing: 0em;
text-align: left;
color:#fff;
margin-left: 30px;
`

Card.btn=styled.button`
width: 154px;
height: 48px;
border-radius: 40px;
background: linear-gradient(90deg, #8176AF 0%, #C0B7E8 100%);
cursor: pointer;
border: none;
margin-left: 75px;
margin-top: 25px;
&:active{
color: blue;
  cursor: pointer;
}
transition: .3s;
cursor: pointer;
&:active{
  transform: scale(0.9);
}
`