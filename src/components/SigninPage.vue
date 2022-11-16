<script setup>
import { onMounted, ref } from 'vue'
import { usePageStore } from '../stores/page'
import { getCookie, getCSRFIfNotExist } from '../assets/modules'
import axios from 'axios'

onMounted(() => {
    const store = usePageStore()
    store.signinPage()
})

const user_email = ref('')
const password = ref('')
const user_type = ref('user')

const sendCredentials = async () => {
    let csrftoken_temp = getCookie('csrftoken')
    const csrftoken = await getCSRFIfNotExist(csrftoken_temp)

    let data = {
        user_email: user_email.value,
        password: password.value,
        user_type: user_type.value,
    }
    let config = {
        headers: {
            'X-CSRFToken': csrftoken,
        },
        mode: 'same-origin',
        withCredentials: true,
    }

    await axios
        .post('http://www.ace.project/api/login/', data, config)
        .then(function (response) {
            alert('登入成功')
            window.location.href = 'http://app.ace.project/'
        })
        .catch(function (error) {
            alert('登入失敗')
        })
}
</script>

<template>
    <!-- ====== Banner Section Start -->
    <div class="relative z-10 bg-primary overflow-hidden">
        <div>
            <span class="absolute top-0 left-0 z-[-1]">
                <svg width="495" height="470" viewBox="0 0 495 470" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="55" cy="442" r="138" stroke="white" stroke-opacity="0.04" stroke-width="50" />
                </svg>
            </span>
            <span class="absolute top-0 right-0 z-[-1]">
                <svg width="493" height="470" viewBox="0 0 493 470" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="49" cy="470" r="39" stroke="white" stroke-opacity="0.04" stroke-width="20" />
                    <path
                        d="M222.393 226.701L272.808 213.192L259.299 263.607L222.393 226.701Z"
                        stroke="white"
                        stroke-opacity="0.06"
                        stroke-width="13"
                    />
                </svg>
            </span>
        </div>
    </div>
    <!-- ====== Banner Section End -->

    <!-- ====== Forms Section Start -->
    <section class="bg-[#F4F7FF] py-6 lg:py-12" style="margin-top: 10rem; margin-bottom: 10rem">
        <div class="container">
            <div class="flex flex-wrap -mx-4">
                <div class="w-full px-4">
                    <div
                        class="max-w-[525px] mx-auto text-center bg-white rounded-lg relative overflow-hidden py-14 px-8 sm:px-12 md:px-[60px] wow fadeInUp"
                        data-wow-delay=".15s"
                    >
                        <div class="mb-10 text-center text-2xl font-bold">登入</div>
                        <div class="mb-6">
                            <input
                                v-model="user_email"
                                type="email"
                                placeholder="電子信箱"
                                class="w-full rounded-md border bordder-[#E9EDF4] py-3 px-5 bg-[#FCFDFE] text-base text-body-color placeholder-[#ACB6BE] outline-none focus-visible:shadow-none focus:border-primary transition"
                            />
                        </div>
                        <div class="mb-6">
                            <input
                                v-model="password"
                                type="password"
                                placeholder="密碼"
                                class="w-full rounded-md border bordder-[#E9EDF4] py-3 px-5 bg-[#FCFDFE] text-base text-body-color placeholder-[#ACB6BE] outline-none focus-visible:shadow-none focus:border-primary transition"
                            />
                        </div>

                        <div class="mb-8">
                            <button
                                @click="sendCredentials()"
                                class="w-full rounded-md border bordder-primary py-3 px-5 bg-primary text-base text-white cursor-pointer hover:shadow-md transition duration-300 ease-in-out"
                            >
                                登入
                            </button>
                        </div>
                        <p class="text-base text-[#adadad]">
                            還不是會員?
                            <router-link to="/signup" class="text-primary hover:underline"> 註冊 </router-link>
                        </p>

                        <div>
                            <span class="absolute top-1 right-1">
                                <svg
                                    width="40"
                                    height="40"
                                    viewBox="0 0 40 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle
                                        cx="1.39737"
                                        cy="38.6026"
                                        r="1.39737"
                                        transform="rotate(-90 1.39737 38.6026)"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="1.39737"
                                        cy="1.99122"
                                        r="1.39737"
                                        transform="rotate(-90 1.39737 1.99122)"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="13.6943"
                                        cy="38.6026"
                                        r="1.39737"
                                        transform="rotate(-90 13.6943 38.6026)"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="13.6943"
                                        cy="1.99122"
                                        r="1.39737"
                                        transform="rotate(-90 13.6943 1.99122)"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="25.9911"
                                        cy="38.6026"
                                        r="1.39737"
                                        transform="rotate(-90 25.9911 38.6026)"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="25.9911"
                                        cy="1.99122"
                                        r="1.39737"
                                        transform="rotate(-90 25.9911 1.99122)"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="38.288"
                                        cy="38.6026"
                                        r="1.39737"
                                        transform="rotate(-90 38.288 38.6026)"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="38.288"
                                        cy="1.99122"
                                        r="1.39737"
                                        transform="rotate(-90 38.288 1.99122)"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="1.39737"
                                        cy="26.3057"
                                        r="1.39737"
                                        transform="rotate(-90 1.39737 26.3057)"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="13.6943"
                                        cy="26.3057"
                                        r="1.39737"
                                        transform="rotate(-90 13.6943 26.3057)"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="25.9911"
                                        cy="26.3057"
                                        r="1.39737"
                                        transform="rotate(-90 25.9911 26.3057)"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="38.288"
                                        cy="26.3057"
                                        r="1.39737"
                                        transform="rotate(-90 38.288 26.3057)"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="1.39737"
                                        cy="14.0086"
                                        r="1.39737"
                                        transform="rotate(-90 1.39737 14.0086)"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="13.6943"
                                        cy="14.0086"
                                        r="1.39737"
                                        transform="rotate(-90 13.6943 14.0086)"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="25.9911"
                                        cy="14.0086"
                                        r="1.39737"
                                        transform="rotate(-90 25.9911 14.0086)"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="38.288"
                                        cy="14.0086"
                                        r="1.39737"
                                        transform="rotate(-90 38.288 14.0086)"
                                        fill="#3056D3"
                                    />
                                </svg>
                            </span>
                            <span class="absolute left-1 bottom-1">
                                <svg
                                    width="29"
                                    height="40"
                                    viewBox="0 0 29 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle
                                        cx="2.288"
                                        cy="25.9912"
                                        r="1.39737"
                                        transform="rotate(-90 2.288 25.9912)"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="14.5849"
                                        cy="25.9911"
                                        r="1.39737"
                                        transform="rotate(-90 14.5849 25.9911)"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="26.7216"
                                        cy="25.9911"
                                        r="1.39737"
                                        transform="rotate(-90 26.7216 25.9911)"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="2.288"
                                        cy="13.6944"
                                        r="1.39737"
                                        transform="rotate(-90 2.288 13.6944)"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="14.5849"
                                        cy="13.6943"
                                        r="1.39737"
                                        transform="rotate(-90 14.5849 13.6943)"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="26.7216"
                                        cy="13.6943"
                                        r="1.39737"
                                        transform="rotate(-90 26.7216 13.6943)"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="2.288"
                                        cy="38.0087"
                                        r="1.39737"
                                        transform="rotate(-90 2.288 38.0087)"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="2.288"
                                        cy="1.39739"
                                        r="1.39737"
                                        transform="rotate(-90 2.288 1.39739)"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="14.5849"
                                        cy="38.0089"
                                        r="1.39737"
                                        transform="rotate(-90 14.5849 38.0089)"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="26.7216"
                                        cy="38.0089"
                                        r="1.39737"
                                        transform="rotate(-90 26.7216 38.0089)"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="14.5849"
                                        cy="1.39761"
                                        r="1.39737"
                                        transform="rotate(-90 14.5849 1.39761)"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="26.7216"
                                        cy="1.39761"
                                        r="1.39737"
                                        transform="rotate(-90 26.7216 1.39761)"
                                        fill="#3056D3"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- ====== Forms Section End -->
</template>

<style></style>
