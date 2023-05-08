const prlist = [
  {
    id: 1,
    count: 0,
    stock: 30,
    name: "ASO SPORT™ RECOVER",
    price: 29,
    line: "TARGET MUSCLE SORENESS",
    discription:
      "A plateau-busting workout doesn’t have to mean next-day soreness. On your toughest training days, ASO Sport™ RECOVER is your best defense against sore, strained muscles. This liquid sport supplement combines the proven lactate-blasting benefits of bioavailable oxygen with vital trace minerals — zinc, chromium, and magnesium — to help restore electrolyte balance, reduce muscle fatigue, and facilitate cellular repair.",
    img: require("./product-1.png"),
  },
  {
    id: 2,
    count: 0,
    stock: 20,
    name: "ASO SPORT™ REFLEX",
    price: 39,
    line: "IMPROVE MOBILITY",
    discription:
      "Heavy lifting and intense training can be brutal on joints and ligaments, ultimately stalling progress. Safeguard your gains with a shot of ASO Sport™ REFLEX. Optimized for joint support, this pre-workout formula contains concentrated stabilized oxygen and fortifying plant-derived minerals for improved mobility and faster recovery. REFLEX is enhanced with a blend of ionic magnesium, zinc, and GRAS-designated MSM to promote collagen production and maintain healthy inflammation response.",
    img: require("./product-2.png"),
  },
  {
    id: 3,
    count: 0,
    stock: 50,
    name: "ASO SPORT™ REFUEL",
    price: 59,
    line: "FIGHT FATIGUE",
    discription:
      "Struggling to hit all your sets before fatigue sets in? Reach for REFUEL. This O2-powered endurance booster is formulated with energizing ionic minerals to increase VO2 Max. Taken before training, REFUEL delivers a concentrated surge of bioavailable oxygen to fuel muscle metabolism and keep lactic acid at bay. Plant-based iron, chromium, and copper further improve oxygen delivery to the muscles so you can count on maximum aerobic efficiency while you workout.",
    img: require("./product-3.png"),
  },
  {
    id: 4,
    count: 0,
    stock: 20,
    name: "ASO® Activated Stabilized Oxygen",
    price: 68,
    line: "Oxygen Booster",
    discription:
      "Struggling to hit all your sets before fatigue sets in? Reach for REFUEL. This O2-powered endurance booster is formulated with energizing ionic minerals to increase VO2 Max. Taken before training, REFUEL delivers a concentrated surge of bioavailable oxygen to fuel muscle metabolism and keep lactic acid at bay. Plant-based iron, chromium, and copper further improve oxygen delivery to the muscles so you can count on maximum aerobic efficiency while you workout.",
    img: require("./product-4.png"),
  },
];

export function ProductList() {
  return prlist;
}
