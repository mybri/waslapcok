import fetch from 'node-fetch'
import cheerio from 'cheerio'
import { JSDOM } from 'jsdom'



let handler = async (m, { text, usedPrefix, command }) => {
  let res = await fetch(`http://149.56.24.226/?s=` + text, {
    headers: {
      "cache-control": "no-transform",
      "content-type": "text/html; charset=UTF-8",
      "User-Agent": "Mozilla/5.0 (Linux; Android 9; Redmi 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Mobile Safari/537.36",
    }
  })
  if (!res.ok) throw await res.text()
  let html = await res.text()
  let { document } = new JSDOM(html).window
  let cheerio.load(res.data)
  let hasil = [...document.querySelectorAll('div.row > div.col-xs-3.col-sm-2.search-poster')].map(el => {
    let a = el.querySelector('a')
    return {
      film_title: a.title,
      film_link: a.href,
      film_thumb: el.querySelector('img').src.replace('//', ''),
    }
  })

  m.reply(`
*LAYAR KACA*
${hasil.map(v => `
▢ *Judul* : ${v.film_title}
▢ *Link* : ${v.film_link}
`).join('────────────────')}
`.trim())
}

handler.help = ['lk21'].map(v => v + ' <query>')
handler.tags = ['internet']
handler.command = /^(lk21)$/i
export default handler
