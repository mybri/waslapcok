import fetch from 'node-fetch'

let timeout = 180000
let poin = 500
let tiketcoin = 1

let handler = async (m, { conn, usedPrefix }) => {
    conn.siapakahaku = conn.siapakahaku ? conn.siapakahaku : {}
    let id = m.chat
    if (id in conn.siapakahaku) {
        conn.reply(m.chat, 'Maaf kak🙏jawab dulu soal sebelumnya ya,jgn langsung lompat😑', conn.siapakahaku[id][0])
        throw false
    }
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `
${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}who untuk bantuan
Bonus: ${poin} XP
Tiketcoin: ${tiketcoin} TiketCoin
`.trim()
    conn.siapakahaku[id] = [
        await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.siapakahaku[id]) sendButton(m.chat, `*Waktu habis!\nJawabannya adalah *${json.jawaban}*`, author, ['who am i', '/siapakahaku'], conn.siapakahaku[id][0]) 
				
            delete conn.siapakahaku[id]
        }, timeout)
    ]
}
handler.help = ['siapakahaku']
handler.tags = ['game']
handler.command = /^siapakahaku/i
export default handler
// handler.group = true
// module.exports = handler
