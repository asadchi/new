import styled from "styled-components";

export const Container = styled.div`
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
export const  Boy = styled.div`
  
`
Boy.picture=styled.img`
width: 524px;
height: 557px;
margin-top: 80px;
margin-left: 84px;
margin-right: 60px;
transition: .3s;
cursor: pointer;
&:hover{
  transform: scale(1.1);
}
`
export const  About = styled.div`
  margin-right: 300px;
  margin-top: 50px;
`
About.bigger=styled.h2`
width: 136px;
height: 44px;
font-family: Montserrat;
font-size: 36px;
font-weight: 700;
line-height: 44px;
letter-spacing: 0em;
text-align: left;
color:#fff;
`

About.middle=styled.h2`
width: 192px;
height: 44px;
font-family: Montserrat;
font-size: 36px;
font-weight: 300;
line-height: 44px;
letter-spacing: 0em;
text-align: left;
color: #FFFFFFF2;

`
About.little=styled.h2`
width: 630px;
height: 228px;
font-family: Montserrat;
font-size: 16px;
font-weight: 400;
line-height: 20px;
letter-spacing: 0em;
text-align: left;
color: #FFFFFF;
margin-top: 70px;
`
About.btn=styled.button`
width: 214px;
height: 48px;
border-radius: 40px;
background: linear-gradient(90deg, #8176AF 0%, #C0B7E8 100%);
border: none;
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