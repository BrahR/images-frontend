---
title: Installing
description: Guide on how to install soggaimages
---

### How can i use this image uploader

### Windows

    -   Install sharex https://getsharex.com/
    -   Download your config /profile in the discord
    -   Open the .sxcu file
    -   Select sogga images as image uploader
    -   Adjust the keybinds as needed

### Linux

    -   Download sharenix https://github.com/Francesco149/sharenix
    -   Update the imgur.com uploader to use the sogga images
    -   And change the request url to the one in /profile
    -   Change the "URL" to "URL": "$json:url$"
    -   Adjust the keybinds as needed

#### example sharenix config

```json
  {
    "Name": "sogga",
    "RequestType": "POST",
    "Headers": {
        "Authorization": "password",
        "id": "your id"
    },
    "RequestURL": "https://api.tricked.pro/images/upload",
    "FileFormName": "image",
    "Arguments": {
        "type": "file"
    },
    "URL": "$json:url$",
    "DeletionURL": "https://imgur.com/delete/$json:data.deletehash$"
  },

```

### MacOs

    -   Switch to linux its better

```

```
