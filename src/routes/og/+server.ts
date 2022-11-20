import { html as toReactNode } from 'satori-html';
import { Resvg } from '@resvg/resvg-js';
import DMSans from '$lib/fonts/DMSans-Bold.ttf';
import OpenGraph from '$lib/components/OpenGraph.svelte';
import satori from 'satori';
import type { RequestHandler } from './$types';
import type { SvelteComponent } from 'svelte';

const height = 630;
const width = 1200;

export const GET: RequestHandler = async ({ url }) => {
	const heading = url.searchParams.get('message') ?? undefined;
	const color = url.searchParams.get('message') ?? undefined;

	const result: SvelteComponent = OpenGraph.render({ heading, color });

	const element = toReactNode(`<style>${result.css.code}</style>${result.html}`);

	const svg = await satori(element, {
		fonts: [
			{
				name: 'DM Sans',
				data: Buffer.from(DMSans),
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
