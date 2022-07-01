import { Nav, Image } from 'react-bootstrap/';
import balcom_logo from './/Icons/balcom_logo.svg'

export default function Navigation() {
  return (
    <Nav className="justify-content-center" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/home" style={{margin: '1.5rem auto'}}><Image src={balcom_logo} /></Nav.Link>
    </Nav.Item>
  </Nav>
  )
}
