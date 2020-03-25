import { delay } from './general';
import {
    PROCESSING_STATES,
    ERROR_CODES,
    ERROR_MESSAGES,
    TITLES,
} from '../constants';

/*
 * Gets the error message
 * @param {array} stateObj 
 */

const findErrorMessage = ({ errorCode }) => {
    switch (errorCode) {
        case ERROR_CODES.NO_STOCK:
            return { title: TITLES.ERROR_PAGE, message: ERROR_MESSAGES.NO_STOCK };
        case ERROR_CODES.INCORRECT_DETAILS:
            return { title: TITLES.ERROR_PAGE, message: ERROR_MESSAGES.INCORRECT_DETAILS };
        case null:
        case undefined:
            return { title: TITLES.ERROR_PAGE, message: null };
        default:
            return { title: TITLES.ERROR_PAGE, message: null };
    }
}

/*
 * Gets the processing page
 * @param {array} statesArr 
 */

export const getProcessingPage = async (statesArr) => {
    if (statesArr) {
        for (const stateObj of statesArr) {
            if (stateObj.state) {
                switch (stateObj.state) {
                    case PROCESSING_STATES.PROCESSING:
                        await delay(2000);
                        break;
                    case PROCESSING_STATES.ERROR:
                        return findErrorMessage(stateObj);
                    case PROCESSING_STATES.SUCCESS:
                        return { title: TITLES.SUCCESS, message: null };
                    default:
                        return { title: TITLES.ERROR, message: null };
                }
            }
        };
    }
}