<script>
  import Input from "../../Components/base/Input.svelte";
  import Book from "../../Components/Book.svelte";
  let books = [];
  let showFilters = $state(false);
</script>

<div class="py-4">
  <h1 class="heading">Google Book Store</h1>
  <div class="w-screen min-h-90 md:flex p-4 gap-x-2 my-2">
    <div class="md:w-1/4 w-full md:block p-2 h-full">
      <form class="relative bg-indigo-400 p-2 min-h-16 md:h-auto rounded-lg">
        <i
          onclick={() => (showFilters = !showFilters)}
          class="fa-solid cursor-pointer fa-filter text-white absolute right-2 top-7 fa-xl"
        ></i>
        <div class={`flex-col ${showFilters ? "flex" : "hidden"}`}>
          <Input
            type="text"
            label="Book Title"
            placeholder="pride and prejudice..."
          />
          <Input type="text" label="Author Name" placeholder="bill gates..." />
          <Input type="text" label="Category" placeholder="fiction..." />
          <button class="btn-white p-2 self-end justify-self-end">Search</button
          >
        </div>
      </form>
    </div>

    {#if books.length == 0}
      <div class="bg-indigo-200 gap-x-4 rounded-lg w-full md:w-3/4 h-64 flex-col-center">
        <img
          src="https://static-00.iconduck.com/assets.00/pensive-face-emoji-2048x1974-ds6faboo.png"
          alt=""
          class = "w-16 h-16"
        />
        <h2 class = "heading">Oopss.... No books found!</h2>
      </div>
    {:else}
      <div
        class="md:w-3/4 w-full min-h-96 p-2 flex-col-center flex gap-4 flex-wrap h-full"
      >
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
      </div>
    {/if}
  </div>
</div>
