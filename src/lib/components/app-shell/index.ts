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
	home_actions?: Snippet<[{ toggle_button: Snippet }]>;
	common_actions?: Snippet<[]>;
	users_actions?: Snippet<[]>;
	panel?: Snippet<[]>;
	sidelinks?: AppShellSideLink[];
};
