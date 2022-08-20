import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { URL } from '../../api/Api';
import axiosPrivate from '../../api/AxiosPrivate';
import { computerVision } from '../../azure-cognitiveservices-computervision';
import { Loading } from '../../components/Loading';
import auth from '../../firebase.init';
import Dropzone from './Dropzone/Dropzone';
import {
   Button,
   ConvertedText,
   FileUploadContainer,
   ItemDetailasContainer,
} from './ItemDetails.styles';
import ItemInfo from './ItemInfo/ItemInfo';

function ItemDetails() {
   const [fileSelected, setFileSelected] = useState<null | string>(null);
   const [analysis, setAnalysis] = useState<null | string>(null);
   const [processing, setProcessing] = useState(false);
   const [fileTitle, setFileTitle] = useState('');
   const [user, loading] = useAuthState(auth);

   const { data, isLoading, refetch } = useQuery(
      ['converts', user?.email],
      async () => await axiosPrivate.get(`${URL}/converts/${user?.email}`),
   );

   if (isLoading || loading) return <Loading />;

   const converted = data?.data?.result?.convert || null;

   const getSelectedFile = (file: string, title: string) => {
      setFileSelected(file);
      setFileTitle(title);
   };

   const handleOnClick = () => {
      setProcessing(true);
      setAnalysis(null);

      computerVision(fileSelected || null)
         .then(async (item) => {
            const value = converted === null ? 1 : converted + 1;

            const converts = {
               value: value,
            };
            const res = await axiosPrivate.put(`${URL}/converts/${user?.email}`, {
               converts,
            });

            // reset state/form
            setAnalysis(item);
            setFileSelected('');
            setProcessing(false);
            refetch();
         })
         .catch((err) => {
            console.log(err);
            setProcessing(false);
         });
   };

   const Disabled = processing || fileSelected === null || converted >= 5;

   return (
      <ItemDetailasContainer>
         <FileUploadContainer>
            <ConvertedText>Converted Files: {converted || 0}/5</ConvertedText>
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

export default ItemDetails;
