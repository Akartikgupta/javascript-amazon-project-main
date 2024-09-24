import {formatCurrent} from '../scripts/utils/money.js';

if(formatCurrent(2095)==='20.95'){
    console.log('Passed');
}else{
    console.log('Failed');
}