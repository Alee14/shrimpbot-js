import { Client, Events, Collection, InteractionType, GatewayIntentBits } from 'discord.js'
import config from './config.json' assert { type: 'json' }
import { readdirSync } from "node:fs";
const bot = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildVoiceStates] });

bot.commands = new Collection();
const commandFiles = readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const { default: command } = await import(`./commands/${file}`);
    bot.commands.set(command.data.name, command);
}

bot.once(Events.ClientReady, async() => {
    console.log('Bot is ready');
})

bot.on(Events.InteractionCreate, async interaction => {
    if (interaction.type === !InteractionType.ApplicationCommand) return;
    if (!interaction.isChatInputCommand()) return;
    const command = bot.commands.get(interaction.commandName);

    if (!command) return;

    try {
        await command.execute(interaction, bot);
    } catch (e) {
        console.error(e);
        await interaction.reply({ content: `There was an error while executing this command...\n\nDetails:\`\`\`${e}\`\`\``, ephemeral: true });
    }
});

bot.login(config.token);
