import axios from "axios";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { DropzoneContainer, Image } from "./Dropzone.styles";

const url = `https://api.imgbb.com/1/upload?expiration=600&key=${process.env.REACT_APP_IMGBB_API_KEY}`;

type DropzoneProps = {
   getSelectedFile: (file: string) => void;
};

function Dropzone({ getSelectedFile }: DropzoneProps) {
   const [paths, setPaths] = useState<string[]>([]);

   const onDrop = useCallback(async (acceptedFiles: (string | Blob)[]) => {
      const formData = new FormData();
      formData.append("image", acceptedFiles[0]); // has to be named 'image'!
      const res = await axios.post(url, formData);
      const imageUrl = res.data.data.url;

      setPaths([imageUrl]);
      getSelectedFile(imageUrl);
   }, []);

   const {
      getRootProps,
      getInputProps,
      isFocused,
      isDragAccept,
      isDragReject,
      isDragActive,
   } = useDropzone({
      onDrop,
      accept: {
         "image/png": [".png", ".jpeg", ".bmp", ".jpg"],
         "file/pdf": [".pdf"],
      },
   });

   return (
      <DropzoneContainer
         {...getRootProps({ isFocused, isDragAccept, isDragReject })}
      >
         <input {...getInputProps()} />
         {paths.length > 0 ? (
            paths.map((path: string) => <Image key={path} src={path} />)
         ) : isDragActive ? (
            <p>Drop files here...</p>
         ) : (
            <p>Drag drop some files here, or click to select files</p>
         )}
      </DropzoneContainer>
   );
}

export default Dropzone;
