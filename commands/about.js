import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('about')
        .setDescription('Gets information about Shrimpbot'),
    async execute(interaction, bot) {
        const aboutEmbed = new EmbedBuilder()
            .addFields(
                { name: 'ShrimpBot 18.2022.12.21 (NO ROYCE\'S ANIME FANTASY EDITION)', value: 'by Alee (JS Edition), Squid Grill (C# Edition) (and open source contributors)' },
        { name: 'Hosting', value: 'Placeholder' },
                { name:'Links', value:'Insert links' }
            )
        return await interaction.reply({ embeds: [aboutEmbed] });
    }
};
