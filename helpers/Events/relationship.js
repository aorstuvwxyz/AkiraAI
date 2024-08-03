/*!-======[ Module Imports ]======-!*/
const fs = "fs".import()
const { default: ms } = await "ms".import()
/*!-======[ Default Export Function ]======-!*/
export default async function on({ cht, Exp, store, ev, is }) {
    const { id } = cht
    ev.on({ 
        cmd: ['status','profil','profile','relationship'],
        listmenu: ['profile'],
        tag: 'relationship'
    }, async() => {
        let speed = ms(cht.memories.chargingSpeed)
        let url
        try {
            url = await Exp.profilePictureUrl(cht.sender)
        } catch {
            url = "https://telegra.ph/file/fddb61dda9e76235b8857.jpg"
        }
        let txt = "*!-====[ Profile ]====-!*\n"
            txt += "\nNama: " + cht.pushName
            txt += "\nRole: " + cht.memories.role
            txt += "\nChatting: " + cht.memories.chat
            txt += "\nEnergy: ⚡" + cht.memories.energy
            txt += "\n\n ▪︎ *[🔋] Mood Energy*"
            txt += `\n- Status: ${(cht.memories.energy< cht.memories.maxCharge) ? "🟢Charging" : " ⚫Discharging"}`
            txt += "\n- Charging Speed: ⚡" + cht.memories.chargeRate + " Energy/" + speed
            txt += "\n- Max Charge: " + cht.memories.maxCharge
            txt += "\n- Last Charge: " + Exp.func.dateFormatter(cht.memories.lastCharge, "Asia/Jakarta")
        const menu = {
            text: txt,
            contextInfo: { 
                externalAdReply: {
                    title: cht.pushName,
                    body: "Akiraa AI",
                    thumbnailUrl: url,
                    sourceUrl: "",
                    mediaUrl: "http://ẉa.me/62895402127803/"+Math.floor(Math.random() * 100000000000000000),
                    renderLargerThumbnail: true,
                    showAdAttribution: true,
                    mediaType: 1,
                },
                forwardingScore: 19,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: "120363301254798220@newsletter",
                }
            }
        }
        Exp.sendMessage(id, menu, { quoted: cht })
    })
    
}