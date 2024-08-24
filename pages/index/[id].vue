  <script setup>
const route = useRoute();
const userMessage = ref(null);
const chats = ref([]);
const backToBottom = ref(false);
const chatContentRef = ref(null);
const fileInput = ref(null);
const router = useRouter();
const isUserType = ref(true)
const userType = () => {
  isUserType.value = !isUserType.value
}
const groupName = ref(route.query.groupName || "Unnamed Group");

const selectFileInput = () => {
  fileInput.value.click();
};

const handleMessage = (event = null) => {
  let messageContent = null;
  let isImage = false;
  let fileExtension = null;

  if (event && event.target.files) {
    const file = event.target.files[0];
    if (file) {
      const fileName = file.name;
      fileExtension = fileName.split(".").pop();
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e) => {
          messageContent = e.target.result;
          isImage = true;
          storeMessage(messageContent, isImage, fileExtension);
        };
        reader.readAsDataURL(file);
        return;
      } else {
        messageContent = fileName;
        storeMessage(messageContent, isImage, fileExtension);
        return;
      }
    }
  } else if (userMessage.value) {
    messageContent = userMessage.value;
    storeMessage(messageContent, isImage, fileExtension);
    userMessage.value = null;
  }
};

const loadChats = () => {
  const chatHistory = localStorage.getItem(`history_${route.params.id}`);
  if (chatHistory) {
    chats.value = JSON.parse(chatHistory);
  }
};

const storeMessage = (messageContent, isImage, fileExtension) => {
  if (messageContent) {
    chats.value.push({
      isUser: isUserType.value,
      userName: "ALi",
      userProfileImg: "./assets/images/itachi.jpg",
      userMessages: [
        {
          isForwarded: false,
          userMessage: messageContent,
          userMessageDate: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          isImage: isImage,
          fileExtension: fileExtension,
        },
      ],
    });
    addToStorage();
    scrollToBottom();
  }
};

const handleScroll = () => {
  const chatContent = chatContentRef.value;
  const isAtBottom =
    chatContent.scrollHeight - chatContent.scrollTop === chatContent.clientHeight;
  backToBottom.value = !isAtBottom;
};

const scrollToBottom = () => {
  const chatContent = chatContentRef.value;
  chatContent.scrollTo({
    top: chatContent.scrollHeight,
    behavior: "smooth",
  });
  backToBottom.value = false;
};

const addToStorage = () => {
  localStorage.setItem(`history_${route.params.id}`, JSON.stringify(chats.value));
};

const goBack = () => {
  router.push("/");
};

onMounted(() => {
  const chatContent = chatContentRef.value;
  chatContent.scrollTop = chatContent.scrollHeight;
  chatContent.addEventListener("scroll", handleScroll);
  loadChats();
  window.addEventListener("storage", loadChats);
});

onBeforeUnmount(() => {
  window.removeEventListener("storage", loadChats);
  const chatContent = chatContentRef.value;
  chatContent.removeEventListener("scroll", handleScroll);
});
</script>

  <template>
    <div class="chatbox-wrapper">
      <div class="chatbox-header">
        <span
          class="mdi mdi-chevron-left left-icon"
          role="button"
          @click="goBack"
        ></span>
        <div class="chatbox-header__content">
          <div class="chatbox-header__img">
            <img src="@/assets/images/vader.jpg" alt="" />
          </div>
          <div class="chatbox-header__info">
            <div class="chatbox-header__info-title">
              <div class="chatbox-header__type">Group: &nbsp</div>
              <div class="chatbox-header__name">{{ groupName }}</div>
            </div>
            <div class="chatbox-header__info-members">
              <div class="chatbox-header__info-members-count">10601 Members</div>
              , &ensp;
              <div class="chatbox-header__info-members-online">3 Online</div>
            </div>
          </div>
        </div>
        <button @click="userType" class="userType">
          Type: {{ isUserType ? 'Host' : 'Guest' }}
        </button>
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
        <button
          class="chatbox-footer__icons chatbox-footer__attach"
          role="button"
          @click="selectFileInput"
        >
          <span class="mdi mdi-paperclip attach-icon"></span>
        </button>
        <input
          type="file"
          ref="fileInput"
          style="display: none"
          @change="handleMessage"
        />
        <div class="chatbox-footer__input-msg">
          <input
            type="text"
            placeholder="Type a message..."
            v-model="userMessage"
            @keyup.enter="handleMessage"
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
          @click="handleMessage"
          v-else
        >
          <span class="mdi mdi-send send-icon" role="button"></span>
        </button>
      </div>
    </div>
  </template>
