'use strict'

const contentful = require('contentful')
const contentfulManagement = require('contentful-management')

const SPACE_ID = 'gicx31qwfqwj'
const ACCESS_TOKEN = '-VXpM4BclCTdrJGIBFafP-7f4-jXf81STOsg4LD61PM'
const MANAGEMENT_ACCESS_TOKEN = 'CFPAT-3GKMitY6UiQGVBdYRgXkEedbHwTbCwuzYCrytMszLlA'
const MEMORIAL_ENTITY = "memorial"
const ENVIRONMENT_ID = "master"

const client = contentful.createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: SPACE_ID,
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: ACCESS_TOKEN
});

const managementClient = contentfulManagement.createClient({
    accessToken: MANAGEMENT_ACCESS_TOKEN
})

async function displayIcons() {
    const response = await client.getEntries({ content_type: 'icons', select: 'sys.id,fields.name,fields.icon' });
    const items = response.items.map(item => (client.getAsset(item.fields.icon.sys.id)));
    const data = await Promise.all(items);
    return data.map(i => ({
        id: i.sys.id,
        name: i.fields.title,
        url: i.fields.file.url
    }));
}

async function saveMemorial(name, memory) {
    return managementClient.getSpace(SPACE_ID)
        .then((space) => space.getEnvironment(ENVIRONMENT_ID))
        .then((environment) => environment.createEntry(MEMORIAL_ENTITY, {
            fields: {
                name: {
                    'en-US': name
                },
                memory: {
                    'en-US': memory
                }
            }
        }))
        .then((entry) => entry.publish())
        .then((entry) => console.log(entry))
        .catch(console.error)
}

async function getMemorial(entryId) {
    client.getEntry(entryId)
        .then((entry) => console.log(entry))
        .catch(console.error)
}

export { displayIcons, saveMemorial, getMemorial };

