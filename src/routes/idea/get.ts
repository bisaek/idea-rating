import prisma from '$lib/prisma';
import type { RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
	const body = await request.json();

	const Idea = await prisma.idea.findMany({
		where: {
			id: body.id
		}
	});
	console.log(request);
	return {
		status: 200,
		body: { Idea }
	};
};
