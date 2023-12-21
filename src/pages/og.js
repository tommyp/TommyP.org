export const prerender = false;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { html as toReactNode } from 'satori-html';
import { Resvg } from '@resvg/resvg-js';

import Inter from '../fonts/InterDisplay-Bold.otf';

import OpenGraph from '../components/OpenGraph.svelte';
import satori from 'satori';

const height = 630;
const width = 1200;

export const GET = async ({ url }) => {
	const heading = url.searchParams.get('heading') ?? undefined;
	const bgColor = url.searchParams.get('bgColor') ?? undefined;
	const textColor = url.searchParams.get('textColor') ?? undefined;

	const result = OpenGraph.render({ heading, bgColor, textColor });

	const element = toReactNode(`<style>${result.css.code}</style>${result.html}`);

	const svg = await satori(element, {
		fonts: [
			{
				name: 'Inter',
				data: Buffer.from(Inter),
				style: 'normal'
			}
		],
		height,
		width
	});

	const resvg = new Resvg(svg, {
		fitTo: {
			mode: 'width',
			value: width
		}
	});

	const image = resvg.render();

	return new Response(image.asPng(), {
		headers: {
			'content-type': 'image/png'
		}
	});
};
