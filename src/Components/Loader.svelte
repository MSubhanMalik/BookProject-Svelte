<script>
  import { Spinner } from "flowbite-svelte";
  import { loading } from "../States/app";
  export let style = "";
  export let text = true;
</script>

{#if $loading == true}
  <div class = {`flex-col ${style} gap-2 mt-4 flex-col-center`}>
    <Spinner color = "purple" size = {10}/>
    {#if text}
    <div class = "text-xl">Loading...</div>
    {/if}
  </div>
{/if}
