<script>
  import { logoutUser, user } from "../States/app";

  const tabs = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "My Books",
      link: "/my-books",
    },
    {
      name: "Store",
      link: "/store",
    },
  ];
  let mobileOpenMenu = $state(false);
</script>

<header class={"sticky bg-indigo-400 flex flex-wrap p-4 text-lg"}>
  <div>
    <b class="font-bold poppins">Book</b>
    <span>Store</span>
  </div>
  <div class="md:flex ml-auto font-semibold hidden gap-4">
    {#each tabs as tab, index}
      <a href={tab.link} class="cursor-pointer hover:text-white duration-200"
        >{tab.name}</a
      >
    {/each}
    {#if $user != null}
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_missing_attribute -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <div onclick = {async()=> await logoutUser()} class="cursor-pointer hover:text-white duration-200"
        >Log Out</div
      >
    {/if}
    <a
      href="/contact"
      class="rounded-xl px-4 text-white hover:bg-white duration-200 hover:text-indigo-400"
    >
      Get In Touch
    </a>
  </div>
  <div class="md:hidden ml-auto text-white">
    <i
      onclick={() => (mobileOpenMenu = !mobileOpenMenu)}
      class="fa-solid fa-bars"
    >
    </i>
  </div>
  {#if mobileOpenMenu == true}
    <div
      class="w-full flex flex-col items-center gap-4 text-white font-semibold"
    >
      {#each tabs as tab, index}
        <a
          onclick={() => (mobileOpenMenu = false)}
          href={tab.link}
          class="cursor-pointer hover:text-white duration-200">{tab.name}</a
        >
      {/each}
      {#if $user != null}
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_missing_attribute -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <div onclick = {async()=> await logoutUser()} class="cursor-pointer hover:text-white duration-200"
        >Log Out</div
      >
    {/if}
    </div>
  {/if}
</header>
