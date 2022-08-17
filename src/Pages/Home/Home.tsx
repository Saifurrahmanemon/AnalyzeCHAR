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
   return (
      <>
         <HomeContainer>
            <BannerTextContainer>
               <Title>Welcome ConvertCHAR</Title>
               <Text>
                  This is a web application that allows you extract a wide variety of visual
                  features from your images. <br /> It can determine whether an image contains adult
                  content, possible tags for an image and <br /> more amazingly extract printed or
                  handwritten text from images.
               </Text>
               <ButtonContainer>
                  <SourceCodeButton>Source Code</SourceCodeButton>
                  <ConvertButton onClick={handleConvertOnclick}>Convert</ConvertButton>
               </ButtonContainer>
            </BannerTextContainer>
            <div>
               <Image src={HomeBanner} alt='' />
            </div>
         </HomeContainer>
         <Footer />
      </>
   );
}

export default Home;
