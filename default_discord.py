import os
import discord
#import json
import yaml
import re
from logging import Logger


client = discord.Client()

token = yaml.load(open('token.yaml'))['token']
prefix = "z!"


def emote(guild, name):
    return discord.utils.get(guild.emojis, name=name)


@client.event
async def on_ready():
    print('We have logged in as {0.user}'.format(client))


@client.event
async def on_message(message):
    if message.content.startswith(prefix):
        print("Message seen")
        content = message.content.split(prefix)[1]
        print("Content: "+content)

client.run(token)
