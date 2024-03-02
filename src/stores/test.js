
    // src/stores/myStore.js
import { writable } from 'svelte/store';

export let myVariable = writable('Hello from the store!');

export let storeusername = writable('initial username');
