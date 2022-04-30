import ArrayBufferConverter from '../ArrayBufferConverter';

function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  return ((input) => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i += 1) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}

test('ArrayBufferConverter.prototype.load() test', () => {
  const converter = new ArrayBufferConverter();
  converter.load(getBuffer());
  expect(converter.bufferView).toEqual(new Uint16Array(getBuffer()));
});

test('ArrayBufferConverter.prototype.tostring() test', () => {
  const converter = new ArrayBufferConverter();
  converter.load(getBuffer());
  expect(converter.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});

test('ArrayBufferConverter.prototype.tostring() error test', () => {
  const converter = new ArrayBufferConverter();
  expect(() => converter.toString()).toThrow('Buffer hasn\'t been loaded. Please load buffer first.');
});
