import $ from "jquery/dist/jquery.min"
function sendTelegram(){
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
        let telegram_bot_id = "6899998514:AAH2hCGQFNYqaTAUw8vgu78yaGU0rUviepI";
        let chat_id = 6000934511;
        let message =
            `Ismi: ${name}, Telefon :${phone}`
            


        let settings = {
            async: true,
            crossDomain: true,
            url: "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "cache-control": "no-cache"
            },
            data: JSON.stringify({
                chat_id: chat_id,
                text: message
            })
        };
        $.ajax(settings).done(function (response) {
            alert('Спасибо за ваше сообщение')

        })
    document.getElementById("name").value="";
    document.getElementById("phone").value="";


        return  (
            <div>
            </div>
        )

    };




export default sendTelegram;
