const capitalize = require('./capitalize');
test('capitalize', () => {
    expect(capitalize('hello')).toBe('Hello');
})