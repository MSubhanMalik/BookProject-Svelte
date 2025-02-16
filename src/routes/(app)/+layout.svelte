<script>
  import Footer from "../../Components/Footer.svelte";
  import Header from "../../Components/Header.svelte";
  import "@fortawesome/fontawesome-free/css/all.min.css";
  let innerWidth, innerHeight;
</script>

<div>
  <Header />
  <div class="flex justify-center">
    <slot />
  </div>
  <Footer />
</div>

<svelte:window bind:innerHeight bind:innerWidth={innerHeight} />
