import { defineCustomElement } from 'vue';
import DTableVue from '../vue/dtable.vue';
import styles from './style.css?inline';

const DTable = defineCustomElement({...DTableVue, styles: [styles]});

customElements.define('my-dtable', DTable);

export default DTable;
