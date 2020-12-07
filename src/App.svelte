<script>
  import Game from "./components/Game.svelte";
</script>

<main>
  <Game />
</main>

<style>
  :root {
    --font-color: #2e2300;
    --main-bg: #c05805;
    --game-bg: #db9501;
    --highlight: #8f8606;
  }

  :global(body) {
    background-color: var(--main-bg);
  }
  
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--main-bg);
  }
</style>
