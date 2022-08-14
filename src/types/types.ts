export type NavbarProps = {
   name: string;
};
export interface getDropzoneColorProps {
   isDragAccept: boolean;
   isDragReject: boolean;
   isFocused: boolean;
}


export interface DetailsProps {
   URL: string;
   allText: string;
   tags: { name: string; confidence: number }[];
   Adult: {
      adultScore: number;
      goreScore: number;
      isAdultContent: boolean;
      isGoryContent: boolean;
      isRacyContent: boolean;
      racyScore: number;
   };
}