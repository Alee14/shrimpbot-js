import { SlashCommandBuilder } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('ratecuteness')
        .setDescription('100% accurate cuteness rater.'),
    async execute(interaction, bot) {
        return await interaction.reply(':two_hearts: Royce\'s cuteness is -100000/10');
    }
};
