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
export const Join = styled.div`
width: 1275px;
height: 1008px;
border-radius: 100px;
background: radial-gradient(50% 50% at 50% 50%, #403A5F 0%, #211E2E 100%);
box-shadow: 0px 4px 4px 0px #00000040;
margin-left: 84px;
margin-right: 84px;
margin-bottom: 100px;
`

Join.Glav=styled.h1`
width: 238px;
height: 44px;
font-family: Montserrat;
font-size: 36px;
font-weight: 700;
line-height: 44px;
letter-spacing: 0em;
text-align: left;
color: #FFFFFF;
margin:90px 512px 50px 512px ;
`
Join.border=styled.div`
border-bottom: 1px solid #fff;
width: 400px;
margin-left: 429px;
`
Join.text=styled.h3`
width: 541px;
height: 44px;
font-family: Montserrat;
font-size: 36px;
font-weight: 300;
line-height: 44px;
letter-spacing: 0em;
text-align: left;
color: #fff;
margin:  21px 390px;
`
export const Data = styled.div`
width: 100%;
display: flex;
margin-left: 107px;
margin-top: 85px;
`

export const Dat = styled.div`
width: 100%;
display: flex;
margin-left: 107px;
margin-top: 39px;
`
export const Sub = styled.div`
width: 54px;
height: 17px;
margin: 33px 380px;
`
export const Textarea = styled.textarea`
width: 1058px;
height: 210px;
border-radius: 40px;
border: 2px solid #fff;
background: radial-gradient(50% 50% at 50% 50%, #403A5F 0%, #211E2E 100%);
padding: 27px 0 0 47px;
margin: 53px 106px;
`
export const Btn = styled.button`
width: 214px;
height: 48px;
border-radius: 40px;
background: linear-gradient(90deg, #8176AF 0%, #C0B7E8 100%);
cursor: pointer;
margin:11px 532px;
border: none;
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







