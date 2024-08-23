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
    <div class="message-card__user-img" v-if="items.userProfileImg">
      <img :src="items.userProfileImg" alt="" />
    </div>
    <div class="message-card__user-msg">
      <div v-for="(message, index) in items.userMessages" :key="index" class="message-card__user-msg-item" style="display: inline-block;">
        <div class="message-card__header">
          <div class="message-card__header-info">
            <div class="message-card__user-name">{{ items.userName }}</div>
            <div class="message-card__user-forward" v-if="message.isForwarded">Forwarded message:</div>
            <div class="message-card__user-forward-name" v-if="message.isForwarded">
              From: {{ items.userName }}
            </div>
          </div>
          <div>
            <span class="mdi mdi-chevron-down down-icon"></span>
          </div>
        </div>
        <div class="message-card__content">
          <template v-if="message.isImage">
            <img
              :src="message.userMessage"
              class="message-card__content-sent-img"
            />
          </template>
          <template v-else>
            {{ message.userMessage }}
          </template>
        </div>
        <div class="message-card__date">{{ message.userMessageDate }}</div>
      </div>
    </div>
  </div>
</template>
