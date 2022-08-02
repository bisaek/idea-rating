<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import Index from '../index.svelte';

	const id = $page.params.id;
	let Idea: Idea | null = null;

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
	<div>
		<h1 class="text-3xl">{Idea?.title} <span class="text-lg">{Idea?.type}</span></h1>
		<p>{Idea?.tags}</p>
		<p>{Idea?.description}</p>

		<div class="flex">
			{#each stars as star}
				<span on:click={() => rate(star.index)}>
					{#if star.on}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="yellow"
							viewBox="0 0 24 24"
							><path
								d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
							/></svg
						>
					{:else}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="black"
							viewBox="0 0 24 24"
							><path
								d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
							/></svg
						>
					{/if}
				</span>
			{/each}
		</div>
		<ul>
			{#each Idea?.rates as rate}
				<li>{rate.rate}</li>
			{/each}
		</ul>
	</div>
{/if}
