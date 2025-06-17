import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	return {
		listPromise: fetch('http://media.aadl.com/media/production_resources/obs_checklist.md')
      		.then(response => response.text())
      		.then(response => response.split("\n"))
	};
};