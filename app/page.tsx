"use client";

import { useMemo, useState } from "react";

type School = {
  id: string; name: string; short: string; location: string; state: string;
  division: string; conference: string; setting: string; climate: string;
  aviation: string; ratp: string; fleet: string; partners: string;
  cost: string; flightCost: string; xc: string;
  times: { scholarship: string; recruit: string; walkon: string };
  pros: string[]; cons: string[]; notes: string;
  scores: { aviation: number; athletics: number; value: number; climate: number; campus: number };
  sources: { label: string; url: string }[];
};

const schools: School[] = [
  {
    id: "auburn", name: "Auburn University", short: "AU", location: "Auburn, Alabama", state: "AL",
    division: "NCAA Division I", conference: "SEC", setting: "Large college town; traditional flagship campus",
    climate: "Hot, humid summers; mild winters; thunderstorms can interrupt summer flying.",
    aviation: "B.S. Professional Flight, Part 141 and AABI-accredited. Integrated private through commercial multi-engine, with CFI electives and turbine/crew preparation.",
    ratp: "Yes — 1,000-hour pathway with qualifying degree/coursework", fleet: "University-operated glass-cockpit training fleet; confirm current mix during tour.",
    partners: "Delta Propel and other airline/cadet relationships; offerings and eligibility change.",
    cost: "Public flagship pricing; use Auburn's current estimator for residency-specific COA.", flightCost: "Flight course fees are additional and variable by proficiency.",
    xc: "High-level SEC distance program. A roster conversation generally requires nationally competitive track marks.",
    times: { scholarship: "4:08 / 8:55", recruit: "4:15 / 9:15", walkon: "4:22 / 9:30" },
    pros: ["SEC resources and strong school spirit", "Integrated R-ATP professional-flight degree", "Warm-weather outdoor training"],
    cons: ["Most demanding running fit in this directory", "Selective flight-program capacity", "Heat, humidity and convective weather"],
    notes: "Best for a runner who is already a clear Division I recruit and wants a major-college experience.",
    scores: { aviation: 9, athletics: 10, value: 7, climate: 7, campus: 9 },
    sources: [{ label: "Professional Flight", url: "https://cla.auburn.edu/aviation/our-programs/professional-flight/" }, { label: "Men's XC", url: "https://auburntigers.com/sports/cross-country" }]
  },
  {
    id: "erau-daytona", name: "Embry-Riddle Aeronautical University — Daytona Beach", short: "ERAU-D", location: "Daytona Beach, Florida", state: "FL",
    division: "NCAA Division II", conference: "Sunshine State Conference", setting: "Small aviation-centered campus near the coast and an international airport",
    climate: "Warm year-round; hot, humid and stormy summers; hurricane-season planning matters.",
    aviation: "B.S. Aeronautical Science with deeply integrated, university-run flight training and extensive simulators. Aviation is central to campus life.",
    ratp: "Yes — 1,000-hour pathway with qualifying coursework", fleet: "Large university fleet and simulators based at Daytona Beach International Airport.",
    partners: "Multiple airline pathways and a large aviation alumni network.",
    cost: "2026–27 on-campus academic COA published near $70,686 before flight training.", flightCost: "University guide reported a roughly $89,032 median private-through-commercial track; current quotes should replace planning figures.",
    xc: "Competitive Division II program with year-round training. More accessible than Power-conference DI, but roster quality is strong.",
    times: { scholarship: "4:17 / 9:15", recruit: "4:25 / 9:35", walkon: "4:35 / 9:55" },
    pros: ["Aviation-first culture and network", "Airport-adjacent training model", "DII athletic opportunity in a warm climate"],
    cons: ["High combined academic and flight cost", "Flight and varsity schedules both demand flexibility", "Storm and hurricane disruptions"],
    notes: "One of the clearest aviation-plus-athletics matches; verify that flight blocks can coexist with team practice and travel.",
    scores: { aviation: 10, athletics: 8, value: 5, climate: 8, campus: 8 },
    sources: [{ label: "Aeronautical Science", url: "https://daytonabeach.erau.edu/college-aviation/aeronautical-science" }, { label: "Costs", url: "https://erau.edu/admissions/tuition-and-costs" }, { label: "Men's XC", url: "https://erauathletics.com/sports/mens-cross-country" }]
  },
  {
    id: "erau-prescott", name: "Embry-Riddle Aeronautical University — Prescott", short: "ERAU-P", location: "Prescott, Arizona", state: "AZ",
    division: "NAIA", conference: "California Pacific Conference", setting: "Small aviation-centered campus in a high-desert mountain town",
    climate: "Four seasons, low humidity and many sunny days; altitude near 5,000 feet shapes running and flight performance.",
    aviation: "B.S. Aeronautical Science with integrated flight courses, simulators and high-density-altitude experience.",
    ratp: "Yes — 1,000-hour pathway with qualifying coursework", fleet: "University-operated aircraft and simulators at Prescott Regional Airport.",
    partners: "Airline pathways plus Embry-Riddle's national aviation alumni base.",
    cost: "2026–27 on-campus academic COA published near $70,686 before flight training.", flightCost: "Flight charges are separate and proficiency-dependent; request a current course-by-course estimate.",
    xc: "NAIA program with strong altitude-training appeal and typically more recruiting flexibility than elite DI teams.",
    times: { scholarship: "4:22 / 9:25", recruit: "4:32 / 9:50", walkon: "4:45 / 10:15" },
    pros: ["High-altitude running and flying", "Aviation-focused environment", "NAIA aid flexibility"],
    cons: ["High private-school plus flight cost", "Smaller town and campus", "Altitude acclimation and occasional winter weather"],
    notes: "Especially attractive for an Arizona-based student who values altitude, small classes and aviation immersion.",
    scores: { aviation: 10, athletics: 7, value: 5, climate: 9, campus: 8 },
    sources: [{ label: "Aeronautical Science", url: "https://prescott.erau.edu/college-aviation/aeronautical-science" }, { label: "R-ATP authorization", url: "https://prescott.erau.edu/-/media/files/prescott/college-of-aviation/r-atp-letter-of-authorization.pdf" }, { label: "Men's XC", url: "https://erauathletics.com/sports/mens-cross-country" }]
  },
  {
    id: "florida-tech", name: "Florida Institute of Technology", short: "Florida Tech", location: "Melbourne, Florida", state: "FL",
    division: "NCAA Division II", conference: "Sunshine State Conference", setting: "Private STEM-focused campus on Florida's Space Coast",
    climate: "Warm coastal climate; humid summers, frequent afternoon storms and hurricane exposure.",
    aviation: "Aeronautical Science–Flight degree delivered with FIT Aviation at Melbourne Orlando International Airport under Part 141.",
    ratp: "Yes — qualifying aviation degree/coursework; confirm 1,000 vs. 1,250-hour track", fleet: "All-Piper fleet including Warrior, Archer, Pilot 100i and Seminole, with glass avionics.",
    partners: "Published pathways include United Aviate, Delta Propel, JetBlue, Allegiant, Envoy, PSA, Frontier and Republic.",
    cost: "Private-university pricing; consult the current net-price calculator.", flightCost: "Additional FIT Aviation flight fees vary by course and proficiency.",
    xc: "Competitive DII program in the SSC, often a realistic target for strong varsity runners.",
    times: { scholarship: "4:20 / 9:20", recruit: "4:30 / 9:45", walkon: "4:42 / 10:10" },
    pros: ["Very broad airline pathway list", "Airport training close to campus", "Space Coast aerospace ecosystem"],
    cons: ["Private tuition plus flight fees", "Heat and humidity for distance training", "Weather interruptions in storm season"],
    notes: "A high-upside aviation option for a DII-caliber runner; compare net aid directly with Embry-Riddle Daytona.",
    scores: { aviation: 9, athletics: 7, value: 5, climate: 8, campus: 8 },
    sources: [{ label: "Fleet & facilities", url: "https://www.fit.edu/aeronautics/about-us/facilities/" }, { label: "Airline pathways", url: "https://www.fit.edu/aeronautics/academics-and-learning/pathway-programs/" }, { label: "Men's XC", url: "https://floridatechsports.com/sports/mens-cross-country" }]
  },
  {
    id: "kent-state", name: "Kent State University", short: "Kent State", location: "Kent, Ohio", state: "OH",
    division: "NCAA Division I", conference: "Mid-American Conference", setting: "Large public campus in a classic college town near Cleveland",
    climate: "Four seasons; cold, cloudy and snowy winters; productive spring-through-fall flying windows.",
    aviation: "B.S. Professional Pilot in an AABI-accredited, Part 141 university program at Kent State University Airport.",
    ratp: "Yes — qualifying Professional Pilot graduates can pursue reduced-hour R-ATP", fleet: "University training fleet with modern avionics; verify the current aircraft count and types on a tour.",
    partners: "Career relationships and cadet pathways vary; confirm current active agreements.",
    cost: "Public-university tuition with lower in-state pricing; flight fees are separate.", flightCost: "Course-based flight fees; ask for a completion-cost range, not only minimum syllabus cost.",
    xc: "Mid-major Division I. A strong runner can be viable without Power-conference marks, subject to roster space.",
    times: { scholarship: "4:13 / 9:05", recruit: "4:22 / 9:25", walkon: "4:30 / 9:45" },
    pros: ["Strong public-school value potential", "University airport and established program", "More attainable DI running tier"],
    cons: ["Winter weather can affect flight cadence", "DI roster competition", "Program demand may constrain flight slots"],
    notes: "A strong value candidate, especially for Midwest residents seeking DI athletics and integrated flight training.",
    scores: { aviation: 8, athletics: 8, value: 8, climate: 5, campus: 8 },
    sources: [{ label: "Professional Pilot", url: "https://www.kent.edu/cae/professional-pilot" }, { label: "Men's XC", url: "https://kentstatesports.com/sports/cross-country" }, { label: "Costs", url: "https://www.kent.edu/tuition" }]
  },
  {
    id: "louisiana-tech", name: "Louisiana Tech University", short: "LA Tech", location: "Ruston, Louisiana", state: "LA",
    division: "NCAA Division I", conference: "Conference USA", setting: "Medium public university in a small Southern college town",
    climate: "Long, hot and humid summers; mild winters; thunderstorms can disrupt training and flying.",
    aviation: "AABI-accredited B.S. Professional Aviation with year-round Part 141 ground, simulator and flight training at Ruston Regional Airport.",
    ratp: "Yes — verify current FAA-approved credit/hour pathway with program", fleet: "Published fleet includes Cessna Skyhawks and Piper Arrows; confirm current additions and multi-engine inventory.",
    partners: "Published relationships include Southwest, SkyWest, Republic, Mesa, Cape Air and Purple Runway.",
    cost: "Public-university pricing and typically attractive regional value; residency affects tuition.", flightCost: "A separate flight-fee schedule applies; obtain the current version before comparing.",
    xc: "DI mid-major environment with a wider performance window than the SEC or Big Ten.",
    times: { scholarship: "4:16 / 9:10", recruit: "4:25 / 9:35", walkon: "4:36 / 9:58" },
    pros: ["Potentially strong total-cost value", "Long-established AABI program", "Multiple airline relationships"],
    cons: ["Small-town setting", "Heat and humidity", "Fleet information should be reconfirmed in person"],
    notes: "An underrated value school to investigate early; ask coaches about roster needs for the student's graduation year.",
    scores: { aviation: 8, athletics: 7, value: 9, climate: 6, campus: 7 },
    sources: [{ label: "Professional Aviation", url: "https://liberalarts.latech.edu/Professional-Aviation/" }, { label: "Men's XC", url: "https://latechsports.com/sports/cross-country" }]
  },
  {
    id: "mtsu", name: "Middle Tennessee State University", short: "MTSU", location: "Murfreesboro, Tennessee", state: "TN",
    division: "NCAA Division I", conference: "Conference USA", setting: "Large public campus in a fast-growing city near Nashville",
    climate: "Four-season but generally mild; hot humid summers, occasional winter ice, thunderstorms.",
    aviation: "B.S. Aerospace, Professional Pilot concentration; AABI-accredited Part 141 training with glass cockpits and CRJ-700 training device.",
    ratp: "Yes — up to 500-hour reduction; qualifying graduates may reach R-ATP at 1,000 hours", fleet: "University aircraft at Murfreesboro Municipal Airport plus advanced flight-training devices.",
    partners: "Delta Propel, Southwest Destination 225° and other structured pathways.",
    cost: "Public-university pricing with in-state advantage; flight labs are additional.", flightCost: "Flight lab guide lists course costs; proficiency and repeats can raise totals.",
    xc: "Mid-major DI program; roster competitiveness varies by event group and recruiting class.",
    times: { scholarship: "4:14 / 9:05", recruit: "4:23 / 9:28", walkon: "4:33 / 9:50" },
    pros: ["Large, established aerospace department", "Major-airline pathway options", "Nashville-area access and internships"],
    cons: ["Large program can mean scheduling pressure", "Hot, humid summers", "DI roster is not guaranteed at benchmark"],
    notes: "A balanced public option with scale; specifically ask how athletes receive priority when flight blocks conflict with practice.",
    scores: { aviation: 9, athletics: 8, value: 8, climate: 7, campus: 8 },
    sources: [{ label: "Professional Pilot", url: "https://www.mtsu.edu/program/aerospace-professional-pilot-concentration-b-s/" }, { label: "Flight FAQ", url: "https://aerospace.mtsu.edu/flight-training-faqs/" }, { label: "Pathways", url: "https://aerospace.mtsu.edu/pathway-programs/" }, { label: "Men's XC", url: "https://goblueraiders.com/sports/mens-cross-country" }]
  },
  {
    id: "mankato", name: "Minnesota State University, Mankato", short: "Minn. State", location: "Mankato, Minnesota", state: "MN",
    division: "NCAA Division II", conference: "Northern Sun Intercollegiate Conference", setting: "Medium public university in a regional city",
    climate: "Warm summers and cold, snowy winters; winter operations build weather judgment but can reduce flight cadence.",
    aviation: "B.S. Aviation with professional flight labs delivered with North Star Aviation at Mankato Regional Airport; AABI-accredited curriculum.",
    ratp: "Yes — curriculum supports the 60-credit, 1,000-hour R-ATP route", fleet: "Partner-operated training fleet at the regional airport; verify aircraft availability and dispatch metrics.",
    partners: "Sun Country pathway and North Star Aviation training partnership.",
    cost: "Public-university pricing; often compelling compared with private aviation schools.", flightCost: "Partner flight charges are additional; request a current zero-time-to-CFI estimate.",
    xc: "Established DII program. Athletic standards are strong but often attainable for a good varsity distance runner.",
    times: { scholarship: "4:18 / 9:18", recruit: "4:28 / 9:42", walkon: "4:42 / 10:08" },
    pros: ["Strong value potential", "DII recruiting fit", "All-season weather experience"],
    cons: ["Severe winter cold", "Training is delivered with an airport partner", "Smaller airline-network footprint than UND/ERAU"],
    notes: "A smart target for balancing cost, R-ATP eligibility and realistic DII athletic opportunity.",
    scores: { aviation: 8, athletics: 7, value: 9, climate: 4, campus: 7 },
    sources: [{ label: "Aviation B.S.", url: "https://ed.mnsu.edu/academic-programs/aviation/aviation-bs/" }, { label: "Aviation partners", url: "https://ed.mnsu.edu/academic-programs/aviation/aviation-bs/aviation-partners/" }, { label: "Men's XC", url: "https://msumavericks.com/sports/mens-cross-country" }]
  },
  {
    id: "purdue", name: "Purdue University", short: "Purdue", location: "West Lafayette, Indiana", state: "IN",
    division: "NCAA Division I", conference: "Big Ten Conference", setting: "Large research university in a major college town with its own airport",
    climate: "Four seasons; humid summers, cold winters, wind and convective weather.",
    aviation: "B.S. Professional Flight through Purdue Polytechnic, with university-airport facilities and airline-oriented coursework.",
    ratp: "Yes — 1,000-hour R-ATP with 60 approved aviation credits", fleet: "University training aircraft and advanced simulators at Purdue University Airport; verify current fleet inventory.",
    partners: "United Aviate and additional industry relationships.",
    cost: "Public tuition; in-state is favorable, while flight fees add materially to published COA.", flightCost: "Course flight fees are additional and capacity is selective; request a four-year projection.",
    xc: "Big Ten program; this is one of the toughest athletic admissions in the directory.",
    times: { scholarship: "4:05 / 8:50", recruit: "4:12 / 9:05", walkon: "4:20 / 9:22" },
    pros: ["Elite academic and aviation brand", "Own airport and strong facilities", "Power-conference resources"],
    cons: ["Extremely competitive running roster", "Selective professional-flight admission", "Winter weather and high total workload"],
    notes: "Treat as a reach unless both academics and running marks are exceptional; apply to Professional Flight directly and early.",
    scores: { aviation: 10, athletics: 10, value: 8, climate: 5, campus: 10 },
    sources: [{ label: "Professional Flight", url: "https://polytechnic.purdue.edu/degrees/professional-flight" }, { label: "R-ATP course list", url: "https://polytechnic.purdue.edu/sites/default/files/files/R-ATP-Course%20List-Updated-12-14-22.pdf" }, { label: "United partnership", url: "https://polytechnic.purdue.edu/newsroom/purdue-united-airlines-establish-partnership-pilots-career-development" }, { label: "Men's XC", url: "https://purduesports.com/sports/cross-country" }]
  },
  {
    id: "siu", name: "Southern Illinois University Carbondale", short: "SIU", location: "Carbondale, Illinois", state: "IL",
    division: "NCAA Division I", conference: "Missouri Valley Conference", setting: "Public research university in a small town surrounded by forests and trails",
    climate: "Hot humid summers, cool winters and four seasons; occasional storms and winter disruptions.",
    aviation: "B.S. Aviation Flight with Part 141 university training and a broad School of Aviation ecosystem.",
    ratp: "Yes — qualifying graduates may receive a 250- or 500-hour reduction", fleet: "University flight-training aircraft and simulators at Southern Illinois Airport; confirm live dispatch data.",
    partners: "Published airline partners include United Aviate, SkyWest, Endeavor, Air Wisconsin and others.",
    cost: "Public-university pricing with comparatively strong value potential.", flightCost: "Flight fees are separate; compare estimated completion, instructor and checkride costs.",
    xc: "Missouri Valley DI program in a trail-rich setting; attainable target for a strong regional runner.",
    times: { scholarship: "4:13 / 9:03", recruit: "4:23 / 9:28", walkon: "4:34 / 9:52" },
    pros: ["Established R-ATP pathway", "Strong airline-partner list", "Trails and lower-cost college-town setting"],
    cons: ["Small-town location", "Variable Midwest weather", "Aviation and athletics scheduling requires explicit planning"],
    notes: "One of the best balance candidates for DI opportunity, aviation depth and cost; deserves an early coach conversation.",
    scores: { aviation: 9, athletics: 8, value: 9, climate: 6, campus: 7 },
    sources: [{ label: "Aviation Flight", url: "https://aviation.siu.edu/undergraduate/aviation-flight/" }, { label: "R-ATP", url: "https://aviation.siu.edu/r-atp.php" }, { label: "Airline partnerships", url: "https://aviation.siu.edu/about/airline-partnerships.php" }, { label: "Men's XC", url: "https://siusalukis.com/sports/mens-cross-country" }]
  },
  {
    id: "und", name: "University of North Dakota", short: "UND", location: "Grand Forks, North Dakota", state: "ND",
    division: "NCAA Division I", conference: "Summit League", setting: "Large public university in a small, aviation-centered northern city",
    climate: "Very cold, windy winters and warm summers; demanding weather builds operational experience but can affect dispatch.",
    aviation: "B.S. Aeronautics in Commercial Aviation at the John D. Odegard School; one of the country's largest collegiate flight operations.",
    ratp: "Yes — 1,000-hour route when all qualifying flight training and coursework are completed at UND", fleet: "Large standardized fleet; a 145-aircraft Piper replacement order begins deliveries in 2027.",
    partners: "Frontier, Sun Country and numerous regional/major airline pathways.",
    cost: "Public pricing; tuition varies by residency/program and flight fees add substantially.", flightCost: "Published course estimates should be totaled with fuel adjustments, checkrides and possible repeats.",
    xc: "Summit League DI program. Serious mid-major marks are generally needed for recruiting attention.",
    times: { scholarship: "4:12 / 9:00", recruit: "4:21 / 9:22", walkon: "4:31 / 9:45" },
    pros: ["Exceptional aviation scale and reputation", "Large fleet and deep alumni network", "Extensive real-world weather experience"],
    cons: ["Severe winter climate", "DI roster competition", "Large operation may feel less personal"],
    notes: "A top aviation benchmark school; the decision hinges on climate tolerance and genuine DI running fit.",
    scores: { aviation: 10, athletics: 8, value: 8, climate: 3, campus: 8 },
    sources: [{ label: "Commercial Aviation", url: "https://aero.und.edu/aviation/commercial-aviation/index.html" }, { label: "Airline pathways", url: "https://aero.und.edu/aviation/current-students/career-pathways.html" }, { label: "Men's XC", url: "https://fightinghawks.com/sports/mens-cross-country" }]
  },
  {
    id: "western-michigan", name: "Western Michigan University", short: "WMU", location: "Kalamazoo / Battle Creek, Michigan", state: "MI",
    division: "NCAA Division I", conference: "Mid-American Conference", setting: "Large public university; flight campus is about 25 miles from main campus",
    climate: "Four seasons with cloudy, snowy winters and pleasant summers; broad weather exposure.",
    aviation: "B.S. Aviation Flight Science with Part 141 training at W.K. Kellogg Airport in Battle Creek.",
    ratp: "Yes — qualifying degree/coursework supports reduced-hour R-ATP", fleet: "32 Cirrus SR20 Gen 7, 9 Piper Seminoles, plus specialty aircraft and modern training devices (published inventory).",
    partners: "Delta and other airline/industry relationships and internships.",
    cost: "Public-university tuition; residency matters.", flightCost: "2024–25 published private-through-commercial flight lab estimate was about $81,049, before electives.",
    xc: "MAC Division I program. Strong varsity marks may open a conversation, but roster needs control access.",
    times: { scholarship: "4:13 / 9:04", recruit: "4:22 / 9:26", walkon: "4:31 / 9:48" },
    pros: ["Modern, clearly published fleet", "Established aviation college", "DI mid-major athletics"],
    cons: ["Flight campus commute from Kalamazoo", "Winter weather", "High flight-lab total beyond tuition"],
    notes: "A strong all-around contender; evaluate the daily transportation and practice-to-flight logistics carefully.",
    scores: { aviation: 9, athletics: 8, value: 7, climate: 5, campus: 8 },
    sources: [{ label: "Flight Science", url: "https://wmich.edu/aviation/academics/aviation-flight-science" }, { label: "Flight fees", url: "https://files.wmich.edu/s3fs-public/2024-09/2024-2025_flight_fees_1.pdf" }, { label: "Men's XC", url: "https://wmubroncos.com/sports/mens-cross-country" }]
  }
];

