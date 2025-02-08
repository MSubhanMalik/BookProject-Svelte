<script>
  import { deleteBook } from "../../States/app";
  import BaseModal from "../base/BaseModal.svelte";
  import Button from "../base/Button.svelte";
  let { open = $bindable(), book } = $props();

  const deleteHandler = async(_id) => {
    open = false;
    await deleteBook(_id);
  }
</script>

<BaseModal bind:open title="Delete the Book">
  <div class = "flex flex-col gap-2 mt-2">
    <div class = "text-center text-xl my-4">Are you sure, you want to delete the book?</div>
    <div class = "flex gap-x-2 ml-auto">
        <Button onclick = {()=> open = false} width = "w-16">Close</Button>
        <Button onclick = {()=> deleteHandler(book._id)} color = "red"  width = "w-16">Delete</Button>
    </div>
  </div>
</BaseModal>
