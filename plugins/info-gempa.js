import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let res = await axios("https://api.burhansyam.com/bot/gempa.json")
let json = res.data
let url = json.url
let author = json.author
let tanggal = json.tanggal
let jam = json.jam
let magnitude = json.magnitude
let koordinat = json.koordinat
let kedalaman = json.kedalaman
let lokasi = json.lokasi

let kaslak = `🗓 *Tanggal :* ${tanggal}
⏰ *Jam :* ${jam}
🌀 *Kekuatan SR :* ${magnitude}
⛳️ *Koordinat :* ${koordinat}
☣️ *Kedalaman :* ${kedalaman}
🌐 *Lokasi :* ${lokasi}
📝 *Coded by :* @burhansyam`

conn.sendButton(m.chat, "📢 Informasi Gempa Terkini", kaslak, url, [['♻️ Info Gempa BMKG ♻️', `${usedPrefix + command}`]], m)

}

handler.help = ['gempa']
handler.tags = ['info']
handler.command = /^(gempa)$/i
export default handler
