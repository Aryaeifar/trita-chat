<script setup>
import { useRoute, useRouter } from "vue-router";
const isChatOpen = ref(false);
const isMobile = ref(window.innerWidth <= 1056);
const router = useRouter();
const route = useRoute();

const chatLists = ref([]);
onMounted(() => {
  if (route.params.id) {
    isChatOpen.value = true;
  }
});
const openChat = (chat) => {
  if (isMobile.value) {
    isChatOpen.value = true;
    router.push({
      path: `/${chat.link}`,
      query: { groupName: chat.title },
    });
  } else {
    router.push({
      path: `/${chat.link}`,
      query: { groupName: chat.title },
    });
  }
};

const isModalOpened = ref(false);

const openModal = () => {
  isModalOpened.value = true;
};
const closeModal = () => {
  console.log("aaa");
  isModalOpened.value = false;
};
const submitChat = (newChat) => {
  chatLists.value.push(newChat);
  localStorage.setItem("chatLists", JSON.stringify(chatLists.value));
  closeModal();
};
const handleResize = () => {
  isMobile.value = window.innerWidth <= 1056;
  if (!isMobile.value) {
    isChatOpen.value = true;
  } else if (!route.params.id) {
    isChatOpen.value = false;
  }
};

onMounted(() => {
  const storedChats = localStorage.getItem("chatLists");
  if (storedChats) {
    chatLists.value = JSON.parse(storedChats);
  }

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
      <div class="chat-list__items" v-if="chatLists.length">
        <div
          class="chat-list__item"
          v-for="(chat, i) in chatLists"
          :key="i"
          @click="openChat(chat)"
        >
          <WidgetsUserChatCard :items="chat" />
        </div>
      </div>
      <div
        v-else
        style="
          display: flex;
          justify-content: center;
          align-items: center;
          height: 89vh;
        "
      >
        Create new chat
      </div>
    </div>
    <div v-if="!isMobile || isChatOpen" class="chat-box">
      <NuxtPage />
    </div>
  </div>
  <WidgetsNewChat
    :isOpen="isModalOpened"
    @modal-close="closeModal"
    @submit="submitChat"
    name="first-modal"
  />
</template>
