<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
</script>

<svelte:window on:keyup|preventDefault={(e) => e.key === "Escape" && dispatch("closeModal")} />

<section on:click|self={() => dispatch("closeModal")}>
  <div class="modal">
    <div class="wrapper">
      <p class="message">You did it!</p>
      <p>
        <slot></slot>
      </p>
    </div>
    <button on:click={() => dispatch("closeModal")}> Close </button>
  </div>
</section>

<style>
  section {
    background-color: rgba(0, 0, 0, 0.349);
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background-color: var(--main-bg);
    color: var(--font-color);
    border-radius: 10px;
    padding: 1.5rem 1rem;
    width: 40vw;
    text-align: center;
    box-shadow: 5px 5px 5px rgba(61, 28, 1, 0.612);
  }

  .wrapper {
    background-color: var(--game-bg);
    border-radius: 10px;
    box-shadow: 2px 2px 2px rgba(61, 28, 1, 0.612);
    width: 94%;
    padding: 0.5rem;
    margin: 0 auto 1.5rem;
  }

  .message {
    font-size: 3rem;
  }

  p {
    font-size: 1.5rem;
    margin: 1.5rem 0 2rem;
  }

  @media (max-width: 1000px) {
    .modal {
      width: 70vw;
    }
  }
</style>
