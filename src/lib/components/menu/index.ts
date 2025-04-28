import type { Snippet } from 'svelte';
import type { ButtonProps } from '../button/index.js';
export { default as Menu } from './menu.svelte';
export { default as MenuSection } from './section.svelte';
export { default as MenuItem } from './item.svelte';

export type MenuProps = {
	children?: Snippet;
	/**
	 * Configure the density of the menu group content.
	 * @default 'default'
	 */
	spacing?: 'default' | 'compact';
	/**
	 * Use this to constrain the menu group's minimum height to a specific value.
	 * @default 'default'
	 */
	minheight?: string | number;
	/**
	 * Use this to constrain the menu group's height to a specific value. This must be set if you want to have scrollable sections.
	 * @default 'default'
	 */
	maxheight?: string | number;
	/**
	 * Use this to constrain the menu group's minimum width to a specific value.
	 * @default 'default'
	 */
	minwidth?: string | number;
	/** this to constrain the menu group's maximum width to a specific value.
	 * Use this to constrain the menu group's maximum width to a specific value.
	 * @default 'default'
	 */
	maxwidth?: string | number;
};

export type MenuSectionProps = {
	children?: Snippet;
	title?: string;
	/**
	 * Use this to render a border at the top of the section.
	 * @default false
	 */
	seperator?: boolean;
};

export type MenuItemProps = ButtonProps & {
	description?: string;
};
