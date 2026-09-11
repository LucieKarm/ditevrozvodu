import pandas as pd

input_file = "ditevrozvodu.cz _ Podklady k search kampaním.xlsx"
output_file = "ditevrozvodu_Search_Kampane_Vyplneno.xlsx"

df_kws = pd.read_excel(input_file, sheet_name="CZ KWs")

new_kws = [
    # Campaign 2
    {"Campaign": "Online kurz - rozvod", "Ad Group": "Online kurz rozvod děti", "Keyword": "online kurz rozvod", "Criterion Type": "Broad match"},
    {"Campaign": "Online kurz - rozvod", "Ad Group": "Online kurz rozvod děti", "Keyword": "kurz rozvod s dětmi", "Criterion Type": "Exact"},
    {"Campaign": "Online kurz - rozvod", "Ad Group": "Online kurz rozvod děti", "Keyword": "jak zvládnout rozvod s dětmi kurz", "Criterion Type": "Broad match"},
    {"Campaign": "Online kurz - rozvod", "Ad Group": "Online kurz rozvod děti", "Keyword": "pomoc při rozvodu online", "Criterion Type": "Exact"},
    
    {"Campaign": "Online kurz - rozvod", "Ad Group": "Pomoc při rozvodu", "Keyword": "pomoc při rozvodu", "Criterion Type": "Broad match"},
    {"Campaign": "Online kurz - rozvod", "Ad Group": "Pomoc při rozvodu", "Keyword": "psychologická pomoc rozvod", "Criterion Type": "Exact"},
    {"Campaign": "Online kurz - rozvod", "Ad Group": "Pomoc při rozvodu", "Keyword": "jak řešit rozvod s dětmi", "Criterion Type": "Broad match"},
    {"Campaign": "Online kurz - rozvod", "Ad Group": "Pomoc při rozvodu", "Keyword": "opora pro rozvádějící se", "Criterion Type": "Exact"},
    
    # Campaign 3
    {"Campaign": "Praktické info - rozvod", "Ad Group": "Péče o děti po rozvodu", "Keyword": "péče o děti po rozvodu", "Criterion Type": "Exact"},
    {"Campaign": "Praktické info - rozvod", "Ad Group": "Péče o děti po rozvodu", "Keyword": "střídavá péče", "Criterion Type": "Broad match"},
    {"Campaign": "Praktické info - rozvod", "Ad Group": "Péče o děti po rozvodu", "Keyword": "svěření do péče", "Criterion Type": "Broad match"},
    {"Campaign": "Praktické info - rozvod", "Ad Group": "Péče o děti po rozvodu", "Keyword": "dohoda o péči", "Criterion Type": "Exact"},

    {"Campaign": "Praktické info - rozvod", "Ad Group": "Výživné a soud", "Keyword": "výživné na dítě", "Criterion Type": "Exact"},
    {"Campaign": "Praktické info - rozvod", "Ad Group": "Výživné a soud", "Keyword": "alimenty po rozvodu", "Criterion Type": "Broad match"},
    {"Campaign": "Praktické info - rozvod", "Ad Group": "Výživné a soud", "Keyword": "výpočet výživného", "Criterion Type": "Broad match"},
    {"Campaign": "Praktické info - rozvod", "Ad Group": "Výživné a soud", "Keyword": "soud ohledně dětí", "Criterion Type": "Exact"},
    
    {"Campaign": "Praktické info - rozvod", "Ad Group": "Mediace a domluva", "Keyword": "mediace při rozvodu", "Criterion Type": "Exact"},
    {"Campaign": "Praktické info - rozvod", "Ad Group": "Mediace a domluva", "Keyword": "dohoda rozvádějících se", "Criterion Type": "Broad match"},
    {"Campaign": "Praktické info - rozvod", "Ad Group": "Mediace a domluva", "Keyword": "rodinný mediátor", "Criterion Type": "Broad match"},
    {"Campaign": "Praktické info - rozvod", "Ad Group": "Mediace a domluva", "Keyword": "rozvodová mediace", "Criterion Type": "Exact"},
]
df_kws = pd.concat([df_kws, pd.DataFrame(new_kws)], ignore_index=True)

data = []

def add_ad(c, ag, h, d, p1, p2):
    row = {"Campaign": c, "Ad group": ag, "Path 1": p1, "15": len(p1), "Path 2": p2, "15.1": len(p2), "Final URL": "https://ditevrozvodu.cz"}
    for i in range(10):
        key = f"Headline {i+1}"
        lkey = "30" if i == 0 else f"30.{i}"
        val = h[i] if i < len(h) else ""
        row[key] = val
        row[lkey] = len(val) if val else 0
        
    for i in range(4):
        key = f"Description {i+1}"
        lkey = "90" if i == 0 else f"90.{i}"
        val = d[i] if i < len(d) else ""
        row[key] = val
        row[lkey] = len(val) if val else 0
        
    data.append(row)

