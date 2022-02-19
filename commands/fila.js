const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('fila')
        .setDescription('O que vai tocar depois?'),
    async execute(interaction) {
        const queue = interaction.client.botPlayer.getQueueList();
        const embed = new MessageEmbed().setTitle('Fila:').setDescription(`${queue}`);
        interaction.reply({ embeds: [embed] });
    },
};