<script>
  import { createBook, updateBook } from "../../States/app";
  import BaseModal from "../base/BaseModal.svelte";
  import Button from "../base/Button.svelte";
  import Input from "../base/Input.svelte";

  let {
    open = $bindable(),
    onclose,
    mode = "create",
    book = $bindable(),
  } = $props();
  $inspect(book);
  let title = $state(book?.title);
  let image = $state("");
  let publishYear = $state(book?.publishYear);
  let authorName = $state(book?.authorName);
  let description = $state(book?.description);

  const createBookHandler = async (formData) => {
    await createBook(formData);
    open = false
  };

  const updateBookHandler = async (formData) => {
    await updateBook(formData);
    open = false
  };

  let data = $derived({ title, publishYear, authorName, description });
  const onSubmitHandler = () => {
    const bookData = new FormData();
    switch (mode) {
      case "create":
        bookData.append("data", JSON.stringify(data));
        bookData.append("file", image);
        createBookHandler(bookData);
        break;
      case "edit":
        data._id = book._id;
        bookData.append("data", JSON.stringify(data));
        bookData.append("file", image);
        console.log(data);
        updateBookHandler(bookData);
        break;

      default:
        console.log("Internal Frontend Error");
    }

    createBookHandler(book);
  };
</script>

<BaseModal
  title={mode == "create" ? "Create Manually" : "Edit Manually"}
  bind:open
>
  <div class="flex flex-col">
    <Input
      bind:value={title}
      label="Title"
      placeholder="e.g., The Kite Runner..."
      required
      type="text"
    />
    <Input
      bind:value={publishYear}
      label="Year"
      required
      placeholder="e.g., 2025"
      type="number"
    />
    <Input
      bind:value={authorName}
      label="Author Name"
      required
      placeholder="e.g., Mark Manson"
      type="text"
    />
    <Input
      bind:value={description}
      label="Description"
      placeholder="e.g., Written by Mark in 2016,..."
      type="text"
      textarea
      rows="4"
    />

    <div class="font-semibold">Upload Image</div>
    <label for="image" class="my-2 border w-fit p-2">
      <i class="fa fa-upload text-black fa-xl"></i>
      <span class="mx-2 font-semibold"
        >{`${image ? image.name : "Select File"}`}</span
      >
    </label>
    <input
      id="image"
      type="file"
      onchange={(e) => (image = e.target.files[0])}
      class="hidden"
    />
    {#if image}
      <img
        class="rounded-lg border-4"
        src={URL.createObjectURL(image)}
        alt=""
      />
    {/if}
    <div class="ml-auto my-3 flex gap-x-2">
      <Button width="w-16" color="red" onclick={() => (open = false)}
        >Close</Button
      >
      <Button onclick={onSubmitHandler} width="w-16"
        >{mode == "create" ? "Create" : "Edit"}</Button
      >
    </div>
  </div>
</BaseModal>
