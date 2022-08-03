import prisma from '$lib/prisma';
import type { Idea_rating } from '@prisma/client';
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

	return {
		status: 200,
		body: { ...Idea, rates: idea_rating, average_rate: average_rate(idea_rating) }
	};
};

function average_rate(ratings: Idea_rating[]) {
	return parseInt((ratings.reduce((acc, cur) => acc + cur.rate, 0) / ratings.length).toFixed());
}
