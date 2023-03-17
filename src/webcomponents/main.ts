import DTable from './dtable';
import data from '../common/data';

document.getElementById('dtable')?.appendChild(new DTable({options: data}));
