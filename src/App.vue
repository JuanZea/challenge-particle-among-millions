<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import ParticleSequence from './components/ParticleSequence.vue';
import AnalysisResults from './components/AnalysisResults.vue';

const value = ref<string>('');
const isValid = computed(() => {
    const regex = /^[01]*$/;
    return regex.test(value.value);
});
const sequence = computed(() => {
    return value.value.split('').map((value) => value === '1');
});

onMounted(() => {
    const gist = document.getElementById('gist120238246');
    const gistContainer = document.getElementById('gist');
    gistContainer?.appendChild(gist!);
});
</script>

<template>
  <div class="bg h-screen flex items-center flex-col">
    <div class="max-w-md w-full bg-white bg-opacity-80 my-8 p-4 rounded shadow">
      <h1 class="font-semibold text-2xl text-center text-gray-800">Particle among millions</h1>
      <div>
        <label for="particles" class="block text-sm font-medium text-gray-700">Particles</label>
        <div class="mt-1">
          <input
            v-model="value"
            type="text"
            name="particles"
            id="particles"
            :class="['input', isValid ? 'base' : 'error']"
            placeholder="Enter a sequence of particles (like: 101010)"
          />
        </div>
      </div>
      <div v-if="isValid" class="mt-2 flex flex-col gap-4">
        <ParticleSequence :sequence="sequence" />
        <AnalysisResults :particles="value"/>
        <div>
          <h2 class="font-semibold text-xl text-center text-gray-800 mb-1">How does it work?</h2>
          <div id="gist" />
        </div>
      </div>
      <div v-else>
        <p class="text-red-500 text-sm font-semibold italic">Invalid input</p>
      </div>
    </div>
  </div>
</template>
