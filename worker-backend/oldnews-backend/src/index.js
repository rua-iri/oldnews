export default {
	async fetch(request, env) {
		const responseHeaders = {
			'Access-Control-Allow-Headers': '*',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET,HEAD,POST,OPTIONS',
			'Access-Control-Max-Age': '86400',
		};
		const { pathname, searchParams } = new URL(request.url);

		if (pathname !== '/api') {
			return new Response(JSON.stringify({ error: 'invalid endpoint' }), {
				status: 404,
				headers: responseHeaders,
			});
		}

		const todayDate = new Date();
		const searchDay = searchParams.get('day') || todayDate.getDate();
		const searchMonth = searchParams.get('month') || todayDate.getMonth() + 1;

		const selectArticlesQuery = `
		SELECT *
		FROM news
		WHERE day=?
		AND month=?
		AND year=1983
		ORDER BY RANDOM()
		LIMIT 5;
		`;

		const { results } = await env.DB.prepare(selectArticlesQuery).bind(searchDay, searchMonth).all();
		return Response.json(results, {
			status: 200,
			headers: responseHeaders,
		});
	},
};
