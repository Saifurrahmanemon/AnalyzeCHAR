import { useEffect, useState } from 'react';
import { Loading } from '../../../components/Loading';
import { randomBadgeColor } from '../../../theme/utils';
import {
   AnalyzeText,
   CategoriesContainer,
   Container,
   DocFileButton,
   ItemInfoContainer,
   Span,
   SpanAdult,
   StyledAdultContainer,
   TagContainer,
   Text,
   TextContainer,
   TextFileButton,
   Title,
} from './ItemInfo.styles';

type ItemInfoProps = {
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   item: any;
   processing: boolean;
   title: string;
};

function ItemInfo({ item, processing, title }: ItemInfoProps) {
   const [text, setText] = useState<string>('');

   useEffect(() => {
      setText(item?.allText);
   }, [item]);

   // for converting text(string) .txt file
   const handleDownloadFile = async (fileType: string) => {
      const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = `${title}.${fileType}`;
      link.click();
   };

   const Adult = (
      <StyledAdultContainer>
         <SpanAdult>Racy: {item?.adult.isRacyContent ? 'Yes' : 'No'}</SpanAdult>
         <SpanAdult>Gory: {item?.adult.isGoryContent ? 'Yes' : 'No'}</SpanAdult>
         <SpanAdult>Adult: {item?.adult.isAdultContent ? 'Yes' : 'No'}</SpanAdult>
      </StyledAdultContainer>
   );

   const Tags = (
      <Container>
         <Title>Tags : </Title>
         <CategoriesContainer>
            {item?.tags.map((tag: { name: string; confidence: number }) => {
               // not using confidence i.e percentage for now
               const colors = randomBadgeColor();
               return (
                  <TagContainer key={tag.confidence}>
                     <Span colors={colors}> {tag.name} </Span>
                  </TagContainer>
               );
            })}
         </CategoriesContainer>
      </Container>
   );

   const Description = processing ? (
      <Loading />
   ) : item !== null ? (
      <>
         <div>{Adult}</div>
         <div>{Tags}</div>
         <TextContainer>
            <Text>{item?.allText}</Text>
         </TextContainer>
         <div>
            <TextFileButton onClick={() => handleDownloadFile('txt')}> .txt file</TextFileButton>
            <DocFileButton onClick={() => handleDownloadFile('doc')}> .doc file</DocFileButton>
         </div>
      </>
   ) : (
      <AnalyzeText>Please Press Analyze after inserting image</AnalyzeText>
   );

   return <ItemInfoContainer>{Description}</ItemInfoContainer>;
}

export default ItemInfo;
