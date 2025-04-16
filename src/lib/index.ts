import type { Component, Snippet } from 'svelte';

// Reexport your entry components here
export * from './components/index.js';

export function isSnippet(value: Snippet | Component): value is Snippet {
	return '$$self' in value && 'ctx' in value;
}
export function isComponent(value: Snippet | Component): value is Component {
	return '$$self' in value && '$$' in value;
}
