/**
 * RAIZEL XMD - Main Entry
 */

const chalk = require("chalk");
const figlet = require("figlet");

console.log(
  chalk.cyan(
    figlet.textSync("RAIZEL XMD", { horizontalLayout: "default" })
  )
);

console.log(chalk.yellow.bold("🚀 Initialisation du bot..."));

(async () => {
  try {
    await require("./bot.js");
    console.log(chalk.green("✅ Bot lancé avec succès !"));
  } catch (err) {
    console.error(chalk.red("❌ Erreur au lancement du bot :"), err);
    process.exit(1);
  }
})();
