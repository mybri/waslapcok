// import { webp2png } from '../lib/webp2mp4.js'

// let handler = async (m, { conn, args }) => {
//   let q = m.quoted ? m.quoted : m
//   let mime = (q.msg || q).mimetype || q.mediaType || ''
//   if (/image/.test(mime)) {
//     let url = await webp2png(await q.download())
//     await conn.updateProfilePicture(conn.user.jid, { url }).then(_ => m.reply('Success update profile picture'))
//   } else if (args[0] && /https?:\/\//.test(args[0])) {
//     await conn.updateProfilePicture(conn.user.jid, { url: args[0] }).then(_ => m.reply('Success update profile picture'))
//   } else throw 'Where\'s the media?'
// }
// handler.alias = ['setpp', 'setppbot']
// handler.command = /^setpp(bot)?$/i

// handler.rowner = true

let handler = async (m, { conn }) => {
    let bot = conn.user.jid // Bot
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image/.test(mime)) {
        let img = await q.download()
        if (!img) throw `balas gambarnya!`
        conn.updateProfilePicture(bot, img)
        m.reply('*Sukses*')
    }
}
handler.help = ['setbotpp']
handler.tags = ['owner']
handler.command = /^(set(bot)?pp)$/i
handler.owner = true

export default handler
