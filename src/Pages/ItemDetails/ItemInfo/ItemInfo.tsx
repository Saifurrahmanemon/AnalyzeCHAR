import { ItemInfoContainer, Text, TextContainer } from "./ItemInfo.styles";

type ItemInfoProps = {
   item: any;
};

export default function ItemInfo({ item }: ItemInfoProps) {
   console.log(item);

   return (
      <ItemInfoContainer>
         <TextContainer>
            <Text>{item?.allText}</Text>
         </TextContainer>
      </ItemInfoContainer>
   );
}
