<template>
    <header
        class="bg-[#F3F4F6] shadow-md flex gap-1 justify-between items-center"
    >
        <div class="w-1/12 flex relative h-[4.6875rem]">
            <a href="#" class="self-center absolute left-4">
                <span>HUANGYZ.ZZ</span>
            </a>
        </div>
        <nav class="w-10/12 h-[4.6875rem] flex justify-center items-center">
            <ul class="">
                <li
                    v-for="(item, index) in navList"
                    :key="index"
                    class="inline-block mr-3 last:mr-0"
                >
                    <a href="#">
                        <span class="flex text-gray-600 hover:text-amber-300">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                />
                            </svg>
                            {{ item }}
                        </span>
                    </a>
                </li>
            </ul>
        </nav>
        <div class="w-1/12 h-[4.6875rem] flex items-center relative">
            <div
                class="absolute right-[5rem] cursor-pointer hover:text-amber-300"
            >
                <svg
                    class="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
            </div>
            <div class="absolute right-7 cursor-pointer hover:text-amber-300">
                <svg
                    class="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue';
let navList: Array<string> = [];

onBeforeMount(() => {
    for (let i = 0; i < 10; i++) {
        navList[i] = '首页' + i;
    }
});
</script>

<style scoped></style>
