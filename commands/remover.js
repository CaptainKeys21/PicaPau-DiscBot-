const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('remover')
        .setDescription('tira essa musica carai')
        .addIntegerOption(option => option.setName('ordem')
                .setDescription('qual devo aniquilar?')
                .setRequired(true)),
    async execute(interaction) {
        const result = interaction.client.botPlayer.removeMusicQueue((interaction.options.getInteger('ordem') - 1));
        const embed = new MessageEmbed().setTitle('Removido:').setDescription(`${result}`);

        interaction.reply({ embeds: [embed] });
    },
};