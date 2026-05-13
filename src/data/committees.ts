// ============================================================================
// COMMITTEES DATA - Single source of truth for all committee information.
// Edit slugs, names, descriptions, agendas, and symbols here.
// ============================================================================

export interface Committee {
  slug: string;
  name: string;
  fullName: string;
  type: string;
  delegateCount: string;
  description: string;
  symbol: string;        // Short text symbol (roman numeral / abbreviation)
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  agenda: string;
  overview: string;
}

export const committeesData: Committee[] = [
  {
    slug: "disec",
    name: "DISEC",
    fullName: "Disarmament and International Security Committee",
    type: "General Assembly",
    delegateCount: "Single Delegate",
    description: "The First Committee of the UN General Assembly deals with disarmament, global challenges, and threats to peace.",
    symbol: "I",
    difficulty: "Beginner",
    agenda: "Regulation of Autonomous Weapons Systems and Emerging Military Technologies",
    overview: "DISEC addresses the world's most pressing security challenges. Delegates will debate the ethical and legal frameworks surrounding AI-driven warfare, lethal autonomous weapons, and their implications for global stability. This committee requires strong understanding of arms control treaties and multilateral disarmament negotiations."
  },
  {
    slug: "unsc",
    name: "UNSC",
    fullName: "United Nations Security Council",
    type: "Crisis / Specialized",
    delegateCount: "Single Delegate",
    description: "The primary UN body responsible for maintaining international peace and security with binding resolution power.",
    symbol: "II",
    difficulty: "Advanced",
    agenda: "Crisis: Geopolitical Flashpoints and Escalation Management",
    overview: "The Security Council is the UN's most powerful body, with the authority to impose sanctions, authorize military action, and establish peacekeeping operations. Delegates must navigate the complex dynamics of veto power while responding to rapidly evolving crisis scenarios. Expect high-pressure diplomacy with real-time crisis injections."
  },
  {
    slug: "unhrc",
    name: "UNHRC",
    fullName: "United Nations Human Rights Council",
    type: "General Assembly",
    delegateCount: "Single Delegate",
    description: "The principal UN body addressing human rights violations and promoting universal protection of fundamental freedoms.",
    symbol: "III",
    difficulty: "Beginner",
    agenda: "Digital Surveillance, Privacy Rights, and State Accountability in the Age of AI",
    overview: "The Human Rights Council investigates abuses, provides advisory services, and responds to emergencies across the globe. Delegates will confront the tension between national security and individual privacy, exploring how emerging technologies challenge traditional conceptions of human rights in a digital world."
  },
  {
    slug: "jcc-1",
    name: "JCC 1",
    fullName: "Joint Crisis Committee - Cabinet 1",
    type: "Crisis",
    delegateCount: "Single Delegate",
    description: "One half of a dual-committee crisis simulation where opposing cabinets engage in strategic, real-time decision-making.",
    symbol: "IV",
    difficulty: "Advanced",
    agenda: "Historical/Strategic Crisis Simulation - Details Classified",
    overview: "The Joint Crisis Committee splits delegates into two opposing cabinets that operate simultaneously. JCC 1 will represent one side of the conflict, requiring rapid strategic thinking, resource management, and creative crisis responses. This is one of the most intense committee experiences at Draft MUN, demanding quick wit and adaptability."
  },
  {
    slug: "jcc-2",
    name: "JCC 2",
    fullName: "Joint Crisis Committee - Cabinet 2",
    type: "Crisis",
    delegateCount: "Single Delegate",
    description: "The opposing cabinet in the dual-committee crisis, operating in direct strategic competition with JCC 1.",
    symbol: "V",
    difficulty: "Advanced",
    agenda: "Historical/Strategic Crisis Simulation - Details Classified",
    overview: "JCC 2 operates as the counterpart to JCC 1, representing the opposing faction in the crisis simulation. Decisions made in one cabinet directly affect the other, creating a dynamic and unpredictable debate environment. Delegates must balance offense and defense while managing internal cabinet dynamics."
  },
  {
    slug: "hcc",
    name: "HCC",
    fullName: "Historical Crisis Committee",
    type: "Crisis / Specialized",
    delegateCount: "Single Delegate",
    description: "A crisis committee set in a specific historical period, where delegates assume the roles of real historical figures.",
    symbol: "VI",
    difficulty: "Advanced",
    agenda: "To Be Announced",
    overview: "The Historical Crisis Committee transports delegates back in time to navigate a pivotal moment in world history. Each delegate portrays a real historical figure, making decisions that can alter the course of events. This committee demands deep historical knowledge, creative problem-solving, and the ability to stay in character under pressure."
  },
  {
    slug: "lok-sabha",
    name: "Lok Sabha",
    fullName: "House of the People - Parliament of India",
    type: "Regional Body",
    delegateCount: "Single Delegate",
    description: "A simulation of India's lower house of Parliament, debating critical national policy and legislation.",
    symbol: "VII",
    difficulty: "Intermediate",
    agenda: "The Uniform Civil Code and the Future of Personal Law in India",
    overview: "Lok Sabha brings the vibrant chaos of Indian parliamentary democracy to the conference floor. Delegates will represent Members of Parliament from across India's political spectrum, debating one of the most contentious policy issues in contemporary Indian politics. Expect passionate debate, cross-party negotiations, and procedural maneuvering."
  },
  {
    slug: "armageddon",
    name: "Armageddon",
    fullName: "Continuous Crisis Committee",
    type: "Crisis",
    delegateCount: "Single Delegate",
    description: "A fast-paced, continuous crisis committee with non-stop updates and rapid-fire decision making.",
    symbol: "VIII",
    difficulty: "Advanced",
    agenda: "Continuous Crisis - Scenario Classified Until Committee Session",
    overview: "Armageddon is the ultimate test of crisis management. With continuous updates flowing in every few minutes, delegates must think on their feet, form and break alliances rapidly, and make high-stakes decisions with incomplete information. There is no downtime - only relentless, escalating crises that push delegates to their limits."
  },
  {
    slug: "oic",
    name: "OIC",
    fullName: "Organisation of Islamic Cooperation",
    type: "Regional Body",
    delegateCount: "Single Delegate",
    description: "The second-largest intergovernmental organization after the UN, representing 57 member states across four continents.",
    symbol: "IX",
    difficulty: "Intermediate",
    agenda: "Addressing Islamophobia, Religious Freedom, and Interfaith Dialogue in a Globalized World",
    overview: "The OIC serves as the collective voice of the Muslim world, working to safeguard the interests and ensure the progress and well-being of the peoples of member states. Delegates will navigate the complex intersections of religion, politics, and international relations while seeking consensus across a diverse membership."
  },
  {
    slug: "un-women",
    name: "UN Women",
    fullName: "United Nations Entity for Gender Equality and the Empowerment of Women",
    type: "ECOSOC",
    delegateCount: "Single Delegate",
    description: "The UN entity dedicated to gender equality and the empowerment of women worldwide.",
    symbol: "X",
    difficulty: "Beginner",
    agenda: "Addressing Gender-Based Violence in Conflict Zones and Post-Conflict Reconstruction",
    overview: "UN Women works to ensure that women and girls have a voice and equal opportunity in all areas of life. Delegates will tackle the urgent challenge of protecting women in conflict settings, developing frameworks for post-conflict gender justice, and promoting women's meaningful participation in peace processes."
  },
  {
    slug: "copuos",
    name: "COPUOS",
    fullName: "Committee on the Peaceful Uses of Outer Space",
    type: "Specialized Agency",
    delegateCount: "Single Delegate",
    description: "The UN committee governing the exploration and use of outer space for the benefit of all humanity.",
    symbol: "XI",
    difficulty: "Intermediate",
    agenda: "Space Debris Mitigation, Orbital Traffic Management, and the Weaponization of Space",
    overview: "COPUOS addresses the legal, scientific, and technical aspects of space exploration. As low-Earth orbit becomes increasingly congested and militarized, delegates must develop international frameworks for sustainable space operations, debris removal, and the prevention of an arms race in outer space."
  },
  {
    slug: "us-senate",
    name: "US Senate",
    fullName: "United States Senate Simulation",
    type: "Regional Body",
    delegateCount: "Single Delegate",
    description: "A simulation of the upper chamber of the US Congress, debating landmark domestic and foreign policy legislation.",
    symbol: "XII",
    difficulty: "Intermediate",
    agenda: "Immigration Reform and Border Security - The Path Forward",
    overview: "The US Senate simulation places delegates in the roles of 100 senators from across the political spectrum. Delegates will navigate the unique procedural rules of the Senate, including filibusters and cloture votes, while debating one of America's most polarizing policy issues. Bipartisan coalition-building is essential."
  },
  {
    slug: "bilderberg",
    name: "Bilderberg Meeting",
    fullName: "Bilderberg Conference Simulation",
    type: "Specialized",
    delegateCount: "Single Delegate",
    description: "A simulation of the exclusive annual gathering of political leaders, experts, and industry titans under Chatham House Rules.",
    symbol: "XIII",
    difficulty: "Advanced",
    agenda: "Global Economic Restructuring in the Post-Pandemic Era",
    overview: "The Bilderberg Meeting brings together the world's most influential figures for off-the-record discussions on pressing global issues. Unlike traditional MUN committees, this simulation operates under Chatham House Rules, emphasizing candid discussion, backchannel diplomacy, and the intersection of political and economic power."
  },
  {
    slug: "ecofin",
    name: "ECOFIN",
    fullName: "Economic and Financial Committee",
    type: "General Assembly",
    delegateCount: "Single Delegate",
    description: "The Second Committee of the UN General Assembly, addressing global economic policy, development financing, and trade.",
    symbol: "XIV",
    difficulty: "Intermediate",
    agenda: "Reforming International Financial Architecture and Addressing Sovereign Debt Crises",
    overview: "ECOFIN tackles the world's most pressing economic challenges, from development financing to international trade. Delegates will debate how to modernize global financial institutions, address the growing debt burden on developing nations, and create more equitable economic frameworks for the 21st century."
  },
  {
    slug: "icj-irmct-ccpcj",
    name: "ICJ/IRMCT/CCPCJ",
    fullName: "Joint Legal Bodies Simulation",
    type: "Legal",
    delegateCount: "Single Delegate",
    description: "A combined simulation of the International Court of Justice, International Residual Mechanism, and Crime Prevention Commission.",
    symbol: "XV",
    difficulty: "Advanced",
    agenda: "Jurisdiction Over Transnational Cybercrime and Digital Evidence in International Law",
    overview: "This unique joint legal simulation brings together three of the UN's most important judicial and legal bodies. Delegates will navigate complex questions of international law, jurisdiction, and criminal accountability in the digital age. Strong legal reasoning, case-law knowledge, and persuasive argumentation are essential."
  },
  {
    slug: "fifa",
    name: "FIFA Congress",
    fullName: "Federation Internationale de Football Association Congress",
    type: "Specialized",
    delegateCount: "Single Delegate",
    description: "The supreme legislative body of world football, where member associations shape the future of the beautiful game.",
    symbol: "XVI",
    difficulty: "Beginner",
    agenda: "Governance Reform, Financial Fair Play, and the Future of the World Cup Format",
    overview: "The FIFA Congress brings the world of sport governance to the MUN floor. Delegates will represent national football associations, debating reforms to FIFA's governance structure, the expanding World Cup format, and the balance between commercial interests and the integrity of the sport. A unique and engaging committee experience."
  },
  {
    slug: "who",
    name: "WHO",
    fullName: "World Health Organization",
    type: "Specialized Agency",
    delegateCount: "Single Delegate",
    description: "The UN specialized agency directing and coordinating international health policy and pandemic preparedness.",
    symbol: "XVII",
    difficulty: "Intermediate",
    agenda: "Pandemic Treaty Negotiations and Equitable Global Health Security Architecture",
    overview: "The WHO leads global efforts to promote health, keep the world safe, and serve the vulnerable. In the aftermath of recent global health crises, delegates will negotiate the framework for a binding pandemic treaty, addressing issues of vaccine equity, early warning systems, and the balance between national sovereignty and collective health security."
  },
  {
    slug: "unga-sochum",
    name: "UNGA SOCHUM",
    fullName: "Social, Humanitarian and Cultural Committee",
    type: "General Assembly",
    delegateCount: "Single Delegate",
    description: "The Third Committee of the UNGA, addressing social, humanitarian, and human rights issues worldwide.",
    symbol: "XVIII",
    difficulty: "Beginner",
    agenda: "Climate Migration, Statelessness, and the Rights of Displaced Populations",
    overview: "SOCHUM addresses some of the most human-centric challenges facing the international community. Delegates will confront the growing crisis of climate-induced displacement, exploring legal frameworks for climate refugees, the responsibilities of host nations, and the intersection of environmental and humanitarian policy."
  },
  {
    slug: "tsppm",
    name: "TSPPM",
    fullName: "The Simulation of Past Political Movements",
    type: "Specialized",
    delegateCount: "Single Delegate",
    description: "A unique committee simulating pivotal political movements and their impact on world history.",
    symbol: "XIX",
    difficulty: "Intermediate",
    agenda: "To Be Announced",
    overview: "TSPPM offers a distinctive MUN experience by placing delegates in the roles of political activists, revolutionaries, and reformers from history. Rather than representing countries, delegates embody movements and ideologies, debating the tactics, ethics, and legacy of transformative political action."
  },
  {
    slug: "ip",
    name: "International Press",
    fullName: "International Press Corps",
    type: "Press",
    delegateCount: "Single Delegate",
    description: "The eyes and ears of the conference - journalists, photographers, and editors covering every committee in real time.",
    symbol: "XX",
    difficulty: "Intermediate",
    agenda: "Live Coverage Across All Committees",
    overview: "The International Press Corps operates differently from every other committee. Rather than debating, press delegates report on the action across all committees, producing live articles, social media content, photography, and editorial pieces. This is the ideal committee for delegates who excel at writing, storytelling, and media production."
  },
];
