import { defineCustomElement } from 'vue';
import DTableVue from '../vue/dtable.vue';
import styles from './style.css?inline';

DTableVue.styles = [styles];

const DTable = defineCustomElement(DTableVue);

customElements.define('my-dtable', DTable);

export default DTable;
