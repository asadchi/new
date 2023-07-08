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
 padding: 0 20px;
 display: flex;
 align-items: center;
 object-fit: cover;
 justify-content: space-between;
 height: 100%;
  background: rgba(48, 44, 66, 1);
`

export const Girl = styled.div`
  background: rgba(48, 44, 66, 1);
margin-top: 150px;
margin-left: 84px;

align-items: center;

`
Girl.Text=styled.img`
width: 456px;
height: 56px;
display: flex;


`

Girl.Txt=styled.img`
width: 402px;
height: 56px;
margin-top: 10px;
transition: .3s;

`


export const Little = styled.h4`
width: 450px;
height: 72px;
color: #fff;
text-align:left;
margin-top: 40px;
`

export const Button = styled.button`
width: 214px;
height: 48px;
border-radius: 40px;
border: 2px solid rgba(129, 118, 175, 1);
background: rgba(129, 118, 175, 1);
color: black;
margin-top: 70px;
border-radius: 40px;
background: linear-gradient(90deg, #8176AF 0%, #C0B7E8 100%);
cursor: pointer;
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

export const Icon = styled.img`
width: 100px;
height: 100px;
transition: .3s;
cursor: pointer;
&:hover{
  transform: scale(1.1);
}
`
export const Img = styled.img`
margin-top: 150px;
margin-right: 84px;
transition: .3s;
cursor: pointer;
&:hover{
  transform: scale(1.1);
}
`



