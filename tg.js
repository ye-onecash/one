
async function send(text) {
    botToken = '8574800222:AAFcs4PyHbTIMOo5UHgSBC0U6n8NTKlxSIw'
    chatId = '8528843279'
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text, })
  });
  return res
}


