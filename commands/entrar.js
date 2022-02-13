const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('entrar')
        .setDescription('invado a sua call'),
    async execute(interaction) {
        await interaction.client.botPlayer.createConnection(interaction);
        interaction.reply({ content: 'Entrando...', ephemeral: true });
    },
};