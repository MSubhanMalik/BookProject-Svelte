<script>
  import { Modal } from "flowbite-svelte";
  import Button from "./Button.svelte";
  let { open = $bindable(false), title = "Empty" } = $props();
</script>

<Modal {title} bind:open onclose={() => (open = false)}>
  <slot />
</Modal>
