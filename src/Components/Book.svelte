<script>
  const book = {
    title: "Pride and Prejudice",
    date: "2024-04-20",
    author: "Muhammad Subhan",
  };
</script>

<div class="shadow-xl h-60 md:h-64 w-40 md:w-48 text-black bg-white">
  <div class="h-1/2">
    <img
      class="h-full w-full object-cover"
      src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D"
      alt=""
    />
  </div>
  <div class = "flex h-1/2 gap-2 p-2 flex-col items-start">
    <div class = "line-clamp-1">
      <b>Title:</b>
      <span>{book.title}</span>
    </div>
    <div class = "line-clamp-1">
      <b>Author:</b>
      <span>{book.author}</span>
    </div>
    <div class = "line-clamp-1">
      <b>Date:</b>
      <span>
        {book.date}
      </span>
    </div>
    <button class = "btn-primary w-fit px-2 self-end p-1 text-xs">Add</button>
  </div>
</div>

<style>
@import "tailwindcss";
  div > span {
    @apply text-gray-500;
  }
</style>
