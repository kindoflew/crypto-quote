<script>
  import Game from "./components/Game.svelte";
</script>

<Game />

<style>
  :global(:root) {
    --font-color: #2e2300;
    --main-bg: #c05805;
    --game-bg: #db9501;
  }

  :global(html, body) {
    position: relative;
    width: 100%;
    height: 100%;
  }

  :global(body) {
    background-color: var(--main-bg);
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  }

  @media (max-width: 550px) {
    :global(html) {
      font-size: calc(0.5em + 1vw);
    }
  }
</style>
