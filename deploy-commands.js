const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { token, clientId, guildId } = require('./config.json');

const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
}


const rest = new REST({ version: '9' }).setToken(token);

(async () => {
    try {
        console.log('Recarregando os Comandos Barra (/) da Aplicação...');

        await rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands });

        console.log('Sucesso!');
    } catch (error) {
        console.error(error);
    }
})();