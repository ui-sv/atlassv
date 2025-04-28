import type { Snippet } from 'svelte';

export { default as AppShell } from './shell.svelte';

export type AppShellHeaderProps = {
	toggle_button: Snippet;
};

export type AppShellSideLink = {
	label: string;
	href?: string;
	target?: string;
	group?: string;
	tag?: string;
	tag_color?: string;
	children?: AppShellSideLink[];
};

export type AppShellProps = {
	children?: Snippet;
	aside?: Snippet;
	navigation?: Snippet;
	header?: Snippet<[AppShellHeaderProps]>;
	home_actions?: Snippet<[]>;
	common_actions?: Snippet<[]>;
	users_actions?: Snippet<[]>;
	sidelinks?: AppShellSideLink[];
};
