<template>
  <div class="user-card">
    <div class="user-card__img">
      <img src="@/assets/images/vader.jpg" alt="" />
    </div>
    <div class="user-card__info">
      <div class="user-card__head">
        <div class="user-card__head-title truncation-clamp clamp-1">
          New Group
        </div>
        <div class="user-card__head-date">Jun 22</div>
      </div>
      <div class="user-card__content">
        <div class="user-card__content-info">
          <div class="user-card__content-name">t-learning:</div>
          <div class="user-card__content-sub truncation-clamp clamp-1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
            magnam tenetur tempore sapiente illum saepe, possimus recusandae
            doloremque ut ea omnis labore similique. Molestias, dolorem nobis
            minima est voluptates maiores.
          </div>
        </div>
        <div class="user-card__content-msg-count">4332</div>
      </div>
      <div class="user-card__footer">
        <div class="user-card__tags">
          <button class="user-card__tags-btn user-card__tags-btn-inbox">
            inbox
          </button>
          <button class="user-card__tags-btn user-card__tags-btn-type">
            Group
          </button>
        </div>
      </div>
    </div>
    <span class="mdi mdi-chevron-down option-icon"></span>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
