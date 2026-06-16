export type Vehicle = {
  title: string
  body: string
  image: string
  alt: string
}

export type Faq = {
  question: string
  answer: string
}

export type WhyChooseItem = {
  title: string
  body: string
}

export type LocalRelevanceBlock = {
  title: string
  body: string
}

export type ServicePageContent = {
  metadata: {
    title: string
    description: string
  }
  currentLocationName?: string
  heroImage: string
  heroAlt: string
  heroTitle: string
  heroDescription: string
  heroSecondaryActionLabel?: string
  inventorySectionId?: string
  mainServiceKicker?: string
  mainServiceTitle: string
  mainServiceDescription: string
  mainVehicles: Vehicle[]
  mainVehicleAction: boolean
  whyChooseKicker?: string
  whyChooseTitle: string
  whyChooseDescription: string
  whyChooseItems: WhyChooseItem[]
  additionalServicesKicker?: string
  additionalServicesTitle?: string
  additionalServicesDescription?: string
  additionalVehicles?: Vehicle[]
  featureCtaTitle: string
  featureCtaDescription: string
  serviceAreasKicker?: string
  serviceAreasTitle?: string
  serviceAreasDescription?: string
  localRelevanceKicker?: string
  localRelevanceTitle: string
  localRelevanceDescription: string
  localRelevanceBlocks: LocalRelevanceBlock[]
  bottomCtaTitle: string
  bottomCtaDescription: string
  faqKicker?: string
  faqTitle?: string
  faqs: Faq[]
}

type VehicleText = {
  body: string
  alt: string
}

type WhyChooseText = {
  title: string
  body: string
}

type LocalBlockText = {
  title: string
  body: string
}

type FaqText = {
  question: string
  answer: string
}

type ContentTokenSet = {
  metadata: {
    title: string
    description: string
  }
  heroImage: string
  heroAlt: string
  heroTitle: string
  heroDescription: string
  heroSecondaryActionLabel: string
  mainServiceKicker: string
  mainServiceTitle: string
  mainServiceDescription: string
  mainVehicles: VehicleText[]
  whyChooseKicker: string
  whyChooseTitle: string
  whyChooseDescription: string
  whyChooseItems: WhyChooseText[]
  additionalServicesKicker?: string
  additionalServicesTitle?: string
  additionalServicesDescription?: string
  additionalVehicles?: VehicleText[]
  featureCtaTitle: string
  featureCtaDescription: string
  serviceAreasKicker: string
  serviceAreasTitle: string
  serviceAreasDescription: string
  localRelevanceKicker: string
  localRelevanceTitle: string
  localRelevanceDescription: string
  localRelevanceBlocks: LocalBlockText[]
  bottomCtaTitle: string
  bottomCtaDescription: string
  faqKicker: string
  faqTitle: string
  faqs: FaqText[]
}

export type ServiceSlug =
  | "compact-car"
  | "van-hire"
  | "truck-hire"
  | "minibus-hire"

function isTemplateToken(value: string) {
  return value.startsWith("{{") && value.endsWith("}}")
}

const compactCarMainImages = [
  "/compact-car/Fiat500.png",
  "/compact-car/Hyundai-i10Auto.png",
  "/compact-car/VWGolf.png",
  "/compact-car/FocusAuto.png",
] as const

const compactCarAdditionalImages = [
  "/compact-car/FocusEstate.png",
  "/compact-car/Mondeo.png",
  "/compact-car/MondeoAuto.png",
  "/compact-car/MondeoEstate.png",
  "/compact-car/RAV4Auto.png",
  "/compact-car/CClassAuto.png",
  "/compact-car/EClassAuto.png",
  "/compact-car/RangeRover.png",
] as const

const vanMainImages = [
  "/van/CaddyVan.png",
  "/van/FordTransitSWB.png",
  "/van/VWTransporterAutomatic.png",
  "/van/FordTransitMWB.png",
  "/van/FordTransitLWB.png",
  "/van/4MTRSprinter.png",
  "/van/FordLutonBoxTailLift.png",
  "/van/FordTransitDropsideVan.png",
  "/van/3.5TonneTipperTransit.png",
  "/van/RecoveryVanTruck.png",
  "/van/VWCampervan.png",
  "/van/12.5MCherryPicker3.5T.png",
] as const

const minibusMainImages = [
  "/minibus/VauxhallZafira5plus2.png",
  "/minibus/Galaxy7SeaterManual.png",
  "/minibus/Galaxy7SeaterAutomatic.png",
  "/minibus/9SeaterManual.png",
  "/minibus/9SeaterAutomatic.png",
  "/minibus/FordMinibus12Seater.png",
  "/minibus/FordMinibus15Seater.png",
  "/minibus/FordMinibusLITE 17Seater(no D1).png",
  "/minibus/FordMinibus17Seater.png",
] as const

const truckMainImages = [
  "/truck/FordLuton3.5TonTailBoxLiftTruck.png",
  "/truck/3.5TonneTipperTransitTruck.png",
  "/truck/3.5TonneRecoveryTruck.png",
  "/truck/7.5TonneBoxTruckWithTailLift.png",
  "/truck/7.5TonneCurtainSideTruck.png",
  "/truck/7.5TonneDropsideTruck.png",
  "/truck/7.5TonneTipperTruck.png",
  "/truck/7.5TonneSleeperTailLiftTruck.png",
  "/truck/18TonneBoxTruck.png",
  "/truck/18TonneCurtainsideTruck.png",
  "/truck/26TonneCurtainSideTruck.png",
  "/truck/44TonneSleeperTruck.png",
] as const

const compactCarMainNames = [
  "Fiat 500",
  "Hyundai i10 Auto",
  "VW Golf",
  "Focus Auto",
] as const

const compactCarAdditionalNames = [
  "Focus Estate",
  "Mondeo",
  "Mondeo Auto",
  "Mondeo Estate",
  "RAV4 Auto",
  "C Class Auto",
  "E Class Auto",
  "Range Rover",
] as const

const vanMainNames = [
  "Caddy Van",
  "Ford Transit SWB",
  "VW Transporter Automatic",
  "Ford Transit MWB",
  "Ford Transit LWB",
  "4 MTR Sprinter",
  "Ford Luton Box Tail Lift",
  "Ford Transit Dropside Van",
  "3.5 Tonne Tipper Transit",
  "Recovery Van",
  "VW Campervan",
  "12.5M Cherry Picker 3.5T",
] as const

const minibusMainNames = [
  "Vauxhall Zafira 5 + 2",
  "Galaxy 7 Seater Manual",
  "Galaxy 7 Seater Automatic",
  "9 Seater Manual",
  "9 Seater Automatic",
  "Ford Minibus 12 Seater",
  "Ford Minibus 15 Seater",
  "Ford Minibus LITE 17 Seater (no D1)",
  "Ford Minibus 17 Seater",
] as const

const truckMainNames = [
  "Ford Luton 3.5 ton Tail Box Lift Truck",
  "3.5 Tonne Tipper Transit Truck",
  "3.5 Tonne Recovery Truck",
  "7.5 Tonne Box Truck With Tail Lift",
  "7.5 Tonne Curtain Side Truck",
  "7.5 Tonne Dropside Truck",
  "7.5 Tonne Tipper Truck",
  "7.5 Tonne Sleeper Tail Lift Truck",
  "18 Tonne Box Truck",
  "18 Tonne Curtain Side Truck",
  "26 Tonne Curtain Side Truck",
  "44 Tonne Sleeper Truck",
] as const

export const siteConfig = {
  businessName: "Compact Car Hire Worcester",
  companyTagline: "Practical self-drive hire across Worcester and beyond",
  legalBusinessName: "Compact Car Hire Worcester",
  locationName: "Worcester",
  siteUrl: "https://compactcarhireworcester.co.uk",
  phone: "0203 909 9745",
  displayPhone: "0203 909 9745",
  ui: {
    navLocationsLabel: "Locations",
    navServicesLabel: "Services",
    navCallToBookLabel: "Call to Book",
    navCallShortLabel: "Call",
    bookNowLabel: "Call to Book",
    footerCopyrightLabel: "© 2026 Compact Car Hire Worcester. All rights reserved.",
  },
} as const

export function getMetadataBase() {
  const rawSiteUrl = siteConfig.siteUrl

  if (isTemplateToken(rawSiteUrl)) {
    return new URL("https://example.com")
  }

  return new URL(rawSiteUrl)
}

export function withCanonicalPath(
  metadata: ServicePageContent["metadata"],
  canonicalPath: string,
) {
  return {
    ...metadata,
    alternates: {
      canonical: canonicalPath,
    },
  }
}

export const serviceNavigation: Array<{
  label: string
  route: string
}> = [
  { label: "Compact Car Hire", route: "/" },
  { label: "Van Hire", route: "/van-hire" },
  { label: "Minibus Hire", route: "/minibus-hire" },
  { label: "Truck Hire", route: "/truck-hire" },
]

function createVehicles(
  names: readonly string[],
  images: readonly string[],
  vehicleText: VehicleText[],
): Vehicle[] {
  return names.map((name, index) => ({
    title: name,
    body: vehicleText[index].body,
    image: images[index],
    alt: vehicleText[index].alt,
  }))
}

function createContentSet(args: {
  tokens: ContentTokenSet
  mainVehicleNames: readonly string[]
  mainVehicleImages: readonly string[]
  inventorySectionId: string
  currentLocationName?: string
  mainVehicleAction?: boolean
  additionalVehicleNames?: readonly string[]
  additionalVehicleImages?: readonly string[]
}): ServicePageContent {
  const {
    tokens,
    mainVehicleNames,
    mainVehicleImages,
    inventorySectionId,
    currentLocationName,
    mainVehicleAction = false,
    additionalVehicleNames,
    additionalVehicleImages,
  } = args

  return {
    metadata: {
      title: tokens.metadata.title,
      description: tokens.metadata.description,
    },
    currentLocationName,
    heroImage: tokens.heroImage,
    heroAlt: tokens.heroAlt,
    heroTitle: tokens.heroTitle,
    heroDescription: tokens.heroDescription,
    heroSecondaryActionLabel: tokens.heroSecondaryActionLabel,
    inventorySectionId,
    mainServiceKicker: tokens.mainServiceKicker,
    mainServiceTitle: tokens.mainServiceTitle,
    mainServiceDescription: tokens.mainServiceDescription,
    mainVehicles: createVehicles(
      mainVehicleNames,
      mainVehicleImages,
      tokens.mainVehicles,
    ),
    mainVehicleAction,
    whyChooseKicker: tokens.whyChooseKicker,
    whyChooseTitle: tokens.whyChooseTitle,
    whyChooseDescription: tokens.whyChooseDescription,
    whyChooseItems: tokens.whyChooseItems,
    additionalServicesKicker: tokens.additionalServicesKicker,
    additionalServicesTitle: tokens.additionalServicesTitle,
    additionalServicesDescription: tokens.additionalServicesDescription,
    additionalVehicles:
      additionalVehicleNames &&
      additionalVehicleImages &&
      tokens.additionalVehicles
        ? createVehicles(
            additionalVehicleNames,
            additionalVehicleImages,
            tokens.additionalVehicles,
          )
        : undefined,
    featureCtaTitle: tokens.featureCtaTitle,
    featureCtaDescription: tokens.featureCtaDescription,
    serviceAreasKicker: tokens.serviceAreasKicker,
    serviceAreasTitle: tokens.serviceAreasTitle,
    serviceAreasDescription: tokens.serviceAreasDescription,
    localRelevanceKicker: tokens.localRelevanceKicker,
    localRelevanceTitle: tokens.localRelevanceTitle,
    localRelevanceDescription: tokens.localRelevanceDescription,
    localRelevanceBlocks: tokens.localRelevanceBlocks,
    bottomCtaTitle: tokens.bottomCtaTitle,
    bottomCtaDescription: tokens.bottomCtaDescription,
    faqKicker: tokens.faqKicker,
    faqTitle: tokens.faqTitle,
    faqs: tokens.faqs,
  }
}

