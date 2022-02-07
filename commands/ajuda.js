const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { version } = require('../package.json');

const ajudaEmbed = new MessageEmbed()
    .setColor('RED')
    .setTitle('Pica-Pau Bot')
    .setDescription(`Versão ${version}`)
    .setThumbnail('https://pbs.twimg.com/profile_images/1466949546278367237/xW5u29Pi_400x400.jpg')
    .addField('Comandos: ', 'Por enquanto só o Ajuda :v', true);

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ajuda')
        .setDescription('Ala o burrão que precisa de ajudakkkkkkkkk'),
    async execute(interaction) {
        await interaction.reply({ embeds: [ajudaEmbed] });
    },
};