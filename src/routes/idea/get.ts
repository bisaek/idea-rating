import prisma from '$lib/prisma';
import type { RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
	const body = await request.json();

	const Idea = await prisma.idea.findUnique({
		where: {
			id: body.id
		}
	});
	const idea_rating = await prisma.idea_rating.findMany({
		where: {
			IdeaId: body.id as string
		}
	});

	let average_rate: number = 0;

	return {
		status: 200,
		body: { ...Idea, rates: idea_rating, average_rate }
	};
};
