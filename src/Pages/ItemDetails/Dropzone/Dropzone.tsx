import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { DropzoneContainer, Image } from "./Dropzone.styles";

function Dropzone() {
   const [paths, setPaths] = useState([]);
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const onDrop = useCallback(
      (acceptedFiles: any) => {
         setPaths(
            acceptedFiles.map((file: Blob | MediaSource) =>
               URL.createObjectURL(file)
            )
         );
         // Do something with the files
         console.log(acceptedFiles);
      },
      [setPaths]
   );
   console.log(paths);
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
