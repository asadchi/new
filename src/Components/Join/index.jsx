import React from 'react'
import { Container,Contant,Join,Data,Dat,Sub,Textarea,Btn} from './style';

export default function join() {
  return (
   <Container>
    <Contant>
      <Join>
        <Join.Glav>JOIN HYDRA</Join.Glav>
        <Join.border></Join.border>
        <Join.text>Let’s Build Your VR Experience</Join.text>
      <Data>
        <div className='col-md-6 offset-6' >
          <input type="text" className='form-control' placeholder='First Name'/>
        </div>
        <div className='col-md-6 offset-6' >
          <input type="text" className='form-control' placeholder='Last Name'/>
        </div>
        </Data> 
        <Dat>
        <div className='col-md-6 offset-6' >
          <input type="text" className='form-control' placeholder='Email'/>
        </div>
        <div className='col-md-6 offset-6' >
          <input type="number" className='form-control' placeholder='Phone Number'/>
        </div>
        </Dat> 
        <Sub>
          <input type="text" className='form-control' placeholder='Subject' />
        </Sub>
        <Textarea placeholder='Tell Us Something...' ></Textarea>
        <Btn>SEND TO HYDRA</Btn>
      </Join>
    </Contant>
   </Container>
  )
}
