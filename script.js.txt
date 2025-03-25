function convertName() {
    let name = document.getElementById("nameInput").value;
    let conversionMap = {
        '3': 'З', 'A': 'А', 'a': 'а', 'X': 'Х', 'x': 'х',
        'S': 'Ѕ', 's': 'ѕ', 'P': 'Р', 'p': 'р', 'O': 'О', 'o': 'о',
        'J': 'Ј', 'j': 'ј', 'I': 'І', 'i': 'і', 'E': 'Е', 'e': 'е',
        'C': 'С', 'c': 'с', 'B': 'В', 'T': 'Т',
        'H': 'Н', 'M': 'М', 'K': 'К', 'y': 'у'
    };

    let convertedName = name.split('').map(char => {
        return conversionMap[char] || char; 
    }).join('');

    document.getElementById("result").textContent = `الاسم بعد التعديل: ${convertedName}`;
}

function saveToTxt() {
    let text = document.getElementById("result").textContent;
    let blob = new Blob([text], { type: "text/plain" });
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "converted_name.txt";
    link.click();
}