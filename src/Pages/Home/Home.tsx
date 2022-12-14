import { useNavigate } from 'react-router-dom';
import HomeBanner from '../../assets/home-banner.svg';
import Footer from '../../components/Footer/Footer';
import {
   BannerTextContainer,
   ButtonContainer,
   ConvertButton,
   HomeContainer,
   Image,
   SourceCodeButton,
   Text,
   Title,
} from './Home.styles';
function Home() {
   const navigate = useNavigate();

   const handleConvertOnclick = () => {
      navigate('/convert');
   };

   const github = 'https://github.com/Saifurrahmanemon/image-analytics';
   return (
      <>
         <HomeContainer>
            <BannerTextContainer>
               <Title data-testid='home-title'>Welcome to AnalyzeCHAR</Title>
               <Text data-testid='home-content'>
                  This is a web application that allows you extract a wide variety of visual
                  features from your images. <br /> It can determine whether an image contains adult
                  content, possible tags for an image and <br /> more amazingly extract printed or
                  handwritten text from images.
               </Text>
               <ButtonContainer>
                  <SourceCodeButton href={github} target='_blank'>
                     Source Code
                  </SourceCodeButton>
                  <ConvertButton onClick={handleConvertOnclick}>Convert</ConvertButton>
               </ButtonContainer>
            </BannerTextContainer>
            <div>
               <Image src={HomeBanner} alt='home-banner' />
            </div>
         </HomeContainer>
         <Footer />
      </>
   );
}

export default Home;
