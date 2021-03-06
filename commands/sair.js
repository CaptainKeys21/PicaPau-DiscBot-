const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

const embed = new MessageEmbed()
    .setColor('DARK_BUT_NOT_BLACK')
    .setTitle('Saindo...');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('sair')
        .setDescription('saio da sua call'),
    async execute(interaction) {
        await interaction.client.botPlayer.destroyConnection();
        interaction.reply({ embeds: [embed], ephemeral: true });
    },
};