import { SlashCommandBuilder } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('work')
        .setDescription('Work for Squid Grill to get some money.'),
    async execute(interaction, bot) {
        const squidJobs = [
            'You helped crackdown a child trafficking operation at Okaerinasaimase Goshunjinsama!, and got {insert number} dollars!',
            'You made a virus for FMP and got {insert number} dollars!'
        ];
        return await interaction.reply(squidJobs[Math.floor(Math.random() * squidJobs.length)]);
    }
};
