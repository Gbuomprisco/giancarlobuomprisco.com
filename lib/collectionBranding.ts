interface Branding {
  colorPrimary: string;
  colorPrimaryLight: string;
}

const brandings: Record<string, Branding> = {
  typescript: {
    colorPrimary: "#358ef1",
    colorPrimaryLight: "#358ef175",
  },
  rxjs: {
    colorPrimary: "#d81b60",
    colorPrimaryLight: "#d81b6085",
  },
  angular: {
    colorPrimary: "#dd0031",
    colorPrimaryLight: "#dd00316e",
  },
  emoji: {
    colorPrimary: "#ffb300",
    colorPrimaryLight: "#ffb30075",
  },
};

export function getBrandingByCollection(collection: string) {
  return brandings[collection] || brandings.emoji;
}
