let handler = async (m, { conn, usedprefix }) => {
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    conn.sendFile(m.chat, ' blurry', author, global.API('https://some-random-api.ml', '/canvas/blur', {
        avatar: await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
    }), 'error.png', `*Blur*`, m)
}

handler.help = ['blur']
handler.tags = ['maker']

handler.command = /^(blur)$/i

export default handler