const homepageTokens: ContentTokenSet = {
  metadata: {
    title: "Compact Car Hire Worcester | Self-Drive Vehicle Hire",
    description: "Compact car hire in Worcester for local driving, station runs, airport trips and everyday travel, with vans, minibuses and trucks also available.",
  },
  heroImage: "/images/homepage_image_1.jpeg",
  heroAlt: "Line of compact hire cars with wider vehicle fleet in a clean forecourt setting",
  heroTitle: "Compact car hire in Worcester made simple",
  heroDescription: "Compact car hire in Worcester for easy local driving, station runs, airport trips and everyday travel. We also offer vans, minibuses and trucks when you need more space or a different type of vehicle.",
  heroSecondaryActionLabel: "View vehicle options",
  mainServiceKicker: "Compact car hire",
  mainServiceTitle: "Self-drive compact cars for everyday travel in Worcester",
  mainServiceDescription: "Our core service is compact car hire for drivers who want something easy to manage, easy to park and comfortable enough for both local and regional travel. Small cars are a strong fit for everyday journeys around Worcester, from shopping trips and appointments to station runs, visiting family and covering temporary transport needs when your own car is off the road.\n\nWe focus on practical self-drive options rather than overcomplicated packages. That means a straightforward choice of compact vehicles including city-friendly models and slightly larger hatchbacks, with manual and automatic options available across the wider range. If your journey changes and you need extra room, we can also help with estates, larger cars and SUVs.\n\nBeyond compact cars, we support broader vehicle hire needs across Worcester with vans, minibuses and trucks. So whether you need a small runabout today or a larger vehicle for a different job next week, you can arrange it through the same business.",
  mainVehicles: [
    { body: "The Fiat 500 is ideal for quick local trips, easy parking and drivers who want a small car that feels simple to use around town.", alt: "Fiat 500 compact hire car for easy driving in Worcester" },
    { body: "A smart choice for convenient automatic driving, especially for short urban journeys, station pickups and everyday errands.", alt: "Hyundai i10 automatic compact hire car in Worcester" },
    { body: "The VW Golf gives you a little more cabin and boot space while still keeping the practical feel of a compact everyday hire car.", alt: "Volkswagen Golf hatchback available for hire in Worcester" },
    { body: "Useful for drivers who want the ease of an automatic with enough comfort for longer regional trips as well as local mileage.", alt: "Ford Focus automatic available for self-drive hire in Worcester" },
  ],
  whyChooseKicker: "Why choose us",
  whyChooseTitle: "A practical approach to self-drive hire in Worcester",
  whyChooseDescription: "Hiring a car should feel practical, not padded out with unnecessary sales talk. We focus on useful vehicles, clear communication and helping customers find a car that actually fits the journey they have planned in and around Worcester.",
  whyChooseItems: [
    { title: "Cars that suit real journeys", body: "Our compact car range is built around everyday usability, with options that are easy to drive in town and comfortable on longer runs." },
    { title: "Practical vehicle choices", body: "Need a small city car, an automatic or something with more boot space? We help match the vehicle to the trip rather than forcing one option." },
    { title: "Straightforward booking support", body: "We keep the process clear and useful, so you can quickly understand what is available and what best fits your plans." },
    { title: "More than just car hire", body: "If your plans move beyond a compact car, we can also arrange vans, minibuses and trucks through the same business." },
    { title: "Well suited to the area", body: "Worcester drivers often need vehicles for station access, motorway links and local errands, so our service is shaped around everyday local use." },
    { title: "Flexible around changing needs", body: "Short notice, changed plans and different trip types are common, and we aim to keep your options practical when that happens." },
  ],
  additionalServicesKicker: "Wider fleet options",
  additionalServicesTitle: "More vehicles when your journey needs extra room",
  additionalServicesDescription: "Need more space than a compact hatchback? Alongside our smaller cars, we also offer larger family cars, estates, premium automatics and SUVs, plus vans, minibuses and trucks for wider transport needs.",
  additionalVehicles: [
    { body: "The Focus Estate is a useful step up when you want car-like driving with a larger boot for luggage, equipment or shopping runs.", alt: "Ford Focus Estate available for practical luggage and load space in Worcester" },
    { body: "A solid choice for longer motorway travel, business appointments and day trips where extra comfort matters.", alt: "Ford Mondeo saloon for longer road journeys from Worcester" },
    { body: "The automatic Mondeo suits drivers who want an easier drive in traffic while keeping the space and comfort of a larger car.", alt: "Ford Mondeo automatic for comfortable self-drive hire in Worcester" },
    { body: "Ideal when passengers and luggage both need room, making it well suited to airport runs, family travel and longer stays away.", alt: "Ford Mondeo Estate with extended luggage room for Worcester hires" },
    { body: "A practical SUV option with a higher driving position, useful for mixed local and regional journeys with passengers and bags.", alt: "Toyota RAV4 automatic SUV for flexible travel around Worcester" },
    { body: "For business travel or a more refined drive, the C Class Auto gives you a smarter cabin and easy motorway comfort.", alt: "Mercedes C Class automatic for executive car hire in Worcester" },
    { body: "The E Class Auto works well for longer business mileage, client travel and occasions where a more spacious executive car is preferred.", alt: "Mercedes E Class automatic executive vehicle hire in Worcester" },
    { body: "When you want extra presence, comfort and cabin space, the Range Rover is suited to higher-end journeys and larger personal loads.", alt: "Range Rover SUV hire for premium travel in Worcester" },
  ],
  featureCtaTitle: "Looking for the right vehicle in Worcester?",
  featureCtaDescription: "Need a practical car for local driving, a weekend away or business travel? Get in touch and we will help you find the right vehicle quickly.",
  serviceAreasKicker: "Areas we cover",
  serviceAreasTitle: "Vehicle hire around Worcester and nearby areas",
  serviceAreasDescription: "We cover Worcester and surrounding towns with practical self-drive hire. If you are nearby and need a compact car, we can also help with larger cars, vans, minibuses and trucks.",
  localRelevanceKicker: "Driving in Worcester",
  localRelevanceTitle: "Why compact car hire works well in Worcester",
  localRelevanceDescription: "Worcester is the kind of place where compact car hire makes practical sense. Many journeys here involve a blend of town-centre roads, local residential routes and quick access onto larger connections such as the M6, M58 and A49. A smaller car helps keep those trips straightforward, whether you are visiting family, covering for your own vehicle, heading to a meeting or making a rail station pickup.\n\nCompact cars also suit the everyday reality of driving around busy local areas where parking space, turning room and stop-start traffic all matter. If you only need a clean, manageable vehicle that is easy to live with for a short trip or a few days of regular use, a compact model is usually the sensible choice.\n\nBecause Worcester sits between major routes and surrounding towns, it is also common for customers to need more than one type of vehicle depending on the job. That is why we keep the wider fleet available too, so if your plans move from local driving to moving goods, group travel or larger commercial work, you can stay with one practical self-drive hire provider.",
  localRelevanceBlocks: [
    { title: "A good fit for mixed Worcester driving", body: "Worcester works well for compact cars because so many everyday trips mix town driving with short stretches on faster roads. Whether you are heading between the centre, residential areas or nearby retail parks, a smaller car is easier to place, easier to park and less awkward in tighter spaces.\n\nThe M6, M58 and A49 all keep Worcester well connected, so a compact hatchback also makes sense if your day includes a mix of local stops and regional travel. You get straightforward motorway capability without stepping up to a larger vehicle than you actually need." },
    { title: "Useful around stations, retail areas and town routes", body: "If your journey starts near Worcester North Western or Worcester Wallgate, a compact car is often the most practical choice. It keeps things simple for collections, onward travel and quick turnarounds, especially if you are picking someone up with luggage but do not need a full-size car.\n\nThe same applies to everyday errands around Robin Park, the town centre and surrounding districts where parking spaces and traffic flow can make a smaller vehicle the easier option. For business users, it is a sensible choice when you need to stay mobile without overcomplicating the trip." },
    { title: "Choose the right size before you set off", body: "Not every journey suits the same vehicle, which is why we keep the wider fleet in view as well. A Fiat 500 or Hyundai i10 Auto can be ideal for compact urban use, while a Golf or Focus Auto gives you extra comfort if your route is longer or you expect more passenger use.\n\nIf plans change and you suddenly need luggage room, load space or passenger capacity, we can also point you towards estates, SUVs, vans, minibuses or trucks. That makes it easier to start with the right vehicle instead of trying to make the wrong one work." },
  ],
  bottomCtaTitle: "Book compact car hire in Worcester with straightforward support",
  bottomCtaDescription: "Tell us where you need to go and what kind of driving you have planned. We will help you choose the right compact car or a larger vehicle from our wider fleet.",
  faqKicker: "Common questions",
  faqTitle: "Compact car hire FAQs for Worcester",
  faqs: [
    { question: "Why choose compact car hire in Worcester?", answer: "A compact car is often the easiest option for Worcester driving if you want simple parking, lighter fuel use and comfortable travel on local roads and short motorway runs." },
    { question: "Can I arrange compact car hire in Worcester at short notice?", answer: "Yes, we can help with short-notice availability in Worcester when vehicles are ready to go. The best option is to call and we will talk through what is currently available." },
    { question: "Do you only offer small cars in Worcester?", answer: "Yes. If you need more room than a small hatchback, we also offer estate cars, larger saloons, SUVs, vans, minibuses and trucks." },
    { question: "What are compact hire cars in Worcester usually used for?", answer: "Many customers use compact cars in Worcester for station pickups, airport journeys, visiting family, temporary vehicle cover and everyday local travel." },
    { question: "What do I need to collect my hire car in Worcester?", answer: "Bring your driving licence and any booking details when collecting in Worcester. If anything else is needed for your hire, we will confirm it before you travel." },
    { question: "Are automatic cars available for hire in Worcester?", answer: "Yes, subject to availability. If you prefer an easier drive for stop-start traffic or a more relaxed motorway run, ask us about our automatic options in Worcester." },
  ],
}

const vanHireTokens: ContentTokenSet = {
  metadata: {
    title: "Van Hire Worcester | Practical Vans for Moves, Deliveries and Trade",
    description: "Van hire in Worcester for home moves, deliveries, trade work and specialist jobs. Choose from compact vans, larger Transits, Lutons and more.",
  },
  heroImage: "/images/van_hire_image_1.jpeg",
  heroAlt: "Modern rental van being loaded with boxes outside a house",
  heroTitle: "Van hire in Worcester for work, moves and deliveries",
  heroDescription: "Practical van hire in Worcester for moves, trade work, deliveries, collections and business use. Choose from compact vans, larger panel vans and specialist vehicles to suit the job.",
  heroSecondaryActionLabel: "View van options",
  mainServiceKicker: "Worcester van fleet",
  mainServiceTitle: "Van hire for moves, work and transport needs",
  mainServiceDescription: "Our van hire service in Worcester is built around real day to day jobs. Some customers need a compact van for quick collections, storage runs or tool transport. Others need a larger panel van for furniture, stock, equipment or a full moving day. We also offer specialist options for more specific work, including dropsides, tippers, recovery vehicles and a cherry picker.\n\nWhether you are moving home, covering trade jobs, handling site work or making business deliveries, the right van makes a big difference. A smaller van can be easier to park and manoeuvre in tighter areas, while longer wheelbase and box vans give you the extra carrying room needed for larger loads. If you are unsure what will suit your route or cargo, we can help you narrow it down to a practical choice.",
  mainVehicles: [
    { body: "A compact Caddy van that suits small deliveries, toolbox transport, parcel runs and quick local collections where easy parking is important.", alt: "Caddy van for compact cargo and local deliveries" },
    { body: "The short wheelbase Transit is a solid all rounder for furniture pickups, trade materials and everyday business loads without moving into a larger footprint.", alt: "Ford Transit SWB van for everyday transport jobs" },
    { body: "An automatic VW Transporter that works well for drivers who want a smooth, easy van for city driving, service visits and regular stop start journeys.", alt: "VW Transporter automatic van for easy urban driving" },
    { body: "A medium wheelbase Transit with extra load length for moving larger items, boxed stock, event kit or trade equipment across several stops.", alt: "Ford Transit MWB van for medium load transport" },
    { body: "The long wheelbase Transit is well suited to larger house moves, bulky furniture, workplace clearances and loads that need more internal space.", alt: "Ford Transit LWB van for bulky loads and moves" },
    { body: "A longer 4 metre Sprinter for extended loads, larger move days and commercial transport where extra room helps avoid multiple trips.", alt: "4 metre Sprinter van for long items and larger loads" },
    { body: "A Luton box van with tail lift that is ideal for removals, appliances, heavier furniture and jobs where easier loading makes a real difference.", alt: "Ford Luton box van with tail lift for removals and heavy items" },
    { body: "A dropside Transit for timber, landscaping materials, site equipment and other awkward loads that are easier to secure on an open body.", alt: "Ford Transit dropside van for open load carrying" },
    { body: "A 3.5 tonne tipper Transit for builders, landscapers and site teams moving aggregates, waste, tools and loose materials efficiently.", alt: "3.5 tonne tipper Transit for site and waste jobs" },
    { body: "A practical recovery van for vehicle transport, collection work and planned roadside moves where a dedicated carrying setup is needed.", alt: "Recovery van for vehicle transport and collection work" },
    { body: "A VW campervan for weekend escapes, touring breaks and flexible road trips when you want a practical self drive leisure vehicle.", alt: "VW campervan for touring and leisure travel" },
    { body: "A cherry picker van for access work such as maintenance, inspections, signage and property tasks where safe reach matters as much as mobility.", alt: "12.5 metre cherry picker van for elevated access work" },
  ],
  whyChooseKicker: "Why hire from us",
  whyChooseTitle: "A practical van hire service for real work",
  whyChooseDescription: "Van hire is rarely just about getting any vehicle. It is about getting one that actually works for the route, the load and the way the day is going to run. We keep that in mind when helping customers choose between compact vans, larger panel vans and specialist options in Worcester.",
  whyChooseItems: [
    { title: "Useful fleet choices", body: "From compact vans to larger carrying options, the fleet covers everyday transport jobs as well as heavier duty tasks." },
    { title: "Job led advice", body: "Whether you are moving furniture, carrying tools or collecting stock, we focus on what the van needs to do in practice." },
    { title: "Specialist options available", body: "Automatic vans, Lutons, tippers, dropsides and recovery vehicles help when a standard panel van is not the right fit." },
    { title: "Practical route matching", body: "A van that suits your streets, loading points and route plan can save time and hassle on the day." },
    { title: "Good regional access", body: "Worcester is well placed for local work and wider travel across the North West, making van hire useful for both short and longer runs." },
    { title: "Straightforward booking support", body: "We keep the process straightforward so you can get on with the move, delivery or job without overcomplicating it." },
  ],
  featureCtaTitle: "Need van hire in Worcester?",
  featureCtaDescription: "Need a van for moving, deliveries or site work in Worcester? Speak to our team and we will help you choose a practical vehicle without the guesswork.",
  serviceAreasKicker: "Areas we cover",
  serviceAreasTitle: "Van hire in Worcester and nearby areas",
  serviceAreasDescription: "We support van hire from Worcester across surrounding towns and key route corridors, making it easier to cover local jobs, regional deliveries and one off transport tasks.",
  localRelevanceKicker: "Local van hire guidance",
  localRelevanceTitle: "Van hire that fits the way Worcester journeys actually work",
  localRelevanceDescription: "Van hire in Worcester suits a wide range of practical jobs, from moving between neighbourhoods to making collections across the wider North West. The town is well placed for local runs and regional travel alike, with strong links through the M6, M58 and A49. That makes it a useful base whether you are collecting furniture, transporting tools, delivering stock or handling a one off house move.\n\nThe key is matching the van to the work. Smaller vans are easier in tighter streets and busier built up areas, while longer and taller vans make better use of time when the load is bulky or awkward. For more specialist tasks, vehicles such as Lutons, dropsides, tippers and recovery vans can make the whole day more straightforward.\n\nIf you know the route, the type of load and how many stops are involved, choosing well becomes much easier. That is especially true around Worcester, where one hire might include residential streets, retail collections, motorway sections and site access all in the same journey.",
  localRelevanceBlocks: [
    { title: "Planning routes around Worcester and beyond", body: "Worcester works well for van hire because it sits between major routes rather than being cut off from them. If you are moving between Worcester town centre, Standish, Ashton-in-Makerfield or Hindley, a van gives you the flexibility to load once and keep the day moving. For wider trips, the M6, M58 and M61 links help with access across Lancashire, Greater Evesham and Merseyside.\n\nIf your route includes industrial estates, retail parks or storage sites, it is worth thinking about turning space and loading access before you travel. A smaller van can be much easier around tighter streets and smaller forecourts, while a longer wheelbase van makes more sense when the load is bulky and the route is more straightforward." },
    { title: "Choosing a van for home moves and collections", body: "For domestic jobs, access often matters as much as load volume. Terraced streets, shared parking bays and short loading windows can all affect which van is easiest to live with for the day. Areas closer to the town centre or around station approaches may suit a compact van better, especially if you are making repeated stops or collecting from mixed residential and retail locations.\n\nOn larger move days, it helps to break the journey into stages before collection. Measure the biggest items, think about door widths, and consider whether a tail lift or lower loading height would make the job smoother. A Luton or bigger Transit can save repeat trips, but only if the pickup and drop off points allow for easier parking and unloading." },
    { title: "Vans for trade work, stock and site tasks", body: "Trade users often need vans that work across a full day rather than just getting from one point to another. If you are carrying tools, materials or stock between jobs in Worcester, Bryn, Ince-in-Makerfield or nearby business parks, choosing the right van can make loading faster and keep the working day more organised. Dropsides and tippers are especially useful where awkward materials or site waste are part of the plan.\n\nFor motorway runs or timed delivery work, it is smart to consider where delays are most likely. Junctions feeding the M6 and M61 can slow down at busy times, and town centre access changes the pace of short local jobs. A sensible van choice keeps the route manageable, the load secure and the day easier to schedule." },
  ],
  bottomCtaTitle: "Book the right van for the job",
  bottomCtaDescription: "Tell us what you need to carry, where you are heading and how long you need the van for. We will help you choose a practical option for the job.",
  faqKicker: "Van hire FAQs",
  faqTitle: "Common questions about van hire in Worcester",
  faqs: [
    { question: "What size van should I hire?", answer: "A compact van suits small loads, tools and boxed items, while larger vans are better for furniture, pallets or longer materials. If you are unsure, describe the load and we can point you towards a sensible size." },
    { question: "Can I hire a van for moving house or collecting furniture?", answer: "Yes, many customers use van hire for house moves, flat moves, furniture collection, event kit, trade work and business transport. The best van depends on access, load shape and how many stops you need to make." },
    { question: "Do you offer automatic vans?", answer: "Automatic options are available in selected vans, including practical choices for drivers who prefer easier stop start driving around town or on motorway runs." },
    { question: "Can I use the van for longer distance travel?", answer: "Yes, vans are commonly used for local work in Worcester as well as regional trips across Greater Evesham, Lancashire, Merseyside and beyond. Let us know your route so we can help match the van to the journey." },
    { question: "Do you have specialist vans as well as standard panel vans?", answer: "Recovery vans are designed for vehicle transport, while tippers, dropsides and Lutons suit very different jobs. If you need specialist capability, tell us the task and we will guide you to the right vehicle type." },
    { question: "What should I check before collecting a hire van?", answer: "Bring your licence and the usual hire details, and make sure you are comfortable with the vehicle size before setting off. It also helps to plan parking, loading space and any low clearance points on your route." },
  ],
}

