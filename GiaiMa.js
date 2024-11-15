function encode() {
  const inputText = document.getElementById('input-text').value;
  const outputText = document.getElementById('output-text');

  const mapping = {
         //1
          "E": "A",
          "K": "B",
          "L": "C",
          "Đ": "D",
          "I": "E",
          "J": "F",
          "M": "G",
          "N": "H",
          "O": "I",
          "W": "J",
          "P": "K",
          "Q": "L",
          "R": "M",
          "S": "N",
          "U": "O",
          "T": "P",
          "V": "Q",
          "X": "R",
          "B": "S",
          "C": "T",
          "Y": "U",
          "G": "V",
          "Z": "W",
          "H": "X",
          "A": "Y",
          "F": "Z",
          //2
          "e": "a",
          "k": "b",
          "l": "c",
          "đ": "d",
          "i": "e",
          "j": "f",
          "m": "g",
          "n": "h",
          "o": "i",
          "w": "j",
          "p": "k",
          "q": "l",
          "r": "m",
          "s": "n",
          "u": "o",
          "t": "p",
          "v": "q",
          "x": "r",
          "b": "s",
          "c": "t",
          "y": "u",
          "g": "v",
          "z": "w",
          "h": "x",
          "a": "y",
          "f": "z",
          //3
          "Ơ" : "Ă",
          "Ư" : "Â",
          "D" : "Đ",
          "Ă" : "Ê",
          "Â" : "Ô",
          "Ê" : "Ơ",
          "Ô" : "Ư",
          //4
          "ơ" : "ă",
          "ư" : "â",
          "d" : "đ",
          "ă" : "ê",
          "â" : "ô",
          "ê" : "ơ",
          "ô" : "ư",
          //5
          'Ẽ': 'Á',
          'Ẹ': 'À',
          'É': 'Ả',
          'È': 'Ã',
          'Ẻ': 'Ạ',
          'Ĩ': 'É',
          'Ị': 'È',
          'Í': 'Ẻ',
          'Ì': 'Ẽ',
          'Ỉ': 'Ẹ',
          'Õ': 'Í',
          'Ọ': 'Ì',
          'Ó': 'Ỉ',
          'Ò': 'Ĩ',
          'Ỏ': 'Ị',
          "Ũ": "Ó",
          "Ụ": "Ò",
          "Ú": "Ỏ",
          "Ù": "Õ",
          "Ủ": "Ọ",
          "Ỹ": "Ú",
          "Ỵ": "Ù",
          "Ý": "Ủ",
          "Ỳ": "Ũ",
          "Ỷ": "Ụ",
          "Ã": "Ý",
          "Ạ": "Ỳ",
          "Á": "Ỷ",
          "À": "Ỹ",
          "Ả": "Ỵ",
          //6
          'ẽ': 'á',
          'ẹ': 'à',
          'é': 'ả',
          'è': 'ã',
          'ẻ': 'ạ',
          'ĩ': 'é',
          'ị': 'è',
          'í': 'ẻ',
          'ì': 'ẽ',
          'ỉ': 'ẹ',
          'õ': 'í',
          'ọ': 'ì',
          'ó': 'ỉ',
          'ò': 'ĩ',
          'ỏ': 'ị',
          "ũ": "ó",
          "ụ": "ò",
          "ú": "ỏ",
          "ù": "õ",
          "ủ": "ọ",
          "ỹ": "ú",
          "ỵ": "ù",
          "ý": "ủ",
          "ỳ": "ũ",
          "ỷ": "ụ",
          "ã": "ý",
          "ạ": "ỳ",
          "á": "ỷ",
          "à": "ỹ",
          "ả": "ỵ",
          //7
          "Ỡ" : "Ắ",
          "Ợ" : "Ằ",
          "Ớ" : "Ẳ",
          "Ờ" : "Ẵ",
          "Ở" : "Ặ",
          "Ữ" : "Ấ",
          "Ự" : "Ầ",
          "Ứ" : "Ẩ",
          "Ừ" : "Ẫ",
          "Ử" : "Ậ",
          "Ẵ" : "Ế",
          "Ặ" : "Ề",
          "Ắ" : "Ể",
          "Ằ" : "Ễ",
          "Ẳ" : "Ệ",
          "Ẫ" : "Ố",
          "Ậ" : "Ồ",
          "Ấ" : "Ổ",
          "Ầ" : "Ỗ",
          "Ẩ" : "Ộ",
          "Ễ" : "Ớ",
          "Ệ" : "Ờ",
          "Ế" : "Ở",
          "Ề" : "Ỡ",
          "Ể" : "Ợ",
          "Ỗ" : "Ứ",
          "Ộ" : "Ừ",
          "Ố" : "Ử",
          "Ồ" : "Ữ",
          "Ổ" : "Ự",
          //8
          "ỡ" : "ắ",
          "ợ" : "ằ",
          "ớ" : "ẳ",
          "ờ" : "ẵ",
          "ở" : "ặ",
          "ữ" : "ấ",
          "ự" : "ầ",
          "ứ" : "ẩ",
          "ừ" : "ẫ",
          "ử" : "ậ",
          "ẵ" : "ế",
          "ặ" : "ề",
          "ắ" : "ể",
          "ằ" : "ễ",
          "ẳ" : "ệ",
          "ẫ" : "ố",
          "ậ" : "ồ",
          "ấ" : "ổ",
          "ầ" : "ỗ",
          "ẩ" : "ộ",
          "ễ" : "ớ",
          "ệ" : "ờ",
          "ế" : "ở",
          "ề" : "ỡ",
          "ể" : "ợ",
          "ỗ" : "ứ",
          "ộ" : "ừ",
          "ố" : "ử",
          "ồ" : "ữ",
          "ổ" : "ự",
          //9
          "4": "0",
          "5": "1",
          "6": "2",
          "7": "3",
          "8": "4",
          "9": "5",
          "0": "6",
          "1": "7",
          "2": "8",
          "3": "9",




  };
    
     let encodedText = '';
     for (let i = 0; i < inputText.length; i++) {
       const char = inputText[i];
       encodedText += mapping[char] || char;
     }
    
     outputText.value = encodedText;
     }