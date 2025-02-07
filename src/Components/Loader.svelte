<script>
  import { Spinner } from "flowbite-svelte";
  import { loading } from "../States/app";
</script>

{#if $loading == true}
  <div class = "flex-col gap-2 mt-4 flex-col-center">
    <Spinner color = "purple" size = {10}/>
    <div class = "text-xl">Loading...</div>
  </div>
{/if}
