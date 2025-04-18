import { type TooltipContentProps, type TooltipRootProps } from 'bits-ui';
import { type ButtonProps } from '$lib/index.js';
import type { Snippet } from 'svelte';

export type TooltipPosition =
	| 'bottom-start'
	| 'bottom-center'
	| 'bottom-end'
	| 'top-start'
	| 'top-center'
	| 'top-end'
	| 'left-start'
	| 'left-center'
	| 'left-end'
	| 'right-start'
	| 'right-center'
	| 'right-end';

export type TooltipProps = TooltipRootProps &
	ButtonProps & {
		/**
		 * The content of the tooltip.
		 */
		content: string | Snippet;
		/**
		 * Where the tooltip should appear relative to its target.
		 * If set to "mouse", the tooltip will display next to the mouse pointer instead.
		 * Make sure to utilize the mousePosition if you want to customize where the tooltip will show in relation to the mouse.
		 * @default 'bottom-center'
		 */
		position?: TooltipPosition;
		/**
		 * Time in milliseconds to wait before showing and hiding the tooltip.
		 * @default 300
		 */
		delay?: number;
		/**
		 * Whether or not the tooltip can be displayed. Once a tooltip is scheduled to be displayed, or is already displayed, it will continue to be shown.
		 */
		canappear?: boolean;
	};

export const TOOLTIP_POSITIONS: Record<
	TooltipPosition,
	[TooltipContentProps['side'], TooltipContentProps['align']]
> = {
	'bottom-start': ['bottom', 'start'],
	'bottom-center': ['bottom', 'center'],
	'bottom-end': ['bottom', 'end'],
	'top-start': ['top', 'start'],
	'top-center': ['top', 'center'],
	'top-end': ['top', 'end'],
	'left-start': ['left', 'start'],
	'left-center': ['left', 'center'],
	'left-end': ['left', 'end'],
	'right-start': ['right', 'start'],
	'right-center': ['right', 'center'],
	'right-end': ['right', 'end']
};
