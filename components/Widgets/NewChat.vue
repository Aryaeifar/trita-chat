<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div v-if="isOpen" class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container" ref="target">
            <span class="mdi mdi-close close-icon" @click="closeModal"></span>
            <div class="modal-title">New Chat</div>
            <div class="modal-header">
              Chat name
              <input type="text" v-model="chatName" />
            </div>
            <div class="modal-body">
              <div style="display: flex; flex-direction: column">
                Chat type
                <input type="text" v-model="chatType" />
              </div>
              <div
                style="display: flex; flex-direction: column; margin-top: 1rem"
              >
                Chat profile image
                <input type="file" @change="selectProfile" />
              </div>
            </div>
            <div class="modal-footer">
              <button class="modal-submit" @click="createChat">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
<script>
export default {
  name: 'NewChatModal',
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['modal-close', 'submit'],
  data() {
    return {
      target: null,
      chatName: '',
      chatType: '',
      profileImage: null,
    };
  },
  methods: {
    closeModal() {
      this.$emit('modal-close');
    },
    selectProfile(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.profileImage = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    createChat() {
      const newChat = {
        img: this.profileImage || '/assets/images/group.png',
        title: this.chatName || 'Unnamed Group',
        date: new Date().toLocaleDateString(),
        lastMessanger: 'You',
        msg: 'This is a new chat',
        unreadMsg: '0',
        type: this.chatType || 'Unnamed Type',
        link: String(Date.now()),
      };

      this.$emit('submit', newChat);
      this.chatName = '';
      this.chatType = '';
      this.profileImage = null;
    },
  },
};
</script>
<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
