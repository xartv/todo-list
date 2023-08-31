import { getQueryParams } from './addQueryParams';

describe('addQueryParams', () => {
  test('one param', () => {
    const params = getQueryParams({
      test: 'testValue',
    });
    expect(params).toEqual('?test=testValue');
  });
  test('two param', () => {
    const params = getQueryParams({
      test: 'testValue',
      search: 'text',
    });
    expect(params).toEqual('?test=testValue&search=text');
  });
  test('undefined', () => {
    const params = getQueryParams({
      test: 'testValue',
      search: undefined,
    });
    expect(params).toEqual('?test=testValue');
  });
});
