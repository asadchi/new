import React from 'react'
import { Container,Contant,Boy,About} from './style';
import boy from '../../assets/img/Mask group (1).png'

export default function Center() {
  return (
   <Container>
    <Contant>
     <Boy>
      <Boy.picture src={boy}/>
     </Boy>
     <About>
      <About.bigger>ABOUT</About.bigger>
      <About.middle>HYDRA VR</About.middle>
      <About.little>
      Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus 
urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida 
dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in. 
Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet 
sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam 
etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet 
cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha
retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi
n tempor.
      </About.little>
      <About.btn>LET’S GET IN TOUCH</About.btn>

      
     </About>
    </Contant>
   </Container>
  )
}
