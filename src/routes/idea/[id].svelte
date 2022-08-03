<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	import Star from '$lib/star.svelte';

	const id = $page.params.id;
	let Idea: Idea | null = null;
	let av;

	let stars: Array<{ index: number; on: Boolean }> = [
		{ index: 0, on: false },
		{ index: 1, on: false },
		{ index: 2, on: false },
		{ index: 3, on: false },
		{ index: 4, on: false }
	];

	onMount(async () => {
		const res = await fetch('get', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({ id })
		});

		Idea = await res.json();
		// Idea = data.Idea[0];
	});

	async function rate(index: number) {
		const res = await fetch('rate', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({ rate: index + 1, id })
		});
		const data = await res.json();

		stars.forEach((star) => {
			star.on = false;
			if (star.index <= index) star.on = true;
		});
		stars = stars;

		Idea?.rates.unshift({ id: data.id, rate: index + 1, Idea, IdeaId: id });
		Idea.rates = Idea?.rates;
	}
</script>

{#if Idea}
	<div class="flex-col flex gap-4">
		<div class="flex">
			<h1 class="text-3xl">
				{Idea?.title}
			</h1>
			{#each [...Array(Idea?.average_rate).keys()] as star}
				<Star color="yellow" />
			{/each}
			{#each [...Array(5 - Idea?.average_rate).keys()] as star}
				<Star color="black" />
			{/each}
			<span class="text-lg">{Idea?.type}</span>
		</div>
		<p>{Idea?.tags}</p>
		<p>{Idea?.description}</p>

		<div class="flex">
			{#each stars as star}
				<span on:click={() => rate(star.index)}>
					{#if star.on}
						<Star color="yellow" />
					{:else}
						<Star color="black" />
					{/if}
				</span>
			{/each}
		</div>
	</div>
{/if}
