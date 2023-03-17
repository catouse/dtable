import {createRoot} from 'react-dom';
import DTable from './dtable';
import data from '../common/data';

const ele = document.querySelector('#dtable');
const root = createRoot(ele);
root.render(DTable.e(data));
