<script>
  const {
    width = "w-full",
    padding = "p-2",
    text = "Empty",
    disabled = false,
    onclick = () => {},
    color = "primary"
  } = $props();

  let colors = {
    primary: "btn-primary", 
    white: "btn-white", 
    red: "btn-red"
  }
</script>

<button disabled = {disabled} onclick = {onclick} class={`${width} ${padding} ${colors[color]}`}
  ><slot/></button
>
