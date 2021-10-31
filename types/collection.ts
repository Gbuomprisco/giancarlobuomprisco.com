interface WithEmoji {
  emoji?: string;
}

interface WithLogo {
  logo?: string;
}

interface WithBranding {
  primaryColor: string;
  primaryColorLight: string;
  contrastColor: string;
}

interface Collection extends WithEmoji, WithLogo, WithBranding {
  name: string;
}

export default Collection;
