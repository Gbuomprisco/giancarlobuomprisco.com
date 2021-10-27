interface Branding {
  colorPrimary: string;
  colorPrimaryLight: string;
}

const brandings: Record<string, Branding> = {
  typescript: {
    colorPrimary: "#358ef1",
    colorPrimaryLight: "#358ef1ba",
  },
  rxjs: {
    colorPrimary: "#d81b60",
    colorPrimaryLight: "#d81b60c2",
  },
  angular: {
    colorPrimary: "#dd0031",
    colorPrimaryLight: "#dd0031b0",
  },
  emoji: {
    colorPrimary: "#ffb300",
    colorPrimaryLight: "#ffb30091",
  },
};

export function getBrandingByCollection(collection: string) {
  return brandings[collection] || brandings.emoji;
}
