function submitMessage() {
    let message = document.getElementById("messageBox").value;
    if (message.trim() === "") {
        alert("メッセージを入力してください！");
        return;
    }
    alert("メッセージを送信しました: " + message);
    document.getElementById("messageBox").value = ""; // メッセージ送信後にクリア
}