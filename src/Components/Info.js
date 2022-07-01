import { Container } from 'react-bootstrap';
import InfoPanelOne from './/InfoPanelOne.js';
import hero from './/Images/hero.jpg'
import group2 from './/Images/group2.jpg'
import group4 from './/Images/group4.jpg'
import group5 from './/Images/group5.jpg'
import group8 from './/Images/group8.jpg'
import group9 from './/Images/group9.jpg'
import group10 from './/Images/group10.jpg'
import InfoPanelTwo from './InfoPanelTwo.js';

export default function Info() {
  return (
    <Container id='info-section'>
        <h1 className='title' style={{margin: '3rem auto'}}>Vinos and Views</h1>
        <Container>
            <InfoPanelOne 
            imageOne={group9}
            titleOne="The Edge" 
            textOne="The big day. The girls’ night. The long weekend. You’re on the precipice of possibility at The Edge, our signature event and wine tasting space."
            imageTwo={group2}
            titleTwo="The Cellar"
            textTwo="Take things to the next level. Get exclusive access, curated selections, members-only discounts and other benefits when you join our wine club."
            />
            <InfoPanelTwo
             imageOne={group8}
             titleOne="The Cottages" 
             textOne="Where nature meets nurture. Our tiny homes embrace simplicity, giving you the comforts of home just steps from the great outdoors."
             imageTwo={group4}
             titleTwo="The Tower"
             textTwo="Views. For. Miles. When complete, this five-story event space will literally transcend the usual Hill Country haunts."
            />
            <InfoPanelOne 
            imageOne={group5}
            titleOne="The Market" 
            textOne="When memories aren’t enough, there’s The Market. This epicurean boutique will occupy the first floor of The Tower and feature fine wine, gourmet food and other specialty items."
            imageTwo={group10}
            titleTwo="The Store"
            textTwo="Basics, staples, necessities. Whatever you call them, this is where you’ll be able to get them."
            />
        </Container>
    </Container>
  )
}
