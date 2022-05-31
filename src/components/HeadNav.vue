<template>
    <section>
        <header class="navbar bg-base-100 absolute header">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabindex="0"
                        class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li><a>首页</a></li>
                        <li tabindex="0">
                            <a class="justify-between">
                                Parent
                                <svg
                                    class="fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                                    />
                                </svg>
                            </a>
                            <ul class="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <a class="logo">HUANGYZ</a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="p-0 header-nav">
                    <li class=""><a>首页</a></li>
                    <li tabindex="0">
                        <a> 归档 </a>
                        <ul class="sub-ul">
                            <li><a>文章</a></li>
                            <li><a>书单</a></li>
                            <li><a>文章</a></li>
                            <li><a>书单</a></li>
                        </ul>
                    </li>
                    <li><a>清单</a></li>
                    <li><a>留言板</a></li>
                </ul>
            </div>
            <div class="navbar-end mr-4">
                <div class="relative">
                    <span
                        class="absolute inset-y-0 left-0 flex items-center pl-2"
                    >
                        <button
                            type="submit"
                            title="Search"
                            class="p-1 focus:outline-none focus:ring"
                        >
                            <svg
                                fill="currentColor"
                                viewBox="0 0 512 512"
                                class="search-svg"
                            >
                                <path
                                    d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"
                                ></path>
                            </svg>
                        </button>
                    </span>
                    <input
                        type="search"
                        name="Search"
                        placeholder="搜索..."
                        class="search"
                    />
                </div>
            </div>
        </header>
        <div
            class="hero min-h-screen"
            style="background-image: url(https://api.2heng.xin/cover/)"
        >
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold">Hello World!</h1>
                    <p class="mb-5">
                        你才25岁,你可以成为任何你想要成为的.
                        <span>---《步履不停》</span>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.header {
    @apply bg-[transparent] duration-500;
}

.header:hover {
    @apply bg-base-100;
}
.header-nav {
    @apply flex items-center hidden duration-500;
}

.header-nav > li {
    @apply m-0 p-0 cursor-pointer;
}
:where(.header:hover) .header-nav {
    @apply flex;
}

:where(.header-nav, li) > a {
    @apply m-0 pt-3 pb-3 pr-4 pl-3 text-[#1F294A] relative z-50;
}

:where(.header-nav, li) > a:hover,
:where(.header-nav, li) > a:active {
    @apply bg-[#E8E9EB] rounded-lg;
}
/* hidden */
.sub-ul {
    @apply bg-[#fff] hidden absolute top-16 shadow-sub-ul rounded-md;
}

:where(.header-nav li:hover) > .sub-ul {
    @apply flex flex-col;
}

.sub-ul li {
    @apply mb-3 mx-1;
}

.sub-ul li:first-child {
    @apply mt-4;
}

.sub-ul::before {
    @apply absolute content-[''] top-[-18px] left-[22px] border-[#fff]  border-[10px] border-solid border-x-[transparent] border-t-[#fff];
}

/* bg-[transparent] w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900 */
.search {
    @apply bg-[transparent] w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900;
}

/* w-4 h-4 text-[#fff] dark:text-gray-100 */
.search-svg {
    @apply w-4 h-4 text-[#fff] dark:text-gray-100 duration-500;
}

:where(.header:hover) .search-svg {
    @apply text-[#64748b];
}

.logo {
    @apply btn btn-ghost normal-case text-xl text-[#fff] duration-500;
}

:where(.header:hover) .logo {
    @apply text-[#1e293b];
}
</style>
