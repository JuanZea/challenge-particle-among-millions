<script setup lang="ts">
defineProps<{
  sequence: boolean[];
}>();
</script>

<template>
  <div>
    <div class="flex gap-0.5 rounded overflow-hidden w-full max-w-fit">
      <button
        v-for="value in sequence"
        :title="value ? 'Particle' : 'Antiparticle'"
        :class="['h-5 w-5 hover:scale-75 duration-75 cursor-help', value ? 'bg-blue-500' : 'bg-red-500']"
      />
    </div>
    <p v-if="sequence.length > 51" class="text-xs italic font-medium text-gray-500">Maybe, just maybe they're enough</p>
  </div>
</template>
