console.log('Hello World!');
function encode() {
  const inputText = document.getElementById('input-text').value;
  const outputText = document.getElementById('output-text');

  const mapping = {
       "A" : "E",
       "B" : "K",
       "C" : "L",
       "D" : "Đ",
       "E" : "I",
       "F" : "J",
       "G" : "M",
       "H" : "N",
       "I" : "O",
       "J" : "W",
       "K" : "P",
       "L" : "Q",
       "M" : "R",
       "N" : "S",
       "O" : "U",
       "P" : "T",
       "Q" : "V",
       "R" : "X",
       "S": "B",
       "T": "C",
       "U": "Y",
       "V": "G",
       "W": "Z",
       "X": "H",
       "Y": "A",
       "Z": "F",
       //2
       "": "",
       "": "",
       "": "",
       "": "",
       "": "",
       "": "",
       "": "",
       "": "",
       "": "",
       "": "",
       "": "",
       "": "",
       "": "",
       "": "",
       "": "",
       "": "",
       "": "",
       "": "",
       "": "",
       "": "",
       "": "",
       "": "",
       "": "",
       "": "",
       "": "",
       "": "",
       "": "",
       "": "",
       "": "",
       "": "",
       "": "",
       "": "",
       "": "",
       "": "",
       "": "",
       "": "",
       "": "",
       "": "",
       "": "",
       "": "",
       "": "",
       "": "",
       "": "",
       "": "",
       "": "",
       "": "",
  }

  let encodedText = '';
  let i = 0;

  while (i < inputText.length) {
    let found = false;

    // Kiểm tra từng chuỗi trong `mapping`, ưu tiên các chuỗi dài hơn.
    for (let key in mapping) {
      if (inputText.startsWith(key, i)) {
        encodedText += mapping[key];
        i += key.length; // Nhảy qua chuỗi vừa mã hóa
        found = true;
        break;
      }
    }

    // Nếu không tìm thấy chuỗi phù hợp, giữ nguyên ký tự hiện tại.
    if (!found) {
      encodedText += inputText[i];
      i++;
    }
  }

  outputText.value = encodedText;
}

