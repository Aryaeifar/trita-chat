<script setup>
const userMessage = ref(null);
const chats = [
  {
    isUser: true,
    userName: "ALi",
    userProfileImg: "./assets/images/itachi.jpg",
    userMessage: "slm chtori?",
    userMessageDate: "22:25",
  },
  {
    isUser: false,
    userName: "iman",
    userProfileImg: "./assets/images/mika.jpg",
    userMessage: "khobm",
    userMessageDate: "22:25",
  },
];
const sendMessage  = () => {
  console.log('aaa')
  
}
</script>

<style lang="scss" scoped></style>
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
    <div class="chatbox-content">
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
        <span class="mdi mdi-send send-icon"></span>
      </button>
    </div>
  </div>
</template>
