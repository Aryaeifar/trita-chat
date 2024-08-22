<script setup>
const props = defineProps({
  items: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <div :class="['message-card', { 'message-card--user': items.isUser }]">
    <div class="message-card__user-img">
      <img :src="items.userProfileImg" alt="" />
    </div>
    <div class="message-card__user-msg">
      <div class="message-card__user-msg-item">
        <div class="message-card__header">
          <div class="message-card__user-name">{{ items.userName }}</div>
          <div>
            <span class="mdi mdi-chevron-down down-icon"></span>
          </div>
        </div>
        <div class="message-card__content">
          {{ items.userMessage }}
        </div>
        <div class="message-card__date">{{ items.userMessageDate }}</div>
      </div>
    </div>
  </div>
</template>
