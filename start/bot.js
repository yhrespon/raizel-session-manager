/**
 * Bot WhatsApp Baileys - RAIZEL XMD
 */

const { default: makeWASocket, useMultiFileAuthState } = require("@whiskeysockets/baileys");
const pino = require("pino");
const chalk = require("chalk");
const qrcode = require("qrcode-terminal");
const path = require("path");

async function startBot() {
  console.log(chalk.blue("📡 Connexion en cours..."));

  const { state, saveCreds } = await useMultiFileAuthState(path.join(__dirname, "../session"));

  const sock = makeWASocket({
    logger: pino({ level: "silent" }),
    printQRInTerminal: true,
    auth: state
  });

  // Sauvegarde des creds
  sock.ev.on("creds.update", saveCreds);

  // Affiche QR
  sock.ev.on("connection.update", (update) => {
    const { connection, qr } = update;
    if (qr) qrcode.generate(qr, { small: true });
    if (connection === "open") {
      console.log(chalk.green("✅ Connecté à WhatsApp !"));
    }
    if (connection === "close") {
      console.log(chalk.red("❌ Déconnexion. Reconnexion..."));
      startBot();
    }
  });

  // Gestion des messages
  sock.ev.on("messages.upsert", async (m) => {
    const msg = m.messages[0];
    if (!msg.message) return;

    const from = msg.key.remoteJid;
    const text = msg.message.conversation || msg.message.extendedTextMessage?.text;

    if (text) {
      console.log(chalk.magenta(`💬 Message reçu de ${from}: ${text}`));
      await require("./response")(sock, from, text, msg);
    }
  });
}

startBot();
