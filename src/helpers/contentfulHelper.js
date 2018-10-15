import * as contentful from 'contentful';

const client = contentful.createClient({
    space: 'yg6bvazmunnt',
    accessToken: 'a0257b82968ffe4ec3d59ee2087eea1f82eabd5b0a2c50e9737aeadceb95d24d'
});

export default function loadBackgroundVideo() {
    return client.getEntry('4KL6YxYjVuesEqoyKew2a4');
}