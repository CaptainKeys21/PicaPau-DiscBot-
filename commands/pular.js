const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

const embed = new MessageEmbed()
    .setColor('ORANGE')
    .setTitle('Pulando...');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('pular')
        .setDescription('Pulo a musica atual'),
    async execute(interaction) {
        interaction.client.botPlayer.stopPlayer();
        interaction.reply({ embeds: [embed], ephemeral: true });
    },
};