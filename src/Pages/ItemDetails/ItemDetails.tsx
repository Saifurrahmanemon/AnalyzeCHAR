import Dropzone from "./Dropzone/Dropzone";
import { ItemDetailasContainer } from "./ItemDetails.styles";
import ItemInfo from "./ItemInfo/ItemInfo";

export default function ItemDetails() {
   return (
      <ItemDetailasContainer>
         <div className="dropzone-container">
            <Dropzone />
         </div>
         <div className="item-container">
            <ItemInfo />
         </div>
      </ItemDetailasContainer>
   );
}
