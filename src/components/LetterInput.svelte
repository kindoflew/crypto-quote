<script>
  import { onMount, createEventDispatcher } from "svelte";
  export let character;
  export let index;
  let guess = "";
  let input;
  let nonTextInput;

  const dispatch = createEventDispatcher();

  $: if (guess.length > 0) handleTabbing();
  $: dispatch("handleChange", { index, guess });

  onMount(() => {
    guess = "";
    if (nonTextInput) {
      dispatch("handleChange", { index, guess: character });
    }
  });

  function handleInput() {
    dispatch("handleInput", { character, guess });
  }

  function handleFocus() {
    let inputs = document.querySelectorAll(`input.${character}`);
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].classList.add("highlight");
    }
    input.select();
  }

  function handleBlur() {
    let inputs = document.querySelectorAll(`input.${character}`);
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].classList.remove("highlight");
    }
  }

  function handleTabbing() {
    let nextIndex = index + 1;
    let inputs = document.querySelectorAll("input");
    if (index === inputs.length - 1) {
      nextIndex = 0;
    }
    while (document.getElementById(`${nextIndex}`).classList.contains("hidden")) {
      nextIndex += 1;
    }
    document.getElementById(`${nextIndex}`).focus();
  }
</script>

{#if character.match(/\W/)}
  <div>
    <input
      type="text"
      id={index}
      class="hidden"
      bind:value={character}
      bind:this={nonTextInput}
      disabled
    />
    <label for={index} style="color: transparent">{character}</label>
  </div>
{:else}
  <div>
    <input
      type="text"
      id={index}
      maxlength="1"
      bind:this={input}
      bind:value={guess}
      class={character}
      on:focus={handleFocus}
      on:blur={handleBlur}
      on:input={handleInput}
    />
    <label for={index} class={character}>{character}</label>
  </div>
{/if}

<style>
  div {
    display: flex;
    flex-direction: column;
    display: inline-block;
  }

  label {
    text-align: center;
    border-radius: 2px;
    font-size: 1.5rem;
    display: block;
  }

  input:focus {
    background-color: var(--main-bg);
  }

  input {
    font-size: 1.5rem;
    font-family: inherit;
    width: 1.8rem;
    height: 1.8rem;
    padding: 0;
    margin: 0;
    border: 1px solid #ccc;
    border-radius: 2px;
    box-sizing: border-box;
    text-align: center;
    text-transform: uppercase;
  }

  .hidden {
    border: none;
    background-color: transparent;
    color: var(--font-color);
  }

  .highlight {
    background-color: var(--main-bg);
  }
</style>
