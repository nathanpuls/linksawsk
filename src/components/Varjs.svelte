<script>
    // src/stores/myStore.js
import { writable } from 'svelte/store';

export const myVariable = writable('Hello from the store!');

</script>