const weightsDefault = { aviation: 30, athletics: 25, value: 20, climate: 10, campus: 15 };
type WeightKey = keyof typeof weightsDefault;

export default function Home() {
  const [query, setQuery] = useState("");
  const [division, setDivision] = useState("All");
  const [ratpOnly, setRatpOnly] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const [weights, setWeights] = useState(weightsDefault);
  const [sort, setSort] = useState("alpha");

  const scored = useMemo(() => schools.map(s => {
    const total = Object.values(weights).reduce((a,b) => a+b, 0) || 1;
    const score = (Object.entries(weights) as [WeightKey, number][]).reduce((sum,[k,w]) => sum + s.scores[k] * w, 0) / total;
    return { ...s, score };
  }), [weights]);
  const filtered = useMemo(() => scored.filter(s =>
    (!query || `${s.name} ${s.location} ${s.aviation}`.toLowerCase().includes(query.toLowerCase())) &&
    (division === "All" || s.division.includes(division)) && (!ratpOnly || s.ratp.startsWith("Yes"))
  ).sort((a,b) => sort === "score" ? b.score-a.score : a.name.localeCompare(b.name)), [scored, query, division, ratpOnly, sort]);
  const compare = scored.filter(s => selected.includes(s.id));
  const toggle = (id:string) => setSelected(curr => curr.includes(id) ? curr.filter(x=>x!==id) : curr.length < 3 ? [...curr,id] : curr);

  return <main>
    <header className="hero">
      <nav><a className="brand" href="#top"><span>RUNWAY</span> / ROUTES</a><a href="#directory">Directory</a><a href="#score">Score</a><a href="#method">Method</a></nav>
      <div className="hero-inner" id="top">
        <p className="eyebrow">2026 field guide · men's cross country + professional flight</p>
        <h1>Choose the school.<br/><em>Keep both dreams.</em></h1>
        <p className="lede">A decision tool for student-athletes comparing collegiate flight training, running opportunity, cost, climate and campus fit.</p>
        <div className="hero-actions"><a className="button primary" href="#directory">Explore 12 schools</a><a className="button ghost" href="#score">Build my ranking</a></div>
        <div className="hero-stats"><div><strong>12</strong><span>verified programs</span></div><div><strong>3</strong><span>athletic levels</span></div><div><strong>1,000</strong><span>hour R-ATP paths*</span></div></div>
      </div>
    </header>

    <section className="notice"><strong>Recruiting reality check</strong><p>Running marks below are planning estimates, not offers or official team standards. Cross-country courses vary, roster needs change annually, and coaches control every spot. Times are shown as <b>1600m / 3200m</b>; contact each coach with verified results.</p></section>

    <section className="section score-section" id="score">
      <div className="section-head"><div><p className="eyebrow dark">Your priorities</p><h2>Make the ranking yours.</h2></div><p>Move the weights. Every school score updates instantly; a 10 means strongest fit within this directory, not a universal grade.</p></div>
      <div className="score-grid">
        <div className="sliders">
          {(Object.keys(weights) as WeightKey[]).map(k => <label key={k}><span>{k}<b>{weights[k]}%</b></span><input aria-label={`${k} weight`} type="range" min="0" max="50" value={weights[k]} onChange={e=>setWeights({...weights,[k]:+e.target.value})}/></label>)}
          <button className="text-button" onClick={()=>setWeights(weightsDefault)}>Reset balanced weights</button>
        </div>
        <ol className="ranking">{[...scored].sort((a,b)=>b.score-a.score).slice(0,5).map((s,i)=><li key={s.id}><span className="rank">0{i+1}</span><div><strong>{s.name}</strong><small>{s.division} · {s.location}</small></div><b>{s.score.toFixed(1)}</b></li>)}</ol>
      </div>
    </section>

    {compare.length > 0 && <section className="compare-bar"><div><b>Shortlist {compare.length}/3</b><span>{compare.map(s=>s.short).join(" · ")}</span></div><a href="#compare">Compare now ↓</a></section>}

    <section className="section" id="directory">
      <div className="section-head"><div><p className="eyebrow dark">A–Z directory</p><h2>Find the right runway.</h2></div><p>Open any profile for the details, evidence links and questions to investigate.</p></div>
      <div className="filters">
        <input type="search" placeholder="Search school, city or program…" value={query} onChange={e=>setQuery(e.target.value)} aria-label="Search schools"/>
        <select value={division} onChange={e=>setDivision(e.target.value)} aria-label="Filter by division"><option>All</option><option>NCAA Division I</option><option>NCAA Division II</option><option>NAIA</option></select>
        <label className="check"><input type="checkbox" checked={ratpOnly} onChange={e=>setRatpOnly(e.target.checked)}/> R-ATP only</label>
        <select value={sort} onChange={e=>setSort(e.target.value)} aria-label="Sort schools"><option value="alpha">A–Z</option><option value="score">My score</option></select>
      </div>
      <p className="result-count">Showing {filtered.length} of {schools.length} schools</p>
      <div className="cards">{filtered.map(s=><article className="school-card" key={s.id}>
        <div className="card-top"><div className="monogram">{s.short}</div><div className="card-title"><small>{s.location}</small><h3>{s.name}</h3><p>{s.division} · {s.conference}</p></div><div className="score-pill">{s.score.toFixed(1)}<small>my score</small></div></div>
        <div className="quick"><span>R-ATP <b>{s.ratp.startsWith("Yes") ? "Yes" : "Check"}</b></span><span>Recruit est. <b>{s.times.recruit}</b></span><span>Setting <b>{s.setting.split(";")[0]}</b></span></div>
        <p className="summary">{s.notes}</p>
        <details><summary>View full profile <span>+</span></summary><div className="details-body">
          <div className="profile-grid"><div><h4>Flight program</h4><p>{s.aviation}</p></div><div><h4>R-ATP</h4><p>{s.ratp}</p></div><div><h4>Fleet & training model</h4><p>{s.fleet}</p></div><div><h4>Airline pathways</h4><p>{s.partners}</p></div><div><h4>Climate</h4><p>{s.climate}</p></div><div><h4>Campus setting</h4><p>{s.setting}</p></div><div><h4>Academic cost</h4><p>{s.cost}</p></div><div><h4>Flight cost</h4><p>{s.flightCost}</p></div></div>
          <div className="running"><div><p className="eyebrow dark">Estimated men's distance benchmarks</p><h4>{s.xc}</h4></div><div className="time"><small>Scholarship-caliber</small><b>{s.times.scholarship}</b></div><div className="time"><small>Recruit</small><b>{s.times.recruit}</b></div><div className="time"><small>Walk-on conversation</small><b>{s.times.walkon}</b></div></div>
          <div className="proscons"><div><h4>Reasons to pursue</h4><ul>{s.pros.map(x=><li key={x}>{x}</li>)}</ul></div><div><h4>Watch-outs</h4><ul>{s.cons.map(x=><li key={x}>{x}</li>)}</ul></div></div>
          <div className="sources"><b>Verify & go deeper</b>{s.sources.map(x=><a key={x.url} href={x.url} target="_blank" rel="noreferrer">{x.label} ↗</a>)}</div>
        </div></details>
        <button className={`compare-button ${selected.includes(s.id)?"active":""}`} onClick={()=>toggle(s.id)} disabled={!selected.includes(s.id)&&selected.length>=3}>{selected.includes(s.id)?"✓ Added to shortlist":"+ Add to shortlist"}</button>
      </article>)}</div>
    </section>

    {compare.length > 0 && <section className="section compare" id="compare"><div className="section-head"><div><p className="eyebrow dark">Shortlist</p><h2>Side-by-side.</h2></div><button className="text-button" onClick={()=>setSelected([])}>Clear all</button></div><div className="compare-table"><div className="compare-row header"><span>School</span>{compare.map(s=><b key={s.id}>{s.short}</b>)}</div>{[
      ["My score", ...compare.map(s=>s.score.toFixed(1))], ["Athletics", ...compare.map(s=>s.division)], ["Recruit estimate", ...compare.map(s=>s.times.recruit)], ["R-ATP", ...compare.map(s=>s.ratp.split("—")[0])], ["Aviation", ...compare.map(s=>`${s.scores.aviation}/10`)], ["Value", ...compare.map(s=>`${s.scores.value}/10`)], ["Climate", ...compare.map(s=>`${s.scores.climate}/10`)]
    ].map((row,i)=><div className="compare-row" key={i}>{row.map((v,j)=>j===0?<span key={j}>{v}</span>:<b key={j}>{v}</b>)}</div>)}</div></section>}

    <section className="method" id="method"><div><p className="eyebrow">How to use this guide</p><h2>Research narrows the field.<br/>Conversations make the decision.</h2></div><div className="steps"><div><b>01</b><h3>Check the two admissions</h3><p>University admission does not always secure a seat in Professional Flight. Ask about direct entry, waitlists and medical requirements.</p></div><div><b>02</b><h3>Email the coach</h3><p>Send verified 1600m, 3200m and 5K results, GPA, graduation year and a short race video. Ask for current roster standards.</p></div><div><b>03</b><h3>Price the whole path</h3><p>Compare net academic cost plus realistic flight completion, checkrides, equipment, summer housing and possible repeats.</p></div><div><b>04</b><h3>Test the schedule</h3><p>Ask a current athlete-pilot how flight blocks, morning practice, travel meets and weather cancellations actually coexist.</p></div></div></section>

    <section className="source-note"><h2>Evidence standard</h2><p>Profiles were refreshed in August 2026 using university aviation, athletics, FAA authorization and published cost pages. Airline agreements, fleets, fees and rosters can change without notice. Always confirm directly before applying or depositing.</p><p><b>Benchmark method:</b> planning ranges were estimated from division/conference strength, current roster context and public collegiate standards. They are deliberately labeled non-official and are not promises of admission, roster placement or aid.</p><a href="https://www.ncaa.org/eligibility-center/recruiting" target="_blank" rel="noreferrer">NCAA recruiting guidance ↗</a></section>
    <footer><a className="brand" href="#top"><span>RUNWAY</span> / ROUTES</a><p>Independent planning guide · Updated August 2026</p><a href="#top">Back to top ↑</a></footer>
  </main>
}
