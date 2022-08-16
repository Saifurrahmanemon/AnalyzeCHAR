import axios from 'axios';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Loading } from '../../../components/Loading';

import { DropzoneContainer, Image } from './Dropzone.styles';

const url = `https://api.imgbb.com/1/upload?expiration=600&key=${process.env.REACT_APP_IMGBB_API_KEY}`;

type DropzoneProps = {
   getSelectedFile: (file: string, title: string) => void;
};

function Dropzone({ getSelectedFile }: DropzoneProps) {
   const [paths, setPaths] = useState<string[]>([]);
   const [loading, setLoading] = useState<boolean>(false);

   const onDrop = useCallback(async (acceptedFiles: (string | Blob)[]) => {
      setLoading(true);
      const formData = new FormData();
      formData.append('image', acceptedFiles[0]); // has to be named 'image'!
      const res = await axios.post(url, formData);
      const imageUrl = res.data.data.url;
      const title = res.data.data.title;

      setPaths([imageUrl]);
      getSelectedFile(imageUrl, title);
      setLoading(false);
   }, []);

   const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject, isDragActive } =
      useDropzone({
         onDrop,
         accept: {
            'image/png': ['.png', '.jpeg', '.bmp', '.jpg'],
            'file/pdf': ['.pdf'],
         },
      });

   const Elements = loading ? (
      <Loading />
   ) : paths.length > 0 ? (
      paths.map((path: string) => <Image key={path} src={path} />)
   ) : isDragActive ? (
      <p>Drop files here...</p>
   ) : (
      <p>Drag drop some files here, or click to select files</p>
   );

   return (
      <DropzoneContainer {...getRootProps({ isFocused, isDragAccept, isDragReject })}>
         <input {...getInputProps()} />
         {Elements}
      </DropzoneContainer>
   );
}

export default Dropzone;
