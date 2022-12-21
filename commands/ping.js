import { SlashCommandBuilder } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Pong!'),
    async execute(interaction, bot) {
        return await interaction.reply(`Pong! ${Math.round(bot.ws.ping)}ms`);
    }
};
