<script lang="ts">
	import { Button, Menu, Tooltip, MenuItem, MenuSection } from '$lib/index.js';
	import Star from '@lucide/svelte/icons/star';

	let loading = $state(false);
</script>

<div class="p-4 space-y-4">
	<div class="flex gap-4">
		<Button>Default button</Button>
		<Button appearance="primary">Primary button</Button>
		<Button appearance="subtle">Subtle button</Button>
		<Button appearance="warning">Warning button</Button>
		<Button appearance="danger">Danger button</Button>
		<Button appearance="discovery">Discovery button</Button>
	</div>

	<div class="flex gap-4">
		<Button disabled>Default button</Button>
		<Button disabled appearance="primary">Primary button</Button>
		<Button disabled appearance="subtle">Subtle button</Button>
		<Button disabled appearance="warning">Warning button</Button>
		<Button disabled appearance="danger">Danger button</Button>
		<Button disabled appearance="discovery">Discovery button</Button>
	</div>

	<div class="flex gap-4">
		<Button compact>Default button</Button>
		<Button compact appearance="primary">Primary button</Button>
		<Button compact appearance="subtle">Subtle button</Button>
		<Button compact appearance="warning">Warning button</Button>
		<Button compact appearance="danger">Danger button</Button>
		<Button compact appearance="discovery">Discovery button</Button>
	</div>

	<div class="inline-flex items-center gap-4">
		<input
			id="loading-state"
			type="checkbox"
			class="w-4 h-4"
			onclick={() => (loading = !loading)}
		/>
		<label for="loading-state">Set loading state to true</label>
	</div>

	<div class="flex gap-4">
		<Button {loading}>Default button</Button>
		<Button {loading} appearance="primary">Primary button</Button>
		<Button {loading} appearance="subtle">Subtle button</Button>
		<Button {loading} appearance="warning">Warning button</Button>
		<Button {loading} appearance="danger">Danger button</Button>
		<Button {loading} appearance="discovery">Discovery button</Button>
	</div>

	<div class="flex gap-4">
		<Button {loading} compact>Default button</Button>
		<Button {loading} compact appearance="primary">Primary button</Button>
		<Button {loading} compact appearance="subtle">Subtle button</Button>
		<Button {loading} compact appearance="warning">Warning button</Button>
		<Button {loading} compact appearance="danger">Danger button</Button>
		<Button {loading} compact appearance="discovery">Discovery button</Button>
	</div>

	<Button block>Default button</Button>
	<Button block appearance="primary">Primary button</Button>
	<Button block appearance="subtle">Subtle button</Button>
	<Button block appearance="warning">Warning button</Button>
	<Button block appearance="danger">Danger button</Button>
	<Button block appearance="discovery">Discovery button</Button>

	<div class="flex gap-4">
		<Button icon={Star}>Default button</Button>
		<Button icon={Star} appearance="primary">Primary button</Button>
		<Button icon={Star} appearance="subtle">Subtle button</Button>
		<Button icon={Star} appearance="warning">Warning button</Button>
		<Button icon={Star} appearance="danger">Danger button</Button>
		<Button icon={Star} appearance="discovery">Discovery button</Button>
	</div>

	<div class="flex gap-4">
		<Button icon={Star} compact>Default button</Button>
		<Button icon={Star} compact appearance="primary">Primary button</Button>
		<Button icon={Star} compact appearance="subtle">Subtle button</Button>
		<Button icon={Star} compact appearance="warning">Warning button</Button>
		<Button icon={Star} compact appearance="danger">Danger button</Button>
		<Button icon={Star} compact appearance="discovery">Discovery button</Button>
	</div>

	<div class="flex gap-4">
		<Button icon={Star} iconafter>Default button</Button>
		<Button icon={Star} iconafter appearance="primary">Primary button</Button>
		<Button icon={Star} iconafter appearance="subtle">Subtle button</Button>
		<Button icon={Star} iconafter appearance="warning">Warning button</Button>
		<Button icon={Star} iconafter appearance="danger">Danger button</Button>
		<Button icon={Star} iconafter appearance="discovery">Discovery button</Button>
	</div>

	<div class="flex gap-4">
		<Button icon={Star} iconafter compact>Default button</Button>
		<Button icon={Star} iconafter compact appearance="primary">Primary button</Button>
		<Button icon={Star} iconafter compact appearance="subtle">Subtle button</Button>
		<Button icon={Star} iconafter compact appearance="warning">Warning button</Button>
		<Button icon={Star} iconafter compact appearance="danger">Danger button</Button>
		<Button icon={Star} iconafter compact appearance="discovery">Discovery button</Button>
	</div>

	<div class="flex gap-4">
		<Button icon={Star} shape="circle">Default button</Button>
		<Button icon={Star} shape="circle" appearance="primary">Primary button</Button>
		<Button icon={Star} shape="circle" appearance="subtle">Subtle button</Button>
		<Button icon={Star} shape="circle" appearance="warning">Warning button</Button>
		<Button icon={Star} shape="circle" appearance="danger">Danger button</Button>
		<Button icon={Star} shape="circle" appearance="discovery">Discovery button</Button>
	</div>

	<div class="flex gap-4">
		<Button icon={Star} shape="circle" compact>Default button</Button>
		<Button icon={Star} shape="circle" compact appearance="primary">Primary button</Button>
		<Button icon={Star} shape="circle" compact appearance="subtle">Subtle button</Button>
		<Button icon={Star} shape="circle" compact appearance="warning">Warning button</Button>
		<Button icon={Star} shape="circle" compact appearance="danger">Danger button</Button>
		<Button icon={Star} shape="circle" compact appearance="discovery">Discovery button</Button>
	</div>

	<div class="flex gap-4">
		<Button icon={Star} icononly>Default button</Button>
		<Button icon={Star} icononly appearance="primary">Primary button</Button>
		<Button icon={Star} icononly appearance="subtle">Subtle button</Button>
		<Button icon={Star} icononly appearance="warning">Warning button</Button>
		<Button icon={Star} icononly appearance="danger">Danger button</Button>
		<Button icon={Star} icononly appearance="discovery">Discovery button</Button>
	</div>

	<div class="flex gap-4">
		<Button icon={Star} icononly compact>Default button</Button>
		<Button icon={Star} icononly compact appearance="primary">Primary button</Button>
		<Button icon={Star} icononly compact appearance="subtle">Subtle button</Button>
		<Button icon={Star} icononly compact appearance="warning">Warning button</Button>
		<Button icon={Star} icononly compact appearance="danger">Danger button</Button>
		<Button icon={Star} icononly compact appearance="discovery">Discovery button</Button>
	</div>

	<div class="flex gap-4">
		<Button icon={Star} shape="circle" icononly>Default button</Button>
		<Button icon={Star} shape="circle" icononly appearance="primary">Primary button</Button>
		<Button icon={Star} shape="circle" icononly appearance="subtle">Subtle button</Button>
		<Button icon={Star} shape="circle" icononly appearance="warning">Warning button</Button>
		<Button icon={Star} shape="circle" icononly appearance="danger">Danger button</Button>
		<Button icon={Star} shape="circle" icononly appearance="discovery">Discovery button</Button>
	</div>

	<div class="flex gap-4">
		<Button icon={Star} shape="circle" icononly compact>Default button</Button>
		<Button icon={Star} shape="circle" icononly compact appearance="primary">Primary button</Button>
		<Button icon={Star} shape="circle" icononly compact appearance="subtle">Subtle button</Button>
		<Button icon={Star} shape="circle" icononly compact appearance="warning">Warning button</Button>
		<Button icon={Star} shape="circle" icononly compact appearance="danger">Danger button</Button>
		<Button icon={Star} shape="circle" icononly compact appearance="discovery"
			>Discovery button</Button
		>
	</div>

	<div class="flex gap-4">
		<Tooltip content="Favorite this" icon={Star}>Default button</Tooltip>
		<Tooltip content="Favorite this" icon={Star} appearance="primary">Primary button</Tooltip>
		<Tooltip content="Favorite this" icon={Star} appearance="subtle">Subtle button</Tooltip>
		<Tooltip content="Favorite this" icon={Star} appearance="warning">Warning button</Tooltip>
		<Tooltip content="Favorite this" icon={Star} appearance="danger">Danger button</Tooltip>
		<Tooltip content="Favorite this" icon={Star} appearance="discovery">Discovery button</Tooltip>
	</div>

	<div class="flex gap-4">
		<Tooltip content="Favorite this" icon={Star} shape="circle" compact>Default button</Tooltip>
		<Tooltip content="Favorite this" icon={Star} shape="circle" compact appearance="primary">
			Primary button
		</Tooltip>
		<Tooltip content="Favorite this" icon={Star} shape="circle" compact appearance="subtle">
			Subtle button
		</Tooltip>
		<Tooltip content="Favorite this" icon={Star} shape="circle" compact appearance="warning">
			Warning button
		</Tooltip>
		<Tooltip content="Favorite this" icon={Star} shape="circle" compact appearance="danger">
			Danger button
		</Tooltip>
		<Tooltip content="Favorite this" icon={Star} shape="circle" compact appearance="discovery">
			Discovery button
		</Tooltip>
	</div>

	<Menu>
		<MenuSection>
			<MenuItem>Item 1</MenuItem>
			<MenuItem>Item 2</MenuItem>
			<MenuItem>Item 3</MenuItem>
		</MenuSection>
		<MenuSection>
			<MenuItem>Item 4</MenuItem>
			<MenuItem>Item 5</MenuItem>
			<MenuItem>Item 6</MenuItem>
		</MenuSection>
	</Menu>
</div>
