<script>
  import { onMount } from "svelte";
  import Button from "../Components/base/Button.svelte";
  import Input from "../Components/base/Input.svelte";
  import Book from "../Components/Book.svelte";
  import { books, getAllBooks, loading } from "../States/app";
  import Loader from "../Components/Loader.svelte";
  onMount(getAllBooks())
</script>

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
        <input type="text" placeholder="Try by Title" class="input-field" />
        <Button padding="p-3">Search</Button>
      </div>
      <div class="flex-col-center md:w-1/2 w-full gap-4">
       <Book />
       <Book />
      </div>
    </div>
  </div>

  <div class="min-h-90 p-6 mt-4 flex-col-center flex-col">
    <h1 class="heading text-indigo-400">Your Favourites</h1>
    <Loader />
    <div class="flex min-w-full gap-4 my-3 flex-wrap flex-col-center">
        {#each $books.slice(0, 8) as book}
          <Book book = {book} mode="custom">
            <div class="flex gap-x-3 ml-auto">
              <button aria-label="Info" class="cursor-pointer">
              <!-- Remove these Icons -->
                <i class="fa-solid text-green-700 fa-circle-info"></i></button
              >
              <button aria-label="Trash" class="cursor-pointer">
                <i class="fa-solid text-red-700 fa-trash"></i></button
              >
            </div>
          </Book>
        {/each}
    </div>
    <a href="/my-books" class="btn-primary p-4 shadow-lg">See More</a>
  </div>
</div>
