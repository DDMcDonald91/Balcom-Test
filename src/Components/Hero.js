import { Container } from 'react-bootstrap'
import HeroContent from './HeroContent.js';

export default function Hero() {
  return (
    <Container className='align-items-center justify-content-center d-flex' fluid id='hero'>
        <Container id='inner-hero' style={{bottom: '0', position: 'absolute'}}>
            <HeroContent />
        </Container>
    </Container>
  )
}
