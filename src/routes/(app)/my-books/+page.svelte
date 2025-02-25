<script>
  import { onMount } from "svelte";
  import Button from "../../../Components/base/Button.svelte";
  import Book from "../../../Components/Book.svelte";
  import { books, loading, getAllBooks } from "../../../States/app";
  import { Spinner } from "flowbite-svelte";
  import BaseModal from "../../../Components/base/BaseModal.svelte";
  import CreateModal from "../../../Components/Modals/CreateEditModal.svelte";
  import Input from "../../../Components/base/Input.svelte";
  import DeleteModal from "../../../Components/Modals/DeleteModal.svelte";
  import Loader from "../../../Components/Loader.svelte";
  import ChatModal from "../../../Components/Modals/ChatModal.svelte";
  onMount(async () => {
    await getAllBooks();
  });

  let openCreateManual = $state(false);
  let openUpdateManual = $state(false);
  let openChatBox = $state(false)
  let openDelete = $state(false);
  let selectedBook = $state({});
  let openInfo = $state(false);
</script>

<div class="my-4 w-full p-6">
  <div class="flex justify-between">
    <h1 class="heading text-indigo-400">Your Favourites</h1>
    <Button width="w-fit" onclick={() => (openCreateManual = true)}
      >Add Manually</Button
    >
  </div>
  <Loader loading = {$loading}/>

  <div class="flex md:flex-row flex-col p-2">
    {#if openInfo}
      <div
        class="relative md:w-1/2 w-full rounded-xl p-2 py-6 text-justify bg-indigo-400 md:max-h-96"
      >
        <div class="flex p-2 w-full">
          <div class="md:w-1/3 w-1/2 flex justify-center">
            <img
              src={selectedBook?.imageId}
              class="w-auto max-w-full max-h-64"
              alt=""
            />
          </div>
          <div class="md:w-2/3 w-1/2 p-1 px-3">
            <h2 class="heading md:w-fit my-2 text-white">{selectedBook?.title}</h2>
            <div class="title">By: <span>{selectedBook.authorName}</span></div>
            <div class="title">
              Publish Year: <span>{selectedBook.publishYear}</span>
            </div>
            <div class="title hidden md:flex flex-col">
              Description
              <span class="h-48 overflow-auto">{selectedBook.description}</span>
            </div>
          </div>
        </div>
        <div class="title flex md:hidden flex-col">
          Description
          <span>{selectedBook.description}</span>
        </div>
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <div class="absolute top-5 right-2">
          <!-- svelte-ignore a11y_no_static_element_interactions -->
          <i
            onclick={() => {
              openUpdateManual = true;
            }}
            class="cursor-pointer fa-solid fa-pen-to-square fa-xl mx-2"
          ></i>
          <!-- svelte-ignore a11y_no_static_element_interactions -->
          <!-- svelte-ignore a11y_click_events_have_key_events -->
          <i
            onclick={() => {
              openInfo = false;
              selectedBook = {};
            }}
            class="cursor-pointer fa-solid fa-xmark fa-xl text-red-700"
          >
          </i>
        </div>
      </div>
    {/if}
    <div
      class={`flex-col-center w-full ${openInfo ? "md:w-1/2" : "md:w-full"} flex-wrap gap-4 md:gap-16 my-4`}
    >
      {#each $books as book}
        <Book mode="custom" book = {book} image={book?.imageId}>
          <div class="flex gap-x-3 ml-auto">
            <button
              onclick={() => {
                selectedBook = book;
                openInfo = true;
              }}
              aria-label="Info"
              class="cursor-pointer"
            >
              <i class="fa-solid text-green-700 fa-circle-info"></i></button
            >
            <button
              onclick={() => {
                selectedBook = book;
                openChatBox = true;
              }}
              aria-label="Update"
              class="cursor-pointer"
            >
              <i class=" text-blue-400 fas fa-comment"></i></button
            >
            <button
              onclick={() => {
                selectedBook = book;
                openDelete = true;
              }}
              aria-label="Trash"
              class="cursor-pointer"
            >
              <i class="fa-solid text-red-700 fa-trash"></i></button
            >
            <button
              onclick={() => {
                selectedBook = book;
                openUpdateManual = true;
              }}
              aria-label="Update"
              class="cursor-pointer"
            >
              <i class="fa-solid text-slate-400 fa-pen-to-square"></i></button
            >
          </div>
        </Book>
      {/each}
    </div>
  </div>
</div>

{#if openChatBox}
  <ChatModal bind:open={openChatBox} book = {selectedBook}/>
{/if}
{#if openCreateManual}
  <CreateModal bind:open={openCreateManual} />
{/if}
{#if openUpdateManual}
  <CreateModal
    mode="edit"
    bind:open={openUpdateManual}
    bind:book={selectedBook}
  />
{/if}
{#if openDelete}
  <DeleteModal bind:open={openDelete} book={selectedBook} />
{/if}

<style>
  .title {
    @apply font-semibold;
  }
  .title > span {
    @apply font-normal text-gray-700;
  }
</style>
