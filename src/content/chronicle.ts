export interface ChroniclePost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
}

export const chroniclePosts: ChroniclePost[] = [
  {
    slug: 'building-the-nocturnal-archive',
    title: 'Building the Nocturnal Archive',
    date: '2026-06-10',
    excerpt: 'How we designed a museum that breathes in the dark.',
    content: `The first decision was simple: nothing in this world should look clean. Clean is daylight. Clean is the laboratory. We wanted the smudge of old glass, the foxing on specimen labels, the dust that accumulates on things no one has opened in decades.

Every screen in MOTHTONGUE is a display case. The glass is slightly warped. The labels are typewritten, not typeset. The specimens are pinned at angles that suggest they were mounted by someone working by lantern light, hurriedly, before the moth could wake.

We built the visual language from three sources: Victorian entomology plates, the woodcut illustrations in 17th-century herbal texts, and the actual behavior of bioluminescent organisms. The glow is never uniform. It pulses. It fades at the edges. It responds to proximity, as if the creatures are aware they are being observed.

The typography was the easiest decision. Playfair Display has that quality of something carved rather than drawn. The serifs are slightly uneven, like a woodcut where the knife slipped once or twice. Space Grotesk for the interface because it recedes. IBM Plex Mono for the system labels because every archive needs its cataloguing language.

What took longest was the darkness. Not the color black, but the weight of it. The sense that behind every illuminated thing, there is a vastness that the light barely touches. We achieved it through layers: the grain overlay, the vignette, the radial gradients that suggest depth without defining it. The darkness is the canvas. The light is the exception.`,
    tags: ['design', 'worldbuilding'],
  },
  {
    slug: 'the-language-of-moths',
    title: 'The Language of Moths',
    date: '2026-06-05',
    excerpt: 'We gave bioluminescence a grammar. Here is how it works.',
    content: `In the world of MOTHTONGUE, bioluminescence is not just light. It is language. Every pulse, every flicker, every sustained glow carries meaning. The translator, that is you, learns to read these patterns the way you might learn to read tide charts or weather signals.

The grammar is simple enough to learn in the demo but deep enough to sustain the full narrative. Pulse twice, pause, pulse once: that is a question. Sustained glow that brightens gradually: that is a warning. Rapid flicker that fades to nothing: that is grief.

We designed the playable demo around this language system. You guide a lantern through a dark forest, and the moths you encounter speak in light. Your job is to translate their warnings, their directions, their memories. The game teaches you its language without ever displaying a tutorial screen.

This is the core philosophy of MOTHTONGUE: the world teaches you its rules through interaction, not instruction. The museum does not explain its exhibits. It lets you look, touch, and eventually understand.`,
    tags: ['gameplay', 'narrative'],
  },
  {
    slug: 'sound-in-the-dark',
    title: 'Sound in the Dark',
    date: '2026-05-28',
    excerpt: 'On building an atmosphere that hums.',
    content: `Sound in MOTHTONGUE is not music in the traditional sense. It is atmosphere made audible. The soundtrack is a collection of field recordings processed through layers of synthesis: cricket choruses stretched into drones, moth wingbeats pitched down to sub-bass, rain on dead leaves granulated into texture.

We wanted the player to feel the湿度 of the forest, the cold of stone walls, the particular silence that exists inside a display case. Every environment has its own sound signature, built from real recordings and shaped to feel organic.

The ambient audio toggle is muted by default. We believe sound should be a choice, not an imposition. When you turn it on, the world deepens. When you turn it off, the visual language carries the atmosphere alone. Both experiences are complete.

The hardest part was the silence. Finding the right amount of nothing between sounds. In nature, silence is never absolute; there is always the faint hiss of air, the distant hum of the earth. We preserved that. True silence would feel artificial. The silence in MOTHTONGUE breathes.`,
    tags: ['sound', 'design'],
  },
  {
    slug: 'why-we-publish-our-failures',
    title: 'Why We Publish Our Failures',
    date: '2026-05-20',
    excerpt: 'An honest account of what went wrong, and why that matters.',
    content: `The first prototype of the lantern game was broken. The moth AI would spiral into corners, the glow mechanics flickered unpredictably, and the scoring system rewarded speed over observation. We shipped it anyway, to ourselves in a private build, and watched players optimize the fun out of it.

That failure taught us something: the game should reward patience. Moths do not respond to urgency. They respond to stillness. We rebuilt the entire interaction model around this principle. Now, the slower you move, the more the moths reveal. The lantern dims if you rush. The hidden glyphs appear only when you wait.

We publish these failures because the alternative is dishonesty. Every design decision in MOTHTONGUE has a reason, and most of those reasons are mistakes we made first. The woodcut aesthetic came from a failed attempt at 3D rendering. The bioluminescent particles were originally a bug in a lighting system. The dark palette was a compensation for assets we could not afford to render in detail.

Constraint is the mother of aesthetics. We had limitations. We turned them into a world.`,
    tags: ['development', 'philosophy'],
  },
];
