<script lang="ts">
	import { type MenuProps } from './index.js';

	const { children }: MenuProps = $props();
</script>

<div class={['inline-flex flex-col bg-white shadow-lg shadow-black/10 py-2 min-w-sm']}>
	{@render children?.()}
</div>
