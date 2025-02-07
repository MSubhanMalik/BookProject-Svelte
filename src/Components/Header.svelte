<script>
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
    <a
      href="/contact"
      class="rounded-xl px-4 text-white hover:bg-white duration-200 hover:text-indigo-400"
    >
      Get In Touch
    </a>
  </div>
  <div class="md:hidden ml-auto text-white">
    <i onclick={() => (mobileOpenMenu = !mobileOpenMenu)} class="fa-solid fa-bars">
  </div>
  {#if mobileOpenMenu == true}
    <div class="w-full flex flex-col items-center gap-4 text-white font-semibold">
      {#each tabs as tab, index}
        <a onclick = {()=> mobileOpenMenu = false} href={tab.link} class="cursor-pointer hover:text-white duration-200"
          >{tab.name}</a
        >
      {/each}
    </div>
  {/if}
</header>
