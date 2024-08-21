<template>
  <div class="user-card">
    <div class="user-card__img">
      <img :src="items.img" alt="" />
    </div>
    <div class="user-card__info">
      <div class="user-card__head">
        <div class="user-card__head-title truncation-clamp clamp-1">
          <NuxtLink :to="items.link">{{items.title}}</NuxtLink>
        </div>
        <div class="user-card__head-date">{{ items.date }}</div>
      </div>
      <div class="user-card__content">
        <div class="user-card__content-info">
          <div class="user-card__content-name">{{items.lastMessanger}}:</div>
          <div class="user-card__content-sub truncation-clamp clamp-1">
          {{ items.msg }}
          </div>
        </div>
        <div class="user-card__content-msg-count" v-if="items.unreadMsg">{{ items.unreadMsg }}</div>
      </div>
      <div class="user-card__footer">
        <div class="user-card__tags">
          <button class="user-card__tags-btn user-card__tags-btn-inbox">
            inbox
          </button>
          <button class="user-card__tags-btn user-card__tags-btn-type">
            {{ items.type }}
          </button>
        </div>
      </div>
    </div>
    <span class="mdi mdi-chevron-down option-icon"></span>
  </div>
</template>

<script>
export default {
  props: {
    items:{
      type: Object,
      required:true
    }
  },
};
</script>

<style lang="scss" scoped></style>
