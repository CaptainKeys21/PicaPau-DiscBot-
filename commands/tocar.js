const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const ytdl = require('ytdl-core');
const {
	AudioPlayerStatus,
	StreamType,
	createAudioPlayer,
	createAudioResource,
	joinVoiceChannel,
} = require('@discordjs/voice');


const errorEmbed = new MessageEmbed()
    .setColor('RED')
    .setTitle('Conecte-se a um canal de voz! :rage::rage::rage:');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('tocar')
        .setDescription('toca musica na call')
        .addStringOption(option => option.setName('musica')
                .setDescription('Qual é o som meu chapa')
                .setRequired(true)),
    async execute(interaction) {
        try {

            const connection = joinVoiceChannel({
                channelId: interaction.member.voice.channel.id,
                guildId: interaction.channel.guild.id,
                adapterCreator: interaction.channel.guild.voiceAdapterCreator,
            });

            const stream = ytdl(interaction.options.getString('musica'), { filter: 'audioonly' });
            const resource = createAudioResource(stream, { inputType: StreamType.Arbitrary });
            const player = createAudioPlayer();

            player.play(resource);
            connection.subscribe(player);

            player.on(AudioPlayerStatus.Idle, () => connection.destroy());
        } catch (error) {
            console.log(error);
            await interaction.reply({ embeds: [errorEmbed], ephemeral: true });
            return;
        }

    },
};
