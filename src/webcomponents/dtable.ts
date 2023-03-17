import { defineCustomElement } from 'vue';
import DTableVue from '../vue/dtable.vue';

const DTable = defineCustomElement(DTableVue);

customElements.define('my-dtable', DTable)

export default DTable;
