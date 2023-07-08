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

export const Foot = styled.div`
display: flex;
align-items: center;
margin-bottom: -120px;
`

Foot.star=styled.img`
width: 185px;
height: 187px;
padding: 0.0020073065534234047px 0.01447114534676075px 0.13280409574508667px 0.0020083473064005375px;
margin: 130px 100px 204px 86px;
transition: .3s;
cursor: pointer;
&:hover{
  transform: scale(1.1);
}
`

Foot.line=styled.img`
height: 196px;
margin-top: -70px;
`
Foot.foot=styled.div`
margin-top: -65px;
`
Foot.fot=styled.div`
margin-top: -115px;
`
Foot.text=styled.h3`
font-family: Montserrat;
font-size: 16px;
font-weight: 700;
line-height: 20px;
letter-spacing: 0em;
text-align: left;
color:#fff;
text-align: left;
margin-left: 81px;
padding: 10px;
padding-right: 104px;
cursor: pointer;
&:hover{
  color: blue;
}
`
Foot.right=styled.div`

`
Foot.tex=styled.h3`
width: 206px;
height: 20px;
font-family: Montserrat;
font-size: 16px;
font-weight: 700;
line-height: 20px;
letter-spacing: 0em;
text-align: left;
color:#fff;
margin-left: 71px;
margin-top: -100px;
cursor: pointer;
&:hover{
  color: blue;
}
`
Foot.imgs=styled.div`
display: flex;
margin-left: 51px;
margin-top: 25px;
`
Foot.social=styled.img`
width: 32px;
height: 32px;
margin-left: 20px;
transition: .3s;
cursor: pointer;
&:hover{
  transform: scale(1.1);
}
`

Foot.buton=styled.button`
width: 214px;
height: 48px;
border-radius: 40px;
background: linear-gradient(90deg, #8176AF 0%, #C0B7E8 100%);
cursor: pointer;
border: none;
margin-left: 71px;
margin-top: 39px;
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

