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

const size = {
   mobileS: "320px",
   mobileM: "375px",
   mobileL: "425px",
   tabletS: "568px",
   tablet: "768px",
   tabletL: "890px",
   laptop: "1024px",
   laptopL: "1440px",
   desktop: "2560px",
};

export const device = {
   mobileS: `(min-width: ${size.mobileS})`,
   mobileM: `(min-width: ${size.mobileM})`,
   mobileL: `(min-width: ${size.mobileL})`,
   tabletS: `(min-width: ${size.tabletS})`,
   tablet: `(min-width: ${size.tablet})`,
   tabletL: `(min-width: ${size.tabletL})`,
   laptop: `(min-width: ${size.laptop})`,
   laptopL: `(min-width: ${size.laptopL})`,
   desktop: `(min-width: ${size.desktop})`,
};
