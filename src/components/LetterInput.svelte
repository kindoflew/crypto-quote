<script>
  import { onMount, tick, createEventDispatcher } from "svelte";

  export let character;
  export let index;
  export let value = "";
  let input;
  let nonTextInput;

  const dispatch = createEventDispatcher();

  onMount(() => {
    if (nonTextInput) {
      value = character;
    }
  });

  async function handleInput() {
    dispatch("handleInput", { character, value });
    await tick();
    handleTabbing();
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
</script>

{#if character.match(/\W/)}
  <div>
    <input
      type="text"
      id={index}
      class="hidden"
      bind:value
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
      bind:value
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

  input:focus {
    background-color: var(--main-bg);
  }

  .hidden {
    border: none;
    background-color: transparent;
    color: var(--font-color);
    -webkit-text-fill-color: var(--font-color);
    opacity: 1;
    width: 1.3rem;
  }

  .highlight {
    background-color: var(--main-bg);
  }
</style>
