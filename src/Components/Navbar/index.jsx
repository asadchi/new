import React from 'react'
import { Container,Contant,Imgs,Texts,Button} from './style';
import Logo from '../../assets/img/Vector.png'
import Text from '../../assets/img/Frame.png'

export default function Navbar() {
  return (
   <Container>
    <Contant>
   <Imgs>
   <Imgs.Logo src={Logo}/>

     <Imgs.Text src={Text}/>

   </Imgs>
   <Texts>
      <Texts.Text>ABOUT</Texts.Text>

       <Texts.Text>SERVICES</Texts.Text>

      <Texts.Text>TECHNOLOGIES</Texts.Text>

      <Texts.Text>HOW TO</Texts.Text>
 
   </Texts>
   <Button>
    <Button.btn>CONTACT US</Button.btn>
 
      <Button.btns>JOIN HYDRA</Button.btns>   

   </Button>
    </Contant>
   </Container>
  )
}
