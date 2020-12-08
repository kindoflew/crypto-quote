<script>
  import { fade } from "svelte/transition";
  import LetterInput from "./LetterInput.svelte";
  export let word;
  let hyphen = word[0].includes('—');
</script>

{#if hyphen}
  <div class="linebreak" />
{/if}
<div in:fade class:right-align={hyphen}>
  <!--[0] is the letter, [1] is the original index in the string-->
  {#each word as character (character[1])}
    <LetterInput
      character={character[0]}
      index={character[1]}
      on:handleChange
      on:handleInput
    />
  {/each}
</div>

<style>
  div {
    white-space: nowrap;
    height: 2.7rem;
    margin-bottom: 1rem;
  }

  .linebreak {
    flex: 1 0 100%;
    margin: 0;
    height: 0;
  }

  .right-align {
    flex: 1 1 0;
    display: flex;
    justify-content: right;
  }
</style>
