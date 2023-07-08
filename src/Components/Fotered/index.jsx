import React from 'react'
import { Container,Contant,Fotered} from './style';
import girl from '../../assets/img/Mask group (9).png'
import unreal from '../../assets/img/Hydra-Tech1 1.png'
import unity from '../../assets/img/Hydra-Tech3 1.png'
import ocules from '../../assets/img/Hydra-Tech2 1.png'
import vive from '../../assets/img/Hydra-Tech4 1.png'
import sign from '../../assets/img/chevron-small-down.png'
export default function fotered() {
  return (
   <Container>
    <Contant>
      
    <Fotered>
       <Fotered.img src={girl}/>
       <Fotered.bigg>TECHNOLOGIES & HARDWARE</Fotered.bigg>
       <Fotered.smalll>USED BY HYDRA VR.</Fotered.smalll> 
       <Fotered.signs src={sign}/>
        <Fotered.sign src={unreal}/>
        <Fotered.sig src={unity}/>
        <Fotered.sgn src={ocules}/>
        <Fotered.ign src={vive}/>
    </Fotered>
    </Contant>
   </Container>
  )
}
