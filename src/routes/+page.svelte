<script>
  import Input from "../Components/base/Input.svelte";
  import Book from "../Components/Book.svelte";
</script>

<div class="md:container">
  <div class="flex-col-center min-h-90 text-4xl font-bold">
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
        <button onclick={() => {}} class="btn-primary text-xl p-3"
          >Search</button
        >
      </div>
      <div class="flex-col-center md:w-1/2 w-full gap-4">
        <Book />
        <Book />
      </div>
    </div>
  </div>

  <div class="min-h-90 p-6 mt-4 flex-col-center flex-col">
    <h1 class="heading text-indigo-400">Your Favourites</h1>
    <div class="flex min-w-full gap-4 my-3 flex-wrap flex-col-center">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </div>
    <a href="/my-books" class = "btn-primary p-4 shadow-lg">See More</a>
  </div>

</div>
