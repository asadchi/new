import React from 'react'
import { Container,Contant,Foot} from './style';
import lin from '../../assets/img/Vector 17.png'
export default function End() {
  return (
   <Container>
    <Contant>
     <Foot>
     <Foot.lin src={lin}/>
     <Foot.text>2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED </Foot.text>
     </Foot>
    </Contant>
   </Container>
  )
}



