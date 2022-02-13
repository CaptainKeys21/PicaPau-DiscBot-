const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

const embedQueue = (queue) => {
    let list = '';
    for (const musica of queue) {
        list += `${musica}\n`;
    }

    const embed = new MessageEmbed().setColor('BLUE').setTitle('Fila:').setDescription(`${list}`);

    return embed;
};

const embedEmptyQueue = new MessageEmbed().setColor('RED').setTitle('Não há musicas na fila.');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('fila')
        .setDescription('O que vai tocar depois?'),
    async execute(interaction) {
        const serverQueue = interaction.client.queue;
        if (serverQueue) {
            interaction.reply({ embeds: [embedEmptyQueue] });
        } else {
            interaction.reply({ embeds: [embedQueue(serverQueue)] });
        }

    },
};