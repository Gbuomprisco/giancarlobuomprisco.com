const BANNERS_ASSETS_PATH = `/assets/images/posts`;
const FS_BANNERS_ASSETS_PATH = `/public${BANNERS_ASSETS_PATH}`;

export async function convertImageToBase64(filePath: string) {
  const fullPath = await getPath(filePath, '/public');

  try {
    const { default: sharp } = await import('sharp');
    const metadata = await sharp(fullPath);

    return metadata.png().toBuffer();
  } catch (e) {
    console.error(e);
  }
}

export async function assertBannerDoesNotExist(outputFile: string) {
  const { access } = await import('fs/promises');
  const path = await getPath(outputFile);

  return await access(path);
}

export function getBannerFromSlug(slug: string, assetsPath = BANNERS_ASSETS_PATH, format = 'webp') {
  return `${assetsPath}/${slug}.${format}`;
}

export async function createBannerImage(svg: string, outputFile: string) {
  const fullPath = await getPath(outputFile);

  try {
    await assertBannerDoesNotExist(fullPath);
  } catch (e) {
    const data = await getImageFromSvg(svg);

    if (data) {
      const output = await data.toFile(fullPath);

      console.log(`Banner successfully generated: Size: ${output.size}`);
    }
  }
}

async function getImageFromSvg(svgString: string) {
  try {
    const { default: sharp } = await import('sharp');
    const metadata = await sharp(Buffer.from(svgString));

    return metadata.webp();
  } catch (e) {
    console.error(e);
  }
}

async function getPath(fileName: string, path = FS_BANNERS_ASSETS_PATH) {
  const { join } = await import('path');

  return join(process.cwd(), path, fileName);
}
