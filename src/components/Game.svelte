<script>
  import { onMount } from "svelte";
  import { fetchQuote } from "../utils/fetchQuote.js";
  import { cryptQuote } from "../utils/cryptQuote.js";
  import { answer } from "../utils/store.js";
  import WordInput from "./WordInput.svelte";
  import Button from "./Button.svelte";
  import Modal from "./Modal.svelte";

  let quote;
  let cryptArray;
  let solved;
  let revealed = false;
  let ready;

  $: solved = $answer.join("") === quote ? true : false;

  onMount(() => {
    newQuote();
  });

  async function newQuote() {
    ready = false;
    quote = await fetchQuote();
    cryptArray = cryptQuote(quote);
    answer.set(Array.from({ length: quote.length }, () => ""));
    revealed = false;
    ready = true;
  }

  function revealAnswer() {
    //if answer was revealed, don't show success modal
    revealed = true;
    for (let i = 0; i < quote.length; i++) {
      $answer[i] = quote[i];
    }
  }

  function reset() {
    let inputs = document.querySelectorAll("input:not(.hidden)");
    for (let i = 0; i < inputs.length; i++) {
      $answer[inputs[i].id] = "";
    }
  }
</script>

<main>
  <section>
    <h1>Crypto.quote()</h1>
    {#if ready}
      {#each cryptArray as word, index (index)}
        <WordInput {word} />
      {/each}
    {/if}
  </section>
  <div class="button-wrapper">
    <Button content="Reset" clickFunction={reset} />
    <Button content="Reveal Answer" clickFunction={revealAnswer} />
    <Button content="New Quote" clickFunction={newQuote} />
  </div>

  {#if solved && !revealed}
    <Modal {quote} on:closeModal={() => (revealed = true)} />
  {/if}
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--main-bg);
    padding-bottom: 0.5rem;
  }

  section {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    min-height: 70vh;
    width: 60vw;
    margin: 1.5rem auto;
    margin-bottom: 1rem;
    padding: 2rem;
    border-radius: 10px;
    background-color: var(--game-bg);
    color: var(--font-color);
    box-shadow: 5px 5px 5px rgba(61, 28, 1, 0.612);
  }
  
  h1 {
    flex: 1 0 100%;
    font-size: 2.5rem;
    text-align: center;
    margin-top: 0;
    align-self: flex-start;
  }

  .button-wrapper {
    display: flex;
    width: calc(60vw + 4rem);
    justify-content: space-between;
  }

  @media (max-width: 1000px) {
    section {
      width: 80vw;
    }

    .button-wrapper {
      width: calc(80vw + 4rem);
    }
  }

  @media (max-width: 550px) {
    section {
      width: 85vw;
      padding-left: 1rem;
      padding-right: 1rem;
    }

    .button-wrapper {
      width: calc(85vw + 2rem);
    }
  }
</style>
