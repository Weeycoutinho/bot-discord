const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("playlist")
        .setDescription("A melhor playlist aqui e agora!!!"),

    async execute (interaction) {
        await interaction.reply("https://www.youtube.com/watch?v=jfKfPfyJRdk")
    }
}