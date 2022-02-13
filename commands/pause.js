const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');


const pauseEmbed = new MessageEmbed()
    .setColor('ORANGE')
    .setTitle(':mute: Player Pausado...');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('pause')
        .setDescription('Não preciso explicar né...'),
    async execute(interaction) {
        await interaction.client.botPlayer.playerPause();
        await interaction.reply({ embeds: [pauseEmbed], ephemeral:true });
    },
};