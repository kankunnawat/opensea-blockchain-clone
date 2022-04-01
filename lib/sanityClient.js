import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'sqwy1fq4',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skbvhMSSsMtzhTNdI3gi9lnZNRXm7EewafXd1jzZfIrIR9fiyQ2b6Dk8eyA2i8h4qtIDbiH6sKWCwQtXtZsA96GSmAO3VSA9GFFs4bT3GodMQ4cbh38Zk3IN0Pkrlmtij6MRrdK4s42I2cLqFAKonkLznuIefNT4ngHwabN98CvuZJSd2F54',
  useCdn: false,
})
