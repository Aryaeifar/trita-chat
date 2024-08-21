<script setup>
const props = defineProps({
  isUser: {
    type: Boolean,
    default: false,
  },
});
</script>
<template>
  <div :class="['message-card', { 'message-card--user': props.isUser }]">
    <div class="message-card__user-img">
      <img src="@/assets/images/mika.jpg" alt="" />
    </div>
    <div class="message-card__user-msg">
      <div class="message-card__user-msg-item">
        <div class="message-card__header">
          <div class="message-card__user-name">t-learning</div>
          <div>
            <span class="mdi mdi-chevron-down down-icon"></span>
          </div>
        </div>
        <div class="message-card__content">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi eaque
          accusantium.
        </div>
        <div class="message-card__date">
          22:54
        </div>
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>
.message-card--user {
  flex-direction: row-reverse;
  .message-card__user-msg {
    .message-card__user-msg-item {
      background-color: #4d96f5;
      color: white;
      .message-card__user-name {
        color: #3fc9ec;
        .down-icon {
          color: #9a9a9a;
        }
      }
       .message-card__date {
        font-size: 11px;
        color: white;
      }
    }
  }
  & :last-child {
      border-radius: 10px 10px 0 10px;
  }
}

</style>
