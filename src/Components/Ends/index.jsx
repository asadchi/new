import React from 'react'
import { Container,Contant,Line,Number,Nmbr,Sign,Signs,Sgn,Sin,Sgin} from './style';
import line from '../../assets/img/Vector 15.png';
import one from '../../assets/img/01.png'
import two from '../../assets/img/02.png'
import tree from '../../assets/img/03.png'
import four from '../../assets/img/04.png'
import sign from '../../assets/img/arrow-small-right.png'
export default function Ends() {
  return (
   <Container>
    <Contant>
     
      <Number>
        <Number.num></Number.num>
        <Number.num></Number.num>
        <Number.num></Number.num>
        <Number.num></Number.num>
      </Number>
      <Nmbr>
        <Nmbr.img src={one}/>
        <Nmbr.img src={two}/>
        <Nmbr.img src={tree}/>
        <Nmbr.img src={four}/>
      </Nmbr>
      <Signs>
        <Sign>
          <Sign.img src={sign}/>
          <Sign.text>3D Conception & Design</Sign.text> 
        </Sign>
        <Sgn>
          <Sgn.img src={sign}/>
          <Sgn.text>Interaction Design</Sgn.text> 
        </Sgn>
        <Sin>
          <Sin.img src={sign}/>
          <Sin.text>VR World User Testing</Sin.text> 
        </Sin>
        <Sgin>
          <Sgin.img src={sign}/>
          <Sgin.text>Hydra VR Deploy</Sgin.text> 
        </Sgin>
        </Signs>
    </Contant>
   </Container>
  )
}
