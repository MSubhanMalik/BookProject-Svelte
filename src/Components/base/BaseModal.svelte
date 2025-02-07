<script>
  import { Modal } from "flowbite-svelte";
  import Button from "./Button.svelte";
  let showModal = $state(false);
</script>

<button onclick={() => (showModal = true)}>Hello World</button>

<Modal title="Hello World" bind:open={showModal}>
  <div>Inside Body</div>
</Modal>
