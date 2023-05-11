const reverseString = require('./reverse')
test('Reversing a string', () => {
    expect(reverseString('hello')).toBe('olleh');
});