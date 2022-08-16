import { useState } from "react";
import { computerVision } from "../../azure-cognitiveservices-computervision";
import Dropzone from "./Dropzone/Dropzone";
import {
   Button,
   FileUploadContainer,
   ItemDetailasContainer,
} from "./ItemDetails.styles";
import ItemInfo from "./ItemInfo/ItemInfo";

export default function ItemDetails() {
   const [fileSelected, setFileSelected] = useState<null | string>(null);
   const [analysis, setAnalysis] = useState<null | string>(null);
   const [processing, setProcessing] = useState<boolean>(false);

   const getSelectedFile = (file: string) => {
      setFileSelected(file);
   };

   const handleOnClick = () => {
      setProcessing(true);
      setAnalysis(null);

      computerVision(fileSelected || null)
         .then((item) => {
            // reset state/form
            setAnalysis(item);
            setFileSelected("");
            setProcessing(false);
         })
         .catch((err) => console.log(err));
   };

   console.log(fileSelected);

   return (
      <ItemDetailasContainer>
         <FileUploadContainer>
            <Dropzone getSelectedFile={getSelectedFile} />
            <Button disabled={processing} onClick={handleOnClick}>
               Analyze
            </Button>
         </FileUploadContainer>
         <div className="item-container">
            <ItemInfo item={analysis} />
         </div>
      </ItemDetailasContainer>
   );
}
