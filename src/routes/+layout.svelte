<script lang="ts">
	import { AppShell, type AppShellSideLink } from '$lib/index.js';
	import '@unocss/reset/tailwind.css';
	import 'virtual:uno.css';

	const { children } = $props();

	const side_links: AppShellSideLink[] = [
		{
			href: '/',
			label: 'Home'
		},
		{
			href: '/getting-started',
			label: 'Getting Started'
		},
		{
			href: '/components',
			label: 'Components',
			children: [
				{
					href: '/components/button',
					label: 'Button',
					group: 'Forms and Input'
				}
			]
		}
	];
</script>

<AppShell sidelinks={side_links}>
	{#snippet home_actions({ toggle_button })}
		{@render toggle_button()}
	{/snippet}

	{#snippet aside()}{/snippet}

	{@render children?.()}
</AppShell>
