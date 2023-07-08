import styled from "styled-components";

export const Container = styled.div`
display: flex;
  align-items: center;
  

`

export const Contant = styled.div`
 width: 100%;
  max-width: 1440px;
 margin: 0 auto;
 padding: 0 20px;
 display: flex;
 align-items: center;
 object-fit: cover;
 justify-content: space-between;
 height: 100%;
 background: rgba(48, 44, 66, 1);
`
export const Imgs = styled.div`
display: flex;
margin-top: 50px;
margin-left: 84px;
align-items: center;
`
Imgs.Logo=styled.img`
padding: 10px;
width: 101.99090576171875px;
height: 102.92574310302734px;
transition: .3s;
cursor: pointer;
&:hover{
  transform: scale(1.1);
}
`
Imgs.Text=styled.img`
padding: 10px;
width: 75.9673080444336px;
height: 46px;
transition: .3s;
cursor: pointer;
&:hover{
  transform: scale(1.1);
}
`
export const Texts = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 50px;
`
Texts.Text=styled.h3`
font-family: Montserrat;
font-size: 12px;
font-weight: 700;
line-height: 15px;
letter-spacing: 0em;
text-align: center;
color: rgba(255, 255, 255, 1);
margin: 25px;
cursor: pointer;
&:hover{
  color: blue;
}
`

export const Button = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 50px;
`
Button.btn=styled.button`
width: 154px;
height: 48px;
border-radius: 40px;
border: 2px solid #fff;
cursor: pointer;
margin-right: 40px;
background: rgba(48, 44, 66, 1);
color: #fff;

&:active{
  background-color: red;
}
transition: .3s;
cursor: pointer;
&:active{
  transform: scale(0.9);
}
`

Button.btns=styled.button`
width: 155px;
height: 48px;
border-radius: 40px;
border: 2px solid rgba(129, 118, 175, 1);
background: linear-gradient(90deg, #8176AF 0%, #C0B7E8 100%);
color: black;
cursor: pointer;
margin-right: 84px;
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

export const Card = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

`
Card.Text=styled.img`
width: 456px;
height: 56px;
`
Card.Texts=styled.img`
width: 402px;
height: 56px;
`