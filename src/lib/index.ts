import type { Component, Snippet } from 'svelte';

// Reexport your entry components here
export * from './components/index.js';

export const isSnippet = (value: Snippet | Component): value is Snippet => '$$render' in value;
export const isComponent = (value: Snippet | Component): value is Component => !isSnippet(value);
