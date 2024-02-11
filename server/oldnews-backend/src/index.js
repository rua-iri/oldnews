

export default {
	async fetch(request, env) {

		const responseHeaders = {
			"Access-Control-Allow-Headers": "*",
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
			"Access-Control-Max-Age": "86400",
		}

		const { pathname } = new URL(request.url);
		const todayDate = new Date();


		if (pathname === "/api") {
			const { results } = await env.DB.prepare(
				"SELECT * FROM news WHERE day=? AND month=? LIMIT 10"
			)
				.bind(todayDate.getDate(), todayDate.getMonth())
				.all();
			return Response.json(results,
				{
					status: 200,
					headers: responseHeaders
				});
		}

		return new Response(
			"Error: invalid endpoint",
			{
				status: 400,
				headers: responseHeaders
			}
		);


	},
};
