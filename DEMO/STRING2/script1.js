    document.getElementById("encodeButton").addEventListener("click", function() {
      const inputText = document.getElementById("inputText").value;
      const outputText = encodeText(inputText);
      document.getElementById("outputText").value = outputText;
    });

    function encodeText(text) {
      const mapping = {
        //10
        //10
        "NH_": "NG",
        "NG_": "NH",


      };

      let result = "";
      let i = 0;

      while (i < text.length) {
        // Check if the next two characters match a mapping
        if (i + 1 < text.length && mapping[text.substring(i, i + 2)]) {
          result += mapping[text.substring(i, i + 2)];
          i += 2; // Skip the next character as it was part of the mapping
        } else if (mapping[text[i]]) {
          result += mapping[text[i]]; // Map single character
          i++;
        } else {
          result += text[i]; // Keep the original character
          i++;
        }
      }

      return result;
    }