<script setup>
const userMessage = ref(null);
const chats = ref([]);
const backToBottom = ref(false);
const chatContentRef = ref(null);

const loadChats = () => {
  const chatHistory = localStorage.getItem("history");
  if (chatHistory) {
    chats.value = JSON.parse(chatHistory);
  }
};
onMounted(() => {
  const chatContent = chatContentRef.value;
  chatContent.scrollTop = chatContent.scrollHeight;
  chatContent.addEventListener("scroll", handleScroll);
  loadChats();
  // sync local storage
  window.addEventListener("storage", loadChats);
});
// Remove storage sync event
// ghabl az pak shodn component ejra mishavd - agar event hazf nashavd bad az pak shodn component hm event ejra mishavd
onBeforeUnmount(() => {
  window.removeEventListener("storage", loadChats);
  const chatContent = chatContentRef.value;
  chatContent.removeEventListener("scroll", handleScroll);
});
const addToStorage = () => {
  localStorage.setItem("history", JSON.stringify(chats.value));
};
const sendMessage = () => {
  if (userMessage.value) {
    chats.value.push({
      isUser: true,
      userName: "ALi",
      userProfileImg: "./assets/images/itachi.jpg",
      userMessage: userMessage.value,
      userMessageDate: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    });
    addToStorage();
    userMessage.value = null;
  }
};

const handleScroll = () => {
  const chatContent = chatContentRef.value;
  const isAtBottom = chatContent.scrollHeight - chatContent.scrollTop === chatContent.clientHeight;
  backToBottom.value = !isAtBottom;
};
const scrollToBottom = () => {
  const chatContent = chatContentRef.value;
  chatContent.scrollTo({
    top: chatContent.scrollHeight,
    behavior: 'smooth'
  })
  backToBottom.value = false;
};
</script>

<template>
  <div class="chatbox-wrapper">
    <div class="chatbox-header">
      <span
        class="mdi mdi-chevron-left left-icon"
        role="button"
        @click="$router.go(-1)"
      ></span>
      <div class="chatbox-header__content">
        <div class="chatbox-header__img">
          <img src="@/assets/images/vader.jpg" alt="" />
        </div>
        <div class="chatbox-header__info">
          <div class="chatbox-header__info-title">
            <div class="chatbox-header__type">Group: &nbsp</div>
            <div class="chatbox-header__name">New Group</div>
          </div>
          <div class="chatbox-header__info-members">
            <div class="chatbox-header__info-members-count">10601 Members</div>
            , &ensp;
            <div class="chatbox-header__info-members-online">3 Online</div>
          </div>
        </div>
      </div>
    </div>
    <div class="chatbox-content" ref="chatContentRef">
      <button
        class="back-to-bottom"
        v-if="backToBottom"
        @click="scrollToBottom"
      >
        <span class="mdi mdi-chevron-down down-icon"></span>
      </button>
      <div v-for="(item, i) in chats" :key="i">
        <WidgetsUserMessageCard :items="item" />
      </div>
    </div>
    <div class="chatbox-footer">
      <button class="chatbox-footer__icons chatbox-footer__attach">
        <span class="mdi mdi-paperclip attach-icon"></span>
      </button>
      <div class="chatbox-footer__input-msg">
        <input
          type="text"
          placeholder="Type a message..."
          v-model="userMessage"
          @keyup.enter="sendMessage"
        />
      </div>
      <button
        class="chatbox-footer__icons chatbox-footer__voice"
        v-if="!userMessage"
      >
        <span class="mdi mdi-microphone voice-icon"></span>
      </button>
      <button
        class="chatbox-footer__icons chatbox-footer__voice isMessaging"
        @click="sendMessage"
        v-else
      >
        <span class="mdi mdi-send send-icon" role="button"></span>
      </button>
    </div>
  </div>
</template>
