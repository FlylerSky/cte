function encode() {
  const inputText = document.getElementById('input-text').value;
  const outputText = document.getElementById('output-text');

  const mapping = {
    
           "A": "E",
           "B": "K",
           "C": "L",
           "D": "Đ",
           "E": "I",
           "F": "J",
           "G": "M",
           "H": "N",
           "I": "O",
           "J": "W",
           "K": "P",
           "L": "Q",
           "M": "R",
           "N": "S",
           "O": "U",
           "P": "T",
           "Q": "V",
           "R": "X",
           "S": "B",
           "T": "C",
           "U": "Y",
           "V": "G",
           "W": "Z",
           "X": "H",
           "Y": "A",
           "Z": "F",
           //2
           "a": "e",
           "b": "k",
           "c": "l",
           "d": "đ",
           "e": "i",
           "f": "j",
           "g": "m",
           "h": "n",
           "i": "o",
           "j": "w",
           "k": "p",
           "l": "q",
           "m": "r",
           "n": "s",
           "o": "u",
           "p": "t",
           "q": "v",
           "r": "x",
           "s": "b",
           "t": "c",
           "u": "y",
           "v": "g",
           "w": "z",
           "x": "h",
           "y": "a",
           "z": "f",
           //3
           "Ă" : "Ơ",
           "Â" : "Ư",
           "Đ" : "D",
           "Ê" : "Ă",
           "Ô" : "Â",
           "Ơ" : "Ê",
           "Ư" : "Ô",
           //4
           "ă": "ơ",
           "â": "ư",
           "đ": "d",
           "ê": "ă",
           "ô": "â",
           "ơ": "ê",
           "ư": "ô",
           //5
           'Á': 'Ẽ',
           'À': 'Ẹ',
           'Ả': 'É',
           'Ã': 'È',
           'Ạ': 'Ẻ',
           'É': 'Ĩ',
           'È': 'Ị',
           'Ẻ': 'Í',
           'Ẽ': 'Ì',
           'Ẹ': 'Ỉ',
           'Í': 'Õ',
           'Ì': 'Ọ',
           'Ỉ': 'Ó',
           'Ĩ': 'Ò',
           'Ị': 'Ỏ',
           "Ó": "Ũ",
           "Ò": "Ụ",
           "Ỏ": "Ú",
           "Õ": "Ù",
           "Ọ": "Ủ",
           "Ú": "Ỹ",
           "Ù": "Ỵ",
           "Ủ": "Ý",
           "Ũ": "Ỳ",
           "Ụ": "Ỷ",
           "Ý": "Ã",
           "Ỳ": "Ạ",
           "Ỷ": "Á",
           "Ỹ": "À",
           "Ỵ": "Ả",
           //6
           'á': 'ẽ',
           'à': 'ẹ',
           'ả': 'é',
           'ã': 'è',
           'ạ': 'ẻ',
           'é': 'ĩ',
           'è': 'ị',
           'ẻ': 'í',
           'ẽ': 'ì',
           'ẹ': 'ỉ',
           'í': 'õ',
           'ì': 'ọ',
           'ỉ': 'ó',
           'ĩ': 'ò',
           'ị': 'ỏ',
           "ó": "ũ",
           "ò": "ụ",
           "ỏ": "ú",
           "õ": "ù",
           "ọ": "ủ",
           "ú": "ỹ",
           "ù": "ỵ",
           "ủ": "ý",
           "ũ": "ỳ",
           "ụ": "ỷ",
           "ý": "ã",
           "ỳ": "ạ",
           "ỷ": "á",
           "ỹ": "à",
           "ỵ": "ả",
           //7
           "Ắ" : "Ỡ",
           "Ằ" : "Ợ",
           "Ẳ" : "Ớ",
           "Ẵ" : "Ờ",
           "Ặ" : "Ở",
           "Ấ" : "Ữ",
           "Ầ" : "Ự",
           "Ẩ" : "Ứ",
           "Ẫ" : "Ừ",
           "Ậ" : "Ử",
           "Ế" : "Ẵ",
           "Ề" : "Ặ",
           "Ể" : "Ắ",
           "Ễ" : "Ằ",
           "Ệ" : "Ẳ",
           "Ố" : "Ẫ",
           "Ồ" : "Ậ",
           "Ổ" : "Ấ",
           "Ỗ" : "Ầ",
           "Ộ" : "Ẩ",
           "Ớ" : "Ễ",
           "Ờ" : "Ệ",
           "Ở" : "Ế",
           "Ỡ" : "Ề",
           "Ợ" : "Ể",
           "Ứ" : "Ỗ",
           "Ừ" : "Ộ",
           "Ử" : "Ố",
           "Ữ" : "Ồ",
           "Ự" : "Ổ",
           //8
           "ắ": "ỡ",
           "ằ": "ợ",
           "ẳ": "ớ",
           "ẵ": "ờ",
           "ặ": "ở",
           "ấ": "ữ",
           "ầ": "ự",
           "ẩ": "ứ",
           "ẫ": "ừ",
           "ậ": "ử",
           "ế": "ẵ",
           "ề": "ặ",
           "ể": "ắ",
           "ễ": "ằ",
           "ệ": "ẳ",
           "ố": "ẫ",
           "ồ": "ậ",
           "ổ": "ấ",
           "ỗ": "ầ",
           "ộ": "ẩ",
           "ớ": "ễ",
           "ờ": "ệ",
           "ở": "ế",
           "ỡ": "ề",
           "ợ": "ể",
           "ứ": "ỗ",
           "ừ": "ộ",
           "ử": "ố",
           "ữ": "ồ",
           "ự": "ổ",
           //9
           "0": "4",
           "1": "5",
           "2": "6",
           "3": "7",
           "4": "8",
           "5": "9",
           "6": "0",
           "7": "1",
           "8": "2",
           "9": "3",
           
  };
    
      let encodedText = '';
      for (let i = 0; i < inputText.length; i++) {
        const char = inputText[i];
        encodedText += mapping[char] || char;
      }
    
      outputText.value = encodedText;
      }