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

function displayIcons() {
    return client.getEntries({ content_type: 'icons', select: 'sys.id,fields.name,fields.icon' })
        .then((response) => response.items)
        .then(items => items.map(async i => {
            const asset = await client.getAsset(i.fields.icon.sys.id);

            return { id: i.sys.id, name: i.fields.name, url: asset.fields.file.url };
        }))
        .catch((error) => {
            console.log(chalk.red('\nError occurred while fetching Content Types:'))
            console.error(error)
        });
}