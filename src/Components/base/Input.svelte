<script>
  const {
    type,
    label,
    placeholder,
    onclick,
    textarea = false,
    rows = 3,
    width,
    styling = `focus:outline-0 rounded-2xl focus:shadow-lg duration-200 border p-2 bg-white border-none`,
  } = $props();
</script>

<div class={`${width} my-2 flex flex-col gap-1`}>
  <label class="text-md font-semibold mb-2">{label}</label>
  {#if textarea == true}
    <textarea {placeholder} {onclick} {rows} class={styling}></textarea>
  {:else}
    <input {type} {placeholder} {onclick} class={styling} />
  {/if}
</div>
