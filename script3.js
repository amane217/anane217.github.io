function submitMessage() {
    let userName = document.getElementById("userName").value;
    let message = document.getElementById("messageBox").value;
    
    if (userName.trim() === "" || message.trim() === "") {
        alert("名前とメッセージを入力してください！");
        return;
    }

    alert(userName + " さんのメッセージを送信しました: " + message);
    
    document.getElementById("userName").value = "";
    document.getElementById("messageBox").value = "";
}
