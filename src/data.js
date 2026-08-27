export const BUSINESS = {
  name: 'Maryland Internet Cafe',
  phone: '020 8519 6587',
  phoneHref: 'tel:+442085196587',
  address: '69 Leytonstone Road, Stratford, London, E15 1JA',
  careersEmail: 'careers@marylandinternetcafe.co.uk',
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
  {
    label: 'Services',
    children: [
      {
        label: 'Money Transfer Services',
        to: '/services/money-transfer',
        icon: 'MoneyIcon',
        desc: 'Western Union, Ria & MoneyGram international transfers.',
      },
      {
        label: 'Internet & Computer Services',
        to: '/services/internet-printing',
        icon: 'GlobeIcon',
        desc: 'Internet access, computer use and online applications.',
      },
      {
        label: 'Printing, Scanning & Documents',
        to: '/services/printing',
        icon: 'PrinterIcon',
        desc: 'Printing, scanning, photocopying and document prep.',
      },
      {
        label: 'DHL Parcel Service',
        to: '/services/dhl',
        icon: 'BoxIcon',
        desc: 'Drop off and collect DHL parcels locally.',
      },
      {
        label: 'Mobile Phones',
        to: '/services/mobile',
        icon: 'PhoneDeviceIcon',
        desc: 'Handsets and everyday communication devices.',
      },
      {
        label: 'Mobile Phone Accessories',
        to: '/services/accessories',
        icon: 'PlugIcon',
        desc: 'Chargers, cables, cases, earphones and more.',
      },
      {
        label: 'Electronics',
        to: '/services/electronics',
        icon: 'ChipIcon',
        desc: 'Everyday tech essentials and replacement accessories.',
      },
      {
        label: 'Stationery',
        to: '/services/stationery',
        icon: 'PenIcon',
        desc: 'Pens, notebooks, paper, files and supplies.',
      },
    ],
  },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact Us', to: '/#contact' },
]

export const JOBS = [
  {
    id: 'marketing-commercial-manager',
    icon: 'MegaphoneIcon',
    title: 'Marketing and Commercial Manager',
    type: 'Full-time',
    location: 'Stratford, London (on-site)',
    posted: '26/06/2026',
    closed: true,
    summary:
      'Lead the growth of Maryland Internet Cafe by developing marketing campaigns, building local partnerships and driving commercial performance across all of our services.',
    responsibilities: [
      'Research the UK market for emerging consumer electronics, mobile phones, smart devices and mobile accessories and identify commercially viable products for introduction into the business',
      'Develop and implement the commercial strategy for expanding the electronics and mobile-accessories side of the business',
      'Analyse existing use of retail floor space and support the planned transition away from declining internet-surfing services towards higher-demand electronic products and services',
      'Research customer demand, competitor pricing, product trends and local market conditions to determine appropriate product ranges',
      'Identify and develop relationships with electronics, mobile-phone and accessory suppliers, wholesalers and distributors',
      'Evaluate supplier pricing, margins, minimum order quantities and commercial terms and make purchasing recommendations to the proprietor',
      'Develop pricing and promotional strategies for new and existing product ranges',
      'Plan product launches, seasonal promotions, local advertising and digital/social-media marketing campaigns',
      'Analyse sales, gross margins and product performance and recommend which ranges should be expanded, reduced or discontinued',
      'Develop cross-selling opportunities between electronics, mobile accessories, mobile repair and the shop’s existing services',
      'Review opportunities to commercially develop existing services including money transfer, parcel services, printing and related customer services',
      'Prepare periodic commercial and sales-performance reports for the proprietor and make recommendations for future business expansion',
    ],
    requirements: [
      'Proven experience in marketing, sales or commercial management',
      'Strong communication and organisational skills',
      'Confident with social media and digital marketing tools',
      'Commercially minded with a results-driven attitude',
      'Right to work in the UK',
    ],
  },
  {
    id: 'mobile-phone-repair-technician',
    icon: 'WrenchIcon',
    title: 'Mobile Phone Repair Technician',
    type: 'Full-time / Part-time',
    location: 'Stratford, London (on-site)',
    posted: '16/07/2026',
    closed: false,
    summary:
      'Diagnose and repair mobile phones and small electronic devices for our customers, delivering fast, reliable and friendly service.',
    responsibilities: [
      'Diagnose faults and carry out screen, battery and component repairs',
      'Advise customers on repair options, timescales and costs',
      'Test devices before and after repair to ensure quality',
      'Manage repair parts, stock and workspace tidiness',
      'Provide friendly, honest customer service',
    ],
    requirements: [
      'Hands-on experience repairing mobile phones and devices',
      'Good knowledge of common handset brands and faults',
      'Careful, methodical and detail-focused approach',
      'Good customer service skills',
      'Right to work in the UK',
    ],
  },
]

