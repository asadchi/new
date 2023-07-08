import React from 'react'
import { Container,Contant,Foot} from './style';
import star from '../../assets/img/Vector (1).png'
import line from '../../assets/img/Vector 20.png'
import face from '../../assets/img/facebook.png'
import twit from '../../assets/img/twitter.png'
import link from '../../assets/img/linkedin.png'
import youtube from '../../assets/img/youtube.png'
import inst from '../../assets/img/instagram.png'
import pin from '../../assets/img/pinterest.png'
export default function Footer() {
  return (
   <Container>
    <Contant>
     <Foot>
        <Foot.star src={star}/>
        <Foot.line src={line}/>
      <Foot.foot>
        <Foot.text>ABOUT</Foot.text>
        <Foot.text>SERVICES</Foot.text>
        <Foot.text>TECHNOLOGIES</Foot.text>
        <Foot.text>HOW TO</Foot.text>
        <Foot.text>JOIN HYDRA</Foot.text>
      </Foot.foot>
      <Foot.line src={line}/>
      <Foot.fot>
        <Foot.text>F.A.Q</Foot.text>
        <Foot.text>SITEMAP</Foot.text>
        <Foot.text>CONDITIONS</Foot.text>
        <Foot.text>LICENSES</Foot.text>
      </Foot.fot>
      <Foot.line src={line}/>
     <Foot.right>
      <Foot.tex>SOCIALIZE WITH HYDRA</Foot.tex>
      <Foot.imgs>
        <Foot.social src={face}/>
        <Foot.social src={twit}/>
        <Foot.social src={link}/>
        <Foot.social src={youtube}/>
        <Foot.social src={inst}/>
        <Foot.social src={pin}/>

      </Foot.imgs>
      <Foot.buton>BUILD YOUR WORLD</Foot.buton>
      
     </Foot.right>
     </Foot>
    </Contant>
   </Container>
  )
}



