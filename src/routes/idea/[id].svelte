<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	const id = $page.params.id;
	let Idea: Idea = null;

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
		console.log(Idea);
	});
</script>

{#if Idea}
	<div>
		<h1 class="text-3xl">{Idea?.title} <span class="text-lg">{Idea?.type}</span></h1>
		<p>{Idea?.tags}</p>
		<p>{Idea?.description}</p>
		<ul>
			{Idea?.rates[0].rate}
			{#each Idea?.rates as rate}
				<li>{rate.rate}</li>
			{/each}
		</ul>
	</div>
{/if}
