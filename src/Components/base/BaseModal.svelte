<script>
  import { Modal } from "flowbite-svelte";
  import Button from "./Button.svelte";
  let showModal = $state(false);
</script>

<Button onclick={() => (showModal = true)}></Button>
<Modal title="Hello World" bind:open={showModal} on:click = {()=> {showModal = false}}>
  <div>Inside Body</div>
  <svelte:fragment slot="footer">
    <Button onclick={() => alert('Handle "success"')}>I accept</Button>
    <Button color="alternative">Decline</Button>
  </svelte:fragment>
</Modal>
