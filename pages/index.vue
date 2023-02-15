<template>
  <div
    class="dark:bg-gray-800 dark:text-white w-full min-h-screen flex items-center justify-center selection:bg-slate-900 selection:text-white dark:selection:bg-white dark:selection:text-slate-900"
  >
    <div class="flex flex-col gap-y-2 items-center">
      <a href="https://alisher_buxoriy.t.me" target="_blank">
        <img
          src="../assets/images/avatar.png"
          class="w-40 h-40 rounded-full shadow-md border-4 border-transparent dark:border-white"
          alt="avatar"
        />
      </a>
      <h1 class="text-3xl mt-2">Alisher Usmonov</h1>
      <h2 class="text-xl">Frontend Developer</h2>
      <ul class="mt-4 flex gap-x-4 text-lg underline">
        <li>
          <a href="https://t.me/alisher_buxoriy" target="_blank">Telegram</a>
        </li>
        <li>
          <a href="https://linkedin.com/in/alisherdev" target="_blank"
            >LinkedIn</a
          >
        </li>
        <li>
          <a href="https://github.com/Alisher-Usmonov" target="_blank"
            >GitHub</a
          >
        </li>
      </ul>
    </div>
    <div
      class="w-10 h-10 absolute top-8 cursor-pointer right-8 rounded-full bg-gray-800 shadow-lg dark:bg-white flex items-center justify-center"
      @click="toggle()"
    >
      <svg
        v-if="isDark"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        class="w-7 h-7 stroke-gray-900"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
        />
      </svg>
      <svg
        v-if="!isDark"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        class="w-7 h-7 stroke-white"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
        />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useToggle, useDark } from "@vueuse/core";

const isDark = useDark();

const toggle = useToggle(isDark);
</script>
