const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

const embed = new MessageEmbed()
    .setColor('GREEN')
    .setTitle('Entrando...');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('entrar')
        .setDescription('invado a sua call'),
    async execute(interaction) {
        await interaction.client.botPlayer.createConnection(interaction);
        interaction.reply({ embeds: [embed], ephemeral: true });
    },
};