<script setup>
import { useRoute, useRouter } from "vue-router";
const isChatOpen = ref(false);
const isMobile = ref(window.innerWidth <= 1056);
const router = useRouter();
const route = useRoute();

const chatLists = [
  {
    img: "./assets/images/vader.jpg",
    title: "Arya",
    date: "Jun 22",
    lastMessanger: "t-learning",
    msg: "Lorem, ipsum dolor sit amet ipsum doloipsum dolo",
    unreadMsg: "4332",
    type: "Group",
    link: "1",
    messages: [
      {
        name: "eclarke",
        message: "ok let's make this happen",
        timestamp: 1459361875337,
      },
      {
        name: "eclarke",
        message: "ok let's make this happen",
        timestamp: 1459361875337,
      },
      {
        name: "eclarke",
        message: "ok let's make this happen",
        timestamp: 1459361875337,
      },
    ],
  },
  {
    img: "./assets/images/itachi.jpg",
    title: "Arya",
    date: "Jun 22",
    lastMessanger: "Sasuke",
    msg: "Lorem, ipsum dolor sit amet ipsum doloipsum dolo",
    unreadMsg: "2",
    type: "question",
    link: "2",
  },
  {
    img: "./assets/images/mika.jpg",
    title: "Arya",
    date: "Jun 22",
    lastMessanger: "Eren",
    msg: "Lorem, ipsum dolor sit amet ipsum doloipsum dolo",
    type: "Question",
    link: "3",
  },
  {
    img: "./assets/images/luke.png",
    title: "Arya",
    date: "Jun 22",
    lastMessanger: "luke",
    msg: "Lorem, ipsum dolor sit amet ipsum doloipsum dolo",
    unreadMsg: "22",
    type: "Ticket",
    link: "4",
  },
];
onMounted(() => {
  if (route.params.id) {
    isChatOpen.value = true;
  }
});
const openChat = (link) => {
  if (isMobile.value) {
    isChatOpen.value = true;
    router.push(`/${link}`);
  } else {
    router.push(`/${link}`);
  }
};

// const isModalOpened = ref(false);

// const openModal = () => {
//   isModalOpened.value = true;
// };
// const closeModal = () => {
//   isModalOpened.value = false;
// };
// const submitHandler = () => {
//  console.log('aaa')
// };
const handleResize = () => {
  isMobile.value = window.innerWidth <= 1056;
  if (!isMobile.value) {
    isChatOpen.value = true;
  } else if (!route.params.id) {
    isChatOpen.value = false;
  }
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
  handleResize();

  if (route.params.id) {
    isChatOpen.value = true;
  }
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});
watch(route, () => {
  if (isMobile.value) {
    isChatOpen.value = !!route.params.id;
  }
});
</script>

<template>
  <div class="chat-wrapper">
    <div v-if="!isMobile || !isChatOpen" class="chat-list">
      <div class="chat-list__header">
        <div class="chat-list__header-search">
          <input type="text" placeholder="Search" />
          <span class="mdi mdi-magnify search-icon"></span>
          <span class="mdi mdi-filter-variant filter-icon"></span>
        </div>
        <div class="chat-list__header-group">
          <button class="chat-list__header-group-btn" @click="openModal">
            <span
              class="mdi mdi-account-multiple-plus-outline group-icon"
            ></span>
          </button>
        </div>
      </div>
      <div class="chat-list__items">
        <div
          class="chat-list__item"
          v-for="(chat, i) in chatLists"
          :key="i"
          @click="openChat(chat.link)"
        >
          <WidgetsUserChatCard :items="chat" />
        </div>
      </div>
    </div>
    <div v-if="!isMobile || isChatOpen" class="chat-box">
      <NuxtPage />
    </div>
  </div>
  <!-- <WidgetsNewChat
    :isOpen="isModalOpened"
    @modal-close="closeModal"
    @submit="submitHandler"
    name="first-modal"
  /> -->
</template>

