<script lang="ts">
	import type { MenuSectionProps } from './index.js';

	const { children, title }: MenuSectionProps = $props();
</script>

{#if title}
	<h2>{title}</h2>
{/if}

{@render children?.()}
