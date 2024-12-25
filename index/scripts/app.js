// Tập hợp tất cả các bảng mã
const ciphers = {
    default: defaultCipher,
    QTE1: QTE1,
    cte: cte
    
};

// Tự động tạo bảng giải mã cho từng bảng mã
for (const cipherName in ciphers) {
    const cipher = ciphers[cipherName];
    cipher.decode = Object.fromEntries(
        Object.entries(cipher.encode).map(([key, value]) => [value, key])
    );
}

function processText(action) {
    const input = document.getElementById('inputText').value;
    const outputArea = document.getElementById('outputText');
    const selectedCipher = document.getElementById('cipherSelect').value;

    // Lấy bảng mã được chọn
    const activeMapping = ciphers[selectedCipher][action];

    // Hàm xử lý mã hóa hoặc giải mã
    function processWord(word) {
        let result = '';
        let i = 0;

        while (i < word.length) {
            // Kiểm tra các chuỗi 2 ký tự trước
            const twoChar = word.substring(i, i + 2);
            const upperTwoChar = twoChar.toUpperCase();

            if (activeMapping[upperTwoChar]) {
                const processed = activeMapping[upperTwoChar];
                result += preserveCase(twoChar, processed);
                i += 2;
                continue;
            }

            // Nếu không tìm thấy chuỗi 2 ký tự, xử lý ký tự đơn lẻ
            const singleChar = word[i];
            const upperSingleChar = singleChar.toUpperCase();

            if (activeMapping[upperSingleChar]) {
                const processed = activeMapping[upperSingleChar];
                result += preserveCase(singleChar, processed);
            } else {
                result += singleChar; // Ký tự không xử lý
            }
            i++;
        }
        return result;
    }

    // Hàm giữ nguyên kiểu chữ từng ký tự
    function preserveCase(original, processed) {
        let result = '';
        for (let j = 0; j < original.length; j++) {
            if (original[j] === original[j].toLowerCase()) {
                result += processed[j].toLowerCase();
            } else {
                result += processed[j].toUpperCase();
            }
        }
        return result;
    }

    // Xử lý văn bản đầu vào
    const processedText = input.split(/\b/).map(processWord).join('');

    // Hiển thị kết quả
    outputArea.value = processedText;
}
 