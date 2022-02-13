const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');


const pauseEmbed = new MessageEmbed()
    .setColor('ORANGE')
    .setTitle(':speaker: Despausando...');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('despause')
        .setDescription('Não preciso explicar né...'),
    async execute(interaction) {
        await interaction.client.botPlayer.playerUnpause();
        await interaction.reply({ embeds: [pauseEmbed], ephemeral:true });
    },
};