export const SERVICES = [
  {
    id: 'money-transfer',
    icon: 'MoneyIcon',
    title: 'Money Transfer Services',
    tagline: 'Send money overseas with confidence',
    blurb:
      'Send money to family, friends and businesses overseas quickly and conveniently through leading international money transfer providers.',
    intro: [
      'At Maryland Internet Cafe we make sending money abroad simple. Through trusted international providers, you can transfer funds to family, friends and businesses in countries around the world, all from our shop on Leytonstone Road in Stratford.',
      'Our friendly team is on hand to guide you through the process, answer your questions and help make sure your transfer is completed correctly. Whether it is your first time sending money or you transfer regularly, we aim to make it quick, clear and stress-free.',
    ],
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
    tagline: 'Stay connected and get things done',
    blurb:
      'Convenient computer and online services for personal, professional and educational use.',
    intro: [
      'Need to get online? Our computers are available for browsing the internet, checking emails, completing online applications and handling everyday digital tasks, whether for a few minutes or a longer session.',
      'From students and jobseekers to professionals and visitors, our internet and computer facilities give the whole community convenient access to the online services they rely on, right here in Stratford.',
    ],
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
    tagline: 'Print, scan and copy in one place',
    blurb:
      'Get your documents printed, scanned and prepared quickly from one convenient location.',
    intro: [
      'From a single page to a full set of documents, we help you print, scan, copy and prepare paperwork quickly and affordably. Bring your files on a USB stick, email them to us or access them online in store.',
      'Whether you need to print travel documents, scan an application, photocopy important paperwork or send an email-to-print job, our team is here to help you get it done without the hassle of setting up your own equipment.',
    ],
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
    tagline: 'Drop off and collect parcels locally',
    blurb:
      'Send and receive parcels conveniently through our DHL parcel service, a simple, local option.',
    intro: [
      'As a convenient local point for DHL parcels, we make sending and receiving packages easy. Drop off your pre-labelled parcels with us or collect an incoming delivery, all from one handy Stratford location.',
      'No need to travel far or wait around at home for a delivery. Our team can help you with the drop-off and collection process so your parcels are handled quickly and conveniently.',
    ],
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
    tagline: 'Find the right phone for everyday life',
    blurb:
      'Explore our selection of mobile phones and related products. Our team can help you find a suitable option for everyday communication.',
    intro: [
      'Looking for a mobile phone? We stock a practical selection of handsets to suit everyday communication needs, from simple, reliable phones to devices for staying connected with family and friends.',
      'Not sure which phone is right for you? Visit us in store and our team will happily talk you through the options so you can choose a device that fits how you use it.',
    ],
    items: ['Mobile phone handsets', 'Everyday communication devices', 'Helpful in-store advice'],
  },
  {
    id: 'accessories',
    icon: 'PlugIcon',
    title: 'Mobile Phone Accessories',
    tagline: 'Everything to keep you connected',
    blurb: 'A range of useful mobile phone accessories to keep you connected.',
    intro: [
      'Lost your charger or need a new case? We carry a handy range of mobile phone accessories so you can grab what you need locally instead of ordering online and waiting for delivery.',
      'From charging cables and adapters to earphones, cases and screen protectors, tell us your phone model and we will help you find a compatible accessory that does the job.',
    ],
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
    tagline: 'Everyday technology essentials',
    blurb:
      'A selection of useful electronic products and accessories, everyday technology essentials without needing to travel far.',
    intro: [
      'We stock a selection of everyday electronic products and accessories to cover those small but essential items you sometimes need in a hurry, all without having to travel across London.',
      'From replacement accessories to handy tech essentials, pop in and see what is available, or ask our team if there is something particular you are looking for.',
    ],
    items: ['Everyday tech essentials', 'Replacement accessories', 'Convenient local access'],
  },
  {
    id: 'stationery',
    icon: 'PenIcon',
    title: 'Stationery',
    tagline: 'Supplies for home, school and office',
    blurb: 'Essential stationery for home, school, university and office use.',
    intro: [
      'Whether you are a student, working from home or running a small business, we stock essential stationery to keep you organised, from pens and notebooks to envelopes, paper and folders.',
      'Save yourself a trip to a larger store and pick up the everyday supplies you need while you are in for your other errands.',
    ],
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
    text: 'On Leytonstone Road, close to Maryland and Stratford, easy to reach across East London.',
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
