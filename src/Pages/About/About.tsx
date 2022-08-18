import { AboutContainer } from './About.styles';

function About() {
   return (
      <AboutContainer>
         <h1>About</h1>
         <p data-testid='about-text'>
            AnalyzeCHAR is a web application that allows users to extract a wide variety of visual
            features from desired images. It can determine whether an image contains adult content,
            possible tags for an image and more amazingly extract printed or handwritten text from
            images. AnalyzeCHAR uses Azure Computer Vision to analyze images. The app is still in
            development mode and you are using the Beta version.
         </p>
      </AboutContainer>
   );
}

export default About;
