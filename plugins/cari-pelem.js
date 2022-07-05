import { film } from 'xfarr-api'
import fetch from 'node-fetch'
import axios from 'axios'

let handler = async (m, { conn, text }) => {
    if (!text) throw `*[❗INFO❗] Masukan Judul Film Yang Ingin Kamu Cari*`
    let data  = await film(text)
    let datathumb = await(await fetch(data[0].thumb)).buffer()
// let gbr = data[0].thumb  
let txt = `*--------「 FILM-SEARCH 」--------*\n\n`
for (let i of data) {
txt += `*📫 Judul :* ${i.judul}\n`
txt += `*🎞️ Tipe  :* ${i.type}\n`
txt += `*📟 Kualitas :* ${i.quality}\n`
txt += `*📮 Upload :* ${i.upload}\n`
txt += `*🔗 Url :* ${i.link}\n------------------------------------\n`
}
conn.sendFile(m.chat, datathumb, '', txt, m)
})
}
handler.help = ['film <keyword>']
handler.tags = ['pencarian', 'film']
handler.command = /^(film)$/i

export default handler
