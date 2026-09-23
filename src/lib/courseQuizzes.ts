export type QuizQuestion = {
  question: string;
  options: [string, string, string, string];
  correct: 'A' | 'B' | 'C' | 'D';
  hint: string;
  explanation: string;
};

const courseQuizzesData = {
  "proc-rikat": [
    {
      "question": "Proč je nutné s dětmi o rozpadu rodiny otevřeně mluvit, i když se zdá, že nic nevnímají?",
      "options": [
        "Děti si změn nevšímají, pokud o nich dospělí nezačnou sami mluvit.",
        "Děti vnímají napětí, změny chování i atmosféry a bez informací žijí v nejistotě.",
        "O rozvodu je nutné mluvit pouze pro případ, že se dětí bude ptát někdo ve škole nebo rodině.",
        "Řeči o rozvodu děti pouze zbytečně vystraší a traumatizuje."
      ],
      "correct": "B",
      "hint": "Zamyslete se, jak děti vnímají změny atmosféry, ticho mezi rodiči nebo hádky za zavřenými dveřmi.",
      "explanation": "Děti jsou velmi vnímavé a dokážou zaznamenat změny v chování rodičů, napětí doma i změny zaběhaných pořádků. Pokud s nimi rodiče nemluví, žijí v nejistotě, která je pro ně stejně těžká jako pro dospělé."
    },
    {
      "question": "Proč si děti často myslí, že rozpad rodiny je jejich vina?",
      "options": [
        "Rodiče jim vždy přímo řeknou, že za to mohou ony.",
        "Mají tendenci vnímat svět z vlastní perspektivy a myslí si, že by chováním mohly věci změnit.",
        "Dětem to tvrdí učitelé ve škole a kamarádi.",
        "Myslí si to pouze malé děti."
      ],
      "correct": "B",
      "hint": "Malé děti se přirozeně cítí být středem vesmíru a věří, že jejich chování má přímý dopad na dění v rodině.",
      "explanation": "Děti nerozumí složitosti dospělých vztahů a mají přirozený sklon vnímat svět ze své perspektivy. Myslí si, že kdyby byly „hodnější“, rodiče by se nehádali a nerozváděli."
    },
    {
      "question": "Co je nejhorší možný následek rozvodu pro dítě?",
      "options": [
        "Nutnost změnit školu nebo kroužky.",
        "Stěhování do jiného města.",
        "Ztráta vztahu s jedním z rodičů.",
        "Zhoršení známek ve škole."
      ],
      "correct": "C",
      "hint": "Zamyslete se nad tím, co je pro zdravý vývoj dětí důležité a čemu je potřeba předejít.",
      "explanation": "Děti mají silné pouto k oběma rodičům a ztráta vztahu s jedním z nich je podle odbornictva to nejhorší, co se jim při rozvodu může stát."
    }
  ],
  "co-rikat": [
    {
      "question": "Jak by měli rodiče postupovat při oznámení rozvodu dětem, pokud to jen trochu jde?",
      "options": [
        "Každý rodič by měl zvlášť říct svou verzi příběhu.",
        "Sdělit to dětem společně, v předem domluvený čas a domluvenými slovy.",
        "Požádat někoho nestranného, například školní psycholožku, aby to dětem řekla místo nich.",
        "Stačí počkat, až se děti samy zeptají."
      ],
      "correct": "B",
      "hint": "Jednota dospělých dodává dětem v těžké chvíli největší pocit bezpečí.",
      "explanation": "Ideální je, pokud se rodiče zvládnou domluvit a dají dětem důležitá oznámení společně v předem domluvený čas a předem domluvenými slovy bez vzájemného osočování."
    },
    {
      "question": "Která z následujících vět je nevhodná a dětem ubližuje?",
      "options": [
        "„S tatínkem se rozvádíme, ale oba dva tě máme moc rádi.“",
        "„Rozvod je rozhodnutí nás dospělých, není to tvoje vina.“",
        "„Tatínek nás opustil, už nás nemá rád.“",
        "„Ještě nevíme všechny podrobnosti, ale až je budeme vědět, řekneme ti to.“"
      ],
      "correct": "C",
      "hint": "Všímejte si výroků, které staví dítě do role soudce, vzbuzují vinu nebo osočují druhého rodiče.",
      "explanation": "Výroky typu „Maminka si našla někoho jiného, už s námi nechce být“ přenášejí na děti pocity křivdy, poškozují vztah k druhému rodiči a vzbuzují v dítěti zmatek a vinu."
    },
    {
      "question": "Co by mělo být obsahem sdělení o rozvodu bez ohledu na věk dítěte?",
      "options": [
        "Popis majetkového vyrovnání a označení viníka rozpadu.",
        "Pravda přiměřená věku, ujištění o lásce obou rodičů a vysvětlení, co se bude dít dál.",
        "Sliby, že se v jejich životě nic zásadního nezmění.",
        "Informace, že si dítě musí vybrat, u koho chce bydlet."
      ],
      "correct": "B",
      "hint": "Děti potřebují pravdu bez zbytečných detailů a jistotu, že láska rodičů vůči nim trvá.",
      "explanation": "Všechny děti potřebují slyšet pravdu přiměřenou věku, ujištění, že rozvod není jejich vina, že je oba rodiče milují, a informace o tom, co bude následovat."
    }
  ],
  "co-deti-potrebuji": [
    {
      "question": "Jak si tvoří a udržují vztah k rodičům děti do 6 let (batolata a předškoláci)?",
      "options": [
        "Hlavně pomocí pravidelných telefonátů a videohovorů.",
        "Prostřednictvím každodenní fyzické péče (krmení, koupání, uspávání) a fyzické blízkosti.",
        "Psaním deníčků a kreslením obrázků.",
        "Děti do 6 let si ještě žádné pevné vztahy k rodičům nevytvářejí."
      ],
      "correct": "B",
      "hint": "Vzhledem k věku neumí malé děti udržovat vztah na dálku a žijí přítomným okamžikem „tady a teď“.",
      "explanation": "Malé děti si tvoří vztah prostřednictvím péče a fyzické blízkosti. Neumí udržovat vztah na dálku přes obrazovky, proto potřebují osobní kontakt s oběma rodiči."
    },
    {
      "question": "Proč by rodiče neměli přenášet zodpovědnost za rozhodnutí o péči děti?",
      "options": [
        "Dětem do rozhodnutí rodičů nic není.",
        "Děti často odpoví podle toho, kdo vedle nich zrovna stojí nebo aby druhého nezarmoutily, a staví je to do těžké volby.",
        "Děti často mění názor a v proto na něj není spolehnutí.",
        "Pro děti je důležitější vědět, u koho z rodičů budou mít oblíbené hračky nebo psa."
      ],
      "correct": "B",
      "hint": "Dotaz typu „S kým chceš bydlet?“ nutí dítě vybrat si mezi mámou a tátou.",
      "explanation": "Kladení zodpovědnosti na dítě ho nutí volit mezi rodiči. Děti často řeknou to, co si myslí, že rodič chce slyšet, aby ho nezranily. To je vystavuje obrovskému tlaku."
    },
    {
      "question": "Od jakého věku dětí začínají podle odborníků a soudů děti rozumět dopadu svých slov a zohledňuje se jejich přání?",
      "options": [
        "Od 3 let.",
        "Od 6 let.",
        "Zhruba od 12 let.",
        "Až od 18 let."
      ],
      "correct": "C",
      "hint": "Kdy myslíte, že už děti dokážou rámcově odhadnout a nést následky svých rozhodnutí?",
      "explanation": "Zhruba od 12 let už děti začínají rozumět dopadům svých slov a činů a jejich názor bývá zohledňován OSPOD i soudy."
    }
  ],
  "dopady-na-deti": [
    {
      "question": "Co znamená pojem „regrese“ v chování dětí při rozpadu rodiny?",
      "options": [
        "Rychlé zlepšení prospěchu ve škole.",
        "Návrat k chování typickému pro mladší věk.",
        "Napadání spolužáků ve škole.",
        "Odmítání komunikace s prarodiči."
      ],
      "correct": "B",
      "hint": "Jedná se o reakci na stres, kdy dítě dočasně ztratí dovednosti, které už dříve zvládalo.",
      "explanation": "Regrese je normální reakcí na závažný stres, kdy se dítě dočasně vrací k vývojově mladšímu chování (např. pomočování, ulpívání na rodiči, cucání palce)."
    },
    {
      "question": "Jak prožívají stres z rozvodu školáci (7–11 let) na tělesné úrovni (tzv. somatizace)?",
      "options": [
        "V tomto věku děti somatické projevy nemívají.",
        "Stres prožívají fyzicky jako bolesti břicha, hlavy, nevolnosti nebo kožní problémy.",
        "Začnou extrémně sportovat.",
        "Zlobením a rvačkami ve škole."
      ],
      "correct": "B",
      "hint": "Emoční zátěž, kterou dítě neumí plně vyjádřit slovy, se často přenáší do fyzických potíží těla.",
      "explanation": "Školní děti často somatizují – vnitřní psychický stres a úzkost z rozpadu rodiny se u nich projevuje fyzickými bolestmi hlavy, břicha nebo nevolnostmi."
    },
    {
      "question": "Kdy je správný čas vyhledat pro dítě odbornou psychologickou pomoc?",
      "options": [
        "Co nejdříve, jakmile padlo slovo rozvod.",
        "Pokud jsou problémy a změny chování intenzivní, přetrvávají dlouhé měsíce nebo se zhoršují.",
        "Psychologická péče je pro děti, ne pro dospělé.",
        "Pokud to nařídí OSPOD."
      ],
      "correct": "B",
      "hint": "Emoční reakce v prvních týdnech jsou běžné, ale přetrvávající nebo sebeohrožující varovné signály vyžadují péči odborníka.",
      "explanation": "Reakce na rozvod jsou zpočátku normální. Pokud však potíže přetrvávají měsíce, zhoršují se nebo dítě projevuje známky sebepoškozování či úzkostí, je namístě obrátit se na odborníka."
    }
  ]
} as Record<string, QuizQuestion[]>;

export function getQuizForLesson(slug: string): QuizQuestion[] {
  return courseQuizzesData[slug] ?? [];
}
