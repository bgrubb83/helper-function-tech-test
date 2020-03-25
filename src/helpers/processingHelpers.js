/*
 * Gets the processing page
 * @param {array} data 
 */

import { delay } from './general';

function findErrorMessage({ errorCode }) {
    console.log('ec', errorCode);
    switch (errorCode) {
        case 'NO_STOCK':
            return { title: 'Error page', message: 'No stock has been found' };
        case 'INCORRECT_DETAILS':
            return { title: 'Error page', message: 'Incorrect details have been entered' };
        case null:
        case undefined:
            return { title: 'Error page', message: null };
        default:
            return { title: 'Error page', message: null };
    }
}

export async function getProcessingPage(statesArr) {
    console.log('helper called with', statesArr);
    if (statesArr) {
        for (const stateObj of statesArr) {
            if (stateObj.state) {
                switch (stateObj.state) {
                    case 'processing':
                        console.log('processing');
                        await delay(2000);
                        break;
                    case 'error':
                        console.log('error');
                        return findErrorMessage(stateObj);
                    case 'success':
                        console.log('success');
                        return { title: 'Order complete', message: null };
                    default:
                        console.log('default');
                }
            }
        };
    }
}