    import ScriptTag from "react-script-tag"

function sendTelegram  (props) {
        event.preventDefault();
        let telegram_bot_id = "6899998514:AAH2hCGQFNYqaTAUw8vgu78yaGU0rUviepI";
        let chat_id = 6000934511;
        let message = "ok";
        let settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "cache-control": "no-cache"
            },
            "data": JSON.stringify({
                "chat_id": chat_id,
                "text": message
            })
        };
        $.ajax(settings).done(function (response) {
            console.log(response)
        })

        return  (
            <div>
                <ScriptTag src={"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js\">"}></ScriptTag>
            </div>
        )

    };




export default sendTelegram;
