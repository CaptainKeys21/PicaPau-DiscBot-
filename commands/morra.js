const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('morra')
        .setDescription('Morra.')
        .addStringOption(option => option.setName('alguém')
                .setDescription('Mande alguém morrer.')
                .setRequired(true)),
    async execute(interaction) {
        const arg = interaction.options.getString('alguém');
        await interaction.reply(`Morra ${arg}`);
    },
};