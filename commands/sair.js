const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('sair')
        .setDescription('saio da sua call'),
    async execute(interaction) {
        await interaction.client.botPlayer.destroyConnection();
        interaction.reply({ content: 'Saindo...', ephemeral: true });
    },
};