<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
    <footer class="pt-20 pb-8 bg-white space-y-8">
        <div
            class="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8"
        >
            <div class="flex flex-col space-y-6">
                <p class="font-notosans font-semibold text-2xl">About</p>
                <p class="font-notosans font-normal text-xl max-w-[330px]">
                    providing the best lead generation solutions in accordance
                    with your needs
                </p>
                <img
                    src="../assets/viplogo.png"
                    :width="191"
                    :height="71"
                    alt="Vip Logo"
                />
            </div>
            <div class="flex flex-col space-y-6">
                <p class="font-notosans font-semibold text-2xl">Company</p>
                <p class="font-notosans text-xl font-normal">Our Work</p>
                <p class="font-notosans text-xl font-normal">Features</p>
                <p class="font-notosans text-xl font-normal">About Us</p>
                <p class="font-notosans text-xl font-normal">Contact</p>
            </div>
            <div class="flex flex-col space-y-6">
                <p class="font-notosans font-semibold text-2xl">Resources</p>
                <p class="font-notosans text-xl font-normal">Tutorials</p>
                <p class="font-notosans text-xl font-normal">Presskit</p>
                <p class="font-notosans text-xl font-normal">rtLearn</p>
                <p class="font-notosans text-xl font-normal">rtMedia</p>
            </div>
            <div class="flex flex-col space-y-6">
                <p class="font-notosans font-semibold text-2xl">Newsletter</p>
                <p class="font-notosans font-normal text-xl">
                    Subscribe to our newsletter and get a few email updates
                    every month.
                </p>
                <div class="flex w-80">
                    <input
                        placeholder="Email"
                        type="Email"
                        class="font-notosans border border-black border-solid rounded-tl-[15px] rounded-bl-[15px] px-4 py-3"
                    />
                    <div
                        class="bg-black rounded-tr-[15px] rounded-br-[15px] flex justify-center items-center"
                    >
                        <img
                            src="../assets/send.png"
                            alt="Send"
                            class="px-2 py-1"
                        />
                    </div>
                </div>
                <div class="flex space-x-8 items-center">
                    <Icon icon="mdi:facebook" class="text-black w-12 h-12" />
                    <Icon icon="mdi:github" class="text-black w-12 h-12" />
                    <Icon icon="mdi:linkedin" class="text-black w-12 h-12" />
                </div>
            </div>
        </div>
        <div
            class="max-w-screen-2xl mx-auto flex flex-col items-center justify-center lg:flex-row lg:justify-between"
        >
            <p class="text-black opacity-50 font-notosans text-sm font-normal">
                © rtCamp Inc., since 2009. All rights reserved.
            </p>
            <p class="text-black opacity-50 font-notosans text-sm font-normal">
                Terms of service | Privacy Policy
            </p>
        </div>
    </footer>
</template>
