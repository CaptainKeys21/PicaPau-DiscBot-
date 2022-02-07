module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        console.log(`Carregado! Logado como ${client.user.tag}`);
    },
};