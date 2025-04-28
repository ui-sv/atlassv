<script lang="ts">
	import { Button } from 'bits-ui';
	import type { ButtonAppearance, ButtonProps } from './index.js';
	import { onMount } from 'svelte';
	import type { ClassValue } from 'svelte/elements';
	import Loader from '@lucide/svelte/icons/loader-circle';
	import { isSnippet } from '$lib/index.js';

	const ID = $props.id();
	const APPEARANCES: Record<ButtonAppearance, ClassValue> = {
		danger: ['bg-red-600 text-white', 'hover:(bg-red-700)', 'active:(bg-red-800)'],
		subtle: ['', 'hover:(bg-zinc-900/5)', 'active:(bg-zinc-900/15)'],
		default: ['border border-zinc-900/20', 'hover:(bg-zinc-900/5)', 'active:(bg-zinc-900/15)'],
		warning: ['bg-yellow-400', 'hover:(bg-yellow-500)', 'active:(bg-yellow-600)'],
		discovery: ['bg-purple-600 text-white', 'hover:(bg-purple-700)', 'active:(bg-purple-950)'],
		primary: ['bg-blue-600 text-white', 'hover:(bg-blue-700)', 'active:(bg-blue-900)']
	};

	let {
		ref = $bindable(),
		appearance = 'default',
		autofocus = false,
		disabled = false,
		loading = false,
		compact = false,
		block = false,
		iconafter = false,
		icononly = false,
		shape = 'default',
		children,
		icon,
		class: klass,
		...rest
	}: ButtonProps = $props();

	const appearances = $derived.by(() => {
		if (disabled) return 'bg-zinc-100/50 text-zinc-400 cursor-not-allowed';
		if (loading) return [APPEARANCES[appearance].at(0), 'cursor-progress'];
		return APPEARANCES[appearance];
	});

	onMount(() => {
		if (!autofocus) return;
		if (!ref) return;

		ref.focus();
	});
</script>

<Button.Root
	{ref}
	id={ID}
	{disabled}
	class={[
		'flex whitespace-nowrap items-center justify-center transition font-medium font-sans text-sm relative',
		appearances,
		compact ? 'h-6' : 'h-8',
		block && 'w-full',
		icon && !children ? 'aspect-square' : compact ? 'px-2' : 'px-3',
		shape === 'default' ? 'rounded-md' : 'rounded-full',
		klass
	]}
	{...rest}
>
	<span
		class={[
			'flex items-center justify-center transition',
			loading && 'opacity-0',
			iconafter && 'flex-row-reverse',
			compact ? 'gap-1' : 'gap-2'
		]}
	>
		{#if icon}
			{#if isSnippet(icon)}
				{@render icon()}
			{:else}
				{@const Icon = icon}
				<Icon class={['size-4']} />
			{/if}
		{/if}

		{#if !icononly}
			{@render children?.()}
		{/if}
	</span>

	<Loader class={['animate-spin absolute transition size-4', !loading && 'opacity-0']} />
</Button.Root>
