<script>
  import Button from "../../Components/base/Button.svelte";
  import Input from "../../Components/base/Input.svelte";
  import { redirectAuthGoogle } from "../../States/app";
  
  const onClickHandler = () => redirectAuthGoogle();
</script>

<div
  class="w-screen h-screen flex-col flex-col-center md:flex-row bg-indigo-400"
>
  <div class="md:w-1/2 flex-col-center w-full">
    <div class="heading">Login</div>
  </div>
  <div class="md:w-1/2 p-2 font-semibold flex-col-center flex-col rounded-lg">
    <div class=" my-2 text-lg">Login using Google</div>
    <button onclick = {onClickHandler} class="border text-white rounded-md p-2 focus:outline-none"
      ><i class="fa-brands mx-1 fa-google"></i>Sign In Using Google</button
    >
  </div>
</div>
