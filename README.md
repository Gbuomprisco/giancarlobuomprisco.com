# Eleventy Starter Boilerplate

🚀 Eleventy Starter Boilerplate is production-ready with SEO-friendly for quickly starting a blog. ⚡️ Built with [Eleventy](https://www.11ty.dev), [ESLint](https://eslint.org), [Prettier](https://prettier.io), [Webpack](https://webpack.js.org), [PostCSS](https://postcss.org), [Tailwind CSS](https://tailwindcss.com).

Clone this project and use it to create your own [Eleventy](https://www.11ty.dev) blog.

### Features

Production-ready in mind:

- 🔥 [11ty](https://www.11ty.dev) for Static Site Generator
- 🎨 Integrate with [Tailwind CSS](https://tailwindcss.com) (with [PurgeCSS](https://purgecss.com), remove unused CSS)
- 💅 [PostCSS](https://postcss.org) for processing [Tailwind CSS](https://tailwindcss.com)
- ⚡️ Lazy load images with [lazysizes](https://github.com/aFarkas/lazysizes)
- ✨ Compress image with [Imagemin](https://github.com/imagemin/imagemin)
- 🎈 Syntax Highlighting with [Prism.js](https://prismjs.com)
- ☕ Minify HTML & CSS with [HTMLMinifier](https://www.npmjs.com/package/html-minifier) and [cssnano](https://cssnano.co)
- ✏️ Linter with [ESLint](https://eslint.org)
- 🛠 Code Formatter with [Prettier](https://prettier.io)
- 💨 Live reload
- 📦 Module Bundler with [Webpack](https://webpack.js.org)
- 🦊 Templating with [EJS](https://ejs.co)
- 🤖 SEO metadata and [Open Graph](https://ogp.me/) tags
- ⚙️ [JSON-LD](https://developers.google.com/search/docs/guides/intro-structured-data) for richer indexing
- 🗺 Sitemap.xml
- ⚠️ 404 page
- 📖 Pagination
- ✅ Cache busting
- 💯 Maximize lighthouse score

### Philosophy

- Minimal code (HTML, CSS & JS). Add what you need
- SEO-friendly
- 🚀 Production-ready

### Requirements

- Node.js and npm

### Getting started

Run the following command on your local environment:

```
git clone --depth=1 https://github.com/ixartz/Eleventy-Starter-Boilerplate.git my-project-name
cd my-project-name
npm install
```

Then, you can run locally in development mode with live reload:

```
npm run dev
```

Open http://localhost:8080 with your favorite browser to see your blog.

### Project structure

```
.
├── public             # Static files
│   └── assets
│       └── images     # Images not needed by Webpack
└── src
    ├── _data          # Eleventy data folder
    ├── _includes
    │   └── layouts    # HTML layout files
    ├── assets         # Assets folder that needs to be processed by Webpack
    │   ├── images
    │   │   └── posts  # Images used in your blog posts (will be compressed by Webpack)
    │   └── styles     # Your blog CSS files
    └── posts          # Your blog posts
```

### Customization

You can easily configure Eleventy Starter Boilerplate. Please change the following file:

- `public/assets/images/logo.png`: your blog logo
- `public/apple-touch-icon.png`, `public/favicon.ico`, `public/favicon-16x16.png` and `public/favicon-32x32.png`: your blog favicon, you can generate from https://favicon.io/favicon-converter/
- `src/_data/site.json`: your blog configuration
- `src/_includes/layouts`: your blog HTML layout
- `src/assets/styles/main.css`: your blog CSS file using Tailwind CSS

### Deploy to production

You can see the results locally in production mode with:

```
npm run serve
```

The generated HTML and CSS files are minified. It will also removed unused CSS from [Tailwind CSS](https://tailwindcss.com).

You can create an optimized production build with:

```
npm run build
```

Now, your blog is ready to be deployed. All generated files are located at `_site` folder, which you can deploy with any hosting service.

### Deploy to Netlify

Clone this repository on own GitHub account and deploy to Netlify:

[![Netlify Deploy button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ixartz/Eleventy-Starter-Boilerplate)

### Contributions

Everyone is welcome to contribute to this project. Feel free to open an issue if you have question or found a bug.

### License

Licensed under the MIT License, Copyright © 2020

See [LICENSE](LICENSE) for more information.

---

Made with ♥ by [Ixartz](https://github.com/ixartz)
