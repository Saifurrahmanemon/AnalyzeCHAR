import { useState } from 'react';
import { computerVision } from '../../azure-cognitiveservices-computervision';
import { Loading } from '../../components/Loading';
import Dropzone from './Dropzone/Dropzone';
import { Button, FileUploadContainer, ItemDetailasContainer } from './ItemDetails.styles';
import ItemInfo from './ItemInfo/ItemInfo';

export default function ItemDetails() {
   const [fileSelected, setFileSelected] = useState<null | string>(null);
   const [analysis, setAnalysis] = useState<null | string>(null);
   const [processing, setProcessing] = useState<boolean>(false);
   const [fileTitle, setFileTitle] = useState<string>('');

   const getSelectedFile = (file: string, title: string) => {
      setFileSelected(file);
      setFileTitle(title);
   };

   const handleOnClick = () => {
      setProcessing(true);
      setAnalysis(null);

      computerVision(fileSelected || null)
         .then((item) => {
            // reset state/form
            console.log(item);
            setAnalysis(item);
            setFileSelected('');
            setProcessing(false);
         })
         .catch((err) => {
            console.log(err);
            setProcessing(false);
         });
   };

   const Disabled = processing || fileSelected === null;

   return (
      <ItemDetailasContainer>
         <FileUploadContainer>
            <Dropzone getSelectedFile={getSelectedFile} />
            <Button disabled={Disabled} onClick={handleOnClick}>
               {processing ? <Loading /> : 'Analyze'}
            </Button>
         </FileUploadContainer>
         <div className='item-container'>
            <ItemInfo title={fileTitle} processing={processing} item={analysis} />
         </div>
      </ItemDetailasContainer>
   );
}
