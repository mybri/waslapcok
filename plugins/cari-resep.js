import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
if (!text) throw `*[❗INFO❗] Masukan Nama Resep Ingin Kamu Cari*`
let res = await fetch(global.API('https://masak-apa.tomorisakura.vercel.app', '/api/search/', { q: text }))
if (!res.ok) throw await res.text()
let json = await res.json()
let { title, thumb, key, times, serving, difficulty } = json.results[0]
// let res2 = await fetch(global.API('https://masak-apa.tomorisakura.vercel.app', '/api/recipe/' {${key}))
// if (!res2.ok) throw await res2.text()
// let json = await res2.json()
// let { title, thumb, times, serving, difficulty, desc, step } = json.results[0]
let madang = `✨ *Judul :* ${title}
🎆 *Durasi :* ${times}
💬 *Hasil :* ${serving}
💌 *Level :* ${difficulty}
❤️ Selengkapnya kunjungi :
https://www.masakapahariini.com/resep/${key}`
// 👥 *link :* ${step}
conn.sendFile(m.chat, thumb, '', madang, m)
}

handler.help = ['resep <makanan>']
handler.tags = ['pencarian']
handler.command = /^(resep)$/i

export default handler
