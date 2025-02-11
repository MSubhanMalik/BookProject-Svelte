<script>
  import Input from "../../Components/base/Input.svelte";
</script>

<div class="min-h-90 w-full">
  <h1 class="heading">Contact Us</h1>
  
  <div class = "h-96 w-full flex-col-center bg-indigo-400 heading text-white">
    Under Construction!!
  </div>
  <div class = "flex w-full">
  <div class="hidden h-90 w-1/2 bg-indigo-400  gap-x-4">
    <div class="gap-x-4 flex-col-center">
      <div class="h-2/3">
        <form action="">
          <Input type="text" label="Name" placeholder="John Doe" />
          <Input
            type="number"
            label="Contact Number"
            placeholder="+92 300 0000 000"
          />
          <Input type="email" label="Email" placeholder="example@test.com" />
        </form>
      </div>
      <div class="h-2/3 flex flex-col gap-4">
        <Input
          type="text"
          label="Message"
          placeholder="Send your message..."
          textarea
          rows={4}
        />
        <button class="btn-white w-fit p-2">Send</button>
      </div>
    </div>
  </div>
  <div class="w-1/2 border"></div>
</div>
</div>
