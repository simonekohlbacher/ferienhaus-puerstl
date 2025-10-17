<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const phone = ref('')
const message = ref('')

function submitForm() {
  console.log({ name: name.value, email: email.value, message: message.value })
}
</script>


<template>
  <form class="">
    
    <fieldset class="fieldset space-y-4 w-full mx-auto p-6 bg-[var(--color-bg-green)] rounded-lg shadow-lg rounded-box">

    <div>
      <label class="label text-xl">
        <span class="label-text">Name*</span>
      </label>
      <input type="text" placeholder="" required v-model="name" class="input input-bordered w-full bg-[var(--color-offWhite)] rounded-[var(--border-radius)]" />
    </div>

    <div>
      <label class="label text-xl">
        <span class="label-text">E-Mail*</span>
      </label>
      <input type="email" placeholder="" required v-model="email" class="input input-bordered w-full bg-[var(--color-offWhite)] rounded-[var(--border-radius)]" />
    </div>

    <div>
      <label class="label text-xl">
        <span class="label-text">Telefon</span>
      </label>
      <input type="phone" placeholder="" v-model="phone" class="input input-bordered w-full bg-[var(--color-offWhite)] rounded-[var(--border-radius)]" />
    </div>

    <div>
      <label class="label text-xl">
        <span class="label-text">Nachricht*</span>
      </label>
      <textarea placeholder="" v-model="message" required class="textarea textarea-bordered w-full bg-[var(--color-offWhite)] rounded-[var(--border-radius)]"></textarea>
    </div>

    <button type="submit" class="justify-center button button-secondary">Absenden</button>
    </fieldset>
  </form>
</template>

