<script lang="ts">
	import { Popover } from 'bits-ui';
	import { type AppShellProps, Button } from '$lib/index.js';
	import IconPanelClose from '@lucide/svelte/icons/panel-left-close';
	import IconPanelOpen from '@lucide/svelte/icons/panel-left-open';

	let { aside, navigation, header, children, common_actions, home_actions }: AppShellProps =
		$props();
	let navigation_panel_open = $state(true);
</script>

<header class="bg-white col-span-4 sticky w-full top-0 z-10 px-2 h-12 inline-flex items-center">
	{#if header}
		{@render header({ toggle_button })}
	{:else}
		{@render toggle_button()}
	{/if}

	{#snippet toggle_button()}
		<Popover.Root>
			<Popover.Trigger>
				<Button
					icon={navigation_panel_open ? IconPanelClose : IconPanelOpen}
					onclick={() => (navigation_panel_open = !navigation_panel_open)}
				/>
			</Popover.Trigger>

			<Popover.Content>what</Popover.Content>
		</Popover.Root>
	{/snippet}
</header>

<div class="flex">
	<nav class={['w-xs bg-blue', navigation_panel_open ? '' : 'fixed top-12 bottom-0 z-7']}>what</nav>

	<main class="grid-col-full min-h-full">
		{@render children?.()}
	</main>
</div>
