import { Container, Row, Col, Image } from 'react-bootstrap';

export default function InfoPanelOne(props) {
  return (
    <Container>
        <Row>
            <Col className='spaced' md={6} lg={3} style={{padding: '0px'}}><Image src={props.imageOne} className='img-fluid' /></Col>
            <Col className='spaced' md={6} lg={3} className='d-flex align-items-center justify-content-center' style={{padding: '0px'}}>
              <Container>
                <h4 className='title'>{props.titleOne}</h4>
                <p>{props.textOne}</p>
              </Container>
            </Col>
            <Col className='spaced' md={6} lg={3}  style={{padding: '0px'}}><img src={props.imageTwo} className='img-fluid' /></Col>
            <Col className='spaced' md={6} lg={3} className='d-flex align-items-center justify-content-center' style={{padding: '0px'}}>
              <Container>
                <h4 className='title'>{props.titleTwo}</h4>
                <p>{props.textTwo}</p>
              </Container>
            </Col>
        </Row>
    </Container>
  )
}
