<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

  let boxNum = 0;
</script>

<main>
  {#await data.listPromise}
    <p>Loading...</p>
  {:then list}
    {#each list as line}
      {#if line.substring(0,1) == "#"}
        <h2>{@html line.substring(1)}</h2>
      {:else if line.substring(0,3) == "---"}
        <hr/>
      {:else if line.substring(0,5) == "- [ ]"}
        <input type="checkbox" id="checkbox{boxNum}">
        <label for="checkbox{boxNum++}"> {@html line.substring(5)}</label><br/>
      {:else}
        <p>{line}</p>
      {/if}
    {/each}
  {:catch error}
    <p>Error when importing checklist. Check your internet connection. If this issue persists, reach out to Willow at <a href="mailto:dimmerw@aadl.org">dimmerw@aadl.org</a></p>
    <p>{error.message}</p>
  {/await}
</main>

<style>
  :global(body) {
    background-color: #272a33;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    line-height: 1.5;
  }
</style>
