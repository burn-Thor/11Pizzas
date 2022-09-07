import sanityClient from '@sanity/client'
import ImageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: '2b47ic86',
    dataset: 'production',
    apiVersion: "2022-09-06",
    useCdn: true,
    //set up .env
    token: 'skGgCYyttgD4m6TJvtHQVfNOs04iwOwAoidICMExLFWhHMmWygcoSHqurxnuXpzz9d2Eip2F6RUUVVtk1Ve9EEYCSvDGPyV88IxM9U9o01Uv5Ji5iBkg8yhOFsmeNvQXIOGSVatyqVgyoThwUZrbk659dzsl4swemqaxXUHEsK1bqlOE15QS'

})

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)