import './App.css';
import Carousel from './components/Carousel/Carousel';
import ImageOne from './assets/images/image1.svg';
import ImageTwo from './assets/images/image2.svg';
import ImageThree from './assets/images/image3.svg';
import ImageFour from './assets/images/image4.svg';
import CardItem from './components/CardItem/CardItem';

function App() {
  const cardItems = [
    {
      image: ImageOne,
      title: 'What is Latana?',
      subtitles: ['How does Latana work?', 'Why choose Latana?', 'What does Latana cost?'],
      action: () => {
        console.log('GO TO LINK');
      },
    },
    {
      image: ImageTwo,
      title: 'Getting Started',
      subtitles: ['What is MRP?', 'How do you gather data?', 'What is a margin of error?'],
      action: () => {
        console.log('GO TO LINK');
      },
    },
    {
      image: ImageThree,
      title: 'Using Latana?',
      subtitles: ['How to use Latana?', 'What is the Brand Funnel?', 'How to interpret Brand Tracking Data?'],
      action: () => {
        console.log('GO TO LINK');
      },
    },
    {
      image: ImageFour,
      title: 'Data Collection & Methodology',
      subtitles: ['What is MRP?', 'How do you gather data?', 'What is a margin of error?'],
      action: () => {
        console.log('GO TO LINK');
      },
    },

    {
      image: ImageOne,
      title: 'What is Latana?',
      subtitles: ['How does Latana work?', 'Why choose Latana?', 'What does Latana cost?'],
      action: () => {
        console.log('GO TO LINK');
      },
    },
    {
      image: ImageTwo,
      title: 'Getting Started',
      subtitles: ['What is MRP?', 'How do you gather data?', 'What is a margin of error?'],
      action: () => {
        console.log('GO TO LINK');
      },
    },
    {
      image: ImageThree,
      title: 'Using Latana?',
      subtitles: ['How to use Latana?', 'What is the Brand Funnel?', 'How to interpret Brand Tracking Data?'],
      action: () => {
        console.log('GO TO LINK');
      },
    },
    {
      image: ImageFour,
      title: 'Data Collection & Methodology',
      subtitles: ['What is MRP?', 'How do you gather data?', 'What is a margin of error?'],
      action: () => {
        console.log('GO TO LINK');
      },
    },
  ];

  return (
    <div className='app'>
      <div className='header-wrapper'>
        <h1 className='header-title'>Latana Knowledge Center</h1>
        <h2 className='header-subtitle'>
          Everything you need to know about the best brand tracking solution in the world.
        </h2>
      </div>
      <Carousel itemSize={{ small: { w: 248, h: 389 }, large: { w: 384, h: 479 } }}>
        {cardItems.map((cardItem, idx) => {
          return <CardItem key={idx} card={cardItem} />;
        })}
      </Carousel>
    </div>
  );
}

export default App;
