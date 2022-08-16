import { randomBadgeColor } from "../../../theme/utils";
import {
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
} from "./ItemInfo.styles";

type ItemInfoProps = {
   item: any;
};

function ItemInfo({ item }: ItemInfoProps) {
   const Adult = (
      <StyledAdultContainer>
         <SpanAdult>Racy: {item?.adult.isRacyContent ? "Yes" : "No"}</SpanAdult>
         <SpanAdult>Gory: {item?.adult.isGoryContent ? "Yes" : "No"}</SpanAdult>
         <SpanAdult>
            Adult: {item?.adult.isAdultContent ? "Yes" : "No"}
         </SpanAdult>
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

   return (
      <ItemInfoContainer>
         <div>{Adult}</div>
         <div>{Tags}</div>
         <TextContainer>
            <Text>{item?.allText}</Text>
         </TextContainer>
      </ItemInfoContainer>
   );
}

export default ItemInfo;
