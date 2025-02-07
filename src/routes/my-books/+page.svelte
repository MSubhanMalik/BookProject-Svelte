<script>
  import { onMount } from "svelte";
  import Button from "../../Components/base/Button.svelte";
  import Book from "../../Components/Book.svelte";
  import { books, loading, getAllBooks } from "../../States/app";
  import { Spinner } from "flowbite-svelte";
  import BaseModal from "../../Components/base/BaseModal.svelte";
  onMount(async () => {
    await getAllBooks();
  });
</script>

<div class="my-4 w-full p-6">
  <div class="flex justify-between">
    <h1 class="heading text-indigo-400">Your Favourites</h1>
    <Button width="w-fit">Add Manually</Button>
    <BaseModal />
  </div>
  <div class="flex-col-center flex-wrap gap-4 md:gap-16 my-4">
    {#each $books as book}
      <Book mode="custom">
        <div class="flex gap-x-3 ml-auto">
          <button aria-label="Info" class="cursor-pointer">
            <i class="fa-solid text-green-700 fa-circle-info"></i></button
          >
          <button aria-label="Trash" class="cursor-pointer">
            <i class="fa-solid text-red-700 fa-trash"></i></button
          >
        </div>
      </Book>
    {/each}
  </div>
</div>
