import { type ButtonRootProps } from 'bits-ui';
import type { Component, Snippet } from 'svelte';

export { default as Button } from './button.svelte';

export type ButtonAppearance =
	| 'default'
	| 'subtle'
	| 'danger'
	| 'primary'
	| 'warning'
	| 'discovery';
export type ButtonShape = 'default' | 'circle';

export type ButtonProps = ButtonRootProps & {
	/**
	 * The button style variation.
	 * @default 'default'
	 */
	appearance?: ButtonAppearance;
	/**
	 * Controls the amount of padding in the button.
	 * @default false
	 */
	compact?: boolean;
	/**
	 * Set the button to autofocus on mount.
	 * @default false
	 */
	autofocus?: boolean;
	/**
	 * Conditionally show a spinner over the top of a button.
	 * @default false
	 */
	loading?: boolean;
	/**
	 * Places the icon after the button's text.
	 * @default false
	 */
	iconafter?: boolean;
	/**
	 * Places an icon within the button.
	 */
	icon?: Snippet | Component;
	/**
	 * Disable the button's text.
	 * @default false
	 */
	icononly?: boolean;
	/**
	 * Option to fit button width to its parent width.
	 * @default false
	 */
	block?: boolean;
	/**
	 * Set the shape of the icon, defaults to square with rounded corners.
	 * @default 'default'
	 */
	shape?: ButtonShape;
	/**
	 * Set the shape of the icon, defaults to square with rounded corners.
	 */
	href?: string;
};
