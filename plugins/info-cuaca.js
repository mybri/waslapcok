import fetch from 'node-fetch'
import axios from 'axios'

let handler = async (m, { conn, text }) => {
if (!text) throw `*Masukan Nama Kota*`
let res = await fetch(global.API('https://api.burhansyam.com', '/bot/cuaca/', { q: text }))
if (!res.ok) throw await res.text()
let json = await res.json()
let { name, main, thumb } = json.results[0]

let madang = `✨ *Kota :* ${name}
🎆 *B :* ${main}`

conn.sendFile(m.chat, thumb, '', madang, m)
}

handler.help = ['cuaca <kota>']
handler.tags = ['info']
handler.command = /^cuaca$/i

export default handler
