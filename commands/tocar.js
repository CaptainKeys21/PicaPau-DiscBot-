const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

const errorEmbed = new MessageEmbed().setColor('RED').setTitle('Conecte-se a um canal de voz! :rage::rage::rage:');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('tocar')
        .setDescription('toca musica na call')
        .addStringOption(option => option.setName('musica')
                .setDescription('Qual é o som meu chapa')
                .setRequired(true)),
    async execute(interaction) {
            interaction.client.botPlayer.activeChannel = interaction.channel;
        try {
            try {
                if (!interaction.client.botPlayer.connection) interaction.client.botPlayer.createConnection(interaction);
                if (!interaction.client.botPlayer.player) interaction.client.botPlayer.createPlayer();
            } catch (error) {
                return;
            }

            await interaction.client.botPlayer.addtoQueue(interaction, interaction.options.getString('musica'));
            if (interaction.client.botPlayer.player.state.status === 'idle') await interaction.client.botPlayer.playMusic();

        } catch (error) {
            console.log(error);
            interaction.reply({ embeds: [errorEmbed] });
        }
    },
};
