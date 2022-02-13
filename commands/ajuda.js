const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { version } = require('../package.json');

const ajudaEmbed = new MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Pica-Pau Bot')
    .setDescription(`Versão ${version}`)
    .setThumbnail('https://pbs.twimg.com/profile_images/1466949546278367237/xW5u29Pi_400x400.jpg')
    .addField('Comandos(/): ', '**Ajuda** - Mostra todos os comandos\n**Tocar** - toca musica na call', true);

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ajuda')
        .setDescription('Ala o burrão que precisa de ajudakkkkkkkkk'),
    async execute(interaction) {
        await interaction.reply({ embeds: [ajudaEmbed] });
    },
};