let handler = async (m, {command, conn}) => {
await m.reply('dalam proses...')
let img = await conn.getFile(`https://hadi-api.herokuapp.com/api/randomImage/cecan`)
var capt = `🐦 Random Foto Cecan🗿`
        conn.sendButton(m.chat, `_${command}_`.trim(), capt, img.data, [['😋 acak 🤗', `/${command}`]], m)
}

handler.help = ['Cecan']
handler.tags = ['downloader']

handler.command = /^(cecan)$/i

export default handler
