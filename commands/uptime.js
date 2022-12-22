import { SlashCommandBuilder } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('uptime')
        .setDescription('Shows how long Shrimpbot has been up'),
    async execute(interaction, bot) {
        let uptime = parseInt(bot.uptime);
        uptime = Math.floor(uptime / 1000);
        let uptimeMinutes = Math.floor(uptime / 60);
        const minutes = uptime % 60;
        let hours = 0;
        let days = 0;
        while (uptimeMinutes >= 60) {
            hours++;
            uptimeMinutes = uptimeMinutes - 60;
        }
        while (hours >= 24) {
            days++;
            hours = hours - 24;
        }
        const uptimeSeconds = minutes % 60;
        return await interaction.reply({ content: `:clock3: ShrimpBot has been up for ${days} days, ${hours} hours, ${uptimeMinutes} minutes, and ${uptimeSeconds} seconds.` });
    }
};
