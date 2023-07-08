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

export const Fotered = styled.div`
text-align: center;
`
Fotered.img=styled.img`
width: 1278px;
height: 303px;
margin-top: 100px;
margin-left: 60px;
position: relative;
transition: .3s;
cursor: pointer;
&:hover{
  transform: scale(1.1);
}
`
Fotered.bigg=styled.h2`
width: 700px;
height: 44px;
font-family: Montserrat;
font-size: 36px;
font-weight: 700;
line-height: 44px;
letter-spacing: 0em;
text-align: left;
color:#fff;
margin-left: 400px;
z-index: 3;
position:absolute;
margin-top: -200px;
`
Fotered.smalll=styled.h2`
width: 371px;
height: 44px;
font-family: Montserrat;
font-size: 36px;
font-weight: 300;
line-height: 44px;
letter-spacing: 0em;
text-align: left;
color:#fff;
margin-left: 490px;
z-index: 3;
position:absolute;
margin-top: -150px;
`

Fotered.signs=styled.img`
width: 70px;
height: 70px;
border: 10px solid black ;
border-radius: 50%;
background: linear-gradient(267.61deg, #C0B7E8 -0.6%, #8176AF 98.31%);
position: absolute;
z-index: 3;
margin-top: 365px;
margin-left: -720px;
cursor: pointer;
`

Fotered.sign=styled.img`
width: 174px;
height: 174px;
opacity: 0.36000001430511475px;
margin: 0px 30px 40px 20px;
transition: .3s;
cursor: pointer;
&:hover{
  transform: scale(1.1);
}
`
Fotered.sig=styled.img`
width: 252px;
height: 252px;
opacity: 0.36000001430511475px;
margin: 10px 30px;
transition: .3s;
cursor: pointer;
&:hover{
  transform: scale(1.1);
}
`
Fotered.sgn=styled.img`
width: 263px;
height: 263px;
opacity: 0.36000001430511475px;
margin: 10px 30px;
transition: .3s;
cursor: pointer;
&:hover{
  transform: scale(1.1);
}
`
Fotered.ign=styled.img`
width: 282px;
height: 282px;
opacity: 0.36000001430511475px;
margin: 10px 30px;
transition: .3s;
cursor: pointer;
&:hover{
  transform: scale(1.1);
}
`

