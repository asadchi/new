import React from 'react'
import { Container,Contant,Texts,Text,Infor,Boy} from './style';
import icon from '../../assets/img/Component 1.png'

export default function Main() {
  return (
   <Container>
    <Contant>
       <Texts>
          <Texts.bigger>INTRODUCTION</Texts.bigger>
          <Text>
          <Text.middle>TO HYDRA VR</Text.middle>
          <Text.img src={icon}/>
          </Text>
        </Texts>  <Infor>Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
</Infor>
      
      
    </Contant>
     
   </Container>
  )
}
