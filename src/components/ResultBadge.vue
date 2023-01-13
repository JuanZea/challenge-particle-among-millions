<script setup lang="ts">
defineProps<{
  isSecure: boolean;
}>();
</script>

<template>
  <div
    :class="[
      'rounded-lg text-white w-fit px-2 text-sm font-semibold flex items-center shadow',
      isSecure ? 'bg-green-500' : 'bg-red-500',
    ]"
  >
    {{ isSecure ? 'Secure' : 'Insecure' }}
  </div>
</template>
