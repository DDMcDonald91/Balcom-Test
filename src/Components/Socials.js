import { Nav ,Image, Container } from 'react-bootstrap'
import facebook from './/Icons/facebook.svg';
import instagram from './/Icons/instagram.svg'


export default function Socials() {
  return (
    <Container style={{margin: '4rem auto'}}>
    <Nav className="justify-content-center" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/home"><Image src={facebook} style={{marginRight: '15px'}} /><Image src={instagram} style={{marginLeft: '15px'}} /></Nav.Link>
    </Nav.Item>
  </Nav>
  </Container>
  )
}
