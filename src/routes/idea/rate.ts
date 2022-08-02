import prisma from '$lib/prisma';
import type { RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
	const body = await request.json();

	const res = await prisma.idea_rating.create({
		data: {
			Idea: {
				connect: { id: body.id }
			},
			rate: body.rate
		}
	});

	return {
		status: 200,
		body: {
			...res
		}
	};
};
