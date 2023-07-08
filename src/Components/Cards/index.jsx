import React from 'react'
import { Container,Contant,Card} from './style';
import girl from '../../assets/img/Mask group (2).png'
import boy from '../../assets/img/Mask group (4).png'
import girls from '../../assets/img/Mask group (6).png'
import man from '../../assets/img/Mask group (8).png'
export default function Cards() {
  return (
   <Container>
    <Contant>
     <Card>
       <Card.Img src={girl}/>
        <Card.Text>SIMULATION</Card.Text>
        <Card.Border></Card.Border>
        <Card.middle>
          Vitae sapien pellentesque habitant morbi
        nunc. Viverra aliquet  porttitor rhoncus 
        libero justo laoreet sit amet vitae. 
        </Card.middle>
        <Card.btn>TRY IT NOW</Card.btn>
     </Card>

     <Card>
       <Card.Img src={boy}/>
        <Card.Text>EDUCATION</Card.Text>
        <Card.Border></Card.Border>
        <Card.middle>
          Vitae sapien pellentesque habitant morbi
        nunc. Viverra aliquet  porttitor rhoncus 
        libero justo laoreet sit amet vitae. 
        </Card.middle>
        <Card.btn>TRY IT NOW</Card.btn>
     </Card>

     <Card>
       <Card.Img src={girls}/>
        <Card.Text>SELF-CARE</Card.Text>
        <Card.Border></Card.Border>
        <Card.middle>
          Vitae sapien pellentesque habitant morbi
        nunc. Viverra aliquet  porttitor rhoncus 
        libero justo laoreet sit amet vitae. 
        </Card.middle>
        <Card.btn>TRY IT NOW</Card.btn>
     </Card>

     <Card>
       <Card.Img src={man}/>
        <Card.Text>OUTDOOR</Card.Text>
        <Card.Border></Card.Border>
        <Card.middle>
          Vitae sapien pellentesque habitant morbi
        nunc. Viverra aliquet  porttitor rhoncus 
        libero justo laoreet sit amet vitae. 
        </Card.middle>
        <Card.btn>TRY IT NOW</Card.btn>
     </Card>
    </Contant>
   </Container>
  )
}
