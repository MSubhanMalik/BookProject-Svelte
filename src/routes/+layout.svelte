<script>
  import "../app.css";
  import "@fortawesome/fontawesome-free/css/all.min.css";
  let innerWidth, innerHeight;
  import Header from "../Components/Header.svelte";
</script>

<div>
  <Header />
  <div class = "flex justify-center">
    <slot />
  </div>
</div>

<svelte:window bind:innerHeight bind:innerWidth={innerHeight} />
