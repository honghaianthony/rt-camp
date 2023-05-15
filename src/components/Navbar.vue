<script>
import { Icon } from "vue3-carousel";

export default {
    components: {
        Icon,
    },
    data() {
        return {
            showMenu: false,
        };
    },
};
</script>

<template>
    <nav
        class="sticky top-0 w-full bg-white text-black py-6 z-10 rounded-[15px] drop-shadow-lg"
    >
        <div
            class="md:flex md:justify-between md:items-center max-w-screen-2xl mx-auto"
        >
            <div class="flex items-center justify-between">
                <div class="flex space-x-28 items-center">
                    <img src="../assets/logo.png" alt="logo" />
                </div>
                <!--Mobile menu-->
                <div @click="showMenu = !showMenu" class="flex md:hidden">
                    <button
                        type="button"
                        class="text-black hover:text-gray-800 focus:outline-none focus:text-gray-800"
                    >
                        <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                            <path
                                fill-rule="evenodd"
                                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>

            <div
                :class="showMenu ? 'flex' : 'hidden'"
                class="flex-col mt-8 mx-4 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
            >
                <a
                    href="#"
                    class="hover:underline hover:underline-offset-8 hover:decoration-[#1A66FF] hover:decoration-2 font-notosans font-medium"
                    >Our Work</a
                >
                <a
                    href="#"
                    class="hover:underline hover:underline-offset-8 hover:decoration-[#1A66FF] hover:decoration-2 font-notosans font-medium"
                    >Features</a
                >
                <a
                    href="#"
                    class="hover:underline hover:underline-offset-8 hover:decoration-[#1A66FF] hover:decoration-2 font-notosans font-medium"
                    >About Us</a
                >
                <a
                    href="#"
                    class="hover:underline hover:underline-offset-8 hover:decoration-[#1A66FF] hover:decoration-2 font-notosans font-medium"
                    >Contact</a
                >
                <a
                    href="#"
                    class="hover:underline hover:underline-offset-8 hover:decoration-[#1A66FF] hover:decoration-2 font-notosans font-medium"
                    >Customize</a
                >
            </div>
        </div>
    </nav>
</template>
