<script setup>
import { onClickOutside } from "@vueuse/core";

const props = defineProps({
  isOpen: Boolean,
});

const emit = defineEmits(["modal-close", "submit"]);

const target = ref(null);
onClickOutside(target, () => emit("modal-close"));
</script>

<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div v-if="isOpen" class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container" ref="target">
            <div class="modal-header">
              <slot name="header"> default header </slot>
            </div>
            <div class="modal-body">
              <slot name="content"> default content </slot>
            </div>
            <div class="modal-footer">
              <slot name="footer">
                <div>
                  <button @click.stop="emit('submit', $event)">Submit</button>
                </div>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal-container {
  width: 300px;
  margin: 150px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
}
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
