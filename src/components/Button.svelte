<script>
  export let content;
  export let clickFunction;
</script>

<button on:click={clickFunction}> {content} </button>

<style>
  button {
    background-color: var(--game-bg);
    color: var(--font-color);
    font-size: 1.5rem;
    font-family: inherit;
    box-sizing: border-box;
    border: none;
    border-radius: 5px;
    box-shadow: 5px 5px 5px rgba(61, 28, 1, 0.612);
    margin: 0;
    padding: 1rem;
    cursor: pointer;
  }

  button:active {
    transform: scale(90%);
  }
</style>
