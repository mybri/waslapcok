import fetch from 'node-fetch'
import cheerio from 'cheerio'
let handler = async (m, { conn, text }) => {
if (!text) throw `*[❗INFO❗] Masukan Nama Resep Ingin Kamu Cari*`
let res = await fetch(global.API('https://api.burhansyam.com', '/bot/cuaca/', { q: text }))
if (!res.ok) throw await res.text()
let json = await res.json()
let { title, thumb, key, times, serving, difficulty } = json.results
// let res2 = await fetch(global.API('https://masak-apa.tomorisakura.vercel.app', '/api/recipe/' {${key}))
// if (!res2.ok) throw await res2.text()
// let json = await res2.json()
// let { title, thumb, times, serving, difficulty, desc, step } = json.results[0]
let madang = `✨ *Judul :* ${title}
🎆 *Durasi :* ${times}
💬 *Hasil :* ${serving}
💌 *Level :* ${difficulty}
❤️ Selengkapnya silakan kunjungi :
https://foodzilla.my.id/cr/?resep=${key}`
// 👥 *link :* ${step}
conn.sendFile(m.chat, thumb, '', madang, m)
}

handler.help = ['cuaca <kota>']
handler.tags = ['info']
handler.command = /^cuaca$/i

export default handler
