import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({ fallback: '404.html' }),
		paths: {
			// GitHub Pages: BASE_PATH=/repo-name. Must start with /, must not end with /.
			base: (() => {
				if (process.argv.includes('dev')) return ''
				const b = String(process.env.BASE_PATH ?? '').trim().replace(/\/+$/, '')
				return b && b.startsWith('/') ? b : ''
			})(),
		},
	},
};

export default config;