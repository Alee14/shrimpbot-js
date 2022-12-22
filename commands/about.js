import { SlashCommandBuilder, EmbedBuilder, version } from 'discord.js';
import { release, platform } from 'node:os'

export default {
    data: new SlashCommandBuilder()
        .setName('about')
        .setDescription('Gets information about Shrimpbot'),
    async execute(interaction, bot) {
        const aboutEmbed = new EmbedBuilder()
            .setImage('https://cdn.discordapp.com/attachments/344244531274711042/1055302911980220436/Banner_18.png')
            .addFields(
                { name: 'ShrimpBot 18.2022.12.21 (NO ROYCE\'S ANIME FANTASY EDITION)', value: 'by Alee (JS Edition), Squid Grill (C# Edition) (and open source contributors)' },
                { name: 'Hosting', value: `Node.JS ${process.version}\nDiscord.JS ${version}\n${platform().charAt(0).toUpperCase() + platform().slice(1)} ${release()}` },
                { name:'Links', value:'Official ShrimpBot Discord Server: https://discord.gg/fuJ6J4s\nGitHub Repository: https://github.com/Alee14/shrimpbot-js' }
            )
            .setFooter({ text: 'Thank you for using ShrimpBot! ❤' })
            .setColor('#338BC1')
        return await interaction.reply({ embeds: [aboutEmbed] });
    }
};
