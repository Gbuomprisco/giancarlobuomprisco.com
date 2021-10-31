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
    logo: makeLogoPath(`rxjs.webp`),
  },
  angular: {
    colorPrimary: "#e23236",
    colorPrimaryLight: "#dd00316e",
    logo: makeLogoPath(`angular.webp`),
  },
  firebase: {
    colorPrimary: "#ffcb2c",
    colorPrimaryLight: "#ffcb2c8f",
    logo: makeLogoPath(`firebase.webp`),
  },
  stencil: {
    colorPrimary: "#16161d",
    colorPrimaryLight: "#0000009e",
    logo: makeLogoPath(`stencil.svg`),
  },
  javascript: {
    colorPrimary: "#f7e017",
    colorPrimaryLight: "#f7e0178c",
    logo: makeLogoPath(`javascript.webp`),
  },
  emoji: {
    colorPrimary: "#ffb300",
    colorPrimaryLight: "#ffb30075",
  },
};

export function getBrandingByCollection(collection: string) {
  return brandings[collection] || brandings.emoji;
}
