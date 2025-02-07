<script>
  const {
    width = "w-full",
    primary = true,
    padding = "p-2",
    text = "Empty",
    disabled = false,
    onclick = () => {},
  } = $props();
</script>

<button disabled = {disabled} onclick = {onclick} class={`${width} ${padding} ${primary ? "btn-primary" : "btn-white"}`}
  ><slot/></button
>
