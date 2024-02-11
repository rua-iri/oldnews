/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */


export default {
	async fetch(request, env) {
		const { pathname } = new URL(request.url);

		if (pathname === "/api") {
			// If you did not use `DB` as your binding name, change it here
			const { results } = await env.DB.prepare("SELECT * FROM news LIMIT 10")
				.all();
			return Response.json(results);
		}

		return new Response(
			"Call /api to see everyone who works at asdf"
		);

	},
};
