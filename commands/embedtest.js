const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

const testEmbed = new MessageEmbed()
    .setColor('RED')
    .setTitle('Conecte-se a um canal de voz! :rage::rage::rage:');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('testeembed')
        .setDescription('testando coisa que não é da sua conta!'),
    async execute(interaction) {
        await interaction.reply({ embeds: [testEmbed] });
    },
};