# 1.1 Jak mluvit s dětmi o rozvodu
add_ad(
    "Rozvod a děti", "Jak mluvit s dětmi o rozvodu",
    ["Jak oznámit rozvod bez slz?", "Najděte ta správná slova", "Nerozbijte dětem svět", "Řekněte to dětem citlivě", "Rozvod bez dětských traumat", "Jak mluvit s dětmi o rozvodu", "Tápete, jak jim říct pravdu?", "Ochrana dětí je na 1. místě", "Slova, co zklidní dětskou duši", "Těžký rozhovor s lehkostí"],
    ["Rozvod bolí, ale nemusí zranit. Získejte návod, jak oznámit konec vztahu bez traumat.", "Hledáte správná slova? Poradíme vám, jak s dětmi mluvit narovinu a přitom je ochránit.", "Bojíte se dětských slz? Zjistěte, jak vést ten nejtěžší rozhovor s maximálním citem.", "Vaše děti si zaslouží pravdu, ale i bezpečí. Získejte rady od špičkových psychologů."],
    "deti", "komunikace"
)

# 1.2 Děti a rozpad rodiny
add_ad(
    "Rozvod a děti", "Děti a rozpad rodiny",
    ["Rozvod rodičů, ne dětí", "Jak neničit dětem dětství", "Projděte rozvodem s grácií", "Zachraňte úsměv svých dětí", "Rozpad rodiny bez paniky", "Zůstaňte skvělými rodiči", "Konec vztahu, ne rodiny", "Dopad rozvodu na děti: Návod", "Vaše děti rozvod zvládnou", "Ochranný štít pro vaše děti"],
    ["Manželství končí, ale vy zůstáváte rodiči navždy. Zjistěte, jak dětem zachovat domov.", "Strach o děti? Poradíme vám, jak jim dodat jistotu i ve chvílích, kdy se všechno mění.", "Udělejte to jinak než ostatní. Rozveďte se tak, aby vaše děti netrpěly. Jde to!", "Konec sporů. Zjistěte, jak vytvořit stabilní prostředí pro děti i po rozpadu rodiny."],
    "deti", "dopady"
)

# 1.3 Psychologie dítěte při rozvodu
add_ad(
    "Rozvod a děti", "Psychologie dítěte při rozvodu",
    ["Co se honí v hlavě dítěte?", "Zachraňte dětskou psychiku", "Když dětská duše trpí", "Emoce dítěte při rozvodu", "Nechte si poradit odborníky", "Víte, co vaše dítě prožívá?", "Jak uzdravit dětské emoce", "První pomoc pro dětskou duši", "Zbavte dítě pocitu viny", "Psychologický kompas rozvodem"],
    ["Děti rozvod vnímají jinak než dospělí. Nahlédněte do jejich světa a dejte jim oporu.", "Trápí se vaše dítě? Odborné rady vám ukážou, jak číst dětské emoce a včas zasáhnout.", "Nečekejte, až se problémy vyhrotí. Poskytněte dítěti psychologickou pomoc, kterou ocení.", "Strach, vztek i pocit viny. Pochopte, čím si dítě prochází, a buďte mu bezpečným břehem."],
    "deti", "psychologie"
)

# 2.1 Online kurz rozvod děti
add_ad(
    "Online kurz - rozvod", "Online kurz rozvod děti",
    ["Online kurz: Rozvod bez slz", "Zvládněte rozvod z obýváku", "Praktický video kurz rozvodu", "Tajemství klidného rozvodu", "Vyřešte rozvod ve svém tempu", "Krok za krokem těžkým obdobím", "Kurz, co chrání vaše děti", "Klikněte a rozveďte se chytře", "Vaše psychická záchranka", "Investujte do klidu rodiny"],
    ["Žádné dojíždění, jen čistá praxe. Získejte ověřené rady odborníků v online kurzu.", "Ztrácíte pevnou půdu pod nohama? Pusťte si kurz, který vás provede rozvodem s dětmi.", "Návod na klidný rozchod máte na dosah ruky. Přidejte se k rodičům, kteří to zvládli.", "Konec bezesných nocí. Praktická videa vám dají jistotu v každém kroku. Zkuste to!"],
    "kurz", "deti"
)

