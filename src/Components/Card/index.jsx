import React from 'react'
import { Container,Contant,Girl,Little,Button,Img} from './style';
import Logo from '../../assets/img/Dive Into The Depths.png'
import txt from '../../assets/img/Of Virtual Reality.png'
import girl from '../../assets/img/Mask group.png'
export default function Card() {
  return (
   <Container>
    <Contant>
      <Girl>
        <Girl.Text src={Logo}/> 
          <Girl.Txt src={txt}/> 
     
   <Little>
   Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore 
nisl tincidunt eget. Lectus mauris eros in vitae .
   </Little> 
   <Button>BUILD YOUR WORLD</Button>
 
   </Girl>
  
   <Img src={girl}/>

    </Contant>

   </Container>
  )
}
