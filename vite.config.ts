import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import unocss from 'unocss/vite';
import {
	presetWind3,
	transformerDirectives,
	transformerCompileClass,
	transformerVariantGroup,
	presetWebFonts
} from 'unocss';

export default defineConfig({
	plugins: [
		sveltekit(),
		unocss({
			presets: [
				presetWind3({ dark: 'media' }),
				presetWebFonts({
					provider: 'fontshare',
					fonts: {
						sans: ['Inter', 'sans-serif'],
						mono: ['JetBrains Mono', 'monospace']
					}
				})
			],
			transformers: [transformerDirectives(), transformerCompileClass(), transformerVariantGroup()]
		})
	]
});
