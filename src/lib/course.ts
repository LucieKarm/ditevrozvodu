export const COURSE_SLUG = 'jak-mluvit-s-detmi';

export type Lesson = {
  slug: string;
  title: string;
  order: number;
  videoId: string | null;
  intro: string;
};

export const TRAILER_VIDEO_ID = '6efc65865df289d3ac290d4200880264';

export const lessons: Lesson[] = [
  {
    slug: 'proc-rikat',
    title: 'Proč je potřeba to dětem říct',
    order: 1,
    videoId: '04cc936ae383f56c2c57035349c6e0ba',
    intro:
      'Děti většinou tuší, že doma něco není v pořádku. Pravdivá a věku přiměřená komunikace jim pomáhá znovu získat pocit jistoty.',
  },
  {
    slug: 'dopady-na-deti',
    title: 'Dopady na děti',
    order: 2,
    videoId: '30066bbe6078b9c6ef763f929f833f21',
    intro:
      'Rozvod zasahuje do emocí, rutiny i vztahů dětí. Když rozumí tomu, co se děje, zvládají změny lépe.',
  },
  {
    slug: 'co-deti-potrebuji',
    title: 'Co děti v různém věku potřebují',
    order: 3,
    videoId: 'b399c579b1e5e4a327ba4d98b9dd607f',
    intro:
      'Batolata, školáci i teenageři potřebují stejnou jistotu, ale jinak formulovanou. V tomto díle se dozvíte, co je pro ně klíčové.',
  },
  {
    slug: 'co-rikat',
    title: 'Co říkat a čemu se vyhnout',
    order: 4,
    videoId: 'f1bdc848ef02bcdc677488fc2c1a744e',
    intro:
      'Slova mají velkou moc. Naučíte se, co dětem pomáhá slyšet a co je naopak zatěžuje.',
  },
];

export function getLesson(slug: string): Lesson | undefined {
  return lessons.find((lesson) => lesson.slug === slug);
}

export function getLessonNav(slug: string) {
  const index = lessons.findIndex((lesson) => lesson.slug === slug);
  return {
    current: lessons[index],
    prev: index > 0 ? lessons[index - 1] : null,
    next: index < lessons.length - 1 ? lessons[index + 1] : null,
  };
}
