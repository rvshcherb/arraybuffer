export default class ArrayBufferConverter {
  constructor() {
    this.bufferView = undefined;
  }

  load(buffer) {
    this.bufferView = new Uint16Array(buffer);
  }

  toString() {
    if (this.bufferView) {
      return this.bufferView.reduce((acc, charCode) => acc + String.fromCharCode(charCode), '');
    }

    throw new Error('Buffer hasn\'t been loaded. Please load buffer first.');
  }
}
