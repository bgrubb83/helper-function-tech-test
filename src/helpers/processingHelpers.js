/*
 * Gets the processing page
 * @param {array} data 
 */

import { delay } from './general';

export async function getProcessingPage(statesArr) {
    console.log('helper called with', statesArr);
    for (const stateObj of statesArr) {
        switch (stateObj.state) {
            case 'processing':
                console.log('processing');
                await delay(2000);
                break;
            case 'error':
                console.log('error');
                return 'Fake error result';
            case 'success':
                console.log('success');
                return { title: 'Order complete', message: null };
            default:
                console.log('default');
        }
    };
}