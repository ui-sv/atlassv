import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import unocss from 'unocss/vite';
import {
	presetWind3,
	transformerDirectives,
	transformerCompileClass,
	transformerVariantGroup
} from 'unocss';

export default defineConfig({
	plugins: [
		sveltekit(),
		unocss({
			presets: [presetWind3()],
			transformers: [transformerDirectives(), transformerCompileClass(), transformerVariantGroup()]
		})
	]
});
