const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, Component } = require("discord.js");/*const cria uma variável cujo o valor é fixo, ou seja, uma constante somente leitura */

const row = new ActionRowBuilder() /*new cria uma instancia de um tipo de objeto definido pelo usuário ou de um dos tipos nativos (built-in) que possuem uma função construtora */
    .addComponents(
        new StringSelectMenuBuilder()
            .setCustomId("select")
            .setPlaceholder("Nenhuma liguagem selecionada")
            .addOptions({
             label: "javascript", /*label provém uma declaração com um indentificador o qual pode ser referido posteriormente utilizando-se os comandos break ou continue */
             description: "Veja a documentação de Javascript",
             value: "javascript" /*value, pedaços são chamados de valores */
            },
            {
                label: "python",
                description: "Veja a documentação de Python",
                value: "python"
            },
            {
                label: "C#",
                description: "Veja a documentação de C#",
                value: "csharp"
            },
            {
                label: "discord.js",
                description: "Veja a documentação de Discord.js",
                value: "discordjs"
            }
            )
        
        )

module.exports = { /*module.exports, as instruções que informam o Node. js quais bits de código exportar de um determinado arquivo para que outros arquivos tenham permissão para acessar o código exportado*/
    data: new SlashCommandBuilder()
        .setName("docs")
        .setDescription("Acesse a documentação da tecnologia que quiser"),

    async execute (interaction) { /*async significa que o valor de retorno da função será, "por baixo dos panos", uma Promise */
        await interaction.reply({content: "Selecione uma das techs abaixo:", components: [row]})
    }
}