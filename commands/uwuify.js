import { SlashCommandBuilder } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('uwuify')
        .setDescription('Just no.'),
    async execute(interaction, bot) {
        return await interaction.reply('No... just no...');
    }
};