const minibusHireTokens: ContentTokenSet = {
  metadata: {
    title: "Minibus Hire Worcester | Group Travel Vehicle Hire",
    description: "Minibus hire in Worcester for airport transfers, family trips, events and group travel. Choose practical passenger vehicles for local and regional journeys.",
  },
  heroImage: "/images/minibus_hire_image_1.jpeg",
  heroAlt: "Modern minibus loading passengers and luggage near an airport pickup area",
  heroTitle: "Minibus Hire Worcester",
  heroDescription: "Practical minibus hire in Worcester for family trips, airport journeys, events, teams and group outings. Choose from flexible people carriers and larger minibuses.",
  heroSecondaryActionLabel: "View minibus options",
  mainServiceKicker: "Group vehicle hire",
  mainServiceTitle: "Worcester minibus hire for shared journeys of all kinds",
  mainServiceDescription: "Our Worcester minibus hire service is built around real group travel needs. That might mean a compact people carrier for family outings, a larger vehicle for a club trip, or a full minibus for airport transfers, weddings or event travel. The focus is on giving you enough seats, sensible luggage space and a vehicle that feels suited to the road plan ahead.\n\nWe support journeys that stay local as well as trips heading further afield across the North West and beyond. If you are organising transport for relatives, colleagues, sports teams or guests, we help you sort the practical side early so the travel day is easier to manage.",
  mainVehicles: [
    { body: "The Vauxhall Zafira 5 plus 2 is a flexible choice for families and small groups who need extra seats without stepping up to a full minibus.", alt: "Vauxhall Zafira 5 plus 2 people carrier for hire in Worcester" },
    { body: "The Galaxy 7 Seater Manual is well suited to airport runs, weekend breaks and group travel where passenger comfort matters.", alt: "Ford Galaxy 7 seater manual hire vehicle in Worcester" },
    { body: "The Galaxy 7 Seater Automatic offers the same roomy layout with easier driving for longer trips and mixed urban motorway routes.", alt: "Ford Galaxy 7 seater automatic people carrier for Worcester hire" },
    { body: "The 9 Seater Manual is a practical option for larger families, work outings and sports travel when one vehicle is easier than multiple cars.", alt: "9 seater manual minibus for group travel in Worcester" },
    { body: "The 9 Seater Automatic is a useful choice for shared travel where automatic driving and easy passenger loading are both important.", alt: "9 seater automatic minibus hire in Worcester" },
    { body: "The Ford 12 Seater works well for clubs, school outings, guest transport and group day trips with straightforward boarding and seating.", alt: "Ford 12 seater minibus available for hire in Worcester" },
    { body: "The Ford 15 Seater gives growing groups more room, making it a strong fit for event travel, team transport and organised outings.", alt: "Ford 15 seater minibus for larger groups in Worcester" },
    { body: "The Ford Minibus LITE 17 Seater is designed for larger groups needing extra capacity, with a layout aimed at drivers without D1 entitlement.", alt: "Ford Minibus Lite 17 seater no D1 hire vehicle in Worcester" },
    { body: "The Ford 17 Seater is a full-capacity option for major group movements where keeping everyone together is the priority.", alt: "Ford 17 seater minibus hire for group transport in Worcester" },
  ],
  whyChooseKicker: "Why choose us",
  whyChooseTitle: "Minibus hire planned around real journeys",
  whyChooseDescription: "Group travel can become awkward quickly if the vehicle is too small, the luggage space is overlooked or the route has not been thought through. We keep the process practical, helping customers in Worcester choose a passenger vehicle that genuinely fits the journey rather than simply filling seats.",
  whyChooseItems: [
    { title: "Options for different group sizes", body: "From smaller people carriers to larger minibuses, we help you match the vehicle to the number of passengers and the type of trip." },
    { title: "Luggage considered properly", body: "We consider bags, prams, sports equipment and travel extras so the vehicle works in practice, not just on seat count alone." },
    { title: "Built around the trip", body: "Airport runs, weddings, fixtures and family events all have different timing needs. We help you choose with the journey purpose in mind." },
    { title: "Straight advice on licence needs", body: "If a larger minibus needs a specific licence category, we explain that clearly and point you toward suitable alternatives where available." },
    { title: "Ready for short and longer routes", body: "Our vehicles are suited to local Worcester travel as well as longer motorway journeys across the region." },
    { title: "Supported by a broader fleet", body: "If your plans change and you need a van, compact car or truck instead, we can help through the wider hire fleet." },
  ],
  featureCtaTitle: "Travelling together starts with the right vehicle",
  featureCtaDescription: "Need to move a group without splitting into several cars? Speak to us about practical minibus hire options for Worcester and surrounding routes.",
  serviceAreasKicker: "Areas we cover",
  serviceAreasTitle: "Serving Worcester and surrounding areas for minibus hire",
  serviceAreasDescription: "We provide minibus hire from Worcester across nearby towns and onward routes, helping groups travel together for local pickups, regional trips and airport journeys.",
  localRelevanceKicker: "Local travel guidance",
  localRelevanceTitle: "Minibus hire that suits how groups travel from Worcester",
  localRelevanceDescription: "Minibus hire in Worcester works best when the vehicle matches the real shape of the journey. Some trips are short local runs with a few passengers and light bags. Others involve airport travel, event schedules, relatives joining from different pickup points or teams carrying kit. We help you choose a minibus that fits the route, the group and the practical demands of the day.\n\nWorcester is well placed for regional travel, but that also means journeys often join busy main roads quickly. Whether you are setting off toward the M6, linking across the M61, or heading west on the M58, the right passenger vehicle makes a big difference to comfort, loading and overall timing. A properly matched minibus keeps the trip simpler from the first pickup to the final stop.",
  localRelevanceBlocks: [
    { title: "Getting groups moving around Worcester", body: "Worcester sits in a useful position for group travel because routes split easily towards Evesham, Liverpool, Cheltenham and the wider North West. If your journey starts near the town centre, it helps to plan around the A49 and A577 corridors, especially when schools, stations and shopping traffic all overlap. A minibus is often easier to manage than several separate cars when your pickup points are spread across different parts of town.\n\nFor airport runs or event travel, keeping everyone together also helps with timing. Rather than coordinating arrivals from multiple vehicles, one minibus keeps the journey simpler and makes luggage planning easier from the start." },
    { title: "Choosing the right size for the journey", body: "If you are heading out from Worcester North Western or Worcester Wallgate areas, or collecting people from nearby neighbourhoods before joining the motorway network, a smaller people carrier can be the neatest option for mixed age groups and light luggage. It is easier to place in tighter streets and simpler for drivers more used to standard cars.\n\nFor weddings, sports teams, school events or longer day trips, a larger minibus usually makes more sense. It gives you better passenger capacity and avoids the stop-start feel that comes with trying to convoy several vehicles across the M6 or M58 corridors." },
    { title: "Better planning for shared travel", body: "The most useful group travel plans are the ones that deal with real details early. Think about where everyone is boarding, whether you need room for hold luggage, and how much time you want between pickups. Journeys toward Evesham Airport, matchdays, race meetings or family events all run more smoothly when the passenger count and luggage needs are clear before collection.\n\nIf your route involves schools, hotels, venues or sports grounds, tell us that up front. We can help you narrow the choice so the minibus suits both the trip and the driver, rather than just the headcount on paper." },
  ],
  bottomCtaTitle: "Plan your Worcester minibus hire with confidence",
  bottomCtaDescription: "Tell us where you are travelling, how many people are coming and what kind of trip you are planning. We will help you find the right minibus hire for Worcester.",
  faqKicker: "Minibus hire questions",
  faqTitle: "Worcester minibus hire FAQs",
  faqs: [
    { question: "What is Worcester minibus hire usually used for?", answer: "Yes, we can help with minibus hire in Worcester for airport runs, family travel, sporting fixtures, wedding guests and other shared journeys." },
    { question: "How do I choose the right minibus for my trip?", answer: "Choose based on passenger numbers, luggage and journey length. A smaller people carrier may suit a family trip, while larger groups are better served by a full minibus." },
    { question: "Can I hire a minibus without D1 on my licence?", answer: "Some larger minibuses require the right entitlement, while others are suitable for drivers without D1. Ask before booking and we will explain the options clearly." },
    { question: "Is there enough luggage space in a minibus?", answer: "It can do, depending on the vehicle and the amount of luggage. Let us know if you are travelling with cases, prams, sports kit or event equipment." },
    { question: "Do you provide minibuses for clubs and group outings in Worcester?", answer: "Yes, Worcester minibus hire is often a practical choice for school, club and team travel when everyone needs to arrive together." },
    { question: "How do I arrange minibus hire in Worcester?", answer: "Call us with your travel dates, group size and destination. We will talk you through the available minibus options and help you choose the best fit." },
  ],
}

const truckHireTokens: ContentTokenSet = {
  metadata: {
    title: "Truck Hire Worcester | Commercial Truck Rental",
    description: "Truck hire in Worcester for removals, deliveries, site work and commercial transport. Box, curtain side, dropside, tipper and tail lift truck options available.",
  },
  heroImage: "/images/truck_hire_image_1.jpeg",
  heroAlt: "Rigid hire truck parked at an industrial unit during a delivery job",
  heroTitle: "Truck Hire Worcester",
  heroDescription: "Truck hire in Worcester for removals, site work, larger deliveries and commercial transport. Choose from box trucks, curtain siders, tippers, recovery trucks and more.",
  heroSecondaryActionLabel: "View truck options",
  mainServiceKicker: "Commercial vehicle hire",
  mainServiceTitle: "Truck hire in Worcester for serious carrying work",
  mainServiceDescription: "Our truck hire service in Worcester is built for heavier transport tasks where a van is no longer enough. That includes removals support, site deliveries, stock movement, trade transport, recovery work and larger commercial loads. We offer a range of vehicle types so the choice is based on what the job actually needs rather than simply moving up to the biggest option.\n\nWhether you need a tail lift for boxed goods, a curtain side for easier loading access, a dropside for awkward materials or a tipper for site use, we help you make a practical choice. The aim is simple: a truck that suits the route, the payload and the working conditions on the day.",
  mainVehicles: [
    { body: "The Ford Luton 3.5 ton Tail Box Lift Truck is ideal for house moves, bulky goods and appliance transport where rear lift support makes loading easier.", alt: "Ford Luton 3.5 ton tail box lift truck for hire in Worcester" },
    { body: "The 3.5 Tonne Tipper Transit Truck is a practical choice for site clearance, loose materials, landscaping work and building jobs.", alt: "3.5 tonne tipper transit truck for site work in Worcester" },
    { body: "The 3.5 Tonne Recovery Truck suits vehicle transport and recovery tasks where secure loading and stable carriage are essential.", alt: "3.5 tonne recovery truck available in Worcester" },
    { body: "The 7.5 Tonne Box Truck With Tail Lift works well for larger deliveries, stock movement and removals support with easier rear loading.", alt: "7.5 tonne box truck with tail lift for Worcester deliveries" },
    { body: "The 7.5 Tonne Curtain Side Truck is well suited to pallet work and trade deliveries where side access speeds up loading and unloading.", alt: "7.5 tonne curtain side truck for loading access in Worcester" },
    { body: "The 7.5 Tonne Dropside Truck is useful for building materials, site equipment and awkward loads that benefit from open-sided access.", alt: "7.5 tonne dropside truck for materials transport in Worcester" },
    { body: "The 7.5 Tonne Tipper Truck is built for more demanding site work, waste movement and bulk material jobs that need higher carrying capacity.", alt: "7.5 tonne tipper truck for heavy site tasks in Worcester" },
    { body: "The 7.5 Tonne Sleeper Tail Lift Truck is suited to longer working runs where loading support and added driver practicality are both useful.", alt: "7.5 tonne sleeper tail lift truck for regional runs from Worcester" },
    { body: "The 18 Tonne Box Truck is designed for larger enclosed loads, distribution work and substantial stock movement.", alt: "18 tonne box truck for major commercial transport in Worcester" },
    { body: "The 18 Tonne Curtain Side Truck is a strong option for pallet networks, larger deliveries and trade loads needing side access.", alt: "18 tonne curtain side truck for freight movement in Worcester" },
    { body: "The 26 Tonne Curtain Side Truck suits higher-volume transport where larger payload capacity and side loading are both important.", alt: "26 tonne curtain side truck for major transport jobs in Worcester" },
    { body: "The 44 Tonne Sleeper Truck is designed for substantial haulage tasks where long-distance work and serious carrying capability are required.", alt: "44 tonne sleeper truck for long haul work from Worcester" },
  ],
  whyChooseKicker: "Why choose us",
  whyChooseTitle: "Truck hire guided by the job, not guesswork",
  whyChooseDescription: "Truck hire only works well when the details are right. Load shape, weight, unloading method, route access and site conditions all matter. We help customers in Worcester think through those practical points so the vehicle suits the task properly and the job can move forward with fewer problems on the day.",
  whyChooseItems: [
    { title: "Useful truck choice", body: "We offer a broad truck range so you can choose based on access, load type and unloading needs rather than guessing what might work." },
    { title: "Body styles for specific tasks", body: "Box, curtain side, dropside, tipper and tail lift options are available for very different kinds of work." },
    { title: "Access and route awareness", body: "We help you think through route restrictions, yard access and collection points before the vehicle is booked." },
    { title: "Fit for the load", body: "Loads differ in shape, weight and handling method, so we focus on matching the truck to the practical demands of the job." },
    { title: "Local and regional capability", body: "From local Worcester work to wider regional transport, our truck hire service supports jobs that need dependable carrying capacity." },
    { title: "Support beyond trucks", body: "If the task changes and a van or another vehicle type is more suitable, we can help through the wider self-drive fleet." },
  ],
  featureCtaTitle: "Talk through the load before you book",
  featureCtaDescription: "If the job needs more than a van, we can help you choose a truck that matches the load, access conditions and route plan across Worcester and beyond.",
  serviceAreasKicker: "Areas we serve",
  serviceAreasTitle: "Truck hire coverage around Worcester and nearby areas",
  serviceAreasDescription: "We support truck hire from Worcester into surrounding towns, industrial areas and regional routes, helping with transport jobs that need more capacity and the right body type.",
  localRelevanceKicker: "Operational guidance",
  localRelevanceTitle: "Truck hire that fits the route, the load and the job in Worcester",
  localRelevanceDescription: "Truck hire in Worcester needs a practical approach because the jobs vary so widely. Some customers need a straightforward box vehicle for removals support or stock movement. Others need a curtain side for easier loading, a dropside for awkward materials, or a tipper for site work. The right truck depends on what you are moving, how it will be loaded and where it needs to go.\n\nWorcester also sits on useful regional routes, which makes it a strong base for commercial transport. Whether the journey stays local or heads out along the M6, M58 or A49 corridors, choosing the correct size and body style helps avoid access problems and makes loading more efficient. We focus on fit for purpose rather than one-size-fits-all truck hire.",
  localRelevanceBlocks: [
    { title: "Routing trucks around Worcester", body: "Worcester is well connected for truck movements, but route choice matters. Jobs heading toward the M6, M58 or A580 can be straightforward with the right vehicle, while urban collections nearer the town centre may need tighter planning around access, loading bays and turning space. The more accurately the route is understood at the start, the easier it is to match the truck to the job.\n\nThat is especially important for deliveries into mixed environments where industrial estates, retail areas and residential roads all sit close together. A truck that is ideal for open motorway work may be less suitable if the delivery point has restricted yard space or awkward unloading conditions." },
    { title: "Matching the body type to the task", body: "Truck choice is not just about carrying more. A Luton with tail lift may suit furniture, boxed stock or appliances, while a curtain side can be the better option for side loading on trade jobs. Tippers and dropsides are often more practical for site work, loose materials and jobs with frequent loading and unloading points.\n\nIf you are collecting from one of Worcester's industrial areas or delivering into active commercial premises, think about the handling method before the journey starts. Forklift access, handball unloading, pallet movement and loading height all affect which vehicle body works best." },
    { title: "Planning for loading and access", body: "The busiest truck jobs are usually the ones with the least room for delay. If your route involves timed collections, warehouse drop-offs or site access windows, it helps to confirm dimensions, vehicle type and unloading requirements before the day itself. That reduces wasted trips and avoids turning up with a truck that does not fit the task.\n\nFor work around Worcester and onward regional runs, a clear plan saves time. Tell us whether the load is palletised, long, loose, fragile or heavy, and whether access is open yard, roadside or restricted entrance. We can then help steer you toward a truck that makes the job run more smoothly." },
  ],
  bottomCtaTitle: "Need the right truck for a serious load?",
  bottomCtaDescription: "Tell us about the load, the route and the type of access involved. We will help you arrange truck hire in Worcester that suits the job properly.",
  faqKicker: "Truck hire questions",
  faqTitle: "Worcester truck hire FAQs",
  faqs: [
    { question: "How do I choose the right truck for a job in Worcester?", answer: "Start with the load type, access at both ends and whether you need a tail lift, curtain side, dropside or tipper body. We can help narrow it down." },
    { question: "Do I need a special licence for truck hire?", answer: "Some trucks require the correct licence entitlement, depending on the vehicle class. Ask us before booking and we will explain what applies to the truck you need." },
    { question: "When is a tail lift truck the best option?", answer: "A tail lift is useful when loading pallets, bulky goods, appliances or heavier items where ground-level loading is not practical." },
    { question: "Can I hire a truck in Worcester for business use?", answer: "Yes, truck hire in Worcester is often used for site work, deliveries, removals support and commercial transport across local and regional routes." },
    { question: "Are all loads suitable for every truck type?", answer: "That depends on the vehicle body and your load. Curtain side, box, tipper and dropside trucks all suit different kinds of work, so it is best to check in advance." },
    { question: "What information should I have ready when arranging truck hire?", answer: "Have the collection point, delivery point, load details and any site restrictions ready. That helps us guide you to the most suitable truck more quickly." },
  ],
}

