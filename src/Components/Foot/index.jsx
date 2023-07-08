import React from 'react'
import { Container,Contant,Footer,Loco,Loc,Tele,Phone,Lettr,Letter} from './style';
import Location from '../../assets/img/Page-1.png'
import phone from '../../assets/img/phone-call.png'
import letter from '../../assets/img/shape.png'
export default function Foot() {
  return (
   <Container>
    <Contant>
    <Footer>
     <Loc>
        <Loco.imgs src={Location}/> 
        <Loco>
        <Loco.biggest>Pay Us a Visit</Loco.biggest>
        <Loco.little> <a href=""> Union St, Seattle, WA 98101, United States</a> </Loco.little>
      </Loco>
      <Loco.border/>
      </Loc>

      <Phone>
        <Tele.imgs src={phone}/> 
        <Tele>
        <Tele.biggest>Give Us a Call</Tele.biggest>
        <Tele.little> <a href="tell:">(110) 1111-1010</a> </Tele.little>
      </Tele>
      <Tele.border/>
      </Phone>


      <Lettr>
        <Letter.imgs src={letter}/> 
        <Letter>
        <Letter.biggest>Send Us a Message</Letter.biggest>
        <Letter.little> <a href="">Contact@HydraVTech.com</a> </Letter.little>
      </Letter>
     
      </Lettr>
    </Footer>
    </Contant>
   </Container>
  )
}
