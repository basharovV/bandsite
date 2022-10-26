import type { LayoutLoad } from '../../.svelte-kit/types/src/routes/$types';
import { locale, loadTranslations } from '$lib/translations';

import customParseFormat from 'dayjs/plugin/customParseFormat';
import dayjs from 'dayjs';
dayjs.extend(customParseFormat);
import shows from '../data/shows.json';

export const load: LayoutLoad = async ({ url }) => {
	const { pathname } = url;

	const defaultLocale = 'en'; // get from cookie, user session, ...
	const initLocale = url.searchParams.get('lang') || locale.get() || defaultLocale; // set default if no locale already set

	await loadTranslations(initLocale, pathname); // keep this just before the `return`

	const transformedShows = shows.shows.map((s) => ({
		...s,
		date: dayjs(s.date, 'DD-MM-YYYY').format('ddd, D MMM YYYY'),
		passed: dayjs().isAfter(dayjs(s.date, 'DD-MM-YYYY'))
	}));

	console.log('shows', transformedShows);

	return {
		shows: transformedShows
	};
};
