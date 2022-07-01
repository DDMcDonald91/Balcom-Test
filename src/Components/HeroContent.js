import { Container, Row, Col } from 'react-bootstrap';

export default function HeroContent() {
  return (
    <Container id='hero-content'>
        <Container>
            <h1 className='title'>Drink It In.</h1>
        <Col>
            <p>At The Balcom Agency, we pair fine wines with unbeatable views – all in a natural setting where you can slow down, let go and just breathe. </p>
        </Col>
        <Row>
            <Col className='uppercased' md={4}><p>A variety of wines from Texas and beyond</p></Col>
            <Col className='uppercased' md={4}><p style={{border: '.5px solid black', borderTop: 'none', borderBottom: 'none'}}>Live music</p></Col>
            <Col className='uppercased' md={4}><p>Charcuterie, wood-fired pizza, BARBECUE and more</p></Col>
        </Row>
        <Col><p>No registration required – just come on in! Questions? Give us a call! </p></Col>
        <Col><strong style={{fontSize: '1.5rem'}}>999.998.2899</strong></Col>
        <br/>
        </Container>
    </Container>
  )
}
