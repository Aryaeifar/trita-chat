<script setup></script>

<style lang="scss" scoped></style>
<template>
  <div class="chat-wrapper">
    <div class="chat-list">
      <div class="chat-list__header">
        <div class="chat-list__header-search">
          <input type="text" placeholder="Search" />
          <span class="mdi mdi-magnify search-icon"></span>
          <span class="mdi mdi-filter-variant filter-icon"></span>
        </div>
        <div class="chat-list__header-group">
          <button class="chat-list__header-group-btn">
            <span
              class="mdi mdi-account-multiple-plus-outline group-icon"
            ></span>
          </button>
        </div>
      </div>
      <div class="chat-list__items">
        <div class="chat-list__item">
          <WidgetsUserChatCard />
        </div>
          <div class="chat-list__item">
          <WidgetsUserChatCard />
        </div>
          <div class="chat-list__item">
          <WidgetsUserChatCard />
        </div>
          <div class="chat-list__item">
          <WidgetsUserChatCard />
        </div>
          <div class="chat-list__item">
          <WidgetsUserChatCard />
        </div>
          <div class="chat-list__item">
          <WidgetsUserChatCard />
        </div>
          <div class="chat-list__item">
          <WidgetsUserChatCard />
        </div>
          <div class="chat-list__item">
          <WidgetsUserChatCard />
        </div>
          <div class="chat-list__item">
          <WidgetsUserChatCard />
        </div>
          <div class="chat-list__item">
          <WidgetsUserChatCard />
        </div>
          <div class="chat-list__item">
          <WidgetsUserChatCard />
        </div>
      </div>
    </div>
    <div class="chat-box">
      <NuxtPage />
    </div>
  </div>
</template>
