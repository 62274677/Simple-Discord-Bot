import os
import discord
#import json
import yaml
import re
# import zelda_commands
from logging import Logger


client = discord.Client()

token = yaml.load(open('token.yaml'))['token']
prefix = "z!"
# imagefile = zelda_commands.current_file_path+"image.png"


def emote(guild, name):
    return discord.utils.get(guild.emojis, name=name)


@client.event
async def on_ready():
    print('We have logged in as {0.user}'.format(client))


@client.event
async def on_message(message):
    command = ""
    if message.content.startswith(prefix):
        print("Message seen")
        content = message.content.split(prefix)[1]
        print("Content: "+content)
        # zoom zoomadd class classadd
        if content.startswith('zoom') or content.startswith('class'):
            try:
                command, content = re.match(
                    r'(zoom|zoomadd|class|classadd) (.+)', content).group(1, 2)

                print("Command: "+command+"\nContent: "+content)
            except (IndexError, AttributeError):
                command = re.match(
                    r'(zoomadd|zoom|classadd|class)', content).group(1)
                if command != "":
                    # ask the user to put in their info or whatever
                    print("Command: " + command)
                else:
                    print("Command empty")

            print()

client.run(token)
