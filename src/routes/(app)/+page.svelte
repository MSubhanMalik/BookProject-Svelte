<script>
  import { onMount } from "svelte";
  import Button from "../../Components/base/Button.svelte";
  import Input from "../../Components/base/Input.svelte";
  import Book from "../../Components/Book.svelte";
  import Loader from "../../Components/Loader.svelte";
  import {
    books,
    getAllBooks,
    getGoogleBooks,
    loading,
    sanitizeData,
  } from "../../States/app";
  onMount(getAllBooks());
  let searchResults = $state([]);
  let title = $state("");

  const searchBooksHandler = async () => {
    let bookData = await getGoogleBooks(title);
    let books = bookData.data.items.slice(0, 2);
    searchResults = sanitizeData(books);
  };
</script>

<Loader text={false} style="fixed bottom-2 right-2" />

<div class="md:container">
  <div class="flex-col-center min-h-96 text-4xl font-bold">
    <div class="card h-auto w-auto">
      Welcome to <br /> <b class="text-indigo-400">Book</b>
      <strike class="">Store</strike>
    </div>
  </div>

  <div class="bg-indigo-400 h-auto md:h-98 p-6 w-full">
    <h1 class="heading text-center my-2 text-white">
      Surf Across The Internet
    </h1>
    <div
      class="h-full flex flex-wrap gap-4 md:flex-nowrap items-center text-indigo-400"
    >
      <div class="bg-white flex flex-col md:w-1/2 w-full h-3/4 rounded-xl p-4">
        <label for="" class="text-xl font-bold w-fit">Search by Title</label>
        <input
          bind:value={title}
          type="text"
          placeholder="Try by Title"
          class="input-field"
        />
        <Button onclick={searchBooksHandler} padding="p-3">Search</Button>
      </div>
      <div class="flex-col-center md:w-1/2 w-full gap-4">
        {#if searchResults?.length > 0}
          {#each searchResults as book}
            <Book {book} mode="custom" />
          {/each}
        {:else}
          <div class="heading text-white border p-2 rounded-lg">
            Try it yourself!
          </div>
        {/if}
      </div>
    </div>
  </div>

  <div class="min-h-90 p-6 mt-4 flex-col-center flex-col">
    <h1 class="heading text-indigo-400">Your Favourites</h1>
    <div class="flex min-w-full gap-4 my-3 flex-wrap flex-col-center">
      {#each $books.slice(0, 8) as book}
        <Book {book} mode="custom" />
      {/each}
    </div>
    <a href="/my-books" class="btn-primary p-4 shadow-lg">See More</a>
  </div>
</div>
