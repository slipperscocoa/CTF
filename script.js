function sendMessage() {
   var encoded = "dmFyIGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoInVzZXJJbnB1dCIpLnZhbHVlOwogICAgCiAgICBpZiAoaW5wdXQgPT09ICJ0aGUgd29tYW4iKSB7CiAgICAgICAgYWxlcnQoIkNvbmdyYXR1bGF0aW9ucyEgWW91IGZvdW5kIHRoZSBmbGFnISBJcmVuZSBBZGxlciB3YXMgb25lIG9mIGZvdXIgcGVvcGxlIHdobyBiZXN0ZWQgSG9sbWVzLCBhbmQgaGUgYWx3YXlzIHJlZmVycmVkIHRvIGhlciBhcyAndGhlIHdvbWFuJy4gIik7CiAgICB9CiAgICBlbHNlIGlmIChpbnB1dCA9PT0gImhpbnQiKSB7CiAgICAgICAgYWxlcnQoIklzIHRoYXQgaG93IHlvdXIgbW90aGVyIHRhdWdodCB5b3UgdG8gYXNrIGZvciB0aGluZ3M/Iik7CiAgICB9CiAgICBlbHNlIGlmIChpbnB1dCA9PT0gImhpbnQgcGxlYXNlIikgewogICAgICAgIGFsZXJ0KCJPZiBjb3Vyc2UsIGhlcmUgeW91IGdvOiAnV2hhdCBkbyB5b3UgZ2V0IHdoZW4geW91IGNvbWJpbmUgY29mZmVlIHdpdGggYW4gYWN0b3IncyBsaW5lcz8nIChZb3UgZGlkbid0IHRoaW5rIEknZCBtYWtlIHRoaXMgZWFzeSBmb3IgeW91ISkiKTsgCiAgICB9CiAgICBlbHNlIHsKICAgICAgICBhbGVydCgiU29ycnksIGJ1dCB5b3VyIHNlYXJjaCB0ZXJtIGRpZG4ndCBtYXRjaCBhbnl0aGluZyBpbiBvdXIgZGF0YWJhc2UuIFBsZWFzZSB0cnkgYWdhaW4uIik7CiAgICB9Ow==";

   var decodedString = atob(encoded);
   eval(decodedString);
   
};