const location1Tokens: ContentTokenSet = {
  metadata: { title: "Compact Car Hire Redditch | Self-Drive Vehicle Hire", description: "Compact car hire in Redditch for local driving, station pickups and regional travel, with larger cars, vans, minibuses and trucks also available." },
  heroImage: "/images/nearby_location_image_1.jpeg",
  heroAlt: "Compact hire car near a town-centre route in Redditch",
  heroTitle: "Compact car hire in Redditch",
  heroDescription: "Compact car hire in Redditch for town driving, commuting, station pickups and straightforward regional travel, with larger vehicle options available when needed.",
  heroSecondaryActionLabel: "Check Redditch vehicles",
  mainServiceKicker: "Redditch compact hire",
  mainServiceTitle: "Self-drive compact cars for Redditch travel",
  mainServiceDescription: "We provide compact car hire in Redditch for customers who want a practical self-drive vehicle that suits everyday travel. Whether you need a car for local errands, a temporary replacement, a station pickup or a business journey, a compact model gives you the right balance of convenience, comfort and manageable size.\n\nSmaller cars are often the easiest option for Redditch roads because they are simpler to park and less cumbersome in busier areas. They also work well for short motorway stretches and regional routes, so you are not limited to town driving alone. If you prefer an automatic or want slightly more space, we can help guide you through the best available options.\n\nWe also offer a wider fleet beyond compact cars. So while the Redditch page is led by small car hire, customers can still move into estates, larger cars, SUVs, vans, minibuses or trucks when the journey calls for it.",
  mainVehicles: [
    { body: "The Fiat 500 is a strong option for Redditch town journeys where easy parking and simple local driving are the main priority.", alt: "Fiat 500 compact hire car for Redditch town driving" },
    { body: "A useful automatic for Redditch drivers who want a small, stress-free car for local roads, errands and short regional trips.", alt: "Hyundai i10 automatic compact hire car in Redditch" },
    { body: "The Golf gives Redditch customers a bit more room and motorway comfort while keeping the practical feel of a compact hatchback.", alt: "Volkswagen Golf hatchback for hire in Redditch" },
    { body: "Ideal when you want automatic convenience in Redditch with enough space and comfort for longer drives as well as daily use.", alt: "Ford Focus automatic self-drive hire in Redditch" },
  ],
  whyChooseKicker: "Why choose us in Redditch",
  whyChooseTitle: "Straightforward compact car hire for Redditch drivers",
  whyChooseDescription: "Redditch customers often want a hire car that feels easy to arrange and sensible to use. We focus on practical compact vehicles, clear advice and a wider fleet that can support you if the job turns into something bigger than a small car trip.",
  whyChooseItems: [
    { title: "Built for everyday Redditch trips", body: "Our Redditch compact car options suit everyday use, from local appointments and family visits to station runs and regional mileage." },
    { title: "Easy to manage locally", body: "Smaller cars make life easier in busier parts of Redditch where parking, turning and stop-start traffic can all slow bigger vehicles down." },
    { title: "Clear, helpful guidance", body: "We keep the hire process clear so Redditch customers can quickly understand which vehicle best fits the journey." },
    { title: "A fleet that can adapt", body: "If your plans change in Redditch, we can help you move from a compact car to something with more room or a different layout." },
    { title: "Automatic choices available", body: "Automatic options are available within the wider range for Redditch drivers who want a simpler, more relaxed drive." },
    { title: "Wider vehicle hire support", body: "Beyond compact cars, Redditch customers can also arrange vans, minibuses and trucks through the same self-drive provider." },
  ],
  additionalServicesKicker: "More vehicle hire options in Redditch",
  additionalServicesTitle: "Extra vehicle options for Redditch journeys",
  additionalServicesDescription: "If you need more room than a compact hatchback in Redditch, we also offer larger cars, estates, SUVs and premium automatics, along with vans, minibuses and trucks for wider transport needs.",
  additionalVehicles: [
    { body: "A practical choice in Redditch when you want everyday car handling with extra space for cases, work gear or shopping.", alt: "Ford Focus Estate for added luggage space on Redditch hires" },
    { body: "Well suited to longer Redditch journeys where comfort, cabin room and motorway ease matter more than a smaller footprint.", alt: "Ford Mondeo saloon for comfortable road travel from Redditch" },
    { body: "Useful for Redditch drivers who want a larger automatic car for business travel, family use or longer regional mileage.", alt: "Ford Mondeo automatic available for hire in Redditch" },
    { body: "A good fit for Redditch airport runs, family trips and any journey where passengers and luggage both need proper space.", alt: "Ford Mondeo Estate with extra boot space for Redditch travel" },
    { body: "The RAV4 Auto gives Redditch drivers a higher seating position and useful cabin space for mixed town and motorway use.", alt: "Toyota RAV4 automatic SUV hire for flexible Redditch driving" },
    { body: "A refined option for Redditch business travel, client meetings and occasions where a more premium drive is preferred.", alt: "Mercedes C Class automatic for executive hire in Redditch" },
    { body: "The E Class Auto suits longer Redditch journeys where extra comfort and a more spacious executive interior are helpful.", alt: "Mercedes E Class automatic executive car hire in Redditch" },
    { body: "For Redditch trips that call for more presence, comfort and room, the Range Rover offers a strong premium SUV option.", alt: "Range Rover SUV hire for premium travel in Redditch" },
  ],
  featureCtaTitle: "Need a practical hire car in Redditch?",
  featureCtaDescription: "Need a compact hire car in Redditch without overcomplicating the process? Contact us and we will help you check the available options.",
  serviceAreasKicker: "Coverage around Redditch",
  serviceAreasTitle: "Vehicle hire serving Redditch and nearby areas",
  serviceAreasDescription: "We cover Redditch and surrounding routes with practical self-drive hire, helping customers who need compact cars as well as larger vehicle options.",
  localRelevanceKicker: "Driving in Redditch",
  localRelevanceTitle: "Why compact car hire works well in Redditch",
  localRelevanceDescription: "Redditch works well for compact car hire because so many everyday journeys mix town-centre access with quick links out towards surrounding routes. A smaller car is practical for getting around the busier parts of Redditch, handling station pickups, retail trips and work travel without the bulk of a larger vehicle. It also suits drivers heading between residential areas, business parks and local appointments where easy manoeuvrability matters.\n\nFrom Redditch town centre, routes such as the A666 St Peter's Way and connections towards the M61 make it straightforward to head wider across the area. For drivers collecting a car for commuting, visiting family, or short regional travel, a compact model keeps things simple in traffic, easier in car parks and comfortable for longer stretches when needed. Redditch customers also regularly ask about vans, minibuses and trucks, so the wider fleet is there when the journey calls for more space or carrying capacity.",
  localRelevanceBlocks: [
    { title: "A sensible choice for Redditch road patterns", body: "Redditch suits compact cars particularly well because many journeys move between town-centre traffic, local neighbourhoods and quick access routes out towards surrounding roads. A smaller hatchback makes everyday driving simpler when you are dealing with tight parking, short errands or back-to-back appointments.\n\nRoutes such as the A666 and A58 keep traffic flowing in and out of Redditch, but once you are near busier central areas, having a car that is easy to position becomes far more useful than having extra size you do not need. For many customers, compact simply feels more practical." },
    { title: "Helpful around central Redditch and station trips", body: "Redditch town centre, retail areas and station access points can all reward a smaller vehicle. If your day involves collecting someone, heading into meetings or fitting in several local stops, compact car hire keeps the trip straightforward without making parking or manoeuvring harder than it needs to be.\n\nThat is especially helpful if you are travelling around the station area or heading towards places where quick access matters more than load space. A car like the Fiat 500 or Hyundai i10 Auto is often all you need for those kinds of Redditch journeys." },
    { title: "Think ahead before choosing your Redditch vehicle", body: "Not every Redditch journey is strictly local, so it helps to match the vehicle to the full day rather than only the first stop. A compact car is ideal for routine travel, but if you expect more luggage, more passengers or a longer motorway run, a Golf or Focus Auto may be the better fit.\n\nWe also keep larger vehicles available for customers in Redditch who realise a small car is not enough after all. Estates, SUVs, vans, minibuses and trucks are all part of the wider fleet, so changing plans does not have to mean starting the search again elsewhere." },
  ],
  bottomCtaTitle: "Arrange compact car hire in Redditch",
  bottomCtaDescription: "If you need a small hire car in Redditch for local driving, station access or a longer run, get in touch and we will help you choose the right vehicle.",
  faqKicker: "Redditch hire questions",
  faqTitle: "FAQs about compact car hire in Redditch",
  faqs: [
    { question: "Is a compact car a good choice for driving in Redditch?", answer: "Compact car hire in Redditch suits busy local roads, town-centre parking and everyday trips where a smaller vehicle is easier to manage." },
    { question: "What do people usually hire compact cars for in Redditch?", answer: "Yes, Redditch customers often use compact hire cars for station collections, shopping trips, family visits, temporary cover and regional travel." },
    { question: "Can I get an automatic hire car in Redditch?", answer: "Yes, subject to availability. If you want an easier drive in Redditch traffic or on longer runs, ask about our automatic options." },
    { question: "Do you offer larger vehicles alongside compact car hire in Redditch?", answer: "If you need more space than a compact car in Redditch, we can also help with estates, larger saloons, SUVs, vans, minibuses and trucks." },
    { question: "Can I arrange last-minute car hire in Redditch?", answer: "Yes, we can often help with short-notice compact car hire in Redditch when a suitable vehicle is available. Calling ahead is the best way to check." },
    { question: "What do I need to collect my hire car in Redditch?", answer: "For Redditch hire, bring your driving licence and your booking details. If anything else is needed, we will confirm it before collection." },
  ],
}

const location2Tokens: ContentTokenSet = {
  metadata: { title: "Compact Car Hire Kidderminster | Self-Drive Vehicle Hire", description: "Compact car hire in Kidderminster for local trips, station travel, business use, and everyday driving. Vans, minibuses, and trucks also available." },
  heroImage: "/images/nearby_location_image_2.jpeg",
  heroAlt: "Compact hire car on a suburban road in Kidderminster",
  heroTitle: "Compact car hire in Kidderminster",
  heroDescription: "Compact car hire in Kidderminster for local trips, station runs, business travel, and everyday journeys. Easy self-drive options with larger vehicles available too.",
  heroSecondaryActionLabel: "View Kidderminster vehicles",
  mainServiceKicker: "Kidderminster self-drive hire",
  mainServiceTitle: "Straightforward compact car hire for Kidderminster journeys",
  mainServiceDescription: "Our compact car hire service in Kidderminster is built for practical day to day travel. Whether you need a small car for local appointments, a reliable vehicle while your own is off the road, or something easy to drive for business and personal use, we can help you choose a suitable option.\n\nCompact cars are a natural fit for Kidderminster because they are easy to park, comfortable on short and medium journeys, and well suited to town traffic as well as wider North West routes. We also offer automatic options and a broader self-drive range including vans, minibuses, and trucks, so you can keep everything with one provider if your plans change.",
  mainVehicles: [
    { body: "The Fiat 500 is ideal for Kidderminster drivers who want a compact, easy to park car for local errands, short commutes, and simple everyday travel.", alt: "Fiat 500 hire car for compact driving in Kidderminster" },
    { body: "A Hyundai i10 Auto makes Kidderminster town driving easy, with the convenience of automatic transmission and a size that suits tighter parking spots.", alt: "Hyundai i10 automatic available for hire in Kidderminster" },
    { body: "The VW Golf is a strong all rounder for Kidderminster, giving you extra comfort and space for longer drives while staying manageable around town.", alt: "VW Golf self-drive hire option in Kidderminster" },
    { body: "If you want automatic driving with everyday practicality, the Focus Auto suits Kidderminster business use, family journeys, and regular regional travel.", alt: "Ford Focus automatic hire car in Kidderminster" },
  ],
  whyChooseKicker: "Why Kidderminster drivers choose us",
  whyChooseTitle: "A practical choice for Kidderminster vehicle hire",
  whyChooseDescription: "Hiring a car in Kidderminster should feel simple, not overcomplicated. We focus on practical vehicles, clear communication, and helping customers choose something that suits the roads they will actually be driving. That might mean a small city-friendly car, an automatic for easier stop start traffic, or a larger option when the journey needs more space.",
  whyChooseItems: [
    { title: "Town-friendly vehicles", body: "Our Kidderminster car hire range is centred on vehicles that are easy to live with on typical local journeys." },
    { title: "Practical journey matching", body: "Whether you need a car for a quick local run or a longer journey, we help match the booking to the travel plan." },
    { title: "Automatic options available", body: "Automatic compact cars are available for Kidderminster drivers who want an easier drive in busier traffic." },
    { title: "Wider fleet when needed", body: "If you need more room than a compact car offers, we can also help with larger cars and wider vehicle types." },
    { title: "Useful for many journey types", body: "The service suits personal travel, commuting, business use, and temporary replacement vehicle needs around Kidderminster." },
    { title: "Helpful booking support", body: "You can speak to us directly to check availability and narrow down the most suitable vehicle for Kidderminster travel." },
  ],
  additionalServicesKicker: "More vehicle hire options in Kidderminster",
  additionalServicesTitle: "Extra fleet options for Kidderminster travel",
  additionalServicesDescription: "If a compact car is not quite enough for your plans in Kidderminster, we also offer larger cars, estates, SUVs and premium automatics, plus vans, minibuses and trucks.",
  additionalVehicles: [
    { body: "Useful in Kidderminster when you want the feel of a car but need a larger boot for bags, equipment or shopping.", alt: "Ford Focus Estate for practical luggage space on Kidderminster hires" },
    { body: "A comfortable larger car for Kidderminster drivers making longer regional or motorway journeys.", alt: "Ford Mondeo saloon for longer journeys from Kidderminster" },
    { body: "A practical automatic option in Kidderminster for customers who want extra room and a more relaxed drive.", alt: "Ford Mondeo automatic available for hire in Kidderminster" },
    { body: "Well suited to Kidderminster airport journeys, family travel and trips where luggage space matters.", alt: "Ford Mondeo Estate with generous boot space for Kidderminster travel" },
    { body: "A RAV4 Auto gives Kidderminster drivers extra ride height and easy automatic driving for longer trips, family travel, and mixed urban and motorway use.", alt: "Toyota RAV4 automatic SUV hire in Kidderminster" },
    { body: "The C Class Auto suits Kidderminster business travel, client visits, and comfortable regional journeys when you want a more refined drive.", alt: "Mercedes C Class automatic available for hire in Kidderminster" },
    { body: "An E Class Auto is a strong choice in Kidderminster for executive travel, airport runs, and longer journeys where comfort matters.", alt: "Mercedes E Class automatic hire option in Kidderminster" },
    { body: "For Kidderminster drivers needing space, presence, and a higher driving position, the Range Rover fits family trips, events, and longer road journeys.", alt: "Range Rover available for self-drive hire in Kidderminster" },
  ],
  featureCtaTitle: "Check Kidderminster vehicle availability",
  featureCtaDescription: "Need a car for local travel in Kidderminster or a journey further afield? Get in touch and check which vehicles are available for your dates.",
  serviceAreasKicker: "Around Kidderminster",
  serviceAreasTitle: "Vehicle hire around Kidderminster and nearby routes",
  serviceAreasDescription: "We support Kidderminster and surrounding areas with compact car hire, while also offering access to vans, minibuses, and trucks when a different vehicle suits the job better.",
  localRelevanceKicker: "Driving in Kidderminster",
  localRelevanceTitle: "Why compact car hire works well in Kidderminster",
  localRelevanceDescription: "Kidderminster is the kind of place where a compact hire car makes immediate sense. Local driving can include town centre calls, retail trips, work appointments, school runs, and short notice travel, all mixed into one day. A smaller vehicle keeps those journeys easy to manage while still being comfortable enough for trips beyond town.\n\nIt also works well for people travelling in and out of Kidderminster for work, family visits, or onward connections. With practical road links across the wider area, compact car hire gives you enough flexibility for local movement without making parking and manoeuvring harder than it needs to be.",
  localRelevanceBlocks: [
    { title: "A good fit for everyday Kidderminster driving", body: "Driving around Kidderminster is usually straightforward when you pick a car that suits everyday local roads. Compact models are especially useful if your route includes the town centre, residential streets, or regular stops through areas where parking space can be tighter than expected.\n\nIf your day takes you towards the A58, the East Lancashire Road corridor, or links out towards Rainford and Haydock, a smaller car keeps things simple. It is often the sensible choice for a mix of errands, work appointments, and short regional drives." },
    { title: "Useful for station links and onward routes", body: "Kidderminster journeys often combine local access with wider travel, especially for people connecting to rail services, retail parks, and business addresses. A compact car works well if you are moving between the station area, retail trips, and onward routes without wanting the bulk of a larger vehicle.\n\nFor drivers heading towards the M62 or making regular trips across Merseyside and the North West, keeping the vehicle manageable matters. You still get enough comfort for longer runs, while making town parking and repeat stops less of a chore." },
    { title: "Easy to scale up if your plans change", body: "Not every Kidderminster booking is just about a small car. Sometimes plans shift from a simple local run to carrying more passengers or more load space than expected. That is why it helps to use a hire company that can also assist with vans, minibuses, and trucks when needed.\n\nIf you start with compact car hire in Kidderminster but realise the job is bigger, it is easier to adjust when the wider fleet is available. That keeps your travel plans practical without overcomplicating the booking." },
  ],
  bottomCtaTitle: "Book your Kidderminster hire vehicle",
  bottomCtaDescription: "If you need compact car hire in Kidderminster, talk to our team and we will help you find a practical vehicle for the journey ahead.",
  faqKicker: "Kidderminster hire questions",
  faqTitle: "Compact car hire FAQs for Kidderminster",
  faqs: [
    { question: "Can I arrange compact car hire in Kidderminster at short notice?", answer: "Yes, we can help arrange compact car hire for Kidderminster when you need a practical vehicle for local driving, station journeys, or onward travel. Availability depends on the vehicle and timing, so it is best to check with us directly." },
    { question: "Why choose a compact car for driving in Kidderminster?", answer: "Compact cars are often a good fit for Kidderminster because they are easier to park, simple to handle on local roads, and well suited to everyday journeys around town and beyond." },
    { question: "Do you offer automatic cars for Kidderminster hires?", answer: "Yes, Kidderminster customers can ask about automatic compact car options. They are especially useful for town driving, busier junctions, and stop start traffic." },
    { question: "What kind of journeys are compact hire cars used for in Kidderminster?", answer: "Many Kidderminster bookings are for local appointments, visiting family, temporary vehicle cover, shopping trips, and rail connections, but the right car also works well for longer regional travel." },
    { question: "Can I hire more than just a compact car in Kidderminster?", answer: "Yes, alongside compact cars in Kidderminster we also offer vans, minibuses, and trucks, so if your plans change we can help you look at a more suitable vehicle." },
    { question: "How do I choose the right hire car for Kidderminster travel?", answer: "When booking your Kidderminster hire, tell us about passenger numbers, luggage, whether you want manual or automatic, and the type of journey you are planning. That helps us suggest the best option." },
  ],
}

