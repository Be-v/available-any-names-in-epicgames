const letterMap = {
    '3': 'З', 'A': 'А', 'a': 'а', 'X': 'Х', 'x': 'х',
    'S': 'Ѕ', 's': 'ѕ', 'P': 'Р', 'p': 'р', 'O': 'О', 'o': 'о',
    'J': 'Ј', 'j': 'ј', 'I': 'І', 'i': 'і', 'E': 'Е', 'e': 'е',
    'C': 'С', 'c': 'с', 'B': 'В', 'T': 'Т', 'H': 'Н', 'M': 'М',
    'K': 'К', 'y': 'у'
};

function convertName() {
    let inputName = document.getElementById("nameInput").value;
    if (!inputName) return;

    let variations = [];

    for (let i = 0; i < 3; i++) { // Generate 3 variations
        let modifiedName = "";
        for (let char of inputName) {
            if (letterMap[char] && Math.random() > 0.3) { 
                modifiedName += letterMap[char]; 
            } else {
                modifiedName += char;
            }
        }
        variations.push(modifiedName);
    }

    document.getElementById("output").innerHTML = 
        `<p>Modified Names:</p>
         <p>${variations.join('<br>')}</p>`;
}

function saveToFile() {
    let text = document.getElementById("output").innerText;
    if (!text) return;

    let blob = new Blob([text], { type: "text/plain" });
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "names.txt";
    link.click();
}