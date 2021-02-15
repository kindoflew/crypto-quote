# CHANGELOG

### v 1.1.0
* refactored cryptoQuote module to not use global const to generate cipher
* refactored Game.svelte to use {#await}
* moved all game state into stores
* refactored WordContainer.svelte to use slots
* quote responses now only have "famous-quotes" tag
* buttons are all native button tags instead of seperate components