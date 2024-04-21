function wordCount() {
    let text = document.getElementById("text").value;
    //console.log(text);
    text = text.trim();
    let word = text.split(/\s+/);
    let count = word.length;
    document.getElementById("result").innerHTML = "So tu trong chuoi: " + count;
}