<script>
  import { onMount } from "svelte";
  import { fetchQuote } from "./fetchQuote.js";
  import { cryptQuote } from "./cryptQuote.js";
  import WordInput from "./WordInput.svelte";
  import Modal from "./Modal.svelte";

  let quote;
  let cryptArray;
  let answer = [];
  let solved;
  let revealed;
  let ready;

  $: solved = (answer.join("") === quote) ? true : false;

  onMount(() => {
    newQuote();
  });

  async function newQuote() {
    ready = false;
    revealed = false;
    answer = [];
    quote = await fetchQuote();
    cryptArray = cryptQuote(quote);
    ready = true;
  }

  function handleChange(event) {
    answer[event.detail.index] = event.detail.guess.toUpperCase();
  }

  function handleInput(event) {
    //inputs' classes are their character value
    let inputs = document.querySelectorAll(`input.${event.detail.character}`);
    //Any time a letter is input, all identical letter inputs get updated
    //along with corresponding index in answer
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = event.detail.guess;
      //all input ids are their index in the quote/answer
      answer[inputs[i].id] = event.detail.guess.toUpperCase();
    }
  }

  function revealAnswer() {
    //if answer was revealed, don't show success modal
    revealed = true;
    for (let i = 0; i < quote.length; i++) {
      document.getElementById(`${i}`).value = quote[i];
      answer[i] = quote[i];
    }
  }

  function reset() {
    let inputs = document.querySelectorAll('input:not(.hidden)');
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = '';
      answer[inputs[i].id] = '';
    }
  }
</script>

<section>
  <h1>Crypto.quote()</h1>
  {#if ready}
    {#each cryptArray as word, index (index)}
      <WordInput
        {word}
        on:handleChange={handleChange}
        on:handleInput={handleInput}
      />
    {/each}
  {/if}
</section>
<div class="button-wrapper">
  <button on:click={reset}> Reset </button>
  <button on:click={revealAnswer}> Reveal Answer </button>
  <button on:click={newQuote}> New Quote </button>
</div>

{#if solved && !revealed}
  <Modal
    {revealed}
    {quote}
    on:closeModal={() => revealed = true}
  />
{/if}

<!--<p>Solved: {solved} {answer.join('')}</p>-->

<style>
  section {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    min-height: 70vh;
    width: 50vw;
    margin: 2rem auto;
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
    width: calc(50vw + 4rem);
    justify-content: space-between;
  }

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
