import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = ({
    projestID: '2ckwqta6',
    dataset: 'production',
    apiVersion: 'v2021-10-21',
    useCdn: true
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);