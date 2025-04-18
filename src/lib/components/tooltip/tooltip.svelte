<script lang="ts">
	import { Tooltip } from 'bits-ui';
	import { Button, TOOLTIP_POSITIONS } from '$lib/index.js';
	import type { TooltipProps } from './index.js';

	const {
		children,
		content,
		position = 'bottom-center',
		delay = 300,
		...rest
	}: TooltipProps = $props();
</script>

<Tooltip.Provider>
	<Tooltip.Root delayDuration={delay}>
		<Tooltip.Trigger>
			{#snippet child({ props })}
				<Button {...props} {...rest}>
					{@render children?.()}
				</Button>
			{/snippet}
		</Tooltip.Trigger>

		<Tooltip.Content
			align={TOOLTIP_POSITIONS[position][1]}
			side={TOOLTIP_POSITIONS[position][0]}
			class={['bg-black text-white rounded-md z-10 px-2 m-1 text-sm']}
		>
			{#if typeof content === 'string'}
				{content}
			{:else}
				{@render content()}
			{/if}
		</Tooltip.Content>
	</Tooltip.Root>
</Tooltip.Provider>
