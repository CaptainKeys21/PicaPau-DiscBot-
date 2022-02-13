const { MessageEmbed } = require('discord.js');
const { joinVoiceChannel, createAudioPlayer, StreamType, createAudioResource, AudioPlayerStatus } = require('@discordjs/voice');
const ytSearch = require('yt-search');
const ytdl = require('ytdl-core');

module.exports = class BotPlayer {
    constructor() {
        this.connection;
        this.queue = [];
        this.player;
        this.isPlaying = false;
        this.activeChannel;
    }

    createConnection(interaction) {
        try {
            this.connection = joinVoiceChannel({
                channelId:interaction.member.voice.channel.id,
                guildId: interaction.guild.id,
                adapterCreator: interaction.guild.voiceAdapterCreator,
            });
        } catch (error) {
            const embed = new MessageEmbed().setColor('RED').setTitle('Conecte-se a um canal de voz! :rage::rage::rage:');
            interaction.reply({ embeds: [embed], ephemeral: true });
            throw (error);
        }
    }

    destroyConnection() {
        this.connection.destroy();
        this.connection = undefined;
    }

    createPlayer() {
        this.player = createAudioPlayer();
    }

    destroyPlayer() {
        this.player.stop();
        this.player = undefined;
    }

    async addtoQueue(interaction, music) {
        const result = (await ytSearch(music)).videos.shift();
        this.queue.push(result);
        const embed = new MessageEmbed()
            .setColor('GREEN')
            .setTitle(':headphones: Adcionado a fila :headphones:')
            .setDescription(`${result.title}`);
        await interaction.reply({ embeds: [embed] });
    }

    async playMusic(index = 0) {
        const stream = ytdl(this.queue[index].url, { filter: 'audioonly' });
        const resource = createAudioResource(stream, { inputType: StreamType.Arbitrary });
        try {
            this.player.play(resource);
            this.isPlaying = true;
            if (!this.connection.subscribe(this.player)) {
                this.connection.subscribe(this.player);
            }

            const embed = new MessageEmbed()
                .setColor('DARK_GREEN')
                .setTitle(':headphones: tocando agora :headphones:')
                .setDescription(`${this.queue[index].title}`);

            this.activeChannel.send({ embeds: [embed] });

            this.queue.shift();

        } catch (error) {
            console.error(error);
        }

        this.player.on('error', error => {
            console.error(error);
        });

        this.player.on(AudioPlayerStatus.Idle, () => {
            if (this.queue.length) this.playMusic();
        });
    }

    playerPause() {
        this.player.pause();
    }

    playerUnpause() {
        this.player.unpause();
    }

};