const location3Tokens: ContentTokenSet = {
  metadata: { title: "Compact Car Hire Bromsgrove | Self-Drive Vehicle Hire", description: "Compact car hire in Bromsgrove for commuting, local trips, station travel, and business use. Wider self-drive options include vans, minibuses, and trucks." },
  heroImage: "/images/nearby_location_image_1.jpeg",
  heroAlt: "Compact hire car on a commuter-style road near Bromsgrove town centre",
  heroTitle: "Compact car hire in Bromsgrove made simple",
  heroDescription: "Compact car hire in Bromsgrove for commuting, shopping trips, local appointments, and onward travel. Practical self-drive vehicles with wider fleet options available.",
  heroSecondaryActionLabel: "View Bromsgrove options",
  mainServiceKicker: "Bromsgrove vehicle hire",
  mainServiceTitle: "Compact car hire for everyday travel in Bromsgrove",
  mainServiceDescription: "We provide compact car hire in Bromsgrove for customers who need a vehicle that is easy to drive, simple to park, and suitable for all kinds of everyday travel. Whether you are covering local appointments, sorting temporary transport, commuting, or heading out for a longer trip, we can help you choose a vehicle that fits.\n\nCompact cars are especially useful in Bromsgrove because they cope well with mixed driving patterns. You get the convenience needed for town use without giving up comfort for wider regional journeys. If you need something larger, our broader fleet includes bigger cars, vans, minibuses, and trucks.",
  mainVehicles: [
    { body: "The Fiat 500 is a neat option for Bromsgrove journeys where easy parking, short local trips, and simple town driving are the priority.", alt: "Fiat 500 compact hire car for Bromsgrove roads" },
    { body: "A Hyundai i10 Auto suits Bromsgrove customers who want an automatic compact car for local travel, commuting, and everyday convenience.", alt: "Hyundai i10 automatic hire option in Bromsgrove" },
    { body: "The VW Golf works well in Bromsgrove if you want a compact car with a little more cabin comfort for regular longer drives.", alt: "VW Golf self-drive vehicle available in Bromsgrove" },
    { body: "For Bromsgrove business travel, family use, or regional journeys, the Focus Auto offers practical space with easy automatic driving.", alt: "Ford Focus automatic car hire in Bromsgrove" },
  ],
  whyChooseKicker: "Why Bromsgrove drivers choose us",
  whyChooseTitle: "A practical self-drive option for Bromsgrove",
  whyChooseDescription: "Bromsgrove customers usually want vehicle hire to be useful, not complicated. We keep the focus on practical self-drive options, sensible guidance, and cars that make day to day travel easier. That means helping you choose a vehicle based on the journey itself rather than pushing something unsuitable.",
  whyChooseItems: [
    { title: "Good everyday fit", body: "Our Bromsgrove compact cars are chosen for straightforward local use, comfortable driving, and everyday practicality." },
    { title: "Journey-led advice", body: "We help Bromsgrove customers match the vehicle to the trip, whether that means town driving, commuting, or a longer run." },
    { title: "Automatic cars available", body: "Automatic choices are available for Bromsgrove bookings where easier driving is the priority." },
    { title: "Space when you need it", body: "If you need more room than a compact hatchback offers, we can guide you towards larger alternatives." },
    { title: "Suitable for work or home", body: "Our Bromsgrove service works for both personal and business use, from local appointments to temporary cover." },
    { title: "Straightforward support", body: "You can contact us directly to check vehicle suitability and availability for Bromsgrove travel plans." },
  ],
  additionalServicesKicker: "More than compact cars in Bromsgrove",
  additionalServicesTitle: "Wider vehicle choice for Bromsgrove drivers",
  additionalServicesDescription: "If your Bromsgrove journey needs more room, more comfort, or a higher spec vehicle, we can help with larger car options while still keeping the booking straightforward. We also offer vans, minibuses, and trucks for customers whose plans go beyond compact car hire.",
  additionalVehicles: [
    { body: "The Focus Estate is a useful step up for Bromsgrove customers needing extra boot space for luggage, work kit, or longer family journeys.", alt: "Ford Focus Estate hire vehicle for Bromsgrove travel" },
    { body: "A Mondeo suits Bromsgrove drivers looking for a comfortable car for longer motorway runs, business travel, or day to day use with more cabin room.", alt: "Ford Mondeo available for self-drive hire in Bromsgrove" },
    { body: "The Mondeo Auto offers added comfort for Bromsgrove journeys where automatic driving and extra interior space make the day easier.", alt: "Ford Mondeo automatic hire option in Bromsgrove" },
    { body: "For Bromsgrove bookings that need both comfort and carrying space, the Mondeo Estate works well for extended trips, luggage, and everyday practicality.", alt: "Ford Mondeo Estate available for hire in Bromsgrove" },
    { body: "A RAV4 Auto gives Bromsgrove drivers more space and a raised driving position for family travel, business trips, and longer regional journeys.", alt: "Toyota RAV4 automatic hire vehicle in Bromsgrove" },
    { body: "The C Class Auto is a smart option in Bromsgrove for professional travel, client meetings, and comfortable journeys across the wider area.", alt: "Mercedes C Class automatic available for hire in Bromsgrove" },
    { body: "An E Class Auto suits Bromsgrove customers who want a refined vehicle for executive travel, airport runs, or longer distance driving.", alt: "Mercedes E Class automatic self-drive hire in Bromsgrove" },
    { body: "The Range Rover is well suited to Bromsgrove bookings where you want extra room, strong road presence, and comfort for family or event travel.", alt: "Range Rover hire option for Bromsgrove journeys" },
  ],
  featureCtaTitle: "Check available hire cars for Bromsgrove",
  featureCtaDescription: "Planning a journey in Bromsgrove or heading further out on the main road network? Contact us to check available compact cars and larger alternatives.",
  serviceAreasKicker: "Around Bromsgrove",
  serviceAreasTitle: "Serving Bromsgrove and surrounding travel routes",
  serviceAreasDescription: "Our vehicle hire service supports Bromsgrove and nearby routes with compact cars for daily travel, plus larger vehicles for customers who need more space or carrying capacity.",
  localRelevanceKicker: "Bromsgrove travel guide",
  localRelevanceTitle: "Why compact cars suit Bromsgrove so well",
  localRelevanceDescription: "Bromsgrove drivers often need a car that can handle a bit of everything in the same day. That may mean local errands in town, work travel, family visits, or a run out onto the wider road network. Compact car hire suits that pattern well because it stays easy to handle while still covering longer trips comfortably.\n\nIt is also a sensible choice if parking, repeated stops, or busier local traffic are part of the journey. A smaller hire vehicle helps keep things straightforward, especially when your travel plan is practical rather than flashy.",
  localRelevanceBlocks: [
    { title: "Built for practical Bromsgrove journeys", body: "Bromsgrove is well suited to compact car hire because many journeys are short, mixed purpose, and spread across residential streets, local shops, and regular town centre stops. A smaller vehicle helps you stay flexible without making simple parking tasks harder than they need to be.\n\nIf your route takes you around the A580 East Lancashire Road corridor or through everyday local traffic, a compact car keeps the drive manageable. It is a good match for routine trips where convenience matters more than extra bulk." },
    { title: "Useful around town and beyond", body: "For people travelling in and out of Bromsgrove for work, family commitments, or appointments, a compact hire car gives the right balance of economy of movement and comfort. You can cover local miles easily, then continue onto wider routes without feeling under-equipped.\n\nConnections towards the Atherleigh Way area and onward links around the town make a small, easy to place vehicle especially useful. If your day includes several stops rather than one straight run, compact size becomes a real advantage." },
    { title: "Flexible options if plans change", body: "Bromsgrove bookings are not always the same from one customer to the next. Some need a compact car for commuting or temporary cover, while others start small and then realise they need estate space, a van, or a people carrying option.\n\nBecause we offer more than one type of vehicle, it is easier to keep your hire practical. If your Bromsgrove plans change, you are not locked into one narrow choice." },
  ],
  bottomCtaTitle: "Arrange your Bromsgrove car hire",
  bottomCtaDescription: "Speak to us about compact car hire in Bromsgrove and we will help you find a vehicle that fits your route, passenger needs, and travel plans.",
  faqKicker: "Bromsgrove FAQs",
  faqTitle: "Questions about compact car hire in Bromsgrove",
  faqs: [
    { question: "What is compact car hire in Bromsgrove best suited to?", answer: "Compact car hire in Bromsgrove is a good option for local travel, commuting, family visits, and journeys connecting into surrounding routes. Smaller cars are often easier to park and simpler to manage on busy days." },
    { question: "Can I book an automatic hire car in Bromsgrove?", answer: "Yes, automatic cars are available for Bromsgrove hires. They can be especially useful if you expect regular stop start traffic or simply prefer an easier driving experience." },
    { question: "Why are compact cars a sensible choice for Bromsgrove drivers?", answer: "Bromsgrove has a mix of town driving, residential routes, and connections out towards major roads, so a compact vehicle gives you flexibility without feeling oversized for everyday use." },
    { question: "Can I upgrade from a compact car for my Bromsgrove journey?", answer: "Yes, if your Bromsgrove booking needs more space for passengers or luggage, we can also help with larger cars and other vehicle types where suitable." },
    { question: "Do you offer other vehicle hire services in Bromsgrove?", answer: "Alongside compact car hire in Bromsgrove, we also offer vans, minibuses, and trucks. That is useful if your requirements change after you first enquire." },
    { question: "How do I pick the right hire car for Bromsgrove travel?", answer: "The best way to choose a Bromsgrove hire car is to think about passenger numbers, luggage, the length of the trip, and whether you want manual or automatic. We can help narrow it down." },
  ],
}

const location4Tokens: ContentTokenSet = {
  metadata: { title: "Compact Car Hire Malvern | Vehicle Hire Malvern", description: "Compact car hire in Malvern for local travel, station runs and regional driving, with vans, minibuses and trucks also available when needed." },
  heroImage: "/images/nearby_location_image_2.jpeg",
  heroAlt: "Compact hire car on a business-travel route in Malvern",
  heroTitle: "Compact Car Hire in Malvern",
  heroDescription: "Compact car hire in Malvern for everyday travel, station pickups, business meetings and regional journeys. Easy-to-drive vehicles with support from a practical local team.",
  heroSecondaryActionLabel: "View vehicle options",
  mainServiceKicker: "Malvern compact car hire",
  mainServiceTitle: "Practical car hire for Malvern journeys",
  mainServiceDescription: "Compact car hire in Malvern suits everything from station runs and business travel to shopping trips and weekend plans. A smaller car is easy to handle around the town centre, residential streets and busy retail areas, while still being comfortable for longer journeys using the M6, M62 and A49. If you need a straightforward self-drive option for local travel in Malvern, we offer practical cars that are simple to park, economical on everyday mileage and well suited to solo drivers, couples and small families.",
  mainVehicles: [
    { body: "The Fiat 500 is a smart fit for Malvern town driving, short local trips and easy parking near busy central areas.", alt: "Fiat 500 compact hire car for Malvern" },
    { body: "The Hyundai i10 Auto is ideal for drivers who want a small automatic for comfortable local travel around Malvern.", alt: "Hyundai i10 automatic hire car for Malvern" },
    { body: "The VW Golf offers extra room and motorway confidence while still staying practical for everyday use in Malvern.", alt: "VW Golf hire car for Malvern travel" },
    { body: "The Focus Auto suits mixed Malvern journeys, giving you automatic ease for commuting, business calls and regional runs.", alt: "Ford Focus automatic hire car in Malvern" },
  ],
  whyChooseKicker: "Why Malvern drivers call us",
  whyChooseTitle: "A practical choice for compact car hire in Malvern",
  whyChooseDescription: "Hiring a compact car in Malvern should feel practical, not overcomplicated. We focus on useful vehicles, clear guidance and a service that works for real journeys, whether you are travelling locally, heading out on business or connecting with wider routes across the region.",
  whyChooseItems: [
    { title: "Compact cars that fit the area", body: "Choose a smaller car that suits town driving, station access and everyday travel around Malvern." },
    { title: "Straightforward vehicle guidance", body: "Our team helps match the vehicle to the journey so you are not left with more car than you need." },
    { title: "Useful choice across the fleet", body: "Automatic and manual compact options make it easier to book a car you feel comfortable driving in Malvern." },
    { title: "Ready for local and regional use", body: "From local errands to regional travel, our vehicles are suited to the mixed driving patterns common around Malvern." },
    { title: "Wider hire options available", body: "If your plans expand beyond compact car hire in Malvern, we can also arrange larger vehicles from the same fleet." },
    { title: "Easy to arrange", body: "We keep the process clear and practical so booking the right vehicle in Malvern feels simple." },
  ],
  additionalServicesKicker: "More than compact cars in Malvern",
  additionalServicesTitle: "Broader vehicle choice for Malvern travel",
  additionalServicesDescription: "Malvern journeys vary from local calls and station runs to business travel and longer motorway driving, so it helps to have more than one option. Alongside compact cars, we can help with larger cars plus vans, minibuses, and trucks where the journey calls for them.",
  additionalVehicles: [
    { body: "The Focus Estate gives Malvern drivers extra luggage room for business travel, family trips, and longer journeys without moving into a much larger vehicle.", alt: "Ford Focus Estate hire car for Malvern journeys" },
    { body: "A Mondeo suits Malvern customers who want a comfortable car for regular motorway use, client visits, or longer day trips.", alt: "Ford Mondeo available for hire in Malvern" },
    { body: "The Mondeo Auto is a practical choice in Malvern for drivers who want added cabin space and relaxed automatic driving.", alt: "Ford Mondeo automatic self-drive hire in Malvern" },
    { body: "For Malvern travel that needs both passenger comfort and strong boot capacity, the Mondeo Estate is a dependable all round option.", alt: "Ford Mondeo Estate available for Malvern hire" },
    { body: "A RAV4 Auto works well for Malvern drivers wanting a higher seating position, flexible space, and comfort for regional travel.", alt: "Toyota RAV4 automatic hire vehicle in Malvern" },
    { body: "The C Class Auto is well suited to Malvern business use, executive travel, and professional journeys across the North West.", alt: "Mercedes C Class automatic available for hire in Malvern" },
    { body: "An E Class Auto gives Malvern customers extra comfort for longer motorway routes, airport runs, and higher end travel needs.", alt: "Mercedes E Class automatic hire option in Malvern" },
    { body: "The Range Rover suits Malvern bookings where you want generous space, a raised driving position, and strong comfort for family or event travel.", alt: "Range Rover available for self-drive hire in Malvern" },
  ],
  featureCtaTitle: "Need compact car hire in Malvern?",
  featureCtaDescription: "If you need a practical compact car in Malvern, speak to our team and we will help you choose the right vehicle for local trips, business travel or onward journeys.",
  serviceAreasKicker: "Around Malvern",
  serviceAreasTitle: "Vehicle hire in and around Malvern",
  serviceAreasDescription: "We provide compact car hire across Malvern and nearby areas, with support for drivers who need an easy local vehicle as well as access to vans, minibuses and trucks.",
  localRelevanceKicker: "Driving in Malvern",
  localRelevanceTitle: "Why compact car hire works well in Malvern",
  localRelevanceDescription: "Malvern is the kind of place where a compact car makes immediate sense. The town sits between major motorway links and busy local roads, but many day-to-day journeys still depend on being able to park easily, turn around quickly and move between central streets, residential areas and business locations without hassle. For that kind of driving, a smaller car is often the most practical choice.\n\nIt is also a town with varied travel patterns. Some drivers need a car for rail connections, some for office visits, and others for errands, family travel or short regional trips. Compact car hire in Malvern suits that mix well, giving you a vehicle that feels comfortable on local roads while still being ready for travel farther out when needed.",
  localRelevanceBlocks: [
    { title: "Driving around central Malvern", body: "Malvern works well with a compact car because so many journeys involve switching between town-centre streets, retail parks and motorway links. If you are heading near Golden Square, the Cultural Quarter or the station approaches, a smaller vehicle is simply easier to place and easier to live with through a busy day.\n\nThe road network also means you can be in and out quickly when plans change. Routes such as the A49, A50 and A57 connect different parts of Malvern efficiently, while the M62 and M6 are close enough to make regional travel straightforward without needing a larger car." },
    { title: "Stations, offices and onward travel", body: "Compact car hire is especially useful in Malvern if your day includes rail connections or office visits. Around Malvern Central and Malvern Bank Quay, access can feel more manageable in a smaller vehicle, particularly when you are handling luggage, collecting colleagues or making a quick onward trip after arriving by train.\n\nFor business users travelling to Birchwood or visiting customers across the wider area, a compact hatchback gives a practical balance of comfort and manoeuvrability. It is well suited to mixed driving, from town traffic to short motorway stretches, without feeling oversized for tighter parking areas." },
    { title: "Planning practical journeys from Malvern", body: "Malvern is often a link point rather than a final stop, which makes choosing the right vehicle important. If your plans include shopping collections, family visits or leisure trips out toward surrounding routes, a compact car keeps things simple while still offering enough room for the usual bags, cases and day-to-day items.\n\nIt also helps to think about timing. Roads around key retail and commuter zones can feel busier at peak periods, so collecting the right car for the job can make the whole journey smoother. If you later need extra carrying space, we can also help with vans, minibuses and trucks from the wider fleet." },
  ],
  bottomCtaTitle: "Book a hire car for Malvern",
  bottomCtaDescription: "Need compact car hire in Malvern? Get in touch and we will help you choose a practical self-drive vehicle for town, business, or motorway use.",
  faqKicker: "Malvern FAQs",
  faqTitle: "Malvern compact car hire questions",
  faqs: [
    { question: "What is compact car hire in Malvern useful for?", answer: "Compact car hire in Malvern is ideal for local business travel, station connections, shopping trips, commuting, and everyday journeys where easy parking matters." },
    { question: "Can I hire an automatic car in Malvern?", answer: "Yes, automatic options are available for Malvern hires, which can be especially helpful if your route includes frequent junctions, queues, or regular town driving." },
    { question: "Why choose a compact hire car for Malvern travel?", answer: "A compact car makes sense in Malvern because it is easy to handle in busy areas while still being comfortable for trips out on the main road network." },
    { question: "Can I use a compact hire car in Malvern for business travel?", answer: "Yes, if your Malvern plans involve more luggage, more passengers, or a different kind of journey, we can also help with larger cars and other vehicle types." },
    { question: "Why choose a compact car for driving in Malvern?", answer: "A compact car suits many Malvern journeys because it is easier to park around the town centre, convenient for station runs, and comfortable for local and regional travel." },
    { question: "Do you offer other vehicle hire services in Malvern?", answer: "Yes. Alongside compact car hire in Malvern, we can also help with vans, minibuses and trucks when your plans need more space or carrying capacity." },
  ],
}

const location5Tokens: ContentTokenSet = {
  metadata: { title: "Compact Car Hire Hereford | Vehicle Hire Hereford", description: "Compact car hire in Hereford for local trips, station travel and regional driving, with access to a wider fleet when your plans need more space." },
  heroImage: "/images/nearby_location_image_2.jpeg",
  heroAlt: "Compact hire car driving near a retail and road-link area in Hereford",
  heroTitle: "Compact Car Hire in Hereford",
  heroDescription: "Compact car hire in Hereford for local errands, commuting, rail connections and wider Lancashire journeys. A practical choice when you want easy driving and simple parking.",
  heroSecondaryActionLabel: "Check available vehicles",
  mainServiceKicker: "Hereford compact cars",
  mainServiceTitle: "Compact hire cars for everyday Hereford travel",
  mainServiceDescription: "Our compact car hire in Hereford is designed for drivers who want a vehicle that feels easy to manage without giving up everyday comfort. Whether you need a small city-style car for errands and appointments or a slightly larger hatchback for regular travel, we offer sensible options for the way people move around Hereford. Compact cars are a good match for local parking, daily driving and short regional routes where flexibility matters more than unnecessary size.\n\nThey also make sense for mixed-use bookings. Many Hereford journeys combine town-centre stops, station access and trips onto larger roads, so having a car that handles all of that comfortably can make the day much easier.",
  mainVehicles: [
    { body: "The Fiat 500 is ideal for quick Hereford journeys, easy parking and simple town-centre driving.", alt: "Fiat 500 compact hire car in Hereford" },
    { body: "The Hyundai i10 Auto gives Hereford drivers a small automatic that feels comfortable and easy to handle.", alt: "Hyundai i10 automatic rental car for Hereford" },
    { body: "The VW Golf is a versatile option for Hereford travel, combining everyday practicality with solid comfort on longer runs.", alt: "VW Golf hire car for Hereford use" },
    { body: "The Focus Auto suits Hereford drivers who want automatic convenience with space for regular travel and errands.", alt: "Ford Focus automatic hire car in Hereford" },
  ],
  whyChooseKicker: "Why Hereford customers choose us",
  whyChooseTitle: "A sensible approach to compact car hire in Hereford",
  whyChooseDescription: "When you need a hire car in Hereford, the right vehicle should fit naturally into your plans. We keep the focus on sensible compact options, straightforward booking support and a fleet that can also scale up if your journey turns into something bigger.",
  whyChooseItems: [
    { title: "Built for everyday use", body: "Our compact cars are well suited to the practical, mixed driving that is common around Hereford." },
    { title: "Easy to live with", body: "Small, manageable vehicles make local parking and repeated stops simpler across Hereford." },
    { title: "Choice that stays practical", body: "From simple runabouts to more spacious hatchbacks, we offer useful options for different Hereford journeys." },
    { title: "Guidance that makes sense", body: "We help you pick a vehicle based on how you will use it, not just on category alone." },
    { title: "Flexibility across the fleet", body: "If your Hereford booking changes, we can often point you toward a larger car, van, minibus or truck instead." },
    { title: "Simple local service", body: "Our focus is on keeping vehicle hire in Hereford straightforward, useful and easy to arrange." },
  ],
  additionalServicesKicker: "More vehicle hire in Hereford",
  additionalServicesTitle: "Extra hire choices beyond compact cars in Hereford",
  additionalServicesDescription: "While compact cars are a strong choice for Hereford, some trips need more room, more comfort or a different driving setup. Our wider fleet covers those needs without losing the same practical approach.",
  additionalVehicles: [
    { body: "The Focus Estate works well in Hereford when you want compact-style driving with added boot space for luggage, equipment or shopping.", alt: "Ford Focus Estate hire vehicle for Hereford" },
    { body: "The Mondeo suits longer Hereford journeys where extra cabin comfort matters for business travel or family use.", alt: "Ford Mondeo hire car for Hereford journeys" },
    { body: "The Mondeo Auto is a smooth option for Hereford drivers who want a roomy automatic for regional roads and motorway travel.", alt: "Ford Mondeo automatic hire car in Hereford" },
    { body: "The Mondeo Estate adds useful carrying space for Hereford trips that involve cases, work items or larger day-to-day loads.", alt: "Ford Mondeo Estate hire car for Hereford" },
    { body: "The RAV4 Auto gives you a higher driving position and flexible space, useful for family travel in and around Hereford.", alt: "Toyota RAV4 automatic hire vehicle for Hereford" },
    { body: "The C Class Auto is a refined choice for Hereford business users and drivers wanting a more executive feel.", alt: "Mercedes C Class automatic hire car in Hereford" },
    { body: "The E Class Auto is well suited to longer Hereford journeys where comfort, cabin space and effortless driving all matter.", alt: "Mercedes E Class automatic hire car for Hereford" },
    { body: "The Range Rover offers generous space and a more substantial drive for Hereford trips that call for extra presence and comfort.", alt: "Range Rover hire vehicle for Hereford travel" },
  ],
  featureCtaTitle: "Looking for a compact car in Hereford?",
  featureCtaDescription: "Tell us what kind of driving you need to do in Hereford and we will help you find a compact car that feels easy, practical and well matched to the trip.",
  serviceAreasKicker: "Around Hereford",
  serviceAreasTitle: "Vehicle hire around Hereford",
  serviceAreasDescription: "We cover Hereford and surrounding areas with compact car hire for everyday travel, while also offering larger vehicles when the job or journey calls for them.",
  localRelevanceKicker: "Driving around Hereford",
  localRelevanceTitle: "Why compact car hire makes sense in Hereford",
  localRelevanceDescription: "Hereford is well suited to compact car hire because so much local driving is about convenience. You may be heading into town, linking up with nearby routes, calling on customers, or travelling between home, work and appointments. In all of those cases, a smaller car keeps things straightforward and avoids the bulk of a larger vehicle when you do not need it.\n\nIt is also a place where one booking often has to cover different kinds of travel. You might need something easy for local roads during the day, but still comfortable for a longer run later on. Compact cars handle that blend well, which is why they remain a practical option for many Hereford drivers.",
  localRelevanceBlocks: [
    { title: "A good fit for Hereford roads", body: "Hereford suits compact car hire because many journeys combine town-centre access with short hops onto larger roads. If you are moving between local shops, residential areas and workplaces, a smaller vehicle is easier to park and less awkward on tighter streets.\n\nThe town also benefits from strong road links, especially via the A6 and nearby M61 corridor. That makes a compact car a sensible all-rounder: small enough for everyday use in Hereford, but still comfortable when your trip stretches farther across Lancashire." },
    { title: "Town-centre access and station travel", body: "For rail users, compact car hire in Hereford is useful when your journey starts or ends around Hereford station and nearby central streets. Picking up passengers, dealing with luggage or making quick onward connections tends to feel simpler in a smaller car that can slot into ordinary parking spaces without fuss.\n\nThe same applies to routine errands. Whether you are visiting local retail areas, heading to appointments or travelling across town several times in one day, a compact hatchback keeps things manageable and efficient rather than oversized for the job." },
    { title: "Flexible travel from Hereford", body: "Hereford also works as a base for outward travel, so it helps to choose a vehicle that can handle more than one purpose. A compact car gives you enough comfort for regional driving while still being practical once you are back in town. That balance makes it popular for mixed-use bookings rather than one single journey type.\n\nIf your plans develop and you need extra room for luggage, passengers or equipment, the wider fleet gives you more options without needing to look elsewhere. We can help with larger cars, and when required, vans, minibuses and trucks too." },
  ],
  bottomCtaTitle: "Book the right hire car for Hereford",
  bottomCtaDescription: "For compact car hire in Hereford, get in touch with our team and we will help you choose a vehicle that fits the journey.",
  faqKicker: "Hereford hire questions",
  faqTitle: "Compact car hire FAQs for Hereford",
  faqs: [
    { question: "Do you offer compact car hire in Hereford?", answer: "Yes, we provide compact car hire in Hereford for local driving, day-to-day use, station runs and longer regional journeys." },
    { question: "Is a compact car suitable for driving around Hereford?", answer: "A compact car is often a strong choice in Hereford because it is easy to drive through town, practical for parking and comfortable on routes linking into surrounding roads." },
    { question: "Can I book an automatic hire car in Hereford?", answer: "Yes, if you prefer not to drive manual, automatic compact options are available for Hereford bookings." },
    { question: "What kind of trips does compact car hire in Hereford suit?", answer: "Compact car hire in Hereford is useful for commuting, family visits, shopping trips, business travel and onward journeys into the wider area." },
    { question: "Do you have larger vehicles available from Hereford?", answer: "If you need more room than a compact car offers in Hereford, we can also help with larger cars as well as vans, minibuses and trucks." },
    { question: "How do I choose the right hire vehicle in Hereford?", answer: "The best way is to speak with us about your route, passenger needs and luggage so we can help match the right vehicle for Hereford travel." },
  ],
}

