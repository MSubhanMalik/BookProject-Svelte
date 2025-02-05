<script>
  import Book from "../Components/Book.svelte";
</script>

<div class="container">
  <div class="flex-col-center min-h-90 text-4xl font-bold">
    <div class="card h-auto w-auto">
      Welcome to <br /> <b class="text-indigo-400">Book</b>
      <strike class="">Store</strike>
    </div>
  </div>

  <div class="bg-indigo-400 h-90 p-6">
    <h1 class="heading text-center">Surf Across The Internet</h1>
    <div class="h-full flex items-center text-indigo-400">
      <div class="bg-white flex flex-col w-1/2 h-3/4 rounded-xl p-4">
        <label for="" class="text-xl font-bold w-fit">Search by Title</label>
        <input type="text" placeholder="Try by Title" class="input-field" />
        <button onclick={() => {}} class="btn-primary text-xl p-3">Search</button>
      </div>
      <div class = "flex-col-center w-1/2">
        <Book />
      </div>
    </div>
  </div>
</div>
