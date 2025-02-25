<script>
  import { Avatar } from "flowbite-svelte";
  import BaseModal from "../base/BaseModal.svelte";
  import Button from "../base/Button.svelte";
  import Input from "../base/Input.svelte";
  import { startChat } from "./../../States/app.js";
  import { user } from "./../../States/app.js";
  let { open = $bindable(), book } = $props();
  let value = $state("");
  let conversations = $state([]);
  let submit = $state(false);

  const chatHandler = async () => {
    conversations.push({ value: value, type: "question" });
    let answer = await startChat(book.title, value);
    conversations.push({ value: answer, type: "answer" });
  };
</script>

<BaseModal title={`${book.title ? book.title : "AI for Book"}`} bind:open>
  <div class="relative  h-96">
    <div class = " h-5/6 gap-y-2 flex-col flex">
      {#if conversations.length > 0}
        {#each conversations as response}
          <div class="flex gap-x-2">
            <div class="w-16">
              {#if response.type == "answer"}
                <i class="fa-solid fa-robot p-1 text-indigo-400 border-indigo-400 border rounded-full" />
              {:else}
                <Avatar rounded={true} size="sm" />
              {/if}
            </div>
            <div class={`${response.type == "question" ? "border" : "bg-gray-100"} w-full rounded-lg p-1`}>
              {response.value}
            </div>
          </div>
        {/each}
      {:else}
        <div class="bg-indigo-400 rounded-lg text-white h-32 flex-col-center heading">
          Start Chat
        </div>
      {/if}
    </div>
    <div class="absolute w-full bottom-2 flex-col-center gap-x-2 mt-auto">
      <Input width="w-full" bind:value />
      <!-- svelte-ignore a11y_consider_explicit_label -->
      <button
        class="w-fit h-fit ml-auto"
        onclick={() => {
          chatHandler();
          value = "";
        }}
      >
        <i class="fa-solid fa-paper-plane"></i>
      </button>
    </div>
  </div>
</BaseModal>