const location6Tokens: ContentTokenSet = {
  metadata: { title: "Compact Car Hire Gloucester | Small Car Rental Options", description: "Compact car hire in Gloucester for local trips, business travel and onward journeys. Practical self-drive vehicles with wider fleet options available." },
  heroImage: "/images/nearby_location_image_1.jpeg",
  heroAlt: "Compact hire car on a local access road in Gloucester",
  heroTitle: "Compact Car Hire in Gloucester",
  heroDescription: "Compact car hire in Gloucester for local travel, work use, shopping trips and onward journeys. Practical vehicles that suit everyday driving without unnecessary size.",
  heroSecondaryActionLabel: "See compact car choices",
  mainServiceKicker: "Compact cars in Gloucester",
  mainServiceTitle: "Straightforward compact car hire in Gloucester",
  mainServiceDescription: "If you need compact car hire in Gloucester, we offer practical vehicles that make local trips simpler. Small cars are well suited to everyday driving around residential areas, retail parks and business routes where easy parking and smooth manoeuvring matter. Whether you are heading to meetings, sorting family travel, covering a temporary vehicle gap or planning a longer run beyond town, a compact hire car gives you useful flexibility without taking up more space than you need.\n\nOur compact range covers straightforward town driving as well as comfortable travel for motorway connections. That means you can choose a city-friendly option for short local errands or a larger hatchback for regular runs in and out of Gloucester. We also offer vans, minibuses and trucks if your plans change and you need more carrying space or passenger room.",
  mainVehicles: [
    { body: "A neat choice for short trips around Gloucester, with easy handling for local roads, shopping runs and everyday travel.", alt: "Fiat 500 compact hire car for Gloucester local driving" },
    { body: "An automatic compact car that keeps town driving simple, especially useful for stop start traffic and quick local errands.", alt: "Hyundai i10 automatic compact hire car in Gloucester" },
    { body: "A solid all rounder for Gloucester drivers who want compact size with extra comfort for commuting and regional journeys.", alt: "VW Golf compact hatchback hire car in Gloucester" },
    { body: "A practical automatic for longer drives from Gloucester, giving you relaxed road manners and useful cabin space.", alt: "Ford Focus automatic hire car for Gloucester journeys" },
  ],
  whyChooseKicker: "Why Gloucester drivers choose us",
  whyChooseTitle: "A practical option for Gloucester car hire",
  whyChooseDescription: "Gloucester journeys can vary quickly between local roads, retail access routes and motorway links, so it helps to hire a car that feels easy to live with. We keep the offer practical, with compact vehicles that are simple to drive, sensible for everyday plans and backed by a wider self-drive fleet when you need something larger.",
  whyChooseItems: [
    { title: "Useful for town driving", body: "A compact car is easier to place in busier parts of Gloucester, especially when your day includes several short stops." },
    { title: "Choice that fits the trip", body: "Our range includes smaller options for local use and larger hatchbacks when you want extra room for regular journeys from Gloucester." },
    { title: "Simple self-drive process", body: "We keep the process clear so you can get moving without unnecessary delays or guesswork." },
    { title: "Good for daily schedules", body: "Compact cars are a practical match for station drop offs, work appointments and planned travel around Gloucester." },
    { title: "Wider fleet available", body: "If you later need extra carrying capacity, we can also help with vans, minibuses and trucks." },
    { title: "Practical service", body: "We focus on sensible vehicle hire for real journeys rather than overcomplicated packages." },
  ],
  additionalServicesKicker: "More vehicle hire in Gloucester",
  additionalServicesTitle: "Additional vehicle hire options for Gloucester",
  additionalServicesDescription: "Compact cars are often the right match for Gloucester, but not every journey is the same. If you need more room, more comfort or a different type of vehicle, our wider fleet is available too.",
  additionalVehicles: [
    { body: "The Focus Estate adds flexible boot space for Gloucester journeys that involve luggage, work gear or larger shopping loads.", alt: "Ford Focus Estate hire car for Gloucester" },
    { body: "The Mondeo is a comfortable step up for Gloucester drivers covering longer regional miles.", alt: "Ford Mondeo hire vehicle in Gloucester" },
    { body: "The Mondeo Auto suits Gloucester bookings where you want easy automatic driving and a more spacious cabin.", alt: "Ford Mondeo automatic hire car for Gloucester" },
    { body: "The Mondeo Estate is useful for Gloucester travel that combines passengers with larger bags or equipment.", alt: "Ford Mondeo Estate hire car in Gloucester" },
    { body: "The RAV4 Auto offers extra versatility and a higher seating position for varied Gloucester journeys.", alt: "Toyota RAV4 automatic hire vehicle for Gloucester" },
    { body: "The C Class Auto is a refined option for Gloucester business travel and more comfort-focused trips.", alt: "Mercedes C Class automatic hire car in Gloucester" },
    { body: "The E Class Auto gives Gloucester drivers extra room and a smooth drive for longer road use.", alt: "Mercedes E Class automatic hire car for Gloucester" },
    { body: "The Range Rover is suited to Gloucester bookings where space, comfort and a more substantial vehicle are preferred.", alt: "Range Rover hire vehicle for Gloucester travel" },
  ],
  featureCtaTitle: "Arrange compact car hire in Gloucester",
  featureCtaDescription: "Need a small, easy-to-manage vehicle in Gloucester? Contact us and we will help you choose the right compact car for the way you travel.",
  serviceAreasKicker: "Gloucester coverage",
  serviceAreasTitle: "Serving Gloucester and nearby travel routes",
  serviceAreasDescription: "We support Gloucester and surrounding routes with compact car hire that works for local driving, station runs, business travel and wider self-drive needs.",
  localRelevanceKicker: "Local driving in Gloucester",
  localRelevanceTitle: "Compact car hire that suits Gloucester journeys",
  localRelevanceDescription: "Gloucester is a practical place to hire a compact car because many journeys are functional rather than flashy. Drivers often need to get between residential areas, retail destinations, work locations and connecting routes without making the trip more complicated than it needs to be. A compact vehicle does that job well, giving you simple local usability and enough comfort for longer miles.\n\nThe town's road layout also makes vehicle size worth thinking about. If your day includes repeated stops, everyday parking and quick turns onto major routes, a smaller car can be the most useful option overall. It fits the way many people travel in Gloucester: flexible, efficient and easy to manage.",
  localRelevanceBlocks: [
    { title: "Well suited to local travel patterns", body: "Gloucester is built around movement between neighbourhoods, shopping areas and major connecting roads, which is one reason compact cars work so well here. A smaller vehicle is easy to manage on routine local runs and still comfortable enough for longer journeys once you leave town.\n\nAccess to routes such as the M58 and A570 also means many trips quickly move from local roads to faster stretches. That makes compact car hire in Gloucester a useful balance: practical in everyday settings, but not limited when the journey opens out." },
    { title: "Useful for errands, work and short hops", body: "Many Gloucester bookings are about convenience rather than occasion travel. You may need a car for appointments, work visits, family travel or straightforward errands, and in those cases a compact vehicle usually feels like the right fit. It is easier to park, easier to turn around and easier to use over multiple stops in one day.\n\nThat matters around busier local destinations and shopping areas where space can be tighter and journeys more stop-start than open-road driving. A small hatchback can make those ordinary tasks feel less effort than using a larger vehicle you do not really need." },
    { title: "Ready for local use and regional links", body: "Gloucester also sits in a position where outward travel is common. If your plans involve reaching business sites, connecting with nearby towns or covering regional miles, a compact car remains a sensible choice because it is comfortable enough for the road while still being manageable back on local streets.\n\nWhen the journey changes shape and you need more carrying space, the wider fleet is there to support that next step. We can help move from compact car hire in Gloucester to larger cars, vans, minibuses or trucks depending on what the day actually requires." },
  ],
  bottomCtaTitle: "Speak to us about Gloucester car hire",
  bottomCtaDescription: "Arrange compact car hire in Gloucester with a team that focuses on practical vehicles and straightforward support.",
  faqKicker: "Gloucester FAQs",
  faqTitle: "Compact car hire questions for Gloucester",
  faqs: [
    { question: "Do you provide compact car hire in Gloucester?", answer: "Yes, we offer compact car hire in Gloucester for local driving, everyday travel and wider regional journeys." },
    { question: "Why hire a compact car in Gloucester?", answer: "Compact cars work well in Gloucester because they are practical for local roads, easier to park and comfortable for routine journeys." },
    { question: "Are automatic hire cars available in Gloucester?", answer: "Yes, we can help with automatic compact hire cars in Gloucester if that is your preferred driving option." },
    { question: "Is compact car hire in Gloucester suitable for work use?", answer: "Yes, many drivers use compact car hire in Gloucester for work visits, appointments, commuting and everyday business travel." },
    { question: "Can I upgrade to a larger vehicle in Gloucester?", answer: "If your Gloucester journey needs more room than a compact car provides, we can also assist with larger cars, vans, minibuses and trucks." },
    { question: "How do I pick the best hire car for Gloucester?", answer: "Tell us how you expect to use the vehicle in Gloucester and we will help point you toward the most suitable option in the fleet." },
  ],
}

const location7Tokens: ContentTokenSet = {
  metadata: { title: "Compact Car Hire Cheltenham | Small Car Rental for City and Regional Travel", description: "Compact car hire in Cheltenham for local trips, business travel and easy regional driving. Small cars plus access to vans, minibuses and trucks." },
  heroImage: "/images/nearby_location_image_2.jpeg",
  heroAlt: "Compact hire car on a regional access road in Cheltenham",
  heroTitle: "Compact Car Hire in Cheltenham",
  heroDescription: "Practical compact car hire in Cheltenham for commuting, city-centre trips, business travel and easy regional driving. A smart choice when you want a vehicle that is simple to park and comfortable on the move.",
  heroSecondaryActionLabel: "View vehicle options",
  mainServiceKicker: "Cheltenham compact car hire",
  mainServiceTitle: "Small cars that suit the way Cheltenham journeys actually work",
  mainServiceDescription: "Our Cheltenham compact car hire service is built around everyday usability. Whether you need something for local appointments, work travel, visiting family, university-related journeys or onward trips beyond the city, a smaller vehicle keeps things straightforward. Compact cars are easier to manoeuvre in busier areas, simpler to park and well suited to mixed driving where your route may include central streets, dual carriageways and motorway sections.\n\nCheltenham is the kind of place where that flexibility matters. One journey might involve station access, another a run across town, and the next a motorway connection heading out of the area. A compact hire car gives you practical comfort without feeling oversized for the job. If you need more space than a standard small car, we can also help with larger cars and other vehicle types through the wider fleet.",
  mainVehicles: [
    { body: "A compact city car that suits Ashton-in-Makerfield errands, local visits and short day to day journeys.", alt: "Fiat 500 hire car for local travel in Ashton-in-Makerfield" },
    { body: "An easy automatic choice for Ashton-in-Makerfield drivers who want light, simple handling around town.", alt: "Hyundai i10 automatic hire car in Ashton-in-Makerfield" },
    { body: "A versatile hatchback for Ashton-in-Makerfield trips that combine local driving with regular main road miles.", alt: "VW Golf hire car for Ashton-in-Makerfield journeys" },
    { body: "A comfortable automatic with enough space for longer Ashton-in-Makerfield travel while staying easy to manage locally.", alt: "Ford Focus automatic hire car in Ashton-in-Makerfield" },
  ],
  whyChooseKicker: "Why Cheltenham customers book with us",
  whyChooseTitle: "A practical choice for compact car hire in Cheltenham",
  whyChooseDescription: "Cheltenham journeys can change quickly between city traffic, retail access, station approaches and motorway travel, so the right hire vehicle needs to feel adaptable rather than awkward. We focus on straightforward compact car options that work for practical day-to-day use.\n\nCustomers in Cheltenham also value having access to a broader fleet when plans shift. If a small car is right today but a van, minibus or larger vehicle is needed next time, the wider service makes that easy to arrange through one team.",
  whyChooseItems: [
    { title: "Town friendly vehicles", body: "Smaller cars make sense for Ashton-in-Makerfield drivers who want something simple for local roads and routine stops." },
    { title: "Useful fleet choice", body: "Automatic and hatchback options help you match the car to the kind of driving you actually have planned in Ashton-in-Makerfield." },
    { title: "Straightforward to arrange", body: "We focus on practical self-drive hire with clear communication and sensible vehicle guidance." },
    { title: "Flexible for different journeys", body: "Compact cars are well suited to mixed trips that include local errands, work travel and wider road links from Ashton-in-Makerfield." },
    { title: "Easy to scale up", body: "You can move to a larger car or another vehicle type if your plans need more carrying room or passenger space." },
    { title: "Clear and useful service", body: "Our service is built around practical use, not overcomplicated wording or unnecessary extras." },
  ],
  additionalServicesKicker: "More Cheltenham vehicle options",
  additionalServicesTitle: "Wider vehicle hire choices for Cheltenham journeys",
  additionalServicesDescription: "Alongside compact car hire in Cheltenham, we also offer larger cars, estates, SUVs and executive models when your journey needs more room, extra comfort or stronger motorway presence. Van, minibus and truck hire can also be arranged through the wider fleet.",
  additionalVehicles: [
    { body: "A handy estate for Ashton-in-Makerfield drivers who need extra boot space for cases, equipment or bulky day to day loads.", alt: "Ford Focus Estate hire car for Ashton-in-Makerfield journeys" },
    { body: "A comfortable saloon suited to longer runs from Ashton-in-Makerfield, with a calmer feel on faster roads.", alt: "Ford Mondeo hire car in Ashton-in-Makerfield" },
    { body: "An automatic option for Ashton-in-Makerfield journeys where easy motorway driving and a more relaxed setup matter.", alt: "Ford Mondeo automatic hire car for Ashton-in-Makerfield" },
    { body: "Good for Ashton-in-Makerfield trips that need both passenger comfort and added load space for luggage or work items.", alt: "Ford Mondeo Estate hire car in Ashton-in-Makerfield" },
    { body: "A higher driving position and flexible cabin make this a strong choice for mixed local and regional travel from Ashton-in-Makerfield.", alt: "Toyota RAV4 automatic hire vehicle in Ashton-in-Makerfield" },
    { body: "A refined automatic for Ashton-in-Makerfield business use, client visits or longer personal trips where comfort counts.", alt: "Mercedes C Class automatic hire car for Ashton-in-Makerfield" },
    { body: "A spacious executive car for Ashton-in-Makerfield travel when you want a quieter, more relaxed drive with extra room.", alt: "Mercedes E Class automatic hire car in Ashton-in-Makerfield" },
    { body: "A roomy premium option for Ashton-in-Makerfield journeys that call for comfort, presence and flexible luggage space.", alt: "Range Rover hire vehicle for Ashton-in-Makerfield travel" },
  ],
  featureCtaTitle: "Check compact car availability in Cheltenham",
  featureCtaDescription: "Need a small car for Cheltenham driving, station access or a straightforward motorway run? Speak to us and we will help you find a practical compact hire option.",
  serviceAreasKicker: "Around Cheltenham",
  serviceAreasTitle: "Vehicle hire serving Cheltenham and nearby routes",
  serviceAreasDescription: "We support customers travelling in and around Cheltenham, with compact car hire that fits local driving as well as onward regional routes. The wider service also covers vans, minibuses and trucks when a larger vehicle is needed.",
  localRelevanceKicker: "Driving in Cheltenham",
  localRelevanceTitle: "Why compact car hire works well in Cheltenham",
  localRelevanceDescription: "Cheltenham suits compact car hire because so many journeys mix city-centre traffic with quick access to major routes. A smaller car is useful when you are heading through busy areas near Cheltenham Railway Station, moving around the ring-road sections, or fitting into tighter parking around shops, offices and residential streets. It gives you enough comfort for longer drives while staying easy to place in day-to-day traffic.\n\nThe city also works well as a base for wider travel. With the A59, A6, M6 and M55 all playing a part in local movement, a compact vehicle makes sense for customers who want a car that feels manageable in town but still settled on regional roads. That balance is often what Cheltenham drivers and visitors need most.",
  localRelevanceBlocks: [
    { title: "Why compact cars suit Ashton-in-Makerfield", body: "Driving in Ashton-in-Makerfield often means mixing short town journeys with quick links onto faster roads, so a compact car usually makes the most sense. It gives you enough comfort for everyday travel while staying easy to place in tighter spaces near shops, residential streets and local services.\n\nIf your day includes several stops, smaller vehicles help take the pressure out of parking and turning. That matters around the town centre and on busier approach roads where a larger vehicle can feel unnecessary for routine trips." },
    { title: "Road links and journey planning in Ashton-in-Makerfield", body: "One of the useful things about hiring in Ashton-in-Makerfield is how quickly you can connect to surrounding routes. The A58 and A49 make it easier to move between local destinations and onward journeys, so choosing the right car depends on whether you are staying close to town or heading further out.\n\nFor shorter local driving, a Fiat 500 or Hyundai i10 Auto keeps things simple. If you expect more time on main roads, a Golf or Focus Auto gives you extra comfort without losing the easy handling that works well in Ashton-in-Makerfield." },
    { title: "Choosing the right hire vehicle in Ashton-in-Makerfield", body: "Ashton-in-Makerfield also works well as a starting point for practical day to day travel, whether that means visiting family, covering work appointments or replacing your own car for a short period. A compact hire vehicle keeps things flexible without making local movement feel cumbersome.\n\nWhen you know you will need more room, it helps to think ahead about passengers, luggage and the type of roads you will use most. We keep the choice straightforward, so Ashton-in-Makerfield drivers can move from a simple compact car to a larger vehicle if the journey calls for it." },
  ],
  bottomCtaTitle: "Book your Cheltenham compact car hire",
  bottomCtaDescription: "If you need a compact car in Cheltenham for business travel, station runs, family visits or general local driving, contact the team and we will help you choose a suitable vehicle.",
  faqKicker: "Cheltenham hire FAQs",
  faqTitle: "Common questions about compact car hire in Cheltenham",
  faqs: [
    { question: "Can I hire a compact car for local and longer trips from Cheltenham?", answer: "Yes, we can help arrange compact car hire for Cheltenham journeys ranging from local errands and work appointments to longer regional travel. Let us know where you plan to drive and we can suggest a suitable option." },
    { question: "Why choose a compact car for driving in Cheltenham?", answer: "A compact car is often a good fit for Cheltenham because it is easier to handle around the city centre, station approaches, retail parking and busy routes feeding onto the A59 and M6." },
    { question: "Do you offer automatic compact cars in Cheltenham?", answer: "Yes, automatic compact car availability can be checked for Cheltenham bookings. If you prefer automatic driving for commuting, town traffic or motorway work, ask when you contact us." },
    { question: "Is Cheltenham compact car hire suitable for business use?", answer: "Many customers use Cheltenham compact car hire for business meetings, visiting clients, station pickups, university-related travel and convenient day-to-day driving where a smaller vehicle makes access easier." },
    { question: "Can I arrange other vehicle hire in Cheltenham as well as compact cars?", answer: "Yes, we also support Cheltenham customers who need vans, minibuses or trucks. If your plans change from a small car to something larger, we can talk through the wider fleet." },
    { question: "How do I book compact car hire in Cheltenham?", answer: "The quickest way to arrange Cheltenham compact car hire is to call with your preferred timing, driving requirements and any route plans. We will then help match the booking to the right vehicle." },
  ],
}

