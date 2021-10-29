interface Branding {
  colorPrimary: string;
  colorPrimaryLight: string;
  logo?: string;
}

const logosPath = `/assets/images/collections/`;
const makeLogoPath = (fileName: string) => [logosPath, fileName].join("");

const brandings: Record<string, Branding> = {
  typescript: {
    colorPrimary: "#358ef1",
    colorPrimaryLight: "#358ef175",
    logo: makeLogoPath(`typescript.png`),
  },
  rxjs: {
    colorPrimary: "#d81b60",
    colorPrimaryLight: "#d81b6085",
    logo: makeLogoPath(`rxjs.png`),
  },
  angular: {
    colorPrimary: "#e23236",
    colorPrimaryLight: "#dd00316e",
    logo: makeLogoPath(`angular.png`),
  },
  firebase: {
    colorPrimary: "#ffcb2c",
    colorPrimaryLight: "#ffcb2c8f",
    logo: makeLogoPath(`firebase.webp`),
  },
  emoji: {
    colorPrimary: "#ffb300",
    colorPrimaryLight: "#ffb30075",
  },
};

export function getBrandingByCollection(collection: string) {
  return brandings[collection] || brandings.emoji;
}
