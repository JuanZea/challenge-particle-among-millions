<script setup lang="ts">
import { computed } from 'vue';
import { safePlaceDetectorDevice } from '../functions';
import ResultBadge from './ResultBadge.vue';

const props = defineProps<{
  particles: string;
}>();

const validationResponse = computed(() => safePlaceDetectorDevice(props.particles));
</script>

<template>
    <div :class="['p-4 rounded flex flex-col gap-2 shadow', validationResponse.isSecure ? 'bg-green-300' : 'bg-red-300']">
      <div class="flex justify-center"><ResultBadge :isSecure="validationResponse.isSecure" /></div>
      <p class="text-sm text-gray-700 text-center">{{ validationResponse.message }}</p>
    </div>
</template>
