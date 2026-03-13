import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import satori from 'satori';
import sharp from 'sharp';
import { SITE_TITLE } from '#consts.ts';

const fontRegular = await readFile(
  join(process.cwd(), 'src/assets/geist-mono-400.ttf'),
);
const fontBold = await readFile(
  join(process.cwd(), 'src/assets/geist-mono-700.ttf'),
);

export async function generateOgImage(title: string, date?: Date) {
  const formattedDate = date
    ? date.toLocaleDateString('en-us', { year: 'numeric', month: 'short', day: 'numeric' })
    : '';

  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          width: '100%',
          height: '100%',
          backgroundColor: '#111',
          padding: '60px',
          fontFamily: 'monospace',
        },
        children: [
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              },
              children: [
                {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: '52px',
                      fontWeight: 700,
                      color: '#ededed',
                      lineHeight: 1.2,
                      maxWidth: '900px',
                    },
                    children: title,
                  },
                },
                {
                  type: 'div',
                  props: {
                    style: {
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      fontSize: '24px',
                      color: '#888',
                    },
                    children: [
                      {
                        type: 'span',
                        props: { children: SITE_TITLE },
                      },
                      ...(formattedDate
                        ? [
                            { type: 'span', props: { children: '·' } },
                            { type: 'span', props: { children: formattedDate } },
                          ]
                        : []),
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'Geist Mono', data: fontRegular, weight: 400 as const, style: 'normal' as const },
        { name: 'Geist Mono', data: fontBold, weight: 700 as const, style: 'normal' as const },
      ],
    },
  );

  return sharp(Buffer.from(svg)).png().toBuffer();
}
