type School = {
  id: string; name: string; short: string; location: string; state: string;
  division: string; conference: string; setting: string; climate: string;
  size: string; flightLocation: string;
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
    size: "About 35,200 students (Fall 2025). This is a large university with major-school facilities and crowds.",
    flightLocation: "Auburn's aviation program is part of the main university. Flight training uses the university-owned Auburn University Regional Airport, a short drive from the central campus—not a separate satellite college.",
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
    id: "baylor", name: "Baylor University", short: "BU", location: "Waco, Texas", state: "TX",
    division: "NCAA Division I", conference: "Big 12 Conference", setting: "Private Christian research university on a traditional riverside campus in a mid-sized Texas city",
    size: "About 19,858 undergraduate and graduate students (Fall 2025). It offers a major-university experience with a strong residential campus identity.",
    flightLocation: "Aviation classes are part of Baylor's main Waco campus. Flight training is conducted at the Baylor University Flight Center at Waco Regional Airport, an off-campus facility that requires personal transportation.",
    climate: "Hot summers, mild winters and long outdoor-training seasons; heat, wind and thunderstorms can affect running and flying.",
    aviation: "B.S. in Aviation Sciences, Professional Pilot concentration, with fixed-wing and helicopter options. Fixed-wing students complete private, instrument, commercial and CFI training, with a CFII or multi-engine option.",
    ratp: "Yes — qualifying fixed-wing graduates can receive a 500-hour reduction and pursue the 1,000-hour R-ATP route", fleet: "Flight training is operated for Baylor by Universal Flight Concepts. Published fixed-wing aircraft include Tecnam P2008, P2010 and multi-engine P2006 models; confirm the current fleet and dispatch availability.",
    partners: "Published pilot-pipeline partners include Southwest Destination 225°, Envoy, SkyWest, Cape Air and Mesa.",
    cost: "For 2026–27, Baylor publishes $67,756 in annual tuition and required fees, plus average room and meals near $17,222 before aid.", flightCost: "Baylor's 2026–27 fixed-wing course estimate totals about $155,895 in addition to university costs. Actual training expense varies with student progress.",
    xc: "Big 12 Division I distance program with a small, competitive men's roster. Strong national-level marks are generally needed to begin a serious recruiting conversation.",
    times: { scholarship: "4:08 / 8:55", recruit: "4:15 / 9:12", walkon: "4:23 / 9:30" },
    pros: ["Professional Pilot degree with a 1,000-hour R-ATP route", "Southwest and regional-airline pathways", "Big 12 athletics and a strong traditional campus experience"],
    cons: ["Very high tuition plus published flight-course costs", "Limited and competitive flight slots", "Airport transportation must fit around practice and team travel"],
    notes: "A strong aviation and campus option for an academically qualified, high-level Division I runner; cost and admission to a limited flight slot are the biggest questions.",
    scores: { aviation: 9, athletics: 9, value: 4, climate: 7, campus: 9 },
    sources: [{ label: "Professional Pilot", url: "https://aviation.ecs.baylor.edu/undergraduate-programs/bachelor-science-aviation-sciences/aviation-sciences/professional-pilot" }, { label: "Flight costs", url: "https://aviation.ecs.baylor.edu/about-us/baylor-university-flight-center/flight-training-costs" }, { label: "Airline partners", url: "https://aviation.ecs.baylor.edu/about-us/institutional-memberships-and-program-partners" }, { label: "Men's XC", url: "https://baylorbears.com/sports/cross-country" }]
  },
  {
    id: "erau-daytona", name: "Embry-Riddle Aeronautical University — Daytona Beach", short: "ERAU-D", location: "Daytona Beach, Florida", state: "FL",
    division: "NCAA Division II", conference: "Sunshine State Conference", setting: "Small aviation-centered campus near the coast and an international airport",
    size: "About 8,750 students at the Daytona Beach residential campus (Fall 2025, undergraduate and graduate).",
    flightLocation: "Flight operations are at Daytona Beach International Airport, directly beside the main Daytona Beach campus. Students do not commute to a separate satellite campus.",
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
    size: "About 3,270 students at the Prescott residential campus (Fall 2025, undergraduate and graduate).",
    flightLocation: "Academic classes are on the main Prescott campus. Flight training is at Prescott Regional Airport, reached by a short drive; it is an off-campus flight facility, not another university campus.",
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
    size: "About 3,800 full-time, degree-seeking undergraduates (Fall 2025). It has a smaller, STEM-focused college feel.",
    flightLocation: "Classes are based at the main Melbourne campus. FIT Aviation operates at Melbourne Orlando International Airport about 2.5 miles away, so flight students make a short off-campus trip.",
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
    size: "About 24,930 students at the Kent Campus (Fall 2025); the full Kent State system enrolled about 33,319.",
    flightLocation: "The degree is based at the main Kent Campus. Flying happens at the university-owned Kent State University Airport in nearby Stow, a short drive away—not at a separate academic satellite campus.",
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
    size: "About 12,145 students (Fall 2025). It is a mid-sized university in a small college town.",
    flightLocation: "Academic classes are on Louisiana Tech's main Ruston campus. Flight operations are headquartered at Ruston Regional Airport, an off-campus facility a short drive east of town.",
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
    size: "About 20,500 students (2024–25). It offers a large-campus experience without being as huge as Purdue or Auburn.",
    flightLocation: "Aerospace classes are part of MTSU's main Murfreesboro campus. Aircraft and flight labs operate at Murfreesboro Municipal Airport, a short drive north of campus.",
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
    size: "About 15,720 students (Fall 2025). It is a mid-sized regional public university.",
    flightLocation: "Aviation academics are connected to the main Mankato campus. Hands-on flight training is provided with North Star Aviation at Mankato Regional Airport, an off-campus airport a short drive away.",
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
    size: "About 58,000 students across Purdue's West Lafayette and Indianapolis locations (Fall 2024); Professional Flight is based in West Lafayette.",
    flightLocation: "This is a true main-campus flight setup. Purdue University Airport sits on the West Lafayette campus, so flight students do not travel to a satellite aviation campus.",
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
    size: "About 11,785 students (Fall 2025). It is a mid-sized university with a smaller-town atmosphere.",
    flightLocation: "Aviation is part of the main Carbondale university. Flight instruction takes place at Southern Illinois Airport, a nearby off-campus airport reached by a short drive.",
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
    size: "About 15,844 students (Fall 2025). The university is mid-sized, while its flight operation is unusually large.",
    flightLocation: "Aviation classes belong to UND's main Grand Forks campus. Most flight operations are at Grand Forks International Airport about 5 miles west, with regular transportation needed between campus and the airport.",
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
    size: "About 17,331 students (Fall 2025). It is a mid-sized public university.",
    flightLocation: "This is the clearest satellite-campus setup in the guide. Most students live and take general classes at the main Kalamazoo campus, while the College of Aviation and flight line are at W.K. Kellogg Airport in Battle Creek, about 25 miles away.",
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

export default function Home() {
  return <main>
    <header className="topbar" id="top"><div className="topbar-inner"><a className="brand" href="#top"><span className="brand-mark">R</span><span>Runway Routes</span></a><span className="top-label">College guide</span></div></header>

    <section className="intro"><div className="intro-copy"><p className="kicker">For runners who want to fly</p><h1>College cross country.<br/>Professional flight training.<br/><span>One school.</span></h1><p>This guide introduces 13 colleges where a male student can study to become a professional pilot and compete in cross country. Read through the schools, talk with your family, and contact the flight program and coach before making a decision.</p><a className="primary-link" href="#schools">See the schools ↓</a></div><aside className="intro-card"><div className="plane-icon">✈</div><strong>What to compare</strong><ul><li>Can I realistically make the running team?</li><li>Can my family afford tuition and flight fees?</li><li>Will I enjoy the campus and weather?</li><li>Can flight lessons fit around practice and meets?</li></ul></aside></section>

    <section className="definitions"><div><span>Quick definitions</span><h2>Know the basics before you start.</h2></div><div className="definition-grid"><article><b>R-ATP</b><p>A Restricted Airline Transport Pilot certificate. An approved college program may let a graduate qualify for an airline first-officer job with fewer than the usual 1,500 flight hours—often 1,000 or 1,250.</p><p><strong>Why it matters:</strong> Requiring 250 or 500 fewer hours can shorten the time between college and airline eligibility and may reduce the cost of building those hours. It is not automatic: the student must complete the correct FAA-approved degree, courses and flight training.</p></article><article><b>Part 141</b><p>An FAA-approved flight-school structure with an organized curriculum and regular progress checks. It can make training more efficient, but each student still has to meet FAA standards.</p><p><strong>Why it matters:</strong> The structured program can help a student stay on schedule and may allow some certificates with fewer minimum flight hours than ordinary Part 61 training. For many college pilots, qualifying Part 141 coursework is also part of earning the R-ATP hour reduction.</p></article><article><b>Walk-on</b><p>A student who joins a college team without an athletic scholarship. A coach must still approve the roster spot, and space can change every year.</p></article><article><b>Recruit</b><p>An athlete a coach actively wants on the team. Recruiting interest does not always mean athletic scholarship money.</p></article><article><b>Main campus vs. satellite</b><p>A main-campus airport is on or beside the primary college. A nearby airport requires a short trip but is still part of the same program. A satellite aviation campus can require a longer daily commute, so transportation and practice timing matter.</p></article></div></section>

    <section className="recruit-note"><span>About the running times</span><p>Each profile shows estimated <b>1600m / 3200m</b> track times. These are planning ranges, not official standards or promises. Cross-country courses are different from one another, team needs change, and the coach makes the final decision. Always email the coach with verified race results.</p></section>

    <section className="school-list" id="schools"><div className="list-heading"><p className="kicker">Alphabetical school list</p><h2>Explore all 13 programs.</h2><p>Every card includes the same topics so the schools are easier to understand and compare.</p></div>
      {schools.map((s,index)=><article className="school-post" key={s.id}>
        <header className="post-header"><div className="avatar">{s.short.slice(0,3)}</div><div><p className="post-number">School {String(index+1).padStart(2,"0")} of {schools.length}</p><h3>{s.name}</h3><p className="post-meta">📍 {s.location} · {s.division} · {s.conference}</p></div></header>
        <p className="takeaway">{s.notes}</p>
        <div className="tag-row"><span>✈ Professional flight</span><span>🏃 Men's cross country</span><span>🎓 {s.ratp.startsWith("Yes") ? "R-ATP eligible" : "Confirm R-ATP"}</span></div>
        <div className="info-grid"><section><h4>Flight program</h4><p>{s.aviation}</p></section><section><h4>R-ATP path</h4><p>{s.ratp}</p></section><section><h4>School size</h4><p>{s.size}</p></section><section><h4>Where flight training happens</h4><p>{s.flightLocation}</p></section><section><h4>Aircraft and training</h4><p>{s.fleet}</p></section><section><h4>Airline connections</h4><p>{s.partners}</p></section><section><h4>Campus and weather</h4><p>{s.setting}. {s.climate}</p></section><section><h4>What could it cost?</h4><p>{s.cost} {s.flightCost}</p></section></div>
        <section className="running-box"><div><h4>Men's cross country</h4><p>{s.xc}</p></div><div className="times"><span><small>Scholarship-level estimate</small><b>{s.times.scholarship}</b></span><span><small>Recruit estimate</small><b>{s.times.recruit}</b></span><span><small>Walk-on conversation</small><b>{s.times.walkon}</b></span></div><p className="time-help">Times are shown as 1600m / 3200m. “Scholarship-level” means fast enough to potentially discuss athletic aid; it does not guarantee money.</p></section>
        <div className="pros-cons"><section><h4>👍 Reasons to consider it</h4><ul>{s.pros.map(x=><li key={x}>{x}</li>)}</ul></section><section><h4>⚠ Things to think about</h4><ul>{s.cons.map(x=><li key={x}>{x}</li>)}</ul></section></div>
        <footer className="post-footer"><span>Official links</span>{s.sources.map(x=><a key={x.url} href={x.url} target="_blank" rel="noreferrer">{x.label} ↗</a>)}</footer>
      </article>)}
    </section>

    <section className="next-steps"><div><p className="kicker">What to do next</p><h2>Turn the list into a real plan.</h2></div><ol><li><b>Pick five schools.</b><span>Choose a mix of exciting reaches and realistic options.</span></li><li><b>Email each coach.</b><span>Include your verified times, GPA, graduation year, training background, and a link to results.</span></li><li><b>Call each flight program.</b><span>Ask about waitlists, total flight costs, aircraft availability, R-ATP rules, and the FAA medical certificate.</span></li><li><b>Visit your finalists.</b><span>Meet the coach, tour the airport, and ask a current student-athlete how the schedules work together.</span></li></ol></section>

    <section className="source-note"><h2>Use this as a starting point.</h2><p>The information was refreshed in August 2026 from university aviation, athletics, FAA authorization, and published cost pages. Fleets, fees, airline agreements, and team rosters can change. Confirm the details directly before applying or paying a deposit.</p><a href="https://www.ncaa.org/eligibility-center/recruiting" target="_blank" rel="noreferrer">Read NCAA recruiting guidance ↗</a></section>
    <footer className="site-footer"><a className="brand" href="#top"><span className="brand-mark">R</span><span>Runway Routes</span></a><p>Independent college planning guide · Updated August 2026</p><a href="#top">Back to top ↑</a></footer>
  </main>
}
