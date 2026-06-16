export interface Creature {
  slug: string;
  name: string;
  classification: string;
  habitat: string;
  glowColor: string;
  description: string;
  lore: string;
  fieldNotes: string;
}

export const creatures: Creature[] = [
  {
    slug: 'luna-tongue',
    name: 'Luna Tongue',
    classification: 'LEPIDOPTERA · NOCTUIDAE',
    habitat: 'Deep forest, abandoned chapels',
    glowColor: '#9FD66A',
    description: 'The largest bioluminescent moth in the known archive. Its wingspan reaches 14cm, and the underside of its forewings emit a steady pale-green glow used to attract smaller insects into its mandibles.',
    lore: 'The old texts call it "the translator\'s first lesson." It is said that if you sit perfectly still in a darkened chapel and let a Luna Tongue land on your tongue, you will understand the language of all night things for exactly seven breaths.',
    fieldNotes: 'Specimen observed feeding on moonwort fungi. Glow intensity increases when agitated. Wings produce audible hum at 40Hz during mating display.',
  },
  {
    slug: 'ember-weaver',
    name: 'Ember Weaver',
    classification: 'ARANEAE · LAMPYRIDAE',
    habitat: 'Rocky outcrops, cave entrances',
    glowColor: '#C79A4B',
    description: 'A spider that spins webs infused with bioluminescent spores. The web itself glows faintly amber, attracting nocturnal moths who mistake it for lantern light.',
    lore: 'The weaver\'s web is the only known substance that can capture sound. Folk tales speak of webs that hum with the voices of those who wandered too close to cave mouths at dusk.',
    fieldNotes: 'Web silk tensile strength exceeds steel by weight. Bioluminescence fades 48 hours after the spider abandons the web. Nocturnal birds avoid illuminated webs.',
  },
  {
    slug: 'ghost-lantern',
    name: 'Ghost Lantern',
    classification: 'COLEOPTERA · PYROPHORINAE',
    habitat: 'Marshlands, fungal groves',
    glowColor: '#9FD66A',
    description: 'A beetle whose thoracic light organs produce a bright green pulse visible from 200 meters. Unlike other bioluminescent insects, the Ghost Lantern can sustain continuous glow for up to 72 hours.',
    lore: 'Shepherds once followed Ghost Lanterns to find safe paths through marshes at night. But the wise ones knew: the beetle always leads toward deeper water, where the fungi grow thickest.',
    fieldNotes: 'Light organ contains specialized luciferase variant. Pulse frequency correlates with ambient temperature. Specimens collected near fungal groves show 40% brighter luminescence.',
  },
  {
    slug: 'dust-mother',
    name: 'Dust Mother',
    classification: 'LEPIDOPTERA · SATURNIIDAE',
    habitat: 'Old-growth forests, temple ruins',
    glowColor: '#A8552F',
    description: 'A massive silk moth whose scales, when shed, continue to glow for hours. Forest floors beneath resting sites shimmer with scattered rust-colored light.',
    lore: 'The Dust Mother does not eat. She lives for three days after emerging from her cocoon, during which she mates and scatters her luminous scales across the forest floor. The old people called this "planting the lights."',
    fieldNotes: 'Scales contain viable luciferin even after detachment. Shedding increases during high humidity. Forest floor luminance measurable for 96 hours post-shedding.',
  },
  {
    slug: 'vein-walker',
    name: 'Vein Walker',
    classification: 'ANNELIDA · LUMBRICIDAE',
    habitat: 'Beneath ancient trees, root networks',
    glowColor: '#9FD66A',
    description: 'An earthworm bioluminescent only when disturbed. Its body pulses green along segmented rings, tracing the root networks it inhabits like a living map of the underground.',
    lore: 'The root-walkers know every tree in the forest. Put your ear to the ground where they glow, and the old texts claim you can hear the trees dreaming.',
    fieldNotes: 'Bioluminescence triggered by vibration, not light. Pulse pattern unique to individual specimens. Root network mapping suggests symbiotic relationship with mycorrhizal fungi.',
  },
  {
    slug: 'ash-moth',
    name: 'Ash Moth',
    classification: 'LEPIDOPTERA · GEOMETRIDAE',
    habitat: 'Fire-scarred forests, volcanic edges',
    glowColor: '#C79A4B',
    description: 'A small moth with ashen-grey wings edged in faint gold luminescence. It is drawn to smoke and fire, circling burning areas in tight spirals.',
    lore: 'Where the Ash Moth flies, the forest remembers fire. They say it carries sparks from the first fire that ever burned, kept alive in the glow along its wing-edges.',
    fieldNotes: 'Thermoreceptive antennae detect heat sources at 50m. Flight pattern is consistently spiral, counterclockwise. Wing-edge luminescence intensifies near open flame.',
  },
];
