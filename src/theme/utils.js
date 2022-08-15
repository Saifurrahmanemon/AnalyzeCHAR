export const randomBadgeColor = () => {
   const colors = [
      "#AF7AB3",
      "#7858A6",
      "#9C9EFE",
      "#ECCCB2",
      "#A66CFF",
      "#509AAF",
      "#7A4495",
      "#764AF1",
   ];
   return colors[Math.floor(Math.random() * colors.length)];
};
