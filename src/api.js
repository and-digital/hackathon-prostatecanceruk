'use strict'

const contentful = require('contentful')
const chalk = require('chalk')

const SPACE_ID = 'gicx31qwfqwj'
const ACCESS_TOKEN = '-VXpM4BclCTdrJGIBFafP-7f4-jXf81STOsg4LD61PM'

const client = contentful.createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: SPACE_ID,
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: ACCESS_TOKEN
});

export async function displayIcons() {
    const response = await client.getEntries({ content_type: 'icons', select: 'sys.id,fields.name,fields.icon' });
    const items = response.items.map(item => (client.getAsset(item.fields.icon.sys.id)));
    const data = await Promise.all(items);
    return data.map(i => ({
        id: i.sys.id,
        name: i.fields.title,
        url: i.fields.file.url
    }));
}