const location8Tokens: ContentTokenSet = {
  metadata: { title: "Compact Car Hire Evesham | Small Car Rental for City Travel", description: "Compact car hire in Evesham for city journeys, business travel and easy regional driving. Small cars backed by a wider vehicle hire fleet." },
  heroImage: "/images/nearby_location_image_1.jpeg",
  heroAlt: "Compact hire car approaching a busy urban route in Evesham",
  heroTitle: "Compact Car Hire in Evesham",
  heroDescription: "Compact car hire in Evesham for city driving, work travel, station access and flexible regional trips. A sensible option when you want easy handling without giving up everyday comfort.",
  heroSecondaryActionLabel: "See available vehicles",
  mainServiceKicker: "Evesham compact car hire",
  mainServiceTitle: "Smart small-car hire for Evesham travel",
  mainServiceDescription: "Our Evesham compact car hire service is designed for drivers who need a vehicle that works in real city conditions. Whether you are travelling for meetings, visiting family, getting around central districts or connecting onto major regional routes, a compact car gives you the flexibility to move without feeling over-committed to a larger vehicle. It is a practical fit for stop-start traffic, tighter parking and mixed-use journeys across the city.\n\nEvesham driving can change quickly from urban streets to major roads, and that is exactly where compact cars perform well. They are easy to place in crowded areas yet comfortable enough for longer motorway sections when your plans extend beyond the city. If you need more carrying capacity or passenger room, we can also support Evesham customers with the wider fleet.",
  mainVehicles: [
    { body: "A neat choice for Evesham when you want easy parking, light steering and a compact footprint for local streets, quick errands and city-centre trips.", alt: "Fiat 500 compact hire car for Evesham driving" },
    { body: "The Hyundai i10 Auto suits Evesham drivers who want straightforward automatic driving for commuting, station runs and everyday travel around the city.", alt: "Hyundai i10 automatic city car available for Evesham hire" },
    { body: "A practical all-rounder for Evesham, with extra comfort and space for longer drives, business travel and weekends away without feeling oversized.", alt: "VW Golf hatchback hire car for Evesham journeys" },
    { body: "The Focus Auto is well suited to Evesham traffic, giving you automatic convenience, solid motorway comfort and useful room for passengers or luggage.", alt: "Ford Focus automatic hire car in Evesham" },
  ],
  whyChooseKicker: "Why Evesham drivers choose us",
  whyChooseTitle: "Why choose our compact car hire in Evesham",
  whyChooseDescription: "When you need compact car hire in Evesham, the details matter. You want a vehicle that makes city driving simpler, collection straightforward and onward travel less of a faff. Our compact range is chosen for practical day-to-day use, whether you are staying local or heading out across Greater Evesham.",
  whyChooseItems: [
    { title: "Well suited to local use", body: "Compact cars make day to day Tyldesley travel easier, particularly when you want straightforward driving and simpler parking." },
    { title: "Practical vehicle choice", body: "Our fleet includes compact manuals, automatics and larger hatchbacks so you can choose what feels right for Tyldesley journeys." },
    { title: "Simple to arrange", body: "We keep the booking process clear and focused on what you actually need for the trip." },
    { title: "Flexible for mixed driving", body: "Tyldesley travel can range from short local errands to wider road use, and compact cars are a strong fit for both." },
    { title: "Practical hire guidance", body: "Useful if you are heading into Evesham for work, shopping, social plans or station connections and want a car that is simple to handle in busy streets." },
    { title: "Wider vehicle options", body: "If you need something beyond a compact car in Evesham, we can also help with vans, minibuses and trucks through the wider fleet." },
  ],
  additionalServicesKicker: "More Evesham vehicle choices",
  additionalServicesTitle: "Extra hire options beyond compact cars in Evesham",
  additionalServicesDescription: "As well as compact car hire in Evesham, we can arrange larger saloons, estates, SUVs and executive vehicles for journeys that call for extra room or added comfort. The wider fleet also includes vans, minibuses and trucks for more demanding transport needs.",
  additionalVehicles: [
    { body: "A useful estate for Tyldesley trips that call for extra boot room without stepping up to a much larger vehicle.", alt: "Ford Focus Estate hire car for Tyldesley travel" },
    { body: "A comfortable choice for Tyldesley drivers covering longer road miles or business travel with a more relaxed feel.", alt: "Ford Mondeo hire car in Tyldesley" },
    { body: "An automatic saloon that suits Tyldesley journeys where smooth driving and cabin comfort matter more.", alt: "Ford Mondeo automatic hire car for Tyldesley" },
    { body: "A practical option for Tyldesley customers who need room for luggage, equipment or larger personal loads.", alt: "Ford Mondeo Estate hire car for Tyldesley journeys" },
    { body: "A flexible automatic with a higher seating position, useful for Tyldesley travel that mixes local roads with longer runs.", alt: "Toyota RAV4 automatic hire vehicle in Tyldesley" },
    { body: "A refined car for Tyldesley business journeys, client visits or personal trips where comfort is the priority.", alt: "Mercedes C Class automatic hire car for Tyldesley" },
    { body: "A roomy executive automatic for Tyldesley drivers who want extra space and a quieter drive on longer routes.", alt: "Mercedes E Class automatic hire car in Tyldesley" },
    { body: "A spacious premium option for Tyldesley journeys with more passengers, more luggage or a preference for a higher driving position.", alt: "Range Rover hire vehicle for Tyldesley travel" },
  ],
  featureCtaTitle: "Check Evesham compact car options",
  featureCtaDescription: "Need a small car that suits Evesham traffic, business travel and easier parking? Contact us to check compact car availability for your Evesham journey.",
  serviceAreasKicker: "Across Evesham",
  serviceAreasTitle: "Vehicle hire covering Evesham and surrounding routes",
  serviceAreasDescription: "We provide compact car hire for Evesham travel, covering city-centre use, local districts and onward regional routes. If you need something larger, vans, minibuses and trucks are also available through the wider service.",
  localRelevanceKicker: "Evesham driving guide",
  localRelevanceTitle: "Why compact car hire makes sense in Evesham",
  localRelevanceDescription: "Evesham is one of the clearest places to see the value of a compact hire car. Journeys often involve traffic-heavy corridors, city-centre turns, controlled parking areas and quick changes between urban streets and major road links. A smaller vehicle takes the pressure out of that. It is easier to manoeuvre around the inner districts, simpler to park and well suited to drivers who want a car that feels calm rather than bulky in busier conditions.\n\nThe city also demands flexibility. One trip may keep you near Evesham Piccadilly or Oxford Road, while the next heads out via the Mancunian Way, M60 or M62. Compact cars work well because they bridge both styles of travel. You get something practical for dense city movement but still comfortable enough for longer runs beyond Evesham.",
  localRelevanceBlocks: [
    { title: "Everyday driving around Tyldesley", body: "Tyldesley is the kind of place where a compact hire car often makes daily travel easier. Many journeys are local, practical and made up of short runs between residential areas, shops and routine appointments, so having a car that feels light and manageable is a real advantage.\n\nFor that sort of driving, a small hatchback or compact automatic keeps things simple. You get the flexibility of a self-drive vehicle without the bulk of something larger than the journey really needs." },
    { title: "Using Tyldesley for onward journeys", body: "Tyldesley also benefits from strong onward road links, especially via the A580 East Lancashire Road, which helps with travel beyond town. That makes compact hire a sensible middle ground. You can stay comfortable on a longer run while still keeping the car easy to park and handle when you return to local streets.\n\nIf your day involves mixed travel, it is worth thinking about time on faster roads as well as town access. Drivers staying mostly local may prefer the smallest options, while those using Tyldesley as a starting point for wider journeys often benefit from a Golf or Focus Auto." },
    { title: "Matching the car to the trip in Tyldesley", body: "Because travel needs in Tyldesley can shift quickly, the right vehicle often comes down to what the day actually looks like. A simple town based plan may call for a compact city car, while a longer route with passengers or luggage may need a larger hatchback or estate.\n\nWe keep that choice practical. Tyldesley customers can hire a compact car for convenience, then step into a larger vehicle if the journey changes. That flexibility also extends across our wider fleet when a van, minibus or truck becomes the better fit." },
  ],
  bottomCtaTitle: "Arrange your Evesham compact car hire",
  bottomCtaDescription: "If you need a compact car in Evesham for work, city travel, station pickups or a wider regional journey, get in touch and we will help you line up the right vehicle.",
  faqKicker: "Evesham hire FAQs",
  faqTitle: "Helpful answers for compact car hire in Evesham",
  faqs: [
    { question: "Why is a compact car a good option for driving in Evesham?", answer: "A compact car is often ideal for Evesham because it is easier to handle in dense traffic, city-centre parking areas, residential streets and busy approach roads while still being comfortable for longer drives." },
    { question: "Can I book compact car hire in Evesham for business use?", answer: "Yes, Evesham compact car hire works well for business travel, meetings, office visits, client appointments and general professional use where you want a vehicle that is tidy, practical and easy to park." },
    { question: "Do you have automatic compact cars available in Evesham?", answer: "Automatic compact car availability can be checked for Evesham bookings. If you expect heavier traffic or simply prefer automatic driving in the city, let us know when you enquire." },
    { question: "Is compact car hire in Evesham useful for station and city-centre travel?", answer: "Yes, many customers use Evesham compact car hire for rail station access, city-centre stays and straightforward onward travel. A smaller car is often easier to live with around busy arrival and parking points." },
    { question: "Can I arrange other vehicle hire in Evesham through the same service?", answer: "Yes, alongside compact cars we can also help Evesham customers with vans, minibuses and trucks when the journey or load calls for something larger." },
    { question: "How do I arrange compact car hire in Evesham?", answer: "To book compact car hire in Evesham, call with your travel dates, preferred vehicle type and any key route details. We will help you choose a suitable option for the journey." },
  ],
}

export const servicePages: Record<ServiceSlug, ServicePageContent> = {
  "compact-car": createContentSet({
    tokens: homepageTokens,
    mainVehicleNames: compactCarMainNames,
    mainVehicleImages: compactCarMainImages,
    inventorySectionId: "main-flow-vehicles",
    currentLocationName: siteConfig.locationName,
    mainVehicleAction: true,
    additionalVehicleNames: compactCarAdditionalNames,
    additionalVehicleImages: compactCarAdditionalImages,
  }),
  "van-hire": createContentSet({
    tokens: vanHireTokens,
    mainVehicleNames: vanMainNames,
    mainVehicleImages: vanMainImages,
    inventorySectionId: "van-hire-vehicles",
    currentLocationName: siteConfig.locationName,
  }),
  "truck-hire": createContentSet({
    tokens: truckHireTokens,
    mainVehicleNames: truckMainNames,
    mainVehicleImages: truckMainImages,
    inventorySectionId: "truck-hire-vehicles",
    currentLocationName: siteConfig.locationName,
  }),
  "minibus-hire": createContentSet({
    tokens: minibusHireTokens,
    mainVehicleNames: minibusMainNames,
    mainVehicleImages: minibusMainImages,
    inventorySectionId: "minibus-hire-vehicles",
    currentLocationName: siteConfig.locationName,
  }),
}

export const locationPageContents: Record<number, ServicePageContent> = {
  1: createContentSet({
    tokens: location1Tokens,
    mainVehicleNames: compactCarMainNames,
    mainVehicleImages: compactCarMainImages,
    inventorySectionId: "location1-vehicles",
    currentLocationName: "Redditch",
    mainVehicleAction: true,
    additionalVehicleNames: compactCarAdditionalNames,
    additionalVehicleImages: compactCarAdditionalImages,
  }),
  2: createContentSet({
    tokens: location2Tokens,
    mainVehicleNames: compactCarMainNames,
    mainVehicleImages: compactCarMainImages,
    inventorySectionId: "location2-vehicles",
    currentLocationName: "Kidderminster",
    mainVehicleAction: true,
    additionalVehicleNames: compactCarAdditionalNames,
    additionalVehicleImages: compactCarAdditionalImages,
  }),
  3: createContentSet({
    tokens: location3Tokens,
    mainVehicleNames: compactCarMainNames,
    mainVehicleImages: compactCarMainImages,
    inventorySectionId: "location3-vehicles",
    currentLocationName: "Bromsgrove",
    mainVehicleAction: true,
    additionalVehicleNames: compactCarAdditionalNames,
    additionalVehicleImages: compactCarAdditionalImages,
  }),
  4: createContentSet({
    tokens: location4Tokens,
    mainVehicleNames: compactCarMainNames,
    mainVehicleImages: compactCarMainImages,
    inventorySectionId: "location4-vehicles",
    currentLocationName: "Malvern",
    mainVehicleAction: true,
    additionalVehicleNames: compactCarAdditionalNames,
    additionalVehicleImages: compactCarAdditionalImages,
  }),
  5: createContentSet({
    tokens: location5Tokens,
    mainVehicleNames: compactCarMainNames,
    mainVehicleImages: compactCarMainImages,
    inventorySectionId: "location5-vehicles",
    currentLocationName: "Hereford",
    mainVehicleAction: true,
    additionalVehicleNames: compactCarAdditionalNames,
    additionalVehicleImages: compactCarAdditionalImages,
  }),
  6: createContentSet({
    tokens: location6Tokens,
    mainVehicleNames: compactCarMainNames,
    mainVehicleImages: compactCarMainImages,
    inventorySectionId: "location6-vehicles",
    currentLocationName: "Gloucester",
    mainVehicleAction: true,
    additionalVehicleNames: compactCarAdditionalNames,
    additionalVehicleImages: compactCarAdditionalImages,
  }),
  7: createContentSet({
    tokens: location7Tokens,
    mainVehicleNames: compactCarMainNames,
    mainVehicleImages: compactCarMainImages,
    inventorySectionId: "location7-vehicles",
    currentLocationName: "Cheltenham",
    mainVehicleAction: true,
    additionalVehicleNames: compactCarAdditionalNames,
    additionalVehicleImages: compactCarAdditionalImages,
  }),
  8: createContentSet({
    tokens: location8Tokens,
    mainVehicleNames: compactCarMainNames,
    mainVehicleImages: compactCarMainImages,
    inventorySectionId: "location8-vehicles",
    currentLocationName: "Evesham",
    mainVehicleAction: true,
    additionalVehicleNames: compactCarAdditionalNames,
    additionalVehicleImages: compactCarAdditionalImages,
  }),
}
