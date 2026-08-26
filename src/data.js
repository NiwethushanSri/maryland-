export const BUSINESS = {
  name: 'Maryland Internet Cafe',
  phone: '020 8519 6587',
  phoneHref: 'tel:+442085196587',
  address: '69 Leytonstone Road, Stratford, London, E15 1JA',
  addressLines: ['69 Leytonstone Road', 'Stratford', 'London', 'E15 1JA'],
  mapsQuery: '69 Leytonstone Road, Stratford, London, E15 1JA',
  company: {
    legalName: 'Maryland Internet Cafe Ltd',
    incorporated: '5 December 2018',
    number: '11713206',
  },
}

export const NAV = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Money Transfer', to: '/money-transfer' },
  { label: 'Internet & Printing', to: '/internet' },
  { label: 'DHL Parcels', to: '/dhl' },
  { label: 'Mobile & Electronics', to: '/mobile-electronics' },
  { label: 'Contact Us', to: '/#contact' },
]

export const SERVICES = [
  {
    id: 'money-transfer',
    icon: 'MoneyIcon',
    title: 'Money Transfer Services',
    blurb:
      'Send money to family, friends and businesses overseas quickly and conveniently through leading international money transfer providers.',
    items: [
      'Western Union',
      'Ria Money Transfer',
      'MoneyGram',
      'International money transfer assistance',
    ],
  },
  {
    id: 'internet-printing',
    icon: 'GlobeIcon',
    title: 'Internet & Computer Services',
    blurb:
      'Convenient computer and online services for personal, professional and educational use.',
    items: [
      'Internet surfing',
      'Computer access',
      'Online applications',
      'Email access',
      'Document preparation',
      'Online form assistance',
    ],
  },
  {
    id: 'printing',
    icon: 'PrinterIcon',
    title: 'Printing, Scanning & Documents',
    blurb:
      'Get your documents printed, scanned and prepared quickly from one convenient location.',
    items: [
      'Black & white printing',
      'Colour printing',
      'Document scanning',
      'Photocopying',
      'Email-to-print services',
      'Application & form printing',
    ],
  },
  {
    id: 'dhl',
    icon: 'BoxIcon',
    title: 'DHL Parcel Service',
    blurb:
      'Send and receive parcels conveniently through our DHL parcel service — a simple, local option.',
    items: [
      'DHL parcel drop-off',
      'DHL parcel collection',
      'Parcel sending assistance',
      'Parcel pickup service',
    ],
  },
  {
    id: 'mobile',
    icon: 'PhoneDeviceIcon',
    title: 'Mobile Phones',
    blurb:
      'Explore our selection of mobile phones and related products. Our team can help you find a suitable option for everyday communication.',
    items: ['Mobile phone handsets', 'Everyday communication devices', 'Helpful in-store advice'],
  },
  {
    id: 'accessories',
    icon: 'PlugIcon',
    title: 'Mobile Phone Accessories',
    blurb: 'A range of useful mobile phone accessories to keep you connected.',
    items: [
      'Phone chargers',
      'Charging cables',
      'Earphones',
      'Phone cases',
      'Screen protectors',
      'Adapters',
    ],
  },
  {
    id: 'electronics',
    icon: 'ChipIcon',
    title: 'Electronics',
    blurb:
      'A selection of useful electronic products and accessories — everyday technology essentials without needing to travel far.',
    items: ['Everyday tech essentials', 'Replacement accessories', 'Convenient local access'],
  },
  {
    id: 'stationery',
    icon: 'PenIcon',
    title: 'Stationery',
    blurb: 'Essential stationery for home, school, university and office use.',
    items: [
      'Pens & pencils',
      'Notebooks',
      'Envelopes & paper',
      'Files & folders',
      'Everyday supplies',
    ],
  },
]

export const WHY = [
  {
    title: 'Convenient Stratford Location',
    text: 'On Leytonstone Road, close to Maryland and Stratford — easy to reach across East London.',
  },
  {
    title: 'Multiple Services Under One Roof',
    text: 'From sending money internationally to printing a document or dropping off a DHL parcel, we make everyday tasks easier.',
  },
  {
    title: 'Friendly Local Service',
    text: 'Our team aims to provide straightforward, helpful and efficient assistance to every customer.',
  },
  {
    title: 'Established Local Business',
    text: 'Maryland Internet Cafe Ltd is an active UK private limited company, incorporated in December 2018.',
  },
]
