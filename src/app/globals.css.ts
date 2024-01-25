import { createGlobalTheme, globalStyle } from '@vanilla-extract/css';

export const globals = createGlobalTheme(':root', {
	color: {
		main: '#FFA800',
		main_2: '#FFBA33',
		main_3: '#FFCB66',
		main_4: '#FFDC99',
		main_5: '#FFEECC',
		main_6: '#FFF6E6',
		main_7: '#FFFCF7',
	},
	fontColor: {
		main: '#111111',
	},
});

globalStyle('html, body', {
	margin: 0,
	padding: 0,
	overflowX: 'hidden',
});
