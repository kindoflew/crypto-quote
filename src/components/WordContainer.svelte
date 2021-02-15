<script>
  import { fade } from "svelte/transition";

  export let word;
  let hyphen = word[0].includes('—');
</script>

{#if hyphen}
  <div class="linebreak" />
{/if}
<div in:fade class:right-align={hyphen}>
  <slot></slot>
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

  @media (max-width: 700px) {
    .right-align {
      flex: 0 1 0;
    }
  }
</style>
