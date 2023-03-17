<template>
  <div ref="root" style="height:100%"></div>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue';

const props = defineProps<{options: Object}>();

const root = ref(null);
const dtable = ref(null);
onMounted(() => {
  console.log('> props', {...props.options});
  dtable.value = new window.zui.DTable(root.value, props.options);
});
</script>
