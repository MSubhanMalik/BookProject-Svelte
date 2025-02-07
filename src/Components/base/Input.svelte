<script>
  let {
    type,
    label,
    placeholder,
    onclick,
    textarea = false,
    rows = 3,
    required = false,
    width,
    value = $bindable(),
    styling = `focus:outline-0 rounded-2xl focus:shadow-lg duration-200 border p-2 border-indigo-100`,
    primary = false,
  } = $props();
</script>

<div class={`${width} my-2 flex flex-col gap-1`}>
  <!-- svelte-ignore a11y_label_has_associated_control -->
  <label class="text-md font-semibold mb-2">{label} 
    {#if required}
    <span class = "mx-1 text-red-600">*</span>
    {/if}
  </label>
  {#if textarea == true}
    <textarea
      {placeholder}
      {onclick}
      {rows}
      {required}
      bind:value
      class={`${styling} ${primary ? "bg-indigo-400 text-white primary" : "bg-white"}`}
    ></textarea>
  {:else if type == "file"}
    <input {type} {onclick} class="" />
  {:else}
    <input
      {type}
      {placeholder}
      {onclick}
      {required}
      bind:value
      class={`${styling} ${primary ? "bg-indigo-400 text-white primary" : "bg-white"}`}
    />
  {/if}
</div>

<style>
  input.primary::placeholder {
    @apply text-gray-50 opacity-50;
  }
</style>
