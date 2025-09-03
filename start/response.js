/**
 * Command handler - RAIZEL XMD
 */

module.exports = async function response(sock, from, text, msg) {
  if (text.toLowerCase() === "ping") {
    await sock.sendMessage(from, { text: "pong 🏓" }, { quoted: msg });
  } else if (text.toLowerCase() === "menu") {
    await sock.sendMessage(
      from,
      { text: "📌 *Menu RAIZEL XMD*\n\n1. ping\n2. menu\n3. help" },
      { quoted: msg }
    );
  } else if (text.toLowerCase() === "help") {
    await sock.sendMessage(from, { text: "ℹ️ Tape 'menu' pour voir les commandes." }, { quoted: msg });
  }
};
