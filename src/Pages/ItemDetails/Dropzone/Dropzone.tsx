import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { DropzoneContainer } from "./Dropzone.styles";

function Dropzone() {
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const onDrop = useCallback((acceptedFiles: any) => {
      // Do something with the files
      console.log(acceptedFiles);
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
         {isDragActive ? (
            <p>Drop the files here ...</p>
         ) : (
            <p>Drag and drop some files here, or click to select files</p>
         )}
      </DropzoneContainer>
   );
}

export default Dropzone;
