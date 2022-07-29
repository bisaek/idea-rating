<script lang="ts">
import Error from "./__error.svelte";

let types = [
    "game",
    "movie",
    "music",
    "series",
    "book",
    "website",
    "mobile app",
    "desktop app",
    "other"
];

let idea = {
    title: "",
    description: "",
    type: "",
    tags: [],
    image: "",
    link: "",
}
async function createIdea() {
    const res = await fetch('/idea/create', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(idea)
    });
    const data = await res.json();
    console.log(data);

}
</script>

<form on:submit|preventDefault={createIdea} class="flex flex-col gap-8">
    <div class="flex gap-4 w-full">
        <div class="w-full">
            <label class="uppercase block" for="titel">titel</label>
            <input bind:value={idea.title} type="text" id="titel" name="titel" class="bg-slate-200 rounded-md block w-full text-lg py-3 px-6 focus:bg-slate-300">
        </div>
        <div class=" w-1/4">
            <label class="uppercase block" for="type">type</label>
            <select bind:value={idea.type} name="type" class="bg-slate-200 w-full py-3 rounded-md text-lg px-6 focus:bg-slate-300" id="">
                {#each types as type}
                    <option value="{type}">{type}</option>
                {/each}
            </select>
        </div>
    </div>
    <div class="w-full">
        <label class="uppercase block" for="description">description</label>
        <textarea bind:value={idea.description} name="description" id="description" class="bg-slate-200 rounded-md w-full py-3 px-6 focus:bg-slate-300" rows="10"></textarea>
    </div>
</form>