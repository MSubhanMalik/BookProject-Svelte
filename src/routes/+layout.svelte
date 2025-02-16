<script>
  import "../app.css";
  import "@fortawesome/fontawesome-free/css/all.min.css";
  import { getUser, user } from "../States/app";
  let innerWidth, innerHeight;

</script>

<slot />

<svelte:window bind:innerHeight bind:innerWidth={innerHeight} />
