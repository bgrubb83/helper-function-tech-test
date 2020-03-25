import { getProcessingPage } from './helpers/processingHelpers';

describe('Success', () => {

  test('Processing then success', async () => {
    const result = await getProcessingPage([{ state: 'processing' }, { state: 'success' }]);
    expect(result.title).toBe('Order complete');
    expect(result.message).toBe(null);
  });

  test('Success without processing', async () => {
    const result = await getProcessingPage([{ state: 'success' }]);
    expect(result.title).toBe('Order complete');
    expect(result.message).toBe(null);
  });

});

describe('Error', () => {

  test('Processing then no error code', async () => {
    const result = await getProcessingPage([{ state: 'processing' }, { state: 'error' }]);
    expect(result.title).toBe('Error page');
    expect(result.message).toBe(null);
  });

  test('No error code without processing', async () => {
    const result = await getProcessingPage([{ state: 'error' }]);
    expect(result.title).toBe('Error page');
    expect(result.message).toBe(null);
  });

  test('Processing then error code is no stock', async () => {
    const result = await getProcessingPage([{ state: 'processing' }, { state: 'error', errorCode: 'NO_STOCK' }]);
    expect(result.title).toBe('Error page');
    expect(result.message).toBe('No stock has been found');
  });

  test('Error code is no stock without processing', async () => {
    const result = await getProcessingPage([{ state: 'error', errorCode: 'NO_STOCK' }]);
    expect(result.title).toBe('Error page');
    expect(result.message).toBe('No stock has been found');
  });

  test('Processing then error code is incorrect details', async () => {
    const result = await getProcessingPage([{ state: 'processing' }, { state: 'error', errorCode: 'INCORRECT_DETAILS' }]);
    expect(result.title).toBe('Error page');
    expect(result.message).toBe('Incorrect details have been entered');
  });

  test('Error code is incorrect details without processing', async () => {
    const result = await getProcessingPage([{ state: 'error', errorCode: 'INCORRECT_DETAILS' }]);
    expect(result.title).toBe('Error page');
    expect(result.message).toBe('Incorrect details have been entered');
  });

  test('Processing then error code is null', async () => {
    const result = await getProcessingPage([{ state: 'processing' }, { state: 'error', errorCode: null }]);
    expect(result.title).toBe('Error page');
    expect(result.message).toBe(null);
  });

  test('Error code is null without processing', async () => {
    const result = await getProcessingPage([{ state: 'error', errorCode: null }]);
    expect(result.title).toBe('Error page');
    expect(result.message).toBe(null);
  });

  test('Processing then error code is undefined', async () => {
    const result = await getProcessingPage([{ state: 'processing' }, { state: 'error', errorCode: undefined }]);
    expect(result.title).toBe('Error page');
    expect(result.message).toBe(null);
  });

  test('Error code is undefined without processing', async () => {
    const result = await getProcessingPage([{ state: 'error', errorCode: undefined }]);
    expect(result.title).toBe('Error page');
    expect(result.message).toBe(null);
  });

});