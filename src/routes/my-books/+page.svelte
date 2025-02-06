<script>
  import Book from "../../Components/Book.svelte";
</script>

<div class="my-4 p-6">
  <div class = "flex justify-between">
    <h1 class="heading text-indigo-400">Your Favourites</h1>
    <button class="btn-primary p-2">Add Manually</button>
  </div>
  <div class="flex-col-center flex-wrap gap-4 md:gap-16 my-4">
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
  </div>
</div>
