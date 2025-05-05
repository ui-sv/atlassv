<script lang="ts">
	import { hover } from '@unsv/hooks/actions';
	import { Popover } from 'bits-ui';
	import { type AppShellProps, Button } from '$lib/index.js';
	import IconPanelClose from '@lucide/svelte/icons/panel-left-close';
	import IconPanelOpen from '@lucide/svelte/icons/panel-left-open';

	let {
		aside,
		navigation,
		panel,
		children,
		common_actions,
		home_actions,
		users_actions
	}: AppShellProps = $props();

	let static_navigation = $state(true);
	let navigation_hovered = $state(false);
	let nav_trigger_hovered = $state(false);
	let open_navigation = $derived(nav_trigger_hovered || navigation_hovered);
</script>

<header class="bg-white col-span-4 sticky w-full top-0 z-10 px-2 h-12 inline-flex items-center">
	{#if home_actions}
		<div>{@render home_actions({ toggle_button })}</div>
	{/if}

	{#if common_actions}
		<div>{@render common_actions()}</div>
	{/if}

	{#if users_actions}
		<div>{@render users_actions()}</div>
	{/if}
</header>

<div class="flex">
	<nav
		class={[
			'w-xs bg-blue',
			static_navigation ? '' : 'fixed top-12 bottom-0 z-7',
			!static_navigation && !open_navigation ? '-translate-x-full' : ''
		]}
		use:hover={(v) => (navigation_hovered = v)}
	>
		{#if aside}
			{@render aside()}
		{/if}
	</nav>

	<main class="grid-col-full min-h-full">
		{@render children?.()}
	</main>
</div>

{#snippet toggle_button()}
	<Button
		icon={static_navigation ? IconPanelClose : IconPanelOpen}
		onclick={() => (static_navigation = !static_navigation)}
		onmouseenter={() => (nav_trigger_hovered = true)}
		onmouseleave={() => (nav_trigger_hovered = false)}
	/>
{/snippet}
