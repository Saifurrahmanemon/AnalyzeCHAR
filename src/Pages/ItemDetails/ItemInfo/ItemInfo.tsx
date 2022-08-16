import { Loading } from '../../../components/Loading'
import { randomBadgeColor } from '../../../theme/utils'
import {
   AnalyzeText,
   CategoriesContainer,
   Container,
   ItemInfoContainer,
   Span,
   SpanAdult,
   StyledAdultContainer,
   TagContainer,
   Text,
   TextContainer,
   Title,
} from './ItemInfo.styles'

type ItemInfoProps = {
   item: any
   processing: boolean
}

function ItemInfo({ item, processing }: ItemInfoProps) {
   const Adult = (
      <StyledAdultContainer>
         <SpanAdult>Racy: {item?.adult.isRacyContent ? 'Yes' : 'No'}</SpanAdult>
         <SpanAdult>Gory: {item?.adult.isGoryContent ? 'Yes' : 'No'}</SpanAdult>
         <SpanAdult>Adult: {item?.adult.isAdultContent ? 'Yes' : 'No'}</SpanAdult>
      </StyledAdultContainer>
   )

   const Tags = (
      <Container>
         <Title>Tags : </Title>
         <CategoriesContainer>
            {item?.tags.map((tag: { name: string; confidence: number }) => {
               // not using confidence i.e percentage for now
               const colors = randomBadgeColor()
               return (
                  <TagContainer key={tag.confidence}>
                     <Span colors={colors}> {tag.name} </Span>
                  </TagContainer>
               )
            })}
         </CategoriesContainer>
      </Container>
   )

   const Description = processing ? (
      <Loading />
   ) : item !== null ? (
      <>
         <div>{Adult}</div>
         <div>{Tags}</div>
         <TextContainer>
            <Text>{item?.allText}</Text>
         </TextContainer>
      </>
   ) : (
      <AnalyzeText>Please Press Analyze after inserting image</AnalyzeText>
   )

   return <ItemInfoContainer>{Description}</ItemInfoContainer>
}

export default ItemInfo
