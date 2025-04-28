<script lang="ts">
	import { Button } from 'bits-ui';
	import { type MenuItemProps } from './index.js';

	const { children, description, ...rest }: MenuItemProps = $props();
</script>

<Button.Root class="!rounded-none !justify-start" {...rest}>
	<span class={['flex flex-row items-center']}>
		{@render children?.()}

		<span class="text-zinc-500">
			{description}
		</span>
	</span>
</Button.Root>
