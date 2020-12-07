<script>
  import { createEventDispatcher } from "svelte";

  export let quote;

  const dispatch = createEventDispatcher();

</script>
<svelte:window on:keyup|preventDefault={(e) => e.key === 'Escape' && dispatch('closeModal')}/> 
<section on:click|self={() => dispatch('closeModal')}>
  <div>
    <p class="message">You did it!</p>
    <p>{quote}</p>
    <button on:click={() => dispatch('closeModal')}>Close</button>
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

  div {
    background-color: var(--main-bg);
    color: var(--font-color);
    border-radius: 10px;
    padding: 2rem;
    width: 40vw;
    text-align: center;
    box-shadow: 5px 5px 5px #3d1c019c;
  }

  .message {
    font-size: 3rem;
  }

  p {
    font-size: 1.5rem;
  }

  button {
    background-color: var(--game-bg);
    color: var(--font-color);
    font-size: 1.5rem;
    border: none;
    border-radius: 5px;
    box-shadow: 5px 5px 5px #3d1c019c;
    padding: 1rem;
    cursor: pointer;
  }

  button:active {
    transform: scale(90%);
  }
</style>