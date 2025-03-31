const NAVAIDS = [
  {
    identifier: 'MHZ',
  },
  {
    identifier: 'UJM',
  },
  {
    identifier: 'SQS',
  },
  {
    identifier: 'HLI',
  },
  {
    identifier: 'GLH',
  },
  {
    identifier: 'IGB',
  },
  {
    identifier: 'MHZ',
  },
  {
    identifier: 'MLU',
  },
  {
    identifier: 'MEI',
  },
  {
    identifier: 'MCB',
  },
  {
    identifier: 'HEZ',
  },
  {
    identifier: 'GCV',
  },
]

const AIRPORTS = [
  {
    identifer: 'KJAN',
  },
  {
    identifer: 'JHKS',
  },
  {
    identifer: 'KJVW',
  },
  {
    identifer: 'KTVR',
  },
  {
    identifer: 'KVKS',
  },
  {
    identifer: '0M8',
  },
  {
    identifer: 'KGWO',
  },
  {
    identifer: 'KMLU',
  },
] as const

type vertex = (typeof AIRPORTS)[number]['identifer'] | (typeof AIRPORTS)[number]['identifer']
type Edge = [vertex, vertex]