# 2.2 Pomoc při rozvodu
add_ad(
    "Online kurz - rozvod", "Pomoc při rozvodu",
    ["Nezvládáte to? Pomůžeme vám", "S rozvodem na to nejste sami", "Okamžitá úleva při rozvodu", "Podržíme vás i vaše děti", "Najděte ztracenou rovnováhu", "Krizová pomoc pro rodiče", "Útěk ze slepé uličky rozvodu", "Když už nevíte, jak dál", "Spolehněte se na odborníky", "Zastavte to rozvodové peklo"],
    ["Stojíte na pokraji sil? Nechte si pomoct. Společně najdeme cestu z rozvodové krize.", "Hádky vás vyčerpávají? Obraťte se na profesionály, kteří vědí, jak situaci uklidnit.", "Vaše problémy mají řešení. Získejte klid pro sebe i ochranu pro své děti. Jsme tu.", "Provedeme vás úskalími rozvodu. Objevte podporu, o kterou se můžete s důvěrou opřít."],
    "pomoc", "rozvod"
)

# 3.1 Péče o děti po rozvodu
add_ad(
    "Praktické info - rozvod", "Péče o děti po rozvodu",
    ["Komu připadnou děti?", "Spravedlivá dohoda o péči", "Střídavá péče bez hádek", "Najděte nejlepší model péče", "Dohoda o dětech rychle a fér", "Jak se domluvit na péči", "Soud, nebo rozumná dohoda?", "Co je střídavá péče v praxi", "Klidný život po rozvodu", "Domluvte se jako dospělí"],
    ["Střídavá, nebo výlučná péče? Zjistěte, který model dá vašim dětem největší stabilitu.", "Nehádejte se o děti. Poradíme vám, jak nastavit pravidla péče ku prospěchu všech.", "Soud nerozhodne lépe než vy. Získejte návod, jak vytvořit fungující rodičovskou dohodu.", "Jasná pravidla = klidné děti. Přečtěte si, jak zvládnout péči o děti bez zbytečných slz."],
    "pece", "deti"
)

# 3.2 Výživné a soud
add_ad(
    "Praktické info - rozvod", "Výživné a soud",
    ["Konec dohadů o alimentech", "Zjistěte, jaké budou alimenty", "Férové výživné bez soudu", "Jak spočítat alimenty rychle", "Výživné na dítě jasně", "Připravte se na jednání u soudu", "Kolik dostanete na dítě?", "Bojíte se soudu o peníze?", "Tabulky výživného v praxi", "Ušetřete za soudní výlohy"],
    ["Peníze jsou častý kámen úrazu. Spočítejte si férové výživné a ušetřete nervy i čas.", "Jak určí alimenty soud? Vyzbrojte se informacemi dřív, než dojde k nepříjemným hádkám.", "Nastavte si výživné tak, aby vyhovovalo všem. Získejte srozumitelný právní přehled.", "Soudní tahanice nikomu neprospějí. Objevte tipy, jak vyřešit peníze efektivně a v klidu."],
    "vyzivne", "soud"
)

# 3.3 Mediace a domluva
add_ad(
    "Praktické info - rozvod", "Mediace a domluva",
    ["Rozvod dohodou. Jde to!", "Ušetřete nervy díky mediaci", "Vyhněte se válce právníků", "Chytré řešení: Mediace", "S mediátorem se domluvíte", "Ušetřete za soudní tahanice", "Kompromis místo tvrdého boje", "Rozveďte se s čistým štítem", "Rychlý rozvod bez soudu?", "Dohoda šetří čas i peníze"],
    ["Bojíte se, že vás rozvod finančně a psychicky zruinuje? Zkuste efektivní mediaci.", "Právníci stojí desetitisíce, dohoda je levnější. Zjistěte, proč se mediace vyplatí.", "I zarytí nepřátelé dokážou najít smír. Zkuste mimosoudní cestu, ze které profitují děti.", "Komunikace na bodu mrazu? Mediátor vám pomůže prolomit ledy a najít spravedlivé řešení."],
    "mediace", "dohoda"
)

df_ads = pd.DataFrame(data)

original_cols = ["Campaign", "Ad group", "Headline 1", "30", "Headline 2", "30.1", "Headline 3", "30.2", 
                 "Headline 4", "30.3", "Headline 5", "30.4", "Headline 6", "30.5", "Headline 7", "30.6", 
                 "Headline 8", "30.7", "Headline 9", "30.8", "Headline 10", "30.9", "Description 1", "90", 
                 "Description 2", "90.1", "Description 3", "90.2", "Description 4", "90.3", 
                 "Path 1", "15", "Path 2", "15.1", "Final URL"]

for col in original_cols:
    if col not in df_ads.columns:
        df_ads[col] = None

df_ads = df_ads[original_cols]

with pd.ExcelWriter(output_file, engine='openpyxl') as writer:
    df_kws.to_excel(writer, sheet_name="CZ KWs", index=False)
    df_ads.to_excel(writer, sheet_name="CZ reklamy", index=False)

print(f"Successfully generated {output_file}")
