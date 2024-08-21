<script setup>
const route = useRoute();
const userMessage = ref(null)
const isMessage = ref(false)
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
      <WidgetsUserMessageCard />
       <WidgetsUserMessageCard :isUser="true"/>
    </div>
    <div class="chatbox-footer">
      <button class="chatbox-footer__icons chatbox-footer__attach">
        <span class="mdi mdi-paperclip attach-icon"></span>
      </button>
      <div class="chatbox-footer__input-msg">
        <input type="text" placeholder="Type a message..." v-model="userMessage" />
      </div>
      <button :class="['chatbox-footer__icons chatbox-footer__voice', userMessage ? 'isMessaging' : '']">
        <span :class="['mdi ' , userMessage ? 'mdi-send send-icon' : 'mdi-microphone voice-icon']"></span>
      </button>
    </div>
  </div>
</template>
<style>
.isMessaging {
  background-color: #4D96F5 !important;
}
</style>