{#snippet Separator(mobileHide = true)}
  <div
    style="width: .25px;"
    class={`h-7/8 ${mobileHide? "hidden":"flex"} md:flex border opacity-10`}
  ></div>
{/snippet}

{#snippet Icon(icon, label, link)}
  <div class="flex gap-x-2 text-lg items-center justify-start">
    <i class={`text-white ${icon} fa-lg`}></i>
    <a href={link} class="hover:text-white duration-200 cursor-pointer">{label}</a>
  </div>
{/snippet}

<div>
  <div class="flex-col-center">
    <h1 class="heading my-4">Connect with Us Today</h1>
  </div>
  <div class="bg-indigo-400 w-full flex flex-wrap h-64">
    <div class="text-4xl w-full md:w-1/2 flex-col-center">
      <b>Book</b> <span>Store</span>
    </div>
    <div class="md:w-1/2 w-full flex-col-center gap-4">
      {@render Separator()}
      <div class="md:w-64 w-1/2 h-full text-xl flex items-center md:justify-center p-2 flex-col">
        <div class="my-2"><b>Contact Us</b></div>
        <div>Muhammad Subhan</div>
        <div><i class="fa-solid fa-phone text-white"></i> +92 309 6737273</div>
      </div>
      {@render Separator(false)}
      <div class="md:w-64 w-1/2 h-full flex items-center md:justify-center p-2 flex-col">
        <div class="my-2 text-xl"><b>Visit</b></div>
        <div class="font-semibold">
         {@render Icon("fa-solid fa-home", "Home", "/")}
         {@render Icon("fa-solid fa-store", "Store", "/store")}
         {@render Icon("fa-brands fa-linkedin-in", "LinkedIn", "https://www.linkedin.com/in/msubhanmalik/")}
        </div>
      </div>
    </div>
  </div>
</div>
