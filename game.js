/**
 * ============================================================================
 * COZY MARKET SORT — Complete Standalone iPad & iPhone PWA Engine
 * ============================================================================
 * Personalization Configuration (Edit anytime or via the in-game Settings button):
 */
const PERSONALIZATION = {
  defaultMarketTitle: "Katlyn's Cozy Corner",
  welcomeSubtitle: "Take your time, relax, and enjoy stocking the shelves!",
  themeUnlockNote: "A brand new market aisle is open for you to explore!",
  grandFinaleMessage:
    "Congratulations on mastering all 500 levels! Every market around the world and every cat outfit is yours to enjoy anytime in Relax Mode.",
};

const HINT_COSTS = {
  SPOTLIGHT: 25,
  SHUFFLE: 40,
  AUTO_PACK: 75,
};

/**
 * 7 International Store Themes with 12 Signature Items Each (84 Total Items)
 */
const STORE_THEMES = [
  {
    id: 'american',
    name: 'American Supermarket',
    shortName: 'Supermarket',
    subtitle: 'Classic hometown grocery aisles & pantry favorites',
    flagEmoji: '🇺🇸',
    unlockStars: 0,
    containerName: 'Brown Kraft Grocery Bag',
    containerPrimary: '#b45309',
    containerSecondary: '#fde68a',
    palette: {
      wallBg: '#fffbeb',
      wallPattern: '#fef3c7',
      awningPrimary: '#dc2626',
      awningSecondary: '#ffffff',
      shelfWoodTop: '#d97706',
      shelfWoodFront: '#92400e',
      shelfBackboard: '#451a03',
      shelfShadow: '#290f02',
    },
    items: [
      { id: 'am-milk', slotIndex: 0, name: 'Fresh Milk Carton', shape: 'tall-carton', primaryColor: '#3b82f6', secondaryColor: '#eff6ff', accentColor: '#1d4ed8', labelText: 'MILK' },
      { id: 'am-cereal', slotIndex: 1, name: 'Honey O’s Cereal', shape: 'wide-box', primaryColor: '#f59e0b', secondaryColor: '#fef3c7', accentColor: '#dc2626', labelText: 'OATS' },
      { id: 'am-ketchup', slotIndex: 2, name: 'Tomato Ketchup', shape: 'squeeze-bottle', primaryColor: '#dc2626', secondaryColor: '#fef2f2', accentColor: '#15803d', labelText: 'TOMATO' },
      { id: 'am-pb', slotIndex: 3, name: 'Creamy Peanut Butter', shape: 'round-jar', primaryColor: '#d97706', secondaryColor: '#fef3c7', accentColor: '#dc2626', labelText: 'PB' },
      { id: 'am-soup', slotIndex: 4, name: 'Condensed Tomato Soup', shape: 'tin-can', primaryColor: '#ef4444', secondaryColor: '#ffffff', accentColor: '#f59e0b', labelText: 'SOUP' },
      { id: 'am-chips', slotIndex: 5, name: 'Classic Potato Chips', shape: 'crinkle-bag', primaryColor: '#eab308', secondaryColor: '#fef9c3', accentColor: '#dc2626', labelText: 'CHIPS' },
      { id: 'am-cola', slotIndex: 6, name: 'Sparkling Cherry Cola', shape: 'soda-can', primaryColor: '#e11d48', secondaryColor: '#ffe4e6', accentColor: '#ffffff', labelText: 'COLA' },
      { id: 'am-bread', slotIndex: 7, name: 'Wonder Sandwich Loaf', shape: 'bread-loaf', primaryColor: '#f59e0b', secondaryColor: '#ffffff', accentColor: '#3b82f6', labelText: 'BREAD' },
      { id: 'am-oj', slotIndex: 8, name: 'Sunny Orange Juice', shape: 'jug-handle', primaryColor: '#f97316', secondaryColor: '#ffedd5', accentColor: '#16a34a', labelText: 'OJ' },
      { id: 'am-eggs', slotIndex: 9, name: 'Farm Fresh Eggs', shape: 'egg-carton', primaryColor: '#a8a29e', secondaryColor: '#fafaf9', accentColor: '#eab308', labelText: 'EGGS' },
      { id: 'am-cookies', slotIndex: 10, name: 'Choco Chip Cookies', shape: 'pastry-dome', primaryColor: '#2563eb', secondaryColor: '#dbeafe', accentColor: '#78350f', labelText: 'CHOCO' },
      { id: 'am-mac', slotIndex: 11, name: 'Cheddar Mac & Cheese', shape: 'bowl-cup', primaryColor: '#fbbf24', secondaryColor: '#1e3a8a', accentColor: '#ffffff', labelText: 'MAC' },
    ],
  },
  {
    id: 'farmers',
    name: 'Cozy Farmers Market',
    shortName: 'Farmers Market',
    subtitle: 'Sunlit organic farmstand, local honey & fresh harvest',
    flagEmoji: '🌻',
    unlockStars: 8,
    containerName: 'Woven Wicker Basket',
    containerPrimary: '#a16207',
    containerSecondary: '#fef08a',
    palette: {
      wallBg: '#f7fee7',
      wallPattern: '#ecfccb',
      awningPrimary: '#15803d',
      awningSecondary: '#fefce8',
      shelfWoodTop: '#a16207',
      shelfWoodFront: '#713f12',
      shelfBackboard: '#365314',
      shelfShadow: '#1a2e05',
    },
    items: [
      { id: 'fm-cider', slotIndex: 0, name: 'Orchard Apple Cider', shape: 'tall-carton', primaryColor: '#b45309', secondaryColor: '#fef3c7', accentColor: '#dc2626', labelText: 'CIDER' },
      { id: 'fm-berries', slotIndex: 1, name: 'Sweet Strawberries', shape: 'wide-box', primaryColor: '#e11d48', secondaryColor: '#dcfce7', accentColor: '#16a34a', labelText: 'BERRY' },
      { id: 'fm-honey', slotIndex: 2, name: 'Golden Honey Bear', shape: 'squeeze-bottle', primaryColor: '#f59e0b', secondaryColor: '#fef9c3', accentColor: '#78350f', labelText: 'HONEY' },
      { id: 'fm-pickles', slotIndex: 3, name: 'Crunchy Dill Pickles', shape: 'round-jar', primaryColor: '#16a34a', secondaryColor: '#dcfce7', accentColor: '#86efac', labelText: 'DILL' },
      { id: 'fm-jam', slotIndex: 4, name: 'Wild Blackberry Jam', shape: 'tin-can', primaryColor: '#7e22ce', secondaryColor: '#f3e8ff', accentColor: '#f43f5e', labelText: 'JAM' },
      { id: 'fm-lavender', slotIndex: 5, name: 'Dried Lavender Satchel', shape: 'crinkle-bag', primaryColor: '#9333ea', secondaryColor: '#f5f3ff', accentColor: '#15803d', labelText: 'HERBS' },
      { id: 'fm-kombucha', slotIndex: 6, name: 'Ginger Peach Kombucha', shape: 'soda-can', primaryColor: '#fb923c', secondaryColor: '#ffedd5', accentColor: '#0d9488', labelText: 'BUCHA' },
      { id: 'fm-sourdough', slotIndex: 7, name: 'Artisan Sourdough Boule', shape: 'bread-loaf', primaryColor: '#b45309', secondaryColor: '#fef3c7', accentColor: '#78350f', labelText: 'BOULE' },
      { id: 'fm-maple', slotIndex: 8, name: 'Pure Vermont Maple Syrup', shape: 'jug-handle', primaryColor: '#9a3412', secondaryColor: '#ffedd5', accentColor: '#dc2626', labelText: 'MAPLE' },
      { id: 'fm-tomatoes', slotIndex: 9, name: 'Heirloom Tomatoes Crate', shape: 'egg-carton', primaryColor: '#ef4444', secondaryColor: '#fef2f2', accentColor: '#eab308', labelText: 'VINE' },
      { id: 'fm-pie', slotIndex: 10, name: 'Homestyle Lattice Pie', shape: 'pastry-dome', primaryColor: '#d97706', secondaryColor: '#fde68a', accentColor: '#b91c1c', labelText: 'PIE' },
      { id: 'fm-goat', slotIndex: 11, name: 'Herbed Goat Cheese Tub', shape: 'bowl-cup', primaryColor: '#0d9488', secondaryColor: '#f0fdfa', accentColor: '#15803d', labelText: 'CHÈVRE' },
    ],
  },
  {
    id: 'japanese',
    name: 'Japanese Konbini',
    shortName: 'Konbini Market',
    subtitle: 'Tokyo corner shop treats, bento, onigiri & matcha',
    flagEmoji: '🇯🇵',
    unlockStars: 18,
    containerName: 'Konbini Shopping Basket',
    containerPrimary: '#0284c7',
    containerSecondary: '#e0f2fe',
    palette: {
      wallBg: '#f0f9ff',
      wallPattern: '#e0f2fe',
      awningPrimary: '#0284c7',
      awningSecondary: '#22c55e',
      shelfWoodTop: '#64748b',
      shelfWoodFront: '#334155',
      shelfBackboard: '#1e293b',
      shelfShadow: '#0f172a',
    },
    items: [
      { id: 'jp-matcha', slotIndex: 0, name: 'Iced Matcha Latte', shape: 'tall-carton', primaryColor: '#16a34a', secondaryColor: '#dcfce7', accentColor: '#14532d', labelText: 'MATCHA' },
      { id: 'jp-pocky', slotIndex: 1, name: 'Strawberry Pocky Sticks', shape: 'wide-box', primaryColor: '#f43f5e', secondaryColor: '#ffe4e6', accentColor: '#be123c', labelText: 'POCKY' },
      { id: 'jp-soy', slotIndex: 2, name: 'Brewed Soy Sauce', shape: 'squeeze-bottle', primaryColor: '#451a03', secondaryColor: '#fef3c7', accentColor: '#dc2626', labelText: 'SHOYU' },
      { id: 'jp-plum', slotIndex: 3, name: 'Umeboshi Pickled Plum', shape: 'round-jar', primaryColor: '#be185d', secondaryColor: '#fce7f3', accentColor: '#f43f5e', labelText: 'UME' },
      { id: 'jp-coffee', slotIndex: 4, name: 'Boss Canned Coffee', shape: 'tin-can', primaryColor: '#1d4ed8', secondaryColor: '#dbeafe', accentColor: '#f59e0b', labelText: 'COFFEE' },
      { id: 'jp-senbei', slotIndex: 5, name: 'Nori Rice Crackers', shape: 'crinkle-bag', primaryColor: '#059669', secondaryColor: '#d1fae5', accentColor: '#f59e0b', labelText: 'SENBEI' },
      { id: 'jp-ramune', slotIndex: 6, name: 'Ramune Marble Soda', shape: 'soda-can', primaryColor: '#06b6d4', secondaryColor: '#cffafe', accentColor: '#ec4899', labelText: 'RAMUNE' },
      { id: 'jp-melonpan', slotIndex: 7, name: 'Crispy Melonpan Bun', shape: 'bread-loaf', primaryColor: '#facc15', secondaryColor: '#fef9c3', accentColor: '#ca8a04', labelText: 'MELON' },
      { id: 'jp-sake', slotIndex: 8, name: 'Junmai Sake Carafe', shape: 'jug-handle', primaryColor: '#0f766e', secondaryColor: '#ccfbf1', accentColor: '#f59e0b', labelText: 'SAKE' },
      { id: 'jp-bento', slotIndex: 9, name: 'Salmon Makunouchi Bento', shape: 'egg-carton', primaryColor: '#dc2626', secondaryColor: '#1e293b', accentColor: '#fb923c', labelText: 'BENTO' },
      { id: 'jp-onigiri', slotIndex: 10, name: 'Nori Onigiri Rice Ball', shape: 'pastry-dome', primaryColor: '#f8fafc', secondaryColor: '#0f172a', accentColor: '#ef4444', labelText: 'UME' },
      { id: 'jp-ramen', slotIndex: 11, name: 'Tonkotsu Cup Noodle', shape: 'bowl-cup', primaryColor: '#ef4444', secondaryColor: '#ffffff', accentColor: '#eab308', labelText: 'RAMEN' },
    ],
  },
  {
    id: 'french',
    name: 'French Boulangerie',
    shortName: 'Boulangerie',
    subtitle: 'Parisian patisserie, warm croissants, macarons & brie',
    flagEmoji: '🇫🇷',
    unlockStars: 30,
    containerName: 'Ribboned Patisserie Box',
    containerPrimary: '#ec4899',
    containerSecondary: '#fdf2f8',
    palette: {
      wallBg: '#fdf2f8',
      wallPattern: '#fce7f3',
      awningPrimary: '#be185d',
      awningSecondary: '#fff1f2',
      shelfWoodTop: '#b45309',
      shelfWoodFront: '#78350f',
      shelfBackboard: '#500724',
      shelfShadow: '#3b0764',
    },
    items: [
      { id: 'fr-cream', slotIndex: 0, name: 'Normandy Crème Entière', shape: 'tall-carton', primaryColor: '#2563eb', secondaryColor: '#eff6ff', accentColor: '#dc2626', labelText: 'CRÈME' },
      { id: 'fr-macaron', slotIndex: 1, name: 'Pastel Macaron Coffret', shape: 'wide-box', primaryColor: '#ec4899', secondaryColor: '#fdf2f8', accentColor: '#14b8a6', labelText: 'PARIS' },
      { id: 'fr-dijon', slotIndex: 2, name: 'Moutarde de Dijon', shape: 'squeeze-bottle', primaryColor: '#eab308', secondaryColor: '#fef9c3', accentColor: '#713f12', labelText: 'DIJON' },
      { id: 'fr-confiture', slotIndex: 3, name: 'Bonne Maman Apricot', shape: 'round-jar', primaryColor: '#f97316', secondaryColor: '#ffedd5', accentColor: '#dc2626', labelText: 'ABRICOT' },
      { id: 'fr-espresso', slotIndex: 4, name: 'Café de Paris Tin', shape: 'tin-can', primaryColor: '#312e81', secondaryColor: '#e0e7ff', accentColor: '#f59e0b', labelText: 'CAFÉ' },
      { id: 'fr-madeleine', slotIndex: 5, name: 'Golden Shell Madeleines', shape: 'crinkle-bag', primaryColor: '#f59e0b', secondaryColor: '#fef3c7', accentColor: '#9d174d', labelText: 'DOUX' },
      { id: 'fr-perrier', slotIndex: 6, name: 'Sparkling Mineral Water', shape: 'soda-can', primaryColor: '#15803d', secondaryColor: '#dcfce7', accentColor: '#facc15', labelText: 'BULLES' },
      { id: 'fr-baguette', slotIndex: 7, name: 'Golden Demi-Baguette', shape: 'bread-loaf', primaryColor: '#d97706', secondaryColor: '#fef3c7', accentColor: '#92400e', labelText: 'PAIN' },
      { id: 'fr-syrup', slotIndex: 8, name: 'Grenadine Berry Sirop', shape: 'jug-handle', primaryColor: '#e11d48', secondaryColor: '#ffe4e6', accentColor: '#881337', labelText: 'SIROP' },
      { id: 'fr-butter', slotIndex: 9, name: 'Beurre Demi-Sel Block', shape: 'egg-carton', primaryColor: '#facc15', secondaryColor: '#fefce8', accentColor: '#1d4ed8', labelText: 'BEURRE' },
      { id: 'fr-croissant', slotIndex: 10, name: 'Flaky Butter Croissant', shape: 'pastry-dome', primaryColor: '#f59e0b', secondaryColor: '#fde68a', accentColor: '#b45309', labelText: 'BEURRE' },
      { id: 'fr-brie', slotIndex: 11, name: 'Creamy Brie de Meaux', shape: 'bowl-cup', primaryColor: '#fde047', secondaryColor: '#ffffff', accentColor: '#dc2626', labelText: 'BRIE' },
    ],
  },
  {
    id: 'italian',
    name: 'Italian Trattoria & Deli',
    shortName: 'Italian Deli',
    subtitle: 'Tuscan olive oil, bronze-die pasta, pesto & gelato',
    flagEmoji: '🇮🇹',
    unlockStars: 44,
    containerName: 'Rustic Tuscan Crate',
    containerPrimary: '#15803d',
    containerSecondary: '#dcfce7',
    palette: {
      wallBg: '#fff7ed',
      wallPattern: '#ffedd5',
      awningPrimary: '#15803d',
      awningSecondary: '#dc2626',
      shelfWoodTop: '#9a3412',
      shelfWoodFront: '#7c2d12',
      shelfBackboard: '#431407',
      shelfShadow: '#270b03',
    },
    items: [
      { id: 'it-milk', slotIndex: 0, name: 'Latte Intero Fresco', shape: 'tall-carton', primaryColor: '#0284c7', secondaryColor: '#f0f9ff', accentColor: '#16a34a', labelText: 'LATTE' },
      { id: 'it-pasta', slotIndex: 1, name: 'Bronze-Die Farfalle', shape: 'wide-box', primaryColor: '#1e3a8a', secondaryColor: '#fef3c7', accentColor: '#dc2626', labelText: 'PASTA' },
      { id: 'it-balsamic', slotIndex: 2, name: 'Aceto Balsamico Glaze', shape: 'squeeze-bottle', primaryColor: '#3b0764', secondaryColor: '#f3e8ff', accentColor: '#ca8a04', labelText: 'MODENA' },
      { id: 'it-pesto', slotIndex: 3, name: 'Genovese Basil Pesto', shape: 'round-jar', primaryColor: '#15803d', secondaryColor: '#dcfce7', accentColor: '#eab308', labelText: 'PESTO' },
      { id: 'it-tomato', slotIndex: 4, name: 'San Marzano Pelati', shape: 'tin-can', primaryColor: '#dc2626', secondaryColor: '#fef2f2', accentColor: '#15803d', labelText: 'ROMA' },
      { id: 'it-grissini', slotIndex: 5, name: 'Rosemary Breadsticks', shape: 'crinkle-bag', primaryColor: '#d97706', secondaryColor: '#fffbeb', accentColor: '#15803d', labelText: 'TORINO' },
      { id: 'it-chinotto', slotIndex: 6, name: 'Aranciata Rossa Soda', shape: 'soda-can', primaryColor: '#ea580c', secondaryColor: '#ffedd5', accentColor: '#16a34a', labelText: 'ROSSA' },
      { id: 'it-ciabatta', slotIndex: 7, name: 'Crusty Olive Ciabatta', shape: 'bread-loaf', primaryColor: '#ca8a04', secondaryColor: '#fef9c3', accentColor: '#713f12', labelText: 'PANE' },
      { id: 'it-oliveoil', slotIndex: 8, name: 'Extra Virgin Olive Oil', shape: 'jug-handle', primaryColor: '#65a30d', secondaryColor: '#ecfccb', accentColor: '#ca8a04', labelText: 'OLIO' },
      { id: 'it-parm', slotIndex: 9, name: 'Parmigiano Reggiano', shape: 'egg-carton', primaryColor: '#eab308', secondaryColor: '#fef08a', accentColor: '#b45309', labelText: '24 MESI' },
      { id: 'it-cannoli', slotIndex: 10, name: 'Sicilian Ricotta Cannoli', shape: 'pastry-dome', primaryColor: '#b45309', secondaryColor: '#fef3c7', accentColor: '#16a34a', labelText: 'DOLCE' },
      { id: 'it-gelato', slotIndex: 11, name: 'Pistachio Gelato Coppa', shape: 'bowl-cup', primaryColor: '#22c55e', secondaryColor: '#f0fdf4', accentColor: '#be123c', labelText: 'GELATO' },
    ],
  },
  {
    id: 'mexican',
    name: 'Mexican Mercado',
    shortName: 'Mercado',
    subtitle: 'Vibrant panadería conchas, aguas frescas & salsas',
    flagEmoji: '🇲🇽',
    unlockStars: 60,
    containerName: 'Colorful Mercado Tote',
    containerPrimary: '#db2777',
    containerSecondary: '#fce7f3',
    palette: {
      wallBg: '#fefce8',
      wallPattern: '#fef08a',
      awningPrimary: '#d97706',
      awningSecondary: '#db2777',
      shelfWoodTop: '#b45309',
      shelfWoodFront: '#78350f',
      shelfBackboard: '#451a03',
      shelfShadow: '#290f02',
    },
    items: [
      { id: 'mx-horchata', slotIndex: 0, name: 'Cinnamon Horchata Carton', shape: 'tall-carton', primaryColor: '#f59e0b', secondaryColor: '#fffbeb', accentColor: '#b45309', labelText: 'CANELA' },
      { id: 'mx-choco', slotIndex: 1, name: 'Abuelita Hot Chocolate', shape: 'wide-box', primaryColor: '#dc2626', secondaryColor: '#fef08a', accentColor: '#78350f', labelText: 'CACAO' },
      { id: 'mx-tajin', slotIndex: 2, name: 'Chili Lime Seasoning', shape: 'squeeze-bottle', primaryColor: '#b91c1c', secondaryColor: '#fef2f2', accentColor: '#16a34a', labelText: 'LIMÓN' },
      { id: 'mx-verde', slotIndex: 3, name: 'Tomatillo Salsa Verde', shape: 'round-jar', primaryColor: '#16a34a', secondaryColor: '#dcfce7', accentColor: '#dc2626', labelText: 'VERDE' },
      { id: 'mx-jalapeno', slotIndex: 4, name: 'Pickled Jalapeños Can', shape: 'tin-can', primaryColor: '#15803d', secondaryColor: '#fef9c3', accentColor: '#ea580c', labelText: 'CHILES' },
      { id: 'mx-totopos', slotIndex: 5, name: 'Cantina Tortilla Chips', shape: 'crinkle-bag', primaryColor: '#eab308', secondaryColor: '#fef08a', accentColor: '#dc2626', labelText: 'MAÍZ' },
      { id: 'mx-jarritos', slotIndex: 6, name: 'Mandarin Fiesta Soda', shape: 'soda-can', primaryColor: '#f97316', secondaryColor: '#ffedd5', accentColor: '#15803d', labelText: 'SODA' },
      { id: 'mx-concha', slotIndex: 7, name: 'Pink Pan Dulce Concha', shape: 'bread-loaf', primaryColor: '#ec4899', secondaryColor: '#fce7f3', accentColor: '#b45309', labelText: 'CONCHA' },
      { id: 'mx-jamaica', slotIndex: 8, name: 'Hibiscus Agua de Jamaica', shape: 'jug-handle', primaryColor: '#be123c', secondaryColor: '#ffe4e6', accentColor: '#16a34a', labelText: 'FLORES' },
      { id: 'mx-avocado', slotIndex: 9, name: 'Hass Avocado Trio Pack', shape: 'egg-carton', primaryColor: '#166534', secondaryColor: '#dcfce7', accentColor: '#84cc16', labelText: 'FRESH' },
      { id: 'mx-tamale', slotIndex: 10, name: 'Warm Corn Husk Tamales', shape: 'pastry-dome', primaryColor: '#eab308', secondaryColor: '#fef9c3', accentColor: '#dc2626', labelText: 'TAMAL' },
      { id: 'mx-queso', slotIndex: 11, name: 'Queso Fresco Wheel', shape: 'bowl-cup', primaryColor: '#0284c7', secondaryColor: '#ffffff', accentColor: '#16a34a', labelText: 'QUESO' },
    ],
  },
  {
    id: 'british',
    name: 'British Corner Shop',
    shortName: 'Tea & Corner Shop',
    subtitle: 'Cozy high-street tea room, shortbread, marmalade & scones',
    flagEmoji: '🇬🇧',
    unlockStars: 80,
    containerName: 'Royal Tea Hamper',
    containerPrimary: '#1e3a8a',
    containerSecondary: '#dbeafe',
    palette: {
      wallBg: '#f0fdfa',
      wallPattern: '#ccfbf1',
      awningPrimary: '#1e3a8a',
      awningSecondary: '#dc2626',
      shelfWoodTop: '#0f766e',
      shelfWoodFront: '#115e59',
      shelfBackboard: '#134e4a',
      shelfShadow: '#042f2e',
    },
    items: [
      { id: 'uk-custard', slotIndex: 0, name: 'Devonshire Pouring Custard', shape: 'tall-carton', primaryColor: '#facc15', secondaryColor: '#fef9c3', accentColor: '#dc2626', labelText: 'CUSTARD' },
      { id: 'uk-shortbread', slotIndex: 1, name: 'Highland Tartan Shortbread', shape: 'wide-box', primaryColor: '#dc2626', secondaryColor: '#fef2f2', accentColor: '#1e3a8a', labelText: 'SCOTS' },
      { id: 'uk-hp', slotIndex: 2, name: 'Classic Brown Sauce', shape: 'squeeze-bottle', primaryColor: '#78350f', secondaryColor: '#dbeafe', accentColor: '#1e3a8a', labelText: 'SAUCE' },
      { id: 'uk-marmalade', slotIndex: 3, name: 'Seville Orange Marmalade', shape: 'round-jar', primaryColor: '#f97316', secondaryColor: '#ffedd5', accentColor: '#1e3a8a', labelText: 'OXFORD' },
      { id: 'uk-tea', slotIndex: 4, name: 'Earl Grey Loose Leaf Caddy', shape: 'tin-can', primaryColor: '#0284c7', secondaryColor: '#e0f2fe', accentColor: '#ca8a04', labelText: 'TEA' },
      { id: 'uk-crisps', slotIndex: 5, name: 'Sea Salt & Malt Crisps', shape: 'crinkle-bag', primaryColor: '#2563eb', secondaryColor: '#eff6ff', accentColor: '#dc2626', labelText: 'CRISPS' },
      { id: 'uk-elder', slotIndex: 6, name: 'Sparkling Elderflower Pressé', shape: 'soda-can', primaryColor: '#10b981', secondaryColor: '#d1fae5', accentColor: '#ca8a04', labelText: 'PRESSÉ' },
      { id: 'uk-crumpets', slotIndex: 7, name: 'Toasted Griddle Crumpets', shape: 'bread-loaf', primaryColor: '#d97706', secondaryColor: '#fef3c7', accentColor: '#1e3a8a', labelText: '6 PACK' },
      { id: 'uk-squash', slotIndex: 8, name: 'Summer Barley Squash Cordial', shape: 'jug-handle', primaryColor: '#f59e0b', secondaryColor: '#fef3c7', accentColor: '#16a34a', labelText: 'CORDIAL' },
      { id: 'uk-biscuits', slotIndex: 9, name: 'Custard Cream Biscuits', shape: 'egg-carton', primaryColor: '#eab308', secondaryColor: '#fefce8', accentColor: '#9a3412', labelText: 'CREAMS' },
      { id: 'uk-scone', slotIndex: 10, name: 'Jam & Clotted Cream Scone', shape: 'pastry-dome', primaryColor: '#e11d48', secondaryColor: '#fff1f2', accentColor: '#d97706', labelText: 'SCONE' },
      { id: 'uk-beans', slotIndex: 11, name: 'Turquoise Baked Beans', shape: 'bowl-cup', primaryColor: '#0d9488', secondaryColor: '#f0fdfa', accentColor: '#ef4444', labelText: 'BEANS' },
    ],
  },
];

function getThemeById(id) {
  return STORE_THEMES.find((t) => t.id === id) || STORE_THEMES[0];
}

/**
 * 500 Deterministic Campaign Level Specifications across 10 Balanced Tiers
 */
const LEVEL_TITLES = [
  // Tier 1: Welcome Aisle (1-20) — 20 titles
  'First Shift', 'Dairy & Bread', 'Pantry Basics', 'Double Deep', 'Aisle Five',
  'Fresh Delivery', 'Morning Coffee', 'Cereal Stack', 'Jar Jumble', 'Opening Week',
  'Sunlit Counter', 'Crisp & Crunch', 'Warm Muffins', 'Tea Kettle', 'Welcome Ribbon',
  'Corner Display', 'Sweet Tooth', 'Condiment Row', 'Snack Attack', 'Twenty Treats',
  // Tier 2: Morning Stocking (21-50) — 30 titles
  'Top Shelf', 'Crate Unpack', 'Bakers Dozen', 'Beverage Cooler', 'Quarter Century',
  'Sunny Produce', 'Berry Basket', 'Honeycomb Row', 'Orchard Crate', 'Morning Bloom',
  'Artisan Loaves', 'Morning Espresso', 'Breakfast Nook', 'Citrus Stand', 'Buttered Toast',
  'Maple Glaze', 'Vanilla Bean', 'Cinnamon Swirl', 'Clover Honey', 'Forty & Cozy',
  'Farmer’s Basket', 'Golden Oat', 'Fresh Squeeze', 'Garden Crates', 'Morning Harvest',
  'Checkstand Ready', 'Neighborhood Charm', 'Backroom Crates', 'Tokyo Konbini', 'Fifty Milestone',
  // Tier 3: Midday Market (51-95) — 45 titles
  'Matcha Break', 'Bento Boxed', 'Shelf Symphony', 'World Traveler', 'Boutique Display',
  'Pantry Parade', 'Miso Soup', 'Ramune Fizz', 'Onigiri Row', 'Sixty & Steady',
  'Sakura Mochi', 'Soba Bowl', 'Three Layers Deep', 'Precision Sort', 'Parisian Croissant',
  'Macaron Tower', 'Cheese Counter', 'Bistro Pantry', 'Lavender Linen', 'Seventy Celebration',
  'Madeleine Tin', 'Brioche Loaf', 'Dijon Craft', 'Café au Lait', 'Midday Rush',
  'Tuscan Olive', 'Pasta Perfection', 'Gelato Cooler', 'San Marzano', 'Eighties Bistro',
  'Balsamic Reserve', 'Pesto Jars', 'Truffle Drizzle', 'Spice Rack', 'Mediterranean Noon',
  'Mercado Fiesta', 'Pan Dulce', 'Salsa Verde', 'Agua Fresca', 'Ninety Jubilee',
  'Guava Nectar', 'Horchata Jug', 'Corn Husk Tamal', 'Churro Crunch', 'High Street Shop',
  // Tier 4: Afternoon Rush (96-145) — 50 titles
  'Shortbread Tin', 'Marmalade Jar', 'Scone & Cream', 'Earl Grey Tea', 'Centennial Plaza',
  'Elderflower Fizz', 'Gourmet Cellar', 'Truffle & Brie', 'Vintage Harvest', 'Deep Inventory',
  'Four Layers Deep', 'Master Stockroom', 'Aisle Architect', 'Golden Apron', 'Autumn Festival',
  'Curated Flavors', 'Velvet Ribbon', 'Boutique Connoisseur', 'Import Crates', 'Starlight Pantry',
  'Head Grocer', 'Golden Hour', 'Full Inventory', 'Market Maestro', 'Candlelit Shelves',
  'Caramel Apple', 'Spiced Cider', 'Artisan Cheese', 'Copper Kettle', 'Reserve Collection',
  'Premier Aisle', 'Grand Showcase', 'Crown Jewel', 'Chef’s Selection', 'Collector’s Reserve',
  'World Fair', 'Continental Feast', 'Masterpiece Row', 'Supreme Stockist', 'Silver Chalice',
  'Marble Counter', 'Botanical Garden', 'Heritage Pantry', 'Boulangerie Dawn', 'Kyoto Lantern',
  'Plaza Mayor', 'Covent Tea Room', 'Verona Vineyard', 'Harbor Market', 'Five Layers Deep',
  // Tier 5: Master Grocer (146-200) — 55 titles
  'Silk Road Spices', 'Heirloom Harvest', 'Golden Harvest', 'Festival Banner', 'Summit Grocer',
  'Velvet Canopy', 'Moonlight Bistro', 'Emerald Isle', 'Alpine Dairy', 'Saffron & Sage',
  'Pastry Pavilion', 'Crystal Pitcher', 'Grand Bazaar', 'Oakwood Reserve', 'Imperial Tea',
  'Rosewater Tart', 'Maple Lodge', 'Midnight Konbini', 'Royal Picnic', 'Grand Emporium',
  'Diamond Display', 'Legendary Grocer', 'Sovereign Aisle', 'Platinum Shelf', '170th Showcase',
  'Starlight Gala', 'Celestial Tea', 'Crown Patisserie', 'Monarch Pantry', 'Ambrosia Row',
  'Aurora Market', 'Golden Bell Hall', 'Gilded Basket', 'Emperor’s Choice', '180th Jubilee',
  'Velvet Promenade', 'Timeless Classic', 'Enchanted Aisle', 'Sunlit Conservatory', 'Six Layers Deep',
  'Mochi’s Palace', 'Purrfect Gallery', 'Miracle Stockroom', 'Wonders of Taste', '190th Triumph',
  'Heirloom Treasury', 'Silver Bells', 'Autumn Symphony', 'Heart of Katlyn', 'Nearly Forever',
  'Grand Opening Gala', 'Ribbon Cutting', 'Hall of Legends', 'Katlyn’s Masterpiece', 'Bicentennial Gala',
  // Tier 6: Boutique Curators (201-260) — 60 titles
  'Curator’s Corner', 'Artisan Bakery', 'Porcelain Teacup', 'Velvet Pastry', 'Honeyed Fig',
  'Rosemary Focaccia', 'Cardamom Bun', 'Chamomile Tin', 'Sun-Dried Tomato', '210th Gallery',
  'Pistachio Cream', 'Lemon Curd Jar', 'Wildflower Honey', 'Toasted Brioche', 'Hazelnut Spread',
  'Matcha Whisk', 'Yuzu Marmalade', 'Saffron Risotto', 'Cinnamon Babka', '220th Salon',
  'Bergamot Mist', 'Praline Box', 'Almond Tartlet', 'Elderberry Syrup', 'Fig Preserve',
  'Truffle Butter', 'Smoked Sea Salt', 'Vanilla Pod', 'Chai Concentrate', '230th Showcase',
  'Pomegranate Soda', 'Blood Orange Jam', 'Macadamia Cookie', 'Earl Grey Cake', 'Lavender Shortbread',
  'Whipped Mascarpone', 'Amarena Cherry', 'Gochujang Paste', 'Sesame Dressing', '240th Atelier',
  'Maple Pecan Loaf', 'Salted Caramel', 'Crème Brûlée', 'Oolong Leaf Tin', 'Clementine Fizzy',
  'Roast Chestnut', 'Nutmeg & Clove', 'Mille-Feuille', 'Limoncello Cake', '250th Boutique Jubilee',
  'Gingerbread House', 'Pear & Brie Tart', 'Kalamata Olive', 'Pecan Praline', 'Cacao Nib Jar',
  'Hibiscus Tea', 'Marzipan Fruit', 'Espresso Truffle', 'Honeycomb Slab', 'Curator’s Crown',
  // Tier 7: Grand Market (261-320) — 60 titles
  'Grand Promenade', 'Saffron Market', 'Clocktower Deli', 'Harborfront Stall', 'Terrace Pantry',
  'Copper Still', 'Market Pavilion', 'Velvet Awning', 'Harvest Hall', '270th Plaza',
  'Artisan Creamery', 'Stone-Milled Flour', 'Heirloom Cider', 'Brioche & Jam', 'Citrus Conservatory',
  'Roastery Reserve', 'Mediterranean Pier', 'Boulangerie Square', 'Kyoto Tea Lane', '280th Promenade',
  'Spice Merchant', 'Golden Vineyard', 'Lantern Arcade', 'Patisserie Row', 'Orchard Galleria',
  'Cantina Market', 'Cobblestone Shop', 'Tasting Room', 'Veranda Pantry', '290th Concourse',
  'Gourmet Rotunda', 'Cedar Spice Chest', 'Barista Bar', 'Sunburst Citrus', 'Pantry Emporium',
  'Terracotta Stall', 'Silk Awning', 'Caramel Roaster', 'Alpine Chocolatier', '300th Grand Jubilee',
  'Lakeside Grocer', 'Fountain Courtyard', 'Bellini Stand', 'Pastel Patisserie', 'Cinnamon Hall',
  'Maple Mercantile', 'Olive Press Mill', 'Honeybee Apiary', 'Gelato Giardino', '310th Hall',
  'Matcha Pavilion', 'Scone Conservatory', 'Mercado Centrale', 'Tuscan Villa', 'Amber Bottle',
  'Velvet Crumb', 'Starry Veranda', 'Rose Garden Tea', 'Marigold Counter', 'Grand Crest',
  // Tier 8: World Bazaar (321-380) — 60 titles
  'Global Crossroads', 'Atlas Aisle', 'Shibuya Crossing', 'Montmartre Steps', 'Piazza Navona',
  'Oaxaca Plazuela', 'Portobello Road', 'Ginza Pantry', 'Amalfi Lemon Stand', '330th Voyage',
  'Marais Bakery', 'Coyoacán Market', 'Mayfair Passage', 'Hokkaido Dairy', 'Provence Basket',
  'Florentine Deli', 'Veracruz Coffee', 'Cotswold Farm', 'Uji Tea House', '340th Horizon',
  'Lyon Bouchon', 'Bologna Trattoria', 'Puebla Dulcería', 'Edinburgh Bakery', 'Kamakura Confection',
  'Alsace Vine', 'Sorrento Grove', 'Guadalajara Stall', 'Chelsea Tea Tin', '350th World Milestone',
  'Gion Sweets', 'Loire Valley', 'Sicilian Citrus', 'San Miguel Market', 'Bath Bun Shop',
  'Nagano Apple', 'Normandy Dairy', 'Piedmont Truffle', 'Jalisco Agave', '360th Panorama',
  'Kew Conservatory', 'Nara Pantry', 'Côte d’Azur', 'Venetian Canal', 'Yucatán Honey',
  'Yorkshire Pudding', 'Sapporo Ramen', 'Champagne Cellar', 'Roman Espresso', '370th Odyssey',
  'Morelia Caramel', 'Cornwall Clotted', 'Osaka Takoyaki', 'Bordeaux Cask', 'Siena Biscotti',
  'Merida Spice', 'Windsor Biscuit', 'Kanazawa Gold', 'Parisian Sunrise', 'World Bazaar Finale',
  // Tier 9: Evening Showcase (381-440) — 60 titles
  'Twilight Lanterns', 'Dusk at the Market', 'Moonbeam Pantry', 'Candlelight Row', 'Velvet Evening',
  'Starlight Crates', 'Nocturne Café', 'Amber Glow', 'Firefly Produce', '390th Moonrise',
  'Warm Sconce', 'Midnight Croissant', 'Lantern Promenade', 'Cozy Hearth', 'Evening Chai',
  'Silken Dusk', 'Crescent Bakery', 'Sleepy Konbini', 'Nightflower Tea', '400th Starlight Gala',
  'Golden Lamplight', 'Nightcap Cocoa', 'Spiced Toddy', 'Velvet Curtains', 'Dreamy Patisserie',
  'Twilight Harvest', 'Jasmine Night', 'Honeyed Moonlight', 'Hearthside Jam', '410th Constellation',
  'Caramel Drizzle', 'Warm Shortbread', 'Night Bazaar', 'Moonlit Vineyard', 'Amber Apothecary',
  'Lullaby Loaf', 'Misty Orchard', 'Brass Candelabra', 'Fireside Scone', '420th Aurora',
  'Velvet Truffle', 'Starry Espresso', 'Midnight Macaron', 'Quiet Stockroom', 'Slumbering Tea',
  'Glowworm Stall', 'Satin Awning', 'Nocturnal Spice', 'Mooncake Pavilion', '430th Observatory',
  'Lavender Dream', 'Cinnamon Dusk', 'Pearl Teapot', 'Gilded Lantern', 'Frosty Gelato',
  'Cozy Comforter', 'Warm Brioche', 'Nightfall Treats', 'Stardust Pantry', 'Evening Crown',
  // Tier 10: Royal Emporium (441-500) — 60 titles
  'Sovereign Welcome', 'Imperial Counter', 'Majestic Shelves', 'Crown Jewel Box', 'Velvet Throne',
  'Gilded Marche', 'Royal Conservatory', 'Regal Pantry', 'Diamond Crates', '450th Royal Jubilee',
  'Palace Patisserie', 'Monarch’s Tea', 'Golden Scepter', 'Coronation Tart', 'Emerald Chamber',
  'Sapphire Counter', 'Ruby Marmalade', 'Pearl Patisserie', 'Duchess Scone', '460th Banquet',
  'Grand Chandelier', 'Noble Harvest', 'Baronial Cellar', 'Highness Honey', 'Countess Macaron',
  'Ambassador Feast', 'Courtly Confection', 'Velvet Mantle', 'Archduke Espresso', '470th Dynasty',
  'Queen’s Tea Room', 'King’s Bakery', 'Crown Reserve', 'Imperial Konbini', 'Sovereign Mercado',
  'Majesty Olive', 'Royal Trattoria', 'Palatial Market', 'Diadem Display', '480th Splendor',
  'Opulent Aisles', 'Tiffany Awning', 'Marquise Cake', 'Viceregal Jam', 'Triumph Arch',
  'Princely Produce', 'Coronet Cocoa', 'Gold Leaf Brie', 'Gala Reception', '490th Pinnacle',
  'Katlyn’s Palace', 'Mochi’s Royal Whisk', 'Legend of Shelves', 'Eternal Pantry', 'Crown of Tastes',
  'Diamond Promenade', 'Starlight Coronation', 'Hall of Eternity', 'Heart’s Desire', '500th Grand Finale'
];

const LEVEL_SPECS = Array.from({ length: 500 }, (_, idx) => {
  const levelNumber = idx + 1;
  let tierName = 'Welcome Aisle';
  let shelfCount = 6;
  let maxDepth = 1;
  let itemTypesCount = 4;
  let totalTriples = 4;

  if (levelNumber <= 20) {
    // Tier 1: Levels 1 - 20 (Welcome Aisle)
    tierName = 'Welcome Aisle';
    shelfCount = levelNumber <= 3 ? 5 : 6;
    maxDepth = levelNumber <= 3 ? 1 : 2;
    itemTypesCount = Math.min(6, 3 + Math.floor((levelNumber - 1) / 3));
    totalTriples =
      levelNumber <= 3 ? (levelNumber === 1 ? 3 : 4) : 5 + Math.floor((levelNumber - 4) / 3);
  } else if (levelNumber <= 50) {
    // Tier 2: Levels 21 - 50 (Morning Stocking)
    tierName = 'Morning Stocking';
    const progress = (levelNumber - 21) / 29;
    shelfCount = Math.round(7 + progress * 2); // 7 to 9 shelves
    maxDepth = 2;
    itemTypesCount = Math.min(9, 6 + Math.floor(progress * 3.5)); // 6 to 9 types
    totalTriples = Math.max(shelfCount, Math.round(shelfCount * (1.35 + progress * 0.2)));
  } else if (levelNumber <= 95) {
    // Tier 3: Levels 51 - 95 (Midday Market)
    tierName = 'Midday Market';
    const progress = (levelNumber - 51) / 44;
    shelfCount = Math.round(9 + progress * 3); // 9 to 12 shelves
    maxDepth = levelNumber >= 70 ? 3 : 2;
    itemTypesCount = Math.min(11, 8 + Math.floor(progress * 3.5)); // 8 to 11 types
    totalTriples = Math.round(shelfCount * (maxDepth === 3 ? 1.85 : 1.55));
  } else if (levelNumber <= 145) {
    // Tier 4: Levels 96 - 145 (Afternoon Rush)
    tierName = 'Afternoon Rush';
    const progress = (levelNumber - 96) / 49;
    shelfCount = Math.round(11 + progress * 2); // 11 to 13 shelves
    maxDepth = levelNumber >= 120 ? 4 : 3;
    itemTypesCount = Math.min(12, 9 + Math.floor(progress * 3.5)); // 9 to 12 types
    totalTriples = Math.round(shelfCount * (maxDepth === 4 ? 2.15 : 1.9));
  } else if (levelNumber <= 200) {
    // Tier 5: Levels 146 - 200 (Master Grocer)
    tierName = 'Master Grocer';
    const progress = (levelNumber - 146) / 54;
    shelfCount = Math.round(12 + progress * 2); // 12 to 14 shelves
    maxDepth = 4;
    itemTypesCount = Math.min(12, 10 + Math.floor(progress * 2.5)); // 10 to 12 types
    totalTriples = Math.round(shelfCount * (2.25 + progress * 0.15));
  } else if (levelNumber <= 260) {
    // Tier 6: Levels 201 - 260 (Boutique Curators)
    tierName = 'Boutique Curators';
    const progress = (levelNumber - 201) / 59;
    shelfCount = Math.round(14 + progress); // 14 to 15 shelves
    maxDepth = levelNumber >= 230 ? 5 : 4;
    itemTypesCount = 12; // Full 12-item set
    totalTriples = Math.round(shelfCount * (maxDepth === 5 ? 2.65 : 2.45));
  } else if (levelNumber <= 320) {
    // Tier 7: Levels 261 - 320 (Grand Market)
    tierName = 'Grand Market';
    const progress = (levelNumber - 261) / 59;
    shelfCount = Math.round(15 + progress); // 15 to 16 shelves
    maxDepth = 5;
    itemTypesCount = 12; // Full 12-item set
    totalTriples = Math.round(shelfCount * (2.75 + progress * 0.15));
  } else if (levelNumber <= 380) {
    // Tier 8: Levels 321 - 380 (World Bazaar)
    tierName = 'World Bazaar';
    shelfCount = 16;
    maxDepth = levelNumber >= 350 ? 6 : 5;
    itemTypesCount = 12; // Full 12-item set
    totalTriples = Math.round(shelfCount * (maxDepth === 6 ? 3.1 : 2.9));
  } else if (levelNumber <= 440) {
    // Tier 9: Levels 381 - 440 (Evening Showcase)
    tierName = 'Evening Showcase';
    shelfCount = 16;
    maxDepth = levelNumber >= 410 ? 7 : 6;
    itemTypesCount = 12; // Full 12-item set
    totalTriples = Math.round(shelfCount * (maxDepth === 7 ? 3.45 : 3.2));
  } else {
    // Tier 10: Levels 441 - 500 (Royal Emporium)
    tierName = 'Royal Emporium';
    shelfCount = 16;
    maxDepth = levelNumber >= 470 ? 8 : 7;
    itemTypesCount = 12; // Full 12-item set
    totalTriples = Math.round(shelfCount * (maxDepth === 8 ? 3.8 : 3.55));
  }

  const isMilestone = levelNumber % 10 === 0;
  const isTierMilestone = levelNumber % 50 === 0;
  const basePoints =
    levelNumber <= 20
      ? 10
      : levelNumber <= 50
      ? 12
      : levelNumber <= 95
      ? 14
      : levelNumber <= 145
      ? 16
      : levelNumber <= 200
      ? 18
      : levelNumber <= 260
      ? 20
      : levelNumber <= 320
      ? 21
      : levelNumber <= 380
      ? 22
      : levelNumber <= 440
      ? 24
      : 26;
  return {
    levelNumber,
    title: LEVEL_TITLES[idx] || `Aisle ${levelNumber}`,
    tierName,
    shelfCount,
    maxDepth,
    itemTypesCount,
    totalTriples,
    starReward: isMilestone ? 2 : 1,
    completionPoints: basePoints + (isMilestone ? 15 : 0) + (isTierMilestone ? 20 : 0),
    seed: 10000 + levelNumber * 7919,
  };
});

function createRelaxLevelSpec(difficulty, relaxRound) {
  const seed = Date.now() + relaxRound * 3571;
  if (difficulty === 'cozy') {
    return {
      levelNumber: 1000 + relaxRound,
      title: `Cozy Stroll #${relaxRound}`,
      tierName: 'Relax Mode • Cozy',
      shelfCount: 8,
      maxDepth: 2,
      itemTypesCount: 7,
      totalTriples: 11,
      starReward: 1,
      completionPoints: 10,
      seed,
    };
  }
  if (difficulty === 'medium') {
    return {
      levelNumber: 2000 + relaxRound,
      title: `Pleasant Sort #${relaxRound}`,
      tierName: 'Relax Mode • Medium',
      shelfCount: 11,
      maxDepth: 3,
      itemTypesCount: 10,
      totalTriples: 19,
      starReward: 1,
      completionPoints: 15,
      seed,
    };
  }
  return {
    levelNumber: 3000 + relaxRound,
    title: `Master Stock #${relaxRound}`,
    tierName: 'Relax Mode • Challenging',
    shelfCount: 14,
    maxDepth: 4,
    itemTypesCount: 12,
    totalTriples: 30,
    starReward: 2,
    completionPoints: 22,
    seed,
  };
}

/**
 * ============================================================================
 * SHOP CAT COMPANION & 16 BOUTIQUE OUTFITS (Hat + Clothing Options Each)
 * ============================================================================
 */
const CAT_COATS = [
  { id: 'ginger', name: 'Ginger Marmalade', fur: '#fb923c', secondary: '#ea580c', belly: '#fff7ed', earInner: '#fda4af' },
  { id: 'tuxedo', name: 'Dapper Tuxedo', fur: '#1e293b', secondary: '#0f172a', belly: '#f8fafc', earInner: '#fda4af' },
  { id: 'cream', name: 'Vanilla Cream', fur: '#fde68a', secondary: '#f59e0b', belly: '#fffbeb', earInner: '#fbcfe8' },
  { id: 'calico', name: 'Lucky Calico', fur: '#fafaf9', secondary: '#ea580c', belly: '#ffffff', earInner: '#fda4af' },
  { id: 'russian', name: 'Velvet Blue', fur: '#64748b', secondary: '#334155', belly: '#e2e8f0', earInner: '#f9a8d4' },
  { id: 'midnight', name: 'Midnight Bombay', fur: '#27272a', secondary: '#18181b', belly: '#3f3f46', earInner: '#f472b6' },
  { id: 'sakura', name: 'Sakura Milk (Secret)', fur: '#fbcfe8', secondary: '#ec4899', belly: '#fff1f2', earInner: '#f43f5e', unlockPets: 100 },
  { id: 'stardust', name: 'Celestial Stardust (10K Legend)', fur: '#4338ca', secondary: '#fbbf24', belly: '#e0e7ff', earInner: '#f472b6', unlockPets: 10000 },
];

const CAT_OUTFITS = [
  {
    id: 'grocer',
    name: 'Hometown Grocer',
    hatName: 'Emerald Visor Cap',
    clothingName: 'Red Striped Apron',
    costPoints: 0,
    subtitle: 'Ready for the morning shift at Katlyn’s Cozy Corner!',
  },
  {
    id: 'farmer',
    name: 'Sunny Harvester',
    hatName: 'Sunflower Straw Hat',
    clothingName: 'Denim Overalls & Bandana',
    costPoints: 140,
    subtitle: 'Fresh from the organic farmstand with a pocket full of seeds.',
  },
  {
    id: 'konbini',
    name: 'Tokyo Konbini Clerk',
    hatName: 'Konbini Service Cap',
    clothingName: 'Konbini Uniform Vest',
    costPoints: 190,
    subtitle: 'Irasshaimase! Expertly stocking onigiri and matcha lattes.',
  },
  {
    id: 'patissier',
    name: 'Parisian Patissier',
    hatName: 'Puffy Chef Toque',
    clothingName: 'Double-Breasted Chef Coat',
    costPoints: 250,
    subtitle: 'Bakes the flakiest croissants and sweetest macarons in Paris.',
  },
  {
    id: 'artist',
    name: 'Montmartre Painter',
    hatName: 'Crimson French Beret',
    clothingName: 'Breton Striped Sailor Top',
    costPoints: 310,
    subtitle: 'Paints colorful still-life portraits of the market aisles.',
  },
  {
    id: 'trattoria',
    name: 'Venetian Gondolier',
    hatName: 'Ribboned Straw Boater',
    clothingName: 'Velvet Waistcoat & Bowtie',
    costPoints: 380,
    subtitle: 'Serenades the Italian deli aisle while guarding the gelato.',
  },
  {
    id: 'fiesta',
    name: 'Mercado Mariachi',
    hatName: 'Gold-Trimmed Sombrero',
    clothingName: 'Rainbow Serape Poncho',
    costPoints: 450,
    subtitle: 'Brings festive music and warm pan dulce vibes to every shelf.',
  },
  {
    id: 'royal',
    name: 'Mayfair Tea Royalty',
    hatName: 'Jeweled Golden Crown',
    clothingName: 'Royal Ermine Velvet Cape',
    costPoints: 520,
    subtitle: 'Presides over afternoon tea, scones, and shortbread tins.',
  },
  {
    id: 'detective',
    name: 'Aisle Sleuth',
    hatName: 'Plaid Deerstalker Cap',
    clothingName: 'Tweed Inverness Capelet',
    costPoints: 600,
    subtitle: 'Sniffs out hidden back-row silhouettes with purr-fect deduction!',
  },
  {
    id: 'rainy',
    name: 'Cozy Puddle Jumper',
    hatName: 'Yellow Sou’wester Hat',
    clothingName: 'Sunny Raincoat & Toggles',
    costPoints: 680,
    subtitle: 'Keeps dry and cozy on rainy market mornings.',
  },
  {
    id: 'honeybee',
    name: 'Bumblebee Keeper',
    hatName: 'Bouncing Bee Antennae',
    clothingName: 'Fuzzy Striped Bee Sweater',
    costPoints: 760,
    subtitle: 'Sweet as golden honey and twice as cuddly!',
  },
  {
    id: 'strawberry',
    name: 'Berry Sweetheart',
    hatName: 'Strawberry Leaf Beret',
    clothingName: 'Berry Knit Cardigan',
    costPoints: 840,
    subtitle: 'Dressed like a fresh-picked strawberry punnet.',
  },
  {
    id: 'sakura',
    name: 'Kyoto Blossom',
    hatName: 'Sakura Floral Crown',
    clothingName: 'Silk Kimono & Gold Obi',
    costPoints: 920,
    subtitle: 'Graceful springtime cherry blossom kimono attire.',
  },
  {
    id: 'pirate',
    name: 'Captain Whiskers',
    hatName: 'Feathered Tricorne Hat',
    clothingName: 'Buccaneer Coat & Sash',
    costPoints: 1000,
    subtitle: 'Sails the seven aisles in search of golden market treasure!',
  },
  {
    id: 'wizard',
    name: 'Starlight Alchemist',
    hatName: 'Celestial Wizard Hat',
    clothingName: 'Starry Mystic Cloak',
    costPoints: 1100,
    subtitle: 'Conjures magical auto-packs and sparkling shelf matches.',
  },
  {
    id: 'pajama',
    name: 'Dreamy Nightshift',
    hatName: 'Pom-Pom Sleepy Nightcap',
    clothingName: 'Polka-Dot Flannel PJ',
    costPoints: 1200,
    subtitle: 'The ultimate outfit for late-night Evening Market Dark Mode!',
  },
  {
    id: 'besties',
    name: 'Best Friends Forever',
    hatName: 'Floating Heart Halo',
    clothingName: 'Cozy Heart Cardigan',
    costPoints: 0,
    unlockPets: 1000,
    subtitle: 'Secret 1,000-pet bond reward woven with endless purrs and affection!',
  },
];

const CAT_QUOTES = [
  "Purrrr... I love watching you organize the shelves, Katlyn!",
  "Mrrrow! That trio packed away so neatly!",
  "Pawsome job! Don't forget to check the darkened silhouettes in the back row.",
  "Meow! Try mixing and matching my hats and shirts in the Cat Boutique!",
  "Purrrr... Your market is the coziest place in town.",
  "Chirp! Whenever a front shelf is empty, the back row slides right forward!",
  "Stretch... A quick catnap between aisles keeps the mind sharp!",
  "Mew! You're doing amazing, take all the time you need!"
];

const SECRET_PET_QUOTES = [
  "Purrrr... 100+ pets! My heart is overflowing, Katlyn!",
  "Nuzzle! Every single pet makes this corner shop shine brighter!",
  "Mew! Nobody gives head scratches as cozy as yours!",
  "Besties forever! Thank you for always visiting me on the counter!"
];

const CAT_PERCH_TOYS = [
  {
    id: 'yarn',
    name: 'Ruby Yarn Ball',
    costPoints: 0,
    sparkleEmoji: '🧶',
    subtitle: 'Soft merino wool ball that unrolls across the counter when batted!',
    reaction: 'batted the Ruby Yarn Ball and spun in a happy circle!',
  },
  {
    id: 'bell',
    name: 'Golden Service Bell',
    costPoints: 90,
    sparkleEmoji: '🔔',
    subtitle: 'Polished brass checkout bell for greeting friendly market shoppers.',
    reaction: 'tapped the Golden Service Bell with a paw—Ding-ding! Next shopper please!',
  },
  {
    id: 'catnip',
    name: 'Potted Fresh Catnip',
    costPoints: 140,
    sparkleEmoji: '🌿',
    subtitle: 'Sunny terracotta pot overflowing with fragrant organic catnip leaves.',
    reaction: 'rubbed cheeks against the Potted Catnip and purred at maximum volume!',
  },
  {
    id: 'teacup',
    name: 'Warm Honey Matcha Mug',
    costPoints: 190,
    sparkleEmoji: '🍵',
    subtitle: 'Steaming ceramic mug of cozy afternoon tea on a wooden coaster.',
    reaction: 'warmed paws beside the steaming Honey Matcha Mug—so cozy!',
  },
  {
    id: 'mouse',
    name: 'Wind-Up Felt Mouse',
    costPoints: 250,
    sparkleEmoji: '🐭',
    subtitle: 'Handmade stitched felt mouse with a brass wind-up key on its back.',
    reaction: 'pounced playfully on the Wind-Up Felt Mouse—Squeak squeak!',
  },
  {
    id: 'taiyaki',
    name: 'Plush Taiyaki Cushion',
    costPoints: 310,
    sparkleEmoji: '🐟',
    subtitle: 'Crispy-colored Japanese fish-shaped waffle plushie stuffed with crinkle paper.',
    reaction: 'hugged the Plush Taiyaki Cushion and gave a cute bunny-kick!',
  },
  {
    id: 'maneki',
    name: 'Lucky Golden Maneki-Neko',
    costPoints: 380,
    sparkleEmoji: '🪙',
    subtitle: 'Traditional waving fortune figurine that brings extra luck to the market!',
    reaction: 'imitated the Lucky Maneki-Neko by waving a front paw for good fortune!',
  },
  {
    id: 'musicbox',
    name: 'Vintage Wooden Music Box',
    costPoints: 450,
    sparkleEmoji: '🎶',
    subtitle: 'Carved walnut music box that plays a sweet crystalline market lullaby.',
    reaction: 'tilted ears curiously as the Vintage Music Box played a sparkling melody!',
  },
  {
    id: 'cardboard',
    name: 'Cozy Cardboard Box',
    costPoints: 0,
    unlockPets: 500,
    sparkleEmoji: '📦',
    subtitle: 'Secret 500-pet treasure! Every shop cat knows cardboard beats any castle.',
    reaction: 'hopped straight inside the Cozy Cardboard Box with blissful purrs!',
  },
];

function isPetUnlockedItem(entry, petsCount) {
  return !entry || !entry.unlockPets || (petsCount || 0) >= entry.unlockPets;
}

function getPetTierHeartIcon(petsCount) {
  const pets = petsCount || 0;
  if (pets >= 10000) return '👑';
  if (pets >= 1000) return '💖';
  if (pets >= 500) return '💗';
  if (pets >= 100) return '💕';
  return '❤️';
}

function syncPetMilestoneUnlocks(save, prevPetsCount = null) {
  const pets = save.catPetsCount || 0;
  const newlyUnlocked = [];
  if (!Array.isArray(save.unlockedCatOutfits)) save.unlockedCatOutfits = ['grocer'];
  if (!Array.isArray(save.unlockedCatToys)) save.unlockedCatToys = ['yarn'];

  CAT_OUTFITS.forEach((o) => {
    if (o.unlockPets && pets >= o.unlockPets && !save.unlockedCatOutfits.includes(o.id)) {
      save.unlockedCatOutfits.push(o.id);
    }
  });
  CAT_PERCH_TOYS.forEach((t) => {
    if (t.unlockPets && pets >= t.unlockPets && !save.unlockedCatToys.includes(t.id)) {
      save.unlockedCatToys.push(t.id);
    }
  });

  if (prevPetsCount !== null) {
    if (prevPetsCount < 100 && pets >= 100) {
      newlyUnlocked.push('🌸 Sakura Milk secret fur coat & 💕 extra purr hearts');
    }
    if (prevPetsCount < 500 && pets >= 500) {
      newlyUnlocked.push('📦 Cozy Cardboard Box secret perch toy');
    }
    if (prevPetsCount < 1000 && pets >= 1000) {
      newlyUnlocked.push('💖 Best Friends Forever secret outfit');
    }
    if (prevPetsCount < 10000 && pets >= 10000) {
      newlyUnlocked.push('👑 Celestial Stardust 10K fur coat & Golden Perch Aura');
    }
  }
  return newlyUnlocked;
}

function renderCatToySvg(toyId, isPlaying = false) {
  switch (toyId) {
    case 'yarn':
      return `
        <svg viewBox="0 0 80 80" style="width:100%;height:100%;overflow:visible;" aria-label="Ruby Yarn Ball">
          <ellipse cx="40" cy="68" rx="22" ry="5" fill="rgba(0,0,0,0.16)" />
          <path d="M54,60 Q68,68 75,58 Q79,52 72,48" stroke="#e11d48" stroke-width="3.5" stroke-linecap="round" fill="none" />
          <circle cx="38" cy="44" r="22" fill="#f43f5e" stroke="#1f2937" stroke-width="2.4" />
          <path d="M22,34 Q38,24 54,36 M20,44 Q38,34 56,46 M24,54 Q38,44 52,56" stroke="#be123c" stroke-width="2.4" fill="none" stroke-linecap="round" />
          <path d="M30,24 Q46,42 32,64 M44,23 Q56,42 42,64" stroke="#fda4af" stroke-width="2" fill="none" stroke-linecap="round" />
        </svg>
      `;
    case 'bell':
      return `
        <svg viewBox="0 0 80 80" style="width:100%;height:100%;overflow:visible;" aria-label="Golden Service Bell">
          <ellipse cx="40" cy="68" rx="26" ry="5" fill="rgba(0,0,0,0.18)" />
          <rect x="36" y="16" width="8" height="8" rx="2" fill="#eab308" stroke="#1f2937" stroke-width="2" />
          <ellipse cx="40" cy="16" rx="8" ry="3.5" fill="#fef08a" stroke="#1f2937" stroke-width="2" />
          <path d="M16,58 C16,32 64,32 64,58 Z" fill="#facc15" stroke="#1f2937" stroke-width="2.4" />
          <path d="M24,52 C26,38 38,34 44,34" stroke="#fef9c3" stroke-width="3" stroke-linecap="round" fill="none" />
          <rect x="12" y="58" width="56" height="8" rx="4" fill="#78350f" stroke="#1f2937" stroke-width="2.2" />
          ${isPlaying ? `<path d="M10,28 L18,32 M70,28 L62,32 M40,6 L40,11" stroke="#f59e0b" stroke-width="2.8" stroke-linecap="round" />` : ''}
        </svg>
      `;
    case 'catnip':
      return `
        <svg viewBox="0 0 80 80" style="width:100%;height:100%;overflow:visible;" aria-label="Potted Fresh Catnip">
          <ellipse cx="40" cy="69" rx="22" ry="5" fill="rgba(0,0,0,0.16)" />
          <!-- Leaves -->
          <path d="M40,42 C24,34 18,18 30,16 C38,15 42,28 40,42 Z" fill="#16a34a" stroke="#1f2937" stroke-width="2" />
          <path d="M40,42 C56,34 62,18 50,16 C42,15 38,28 40,42 Z" fill="#22c55e" stroke="#1f2937" stroke-width="2" />
          <path d="M40,40 C32,22 40,8 48,14 C52,18 46,32 40,40 Z" fill="#4ade80" stroke="#1f2937" stroke-width="2" />
          <!-- Terracotta Pot -->
          <polygon points="24,42 56,42 51,67 29,67" fill="#ea580c" stroke="#1f2937" stroke-width="2.2" stroke-linejoin="round" />
          <rect x="21" y="37" width="38" height="7" rx="3" fill="#f97316" stroke="#1f2937" stroke-width="2.2" />
        </svg>
      `;
    case 'teacup':
      return `
        <svg viewBox="0 0 80 80" style="width:100%;height:100%;overflow:visible;" aria-label="Warm Honey Matcha Mug">
          <ellipse cx="38" cy="67" rx="25" ry="5" fill="rgba(0,0,0,0.16)" />
          <!-- Steam -->
          <path d="M30,26 Q26,18 32,12 M44,24 Q40,16 46,10" stroke="#a8a29e" stroke-width="2.4" stroke-linecap="round" fill="none" />
          <!-- Handle -->
          <path d="M54,38 C66,38 66,56 54,56" stroke="#0d9488" stroke-width="5" fill="none" />
          <path d="M54,38 C66,38 66,56 54,56" stroke="#1f2937" stroke-width="2" fill="none" />
          <!-- Mug Body -->
          <rect x="20" y="30" width="36" height="34" rx="8" fill="#ccfbf1" stroke="#1f2937" stroke-width="2.3" />
          <ellipse cx="38" cy="32" rx="16" ry="4" fill="#65a30d" stroke="#1f2937" stroke-width="1.6" />
          <circle cx="38" cy="49" r="6" fill="#f43f5e" />
        </svg>
      `;
    case 'mouse':
      return `
        <svg viewBox="0 0 80 80" style="width:100%;height:100%;overflow:visible;" aria-label="Wind-Up Felt Mouse">
          <ellipse cx="42" cy="65" rx="26" ry="5" fill="rgba(0,0,0,0.16)" />
          <!-- Tail -->
          <path d="M60,56 Q74,52 72,40" stroke="#f472b6" stroke-width="3" stroke-linecap="round" fill="none" />
          <!-- Wind-up Key -->
          <line x1="42" y1="36" x2="42" y2="22" stroke="#eab308" stroke-width="3" />
          <circle cx="37" cy="20" r="4.5" fill="none" stroke="#eab308" stroke-width="2.5" />
          <circle cx="47" cy="20" r="4.5" fill="none" stroke="#eab308" stroke-width="2.5" />
          <!-- Body -->
          <path d="M16,58 C18,34 58,32 62,58 Z" fill="#94a3b8" stroke="#1f2937" stroke-width="2.3" />
          <circle cx="30" cy="38" r="7" fill="#cbd5e1" stroke="#1f2937" stroke-width="2" />
          <circle cx="30" cy="38" r="3.5" fill="#fda4af" />
          <circle cx="24" cy="49" r="2.3" fill="#1f2937" />
          <circle cx="16" cy="56" r="3.2" fill="#f43f5e" />
        </svg>
      `;
    case 'taiyaki':
      return `
        <svg viewBox="0 0 80 80" style="width:100%;height:100%;overflow:visible;" aria-label="Plush Taiyaki Cushion">
          <ellipse cx="40" cy="66" rx="26" ry="5" fill="rgba(0,0,0,0.16)" />
          <polygon points="54,44 70,30 68,58" fill="#d97706" stroke="#1f2937" stroke-width="2.2" stroke-linejoin="round" />
          <ellipse cx="36" cy="44" rx="22" ry="16" fill="#f59e0b" stroke="#1f2937" stroke-width="2.3" />
          <circle cx="24" cy="40" r="2.6" fill="#1f2937" />
          <path d="M34,36 Q38,44 34,52 M42,36 Q46,44 42,52" stroke="#b45309" stroke-width="2.2" fill="none" stroke-linecap="round" />
        </svg>
      `;
    case 'maneki':
      return `
        <svg viewBox="0 0 80 80" style="width:100%;height:100%;overflow:visible;" aria-label="Lucky Golden Maneki-Neko">
          <ellipse cx="40" cy="68" rx="24" ry="5" fill="rgba(0,0,0,0.18)" />
          <rect x="20" y="60" width="40" height="7" rx="3.5" fill="#dc2626" stroke="#1f2937" stroke-width="2" />
          <ellipse cx="40" cy="44" rx="18" ry="18" fill="#facc15" stroke="#1f2937" stroke-width="2.2" />
          <polygon points="25,30 22,16 34,24" fill="#facc15" stroke="#1f2937" stroke-width="2" />
          <polygon points="55,30 58,16 46,24" fill="#facc15" stroke="#1f2937" stroke-width="2" />
          <!-- Raised Lucky Left Paw -->
          <ellipse cx="21" cy="34" rx="5.5" ry="9" fill="#fef08a" stroke="#1f2937" stroke-width="2" />
          <!-- Koban Coin -->
          <ellipse cx="40" cy="51" rx="8" ry="10" fill="#fde047" stroke="#b45309" stroke-width="2" />
          <path d="M33,36 Q36,33 39,36 M43,36 Q46,33 49,36" stroke="#1f2937" stroke-width="2" fill="none" stroke-linecap="round" />
        </svg>
      `;
    case 'musicbox':
      return `
        <svg viewBox="0 0 80 80" style="width:100%;height:100%;overflow:visible;" aria-label="Vintage Wooden Music Box">
          <ellipse cx="40" cy="68" rx="26" ry="5" fill="rgba(0,0,0,0.18)" />
          <!-- Floating Music Notes -->
          <text x="24" y="22" font-size="14" font-weight="900" fill="#ec4899">♪</text>
          <text x="48" y="18" font-size="15" font-weight="900" fill="#f59e0b">♫</text>
          <!-- Box Lid & Body -->
          <rect x="18" y="38" width="44" height="26" rx="5" fill="#92400e" stroke="#1f2937" stroke-width="2.3" />
          <rect x="16" y="32" width="48" height="8" rx="3" fill="#b45309" stroke="#1f2937" stroke-width="2.2" />
          <circle cx="40" cy="51" r="6" fill="#fbbf24" stroke="#1f2937" stroke-width="1.8" />
          <!-- Golden Wind Key -->
          <line x1="62" y1="51" x2="70" y2="51" stroke="#eab308" stroke-width="3" />
          <circle cx="72" cy="47" r="3.5" fill="none" stroke="#eab308" stroke-width="2.2" />
          <circle cx="72" cy="55" r="3.5" fill="none" stroke="#eab308" stroke-width="2.2" />
        </svg>
      `;
    case 'cardboard':
      return `
        <svg viewBox="0 0 80 80" style="width:100%;height:100%;overflow:visible;" aria-label="Cozy Cardboard Box">
          <ellipse cx="40" cy="68" rx="26" ry="5" fill="rgba(0,0,0,0.18)" />
          <!-- Open Box Interior & Peeking Paw/Heart -->
          <polygon points="18,32 62,32 56,22 24,22" fill="#78350f" stroke="#1f2937" stroke-width="2" stroke-linejoin="round" />
          <!-- Left & Right Folded Flaps -->
          <polygon points="18,32 8,40 16,47 22,38" fill="#d97706" stroke="#1f2937" stroke-width="2" stroke-linejoin="round" />
          <polygon points="62,32 72,40 64,47 58,38" fill="#d97706" stroke="#1f2937" stroke-width="2" stroke-linejoin="round" />
          <!-- Corrugated Box Body -->
          <rect x="18" y="32" width="44" height="34" rx="3" fill="#f59e0b" stroke="#1f2937" stroke-width="2.3" />
          <!-- Pink Heart Packing Seal -->
          <path d="M40,56 C33,50 30,45 33,41 C36,38 39,40 40,43 C41,40 44,38 47,41 C50,45 47,50 40,56 Z" fill="#ec4899" stroke="#1f2937" stroke-width="1.6" />
          ${isPlaying ? `<text x="24" y="20" font-size="11" font-weight="900" fill="#ec4899">✨</text><text x="52" y="18" font-size="11" font-weight="900" fill="#f59e0b">♥</text>` : ''}
        </svg>
      `;
    default:
      return '';
  }
}

function renderCatClothingSvg(clothingId) {
  if (!clothingId || clothingId === 'none') return '';
  switch (clothingId) {
    case 'grocer':
      return `
        <path d="M30,62 L70,62 L74,95 L26,95 Z" fill="#dc2626" stroke="#1f2937" stroke-width="2" />
        <rect x="36" y="62" width="6" height="33" fill="#fecaca" />
        <rect x="47" y="62" width="6" height="33" fill="#fecaca" />
        <rect x="58" y="62" width="6" height="33" fill="#fecaca" />
        <rect x="37" y="76" width="26" height="12" rx="4" fill="#ffffff" stroke="#1f2937" stroke-width="1.8" />
      `;
    case 'farmer':
      return `
        <path d="M29,63 L71,63 L74,95 L26,95 Z" fill="#2563eb" stroke="#1f2937" stroke-width="2" />
        <polygon points="34,60 66,60 50,74" fill="#ef4444" stroke="#1f2937" stroke-width="1.8" />
        <circle cx="36" cy="68" r="3" fill="#fbbf24" stroke="#1f2937" stroke-width="1.5" />
        <circle cx="64" cy="68" r="3" fill="#fbbf24" stroke="#1f2937" stroke-width="1.5" />
        <rect x="39" y="76" width="22" height="13" rx="3" fill="#1d4ed8" stroke="#1f2937" stroke-width="1.6" />
      `;
    case 'konbini':
      return `
        <path d="M28,62 L72,62 L75,95 L25,95 Z" fill="#0284c7" stroke="#1f2937" stroke-width="2" />
        <polygon points="42,62 58,62 50,76" fill="#ffffff" stroke="#1f2937" stroke-width="1.5" />
        <rect x="27" y="75" width="46" height="5" fill="#22c55e" />
        <rect x="27" y="80" width="46" height="4" fill="#ffffff" />
        <rect x="55" y="67" width="11" height="6" rx="1.5" fill="#fde047" stroke="#1f2937" stroke-width="1.2" />
      `;
    case 'patissier':
      return `
        <path d="M28,62 L72,62 L75,95 L25,95 Z" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
        <polygon points="38,60 62,60 50,72" fill="#e11d48" stroke="#1f2937" stroke-width="1.6" />
        <circle cx="42" cy="74" r="2.2" fill="#1f2937" />
        <circle cx="58" cy="74" r="2.2" fill="#1f2937" />
        <circle cx="42" cy="84" r="2.2" fill="#1f2937" />
        <circle cx="58" cy="84" r="2.2" fill="#1f2937" />
      `;
    case 'artist':
      return `
        <path d="M28,62 L72,62 L75,95 L25,95 Z" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
        <rect x="28" y="68" width="44" height="5" fill="#1e3a8a" />
        <rect x="27" y="78" width="46" height="5" fill="#1e3a8a" />
        <rect x="26" y="88" width="48" height="5" fill="#1e3a8a" />
        <path d="M35,60 Q50,68 65,60 L60,72 Q50,67 40,72 Z" fill="#facc15" stroke="#1f2937" stroke-width="1.6" />
      `;
    case 'trattoria':
      return `
        <path d="M28,62 L72,62 L75,95 L25,95 Z" fill="#9f1239" stroke="#1f2937" stroke-width="2" />
        <polygon points="40,62 60,62 50,82" fill="#ffffff" stroke="#1f2937" stroke-width="1.5" />
        <polygon points="41,61 49,65 41,69" fill="#16a34a" stroke="#1f2937" stroke-width="1.4" />
        <polygon points="59,61 51,65 59,69" fill="#16a34a" stroke="#1f2937" stroke-width="1.4" />
        <circle cx="50" cy="65" r="2.5" fill="#dc2626" />
      `;
    case 'fiesta':
      return `
        <polygon points="22,60 78,60 84,88 50,96 16,88" fill="#db2777" stroke="#1f2937" stroke-width="2" stroke-linejoin="round" />
        <path d="M26,70 L74,70" stroke="#facc15" stroke-width="4" />
        <path d="M23,78 L77,78" stroke="#14b8a6" stroke-width="4" />
        <path d="M28,85 L72,85" stroke="#f97316" stroke-width="3.5" />
      `;
    case 'royal':
      return `
        <path d="M23,60 L77,60 L83,95 L17,95 Z" fill="#b91c1c" stroke="#1f2937" stroke-width="2" />
        <rect x="28" y="58" width="44" height="10" rx="5" fill="#ffffff" stroke="#1f2937" stroke-width="1.8" />
        <circle cx="36" cy="63" r="1.5" fill="#1f2937" />
        <circle cx="64" cy="63" r="1.5" fill="#1f2937" />
        <circle cx="50" cy="64" r="4.5" fill="#fbbf24" stroke="#1f2937" stroke-width="1.6" />
      `;
    case 'detective':
      return `
        <path d="M24,61 L76,61 L80,94 L20,94 Z" fill="#b45309" stroke="#1f2937" stroke-width="2" />
        <path d="M24,61 Q50,76 76,61" fill="#d97706" stroke="#1f2937" stroke-width="1.8" />
        <polygon points="48,63 52,63 53,82 50,86 47,82" fill="#15803d" stroke="#1f2937" stroke-width="1.4" />
      `;
    case 'rainy':
      return `
        <path d="M27,61 L73,61 L77,95 L23,95 Z" fill="#facc15" stroke="#1f2937" stroke-width="2" />
        <line x1="50" y1="61" x2="50" y2="95" stroke="#1f2937" stroke-width="1.8" />
        <rect x="44" y="69" width="12" height="4" rx="2" fill="#78350f" stroke="#1f2937" stroke-width="1.3" />
        <rect x="44" y="79" width="12" height="4" rx="2" fill="#78350f" stroke="#1f2937" stroke-width="1.3" />
      `;
    case 'honeybee':
      return `
        <path d="M28,62 L72,62 L75,95 L25,95 Z" fill="#fbbf24" stroke="#1f2937" stroke-width="2" />
        <rect x="28" y="68" width="44" height="6" fill="#1f2937" />
        <rect x="27" y="80" width="46" height="6" fill="#1f2937" />
        <ellipse cx="22" cy="72" rx="6" ry="9" fill="#e0f2fe" stroke="#1f2937" stroke-width="1.5" />
        <ellipse cx="78" cy="72" rx="6" ry="9" fill="#e0f2fe" stroke="#1f2937" stroke-width="1.5" />
      `;
    case 'strawberry':
      return `
        <path d="M28,62 L72,62 L75,95 L25,95 Z" fill="#f43f5e" stroke="#1f2937" stroke-width="2" />
        <polygon points="34,60 44,68 50,61 56,68 66,60" fill="#22c55e" stroke="#1f2937" stroke-width="1.6" />
        <circle cx="38" cy="76" r="2" fill="#fef08a" />
        <circle cx="62" cy="76" r="2" fill="#fef08a" />
        <circle cx="50" cy="83" r="2" fill="#fef08a" />
        <circle cx="38" cy="88" r="2" fill="#fef08a" />
        <circle cx="62" cy="88" r="2" fill="#fef08a" />
      `;
    case 'sakura':
      return `
        <path d="M27,61 L73,61 L76,95 L24,95 Z" fill="#fb7185" stroke="#1f2937" stroke-width="2" />
        <line x1="38" y1="61" x2="56" y2="95" stroke="#fff1f2" stroke-width="3" />
        <line x1="62" y1="61" x2="46" y2="80" stroke="#fff1f2" stroke-width="3" />
        <rect x="26" y="77" width="48" height="10" fill="#f59e0b" stroke="#1f2937" stroke-width="1.8" />
        <circle cx="38" cy="70" r="3" fill="#fce7f3" />
      `;
    case 'pirate':
      return `
        <path d="M27,61 L73,61 L77,95 L23,95 Z" fill="#991b1b" stroke="#1f2937" stroke-width="2" />
        <rect x="44" y="61" width="12" height="34" fill="#fef3c7" />
        <line x1="30" y1="63" x2="68" y2="93" stroke="#fbbf24" stroke-width="4" />
        <circle cx="50" cy="78" r="4" fill="#f59e0b" stroke="#1f2937" stroke-width="1.5" />
      `;
    case 'wizard':
      return `
        <path d="M24,60 L76,60 L82,95 L18,95 Z" fill="#4338ca" stroke="#1f2937" stroke-width="2" />
        <polygon points="34,60 66,60 50,73" fill="#facc15" stroke="#1f2937" stroke-width="1.6" />
        <circle cx="36" cy="78" r="2.5" fill="#fde047" />
        <circle cx="64" cy="82" r="2.5" fill="#fde047" />
        <circle cx="48" cy="88" r="3" fill="#fde047" />
      `;
    case 'pajama':
      return `
        <path d="M28,62 L72,62 L75,95 L25,95 Z" fill="#a78bfa" stroke="#1f2937" stroke-width="2" />
        <polygon points="35,61 50,70 65,61" fill="#ede9fe" stroke="#1f2937" stroke-width="1.6" />
        <circle cx="37" cy="74" r="3" fill="#fef08a" />
        <circle cx="63" cy="74" r="3" fill="#fef08a" />
        <circle cx="50" cy="84" r="3" fill="#fef08a" />
        <circle cx="36" cy="88" r="2.5" fill="#ede9fe" />
        <circle cx="64" cy="88" r="2.5" fill="#ede9fe" />
      `;
    case 'besties':
      return `
        <path d="M27,61 L73,61 L76,95 L24,95 Z" fill="#ec4899" stroke="#1f2937" stroke-width="2" />
        <polygon points="38,61 62,61 50,72" fill="#fce7f3" stroke="#1f2937" stroke-width="1.6" />
        <path d="M50,87 C44,82 41,78 44,75 C46,73 49,75 50,77 C51,75 54,73 56,75 C59,78 56,82 50,87 Z" fill="#fff1f2" stroke="#1f2937" stroke-width="1.4" />
        <circle cx="35" cy="74" r="2.2" fill="#fde047" />
        <circle cx="65" cy="74" r="2.2" fill="#fde047" />
      `;
    default:
      return '';
  }
}

function renderCatHatSvg(hatId) {
  if (!hatId || hatId === 'none') return '';
  switch (hatId) {
    case 'grocer':
      return `
        <path d="M28,24 Q50,14 72,24 Z" fill="#16a34a" stroke="#1f2937" stroke-width="2" />
        <ellipse cx="50" cy="24" rx="26" ry="5" fill="#15803d" stroke="#1f2937" stroke-width="2" />
      `;
    case 'farmer':
      return `
        <ellipse cx="50" cy="23" rx="34" ry="7" fill="#facc15" stroke="#1f2937" stroke-width="2" />
        <path d="M32,23 C32,9 68,9 68,23 Z" fill="#fde047" stroke="#1f2937" stroke-width="2" />
        <rect x="33" y="19" width="34" height="4" fill="#dc2626" />
        <circle cx="63" cy="19" r="5" fill="#f97316" stroke="#ffffff" stroke-width="2" />
      `;
    case 'konbini':
      return `
        <path d="M30,24 C30,10 70,10 70,24 Z" fill="#ffffff" stroke="#1f2937" stroke-width="2" />
        <path d="M27,24 Q50,20 73,24 L68,28 Q50,25 32,28 Z" fill="#0284c7" stroke="#1f2937" stroke-width="1.8" />
        <rect x="44" y="14" width="12" height="5" rx="2" fill="#22c55e" />
      `;
    case 'patissier':
      return `
        <path d="M34,24 L30,12 C26,4 42,2 50,6 C58,2 74,4 70,12 L66,24 Z" fill="#ffffff" stroke="#1f2937" stroke-width="2" stroke-linejoin="round" />
        <rect x="34" y="20" width="32" height="5" fill="#f5f5f4" stroke="#1f2937" stroke-width="1.6" />
      `;
    case 'artist':
      return `
        <ellipse cx="48" cy="18" rx="25" ry="9" transform="rotate(-8 48 18)" fill="#e11d48" stroke="#1f2937" stroke-width="2" />
        <line x1="48" y1="9" x2="46" y2="4" stroke="#1f2937" stroke-width="2.5" stroke-linecap="round" />
      `;
    case 'trattoria':
      return `
        <ellipse cx="50" cy="23" rx="31" ry="5.5" fill="#fde047" stroke="#1f2937" stroke-width="2" />
        <rect x="33" y="11" width="34" height="12" rx="3" fill="#fef08a" stroke="#1f2937" stroke-width="2" />
        <rect x="33" y="18" width="34" height="4" fill="#dc2626" />
      `;
    case 'fiesta':
      return `
        <ellipse cx="50" cy="23" rx="38" ry="7" fill="#eab308" stroke="#1f2937" stroke-width="2" />
        <path d="M36,22 L44,5 L56,5 L64,22 Z" fill="#ca8a04" stroke="#1f2937" stroke-width="2" stroke-linejoin="round" />
        <path d="M20,23 Q50,18 80,23" stroke="#db2777" stroke-width="2.5" fill="none" />
      `;
    case 'royal':
      return `
        <polygon points="31,24 29,9 41,16 50,6 59,16 71,9 69,24" fill="#fbbf24" stroke="#1f2937" stroke-width="2" stroke-linejoin="round" />
        <circle cx="50" cy="16" r="3" fill="#e11d48" />
        <circle cx="38" cy="19" r="2.2" fill="#2563eb" />
        <circle cx="62" cy="19" r="2.2" fill="#2563eb" />
      `;
    case 'detective':
      return `
        <ellipse cx="50" cy="23" rx="28" ry="4.5" fill="#b45309" stroke="#1f2937" stroke-width="1.8" />
        <path d="M32,23 C32,8 68,8 68,23 Z" fill="#d97706" stroke="#1f2937" stroke-width="2" />
        <line x1="50" y1="10" x2="50" y2="23" stroke="#78350f" stroke-width="1.8" />
        <circle cx="50" cy="10" r="2.5" fill="#78350f" />
      `;
    case 'rainy':
      return `
        <path d="M20,25 Q50,16 80,25 L68,11 L32,11 Z" fill="#facc15" stroke="#1f2937" stroke-width="2" stroke-linejoin="round" />
      `;
    case 'honeybee':
      return `
        <path d="M34,24 Q50,18 66,24" stroke="#1f2937" stroke-width="3" fill="none" />
        <path d="M42,20 Q36,9 32,9" stroke="#1f2937" stroke-width="2.2" fill="none" />
        <path d="M58,20 Q64,9 68,9" stroke="#1f2937" stroke-width="2.2" fill="none" />
        <circle cx="32" cy="9" r="4.5" fill="#fbbf24" stroke="#1f2937" stroke-width="1.8" />
        <circle cx="68" cy="9" r="4.5" fill="#fbbf24" stroke="#1f2937" stroke-width="1.8" />
      `;
    case 'strawberry':
      return `
        <ellipse cx="50" cy="18" rx="23" ry="9" fill="#f43f5e" stroke="#1f2937" stroke-width="2" />
        <polygon points="44,10 50,4 56,10 50,13" fill="#22c55e" stroke="#1f2937" stroke-width="1.5" />
        <circle cx="42" cy="18" r="1.5" fill="#fef08a" />
        <circle cx="58" cy="18" r="1.5" fill="#fef08a" />
        <circle cx="50" cy="21" r="1.5" fill="#fef08a" />
      `;
    case 'sakura':
      return `
        <circle cx="36" cy="20" r="6" fill="#fbcfe8" stroke="#1f2937" stroke-width="1.6" />
        <circle cx="50" cy="17" r="7" fill="#f472b6" stroke="#1f2937" stroke-width="1.6" />
        <circle cx="64" cy="20" r="6" fill="#fbcfe8" stroke="#1f2937" stroke-width="1.6" />
        <circle cx="50" cy="17" r="2.2" fill="#fef08a" />
      `;
    case 'pirate':
      return `
        <polygon points="18,24 50,8 82,24 68,26 32,26" fill="#1e293b" stroke="#fbbf24" stroke-width="2.2" stroke-linejoin="round" />
        <path d="M64,14 Q76,4 78,14" stroke="#ef4444" stroke-width="4" stroke-linecap="round" fill="none" />
      `;
    case 'wizard':
      return `
        <ellipse cx="50" cy="24" rx="30" ry="5" fill="#312e81" stroke="#1f2937" stroke-width="2" />
        <polygon points="34,24 52,2 66,24" fill="#4338ca" stroke="#1f2937" stroke-width="2" stroke-linejoin="round" />
        <circle cx="51" cy="15" r="3" fill="#fde047" />
      `;
    case 'pajama':
      return `
        <path d="M32,23 C34,8 66,6 76,22 L64,24 Z" fill="#93c5fd" stroke="#1f2937" stroke-width="2" stroke-linejoin="round" />
        <circle cx="77" cy="22" r="5" fill="#ffffff" stroke="#1f2937" stroke-width="1.8" />
      `;
    case 'besties':
      return `
        <ellipse cx="50" cy="14" rx="22" ry="6" fill="none" stroke="#fbbf24" stroke-width="3" />
        <path d="M50,20 C43,14 40,9 43,5 C46,3 49,5 50,8 C51,5 54,3 57,5 C60,9 57,14 50,20 Z" fill="#f43f5e" stroke="#1f2937" stroke-width="1.7" />
        <circle cx="29" cy="12" r="2.5" fill="#fde047" />
        <circle cx="71" cy="12" r="2.5" fill="#fde047" />
      `;
    default:
      return '';
  }
}

function renderShopCatSvg(coatId, hatId, clothingId, isHappy = false) {
  const coat = CAT_COATS.find((c) => c.id === coatId) || CAT_COATS[0];
  const clothingSvg = renderCatClothingSvg(clothingId);
  const hatSvg = renderCatHatSvg(hatId);
  const stardustSparkles =
    coat.id === 'stardust'
      ? `
        <polygon points="34,34 35.5,37.5 39,39 35.5,40.5 34,44 32.5,40.5 29,39 32.5,37.5" fill="#fde047" />
        <polygon points="66,34 67.5,37.5 71,39 67.5,40.5 66,44 64.5,40.5 61,39 64.5,37.5" fill="#fde047" />
        <circle cx="50" cy="76" r="2.2" fill="#fbbf24" />
        <circle cx="43" cy="82" r="1.6" fill="#fbbf24" />
        <circle cx="57" cy="82" r="1.6" fill="#fbbf24" />
      `
      : '';

  const eyesSvg = isHappy
    ? `
      <path d="M36,44 Q40,39 44,44" stroke="#1f2937" stroke-width="2.6" stroke-linecap="round" fill="none" />
      <path d="M56,44 Q60,39 64,44" stroke="#1f2937" stroke-width="2.6" stroke-linecap="round" fill="none" />
    `
    : `
      <circle cx="40" cy="43" r="4.2" fill="#1f2937" />
      <circle cx="60" cy="43" r="4.2" fill="#1f2937" />
      <circle cx="38.5" cy="41.5" r="1.5" fill="#ffffff" />
      <circle cx="58.5" cy="41.5" r="1.5" fill="#ffffff" />
    `;

  return `
    <svg viewBox="0 0 100 105" style="width:100%;height:100%;overflow:visible;" aria-label="Shop Cat">
      <!-- Cozy Cushion Shadow -->
      <ellipse cx="50" cy="96" rx="34" ry="6" fill="rgba(0,0,0,0.16)" />
      <!-- Wagging Tail -->
      <path d="M70,84 C88,82 92,62 82,56" stroke="${coat.fur}" stroke-width="9" stroke-linecap="round" fill="none" />
      <path d="M70,84 C88,82 92,62 82,56" stroke="#1f2937" stroke-width="2.2" stroke-linecap="round" fill="none" />
      <!-- Cat Torso -->
      <path d="M30,60 C25,74 26,95 34,95 L66,95 C74,95 75,74 70,60 Z" fill="${coat.fur}" stroke="#1f2937" stroke-width="2.4" />
      <!-- Soft Belly Patch -->
      <ellipse cx="50" cy="79" rx="14" ry="13" fill="${coat.belly}" />
      <!-- Clothing Layer -->
      ${clothingSvg}
      <!-- Front Paws -->
      <ellipse cx="38" cy="94" rx="7" ry="4.5" fill="${coat.belly}" stroke="#1f2937" stroke-width="2" />
      <ellipse cx="62" cy="94" rx="7" ry="4.5" fill="${coat.belly}" stroke="#1f2937" stroke-width="2" />
      <!-- Left & Right Ears -->
      <polygon points="25,36 22,14 41,24" fill="${coat.fur}" stroke="#1f2937" stroke-width="2.4" stroke-linejoin="round" />
      <polygon points="27,33 25,18 38,25" fill="${coat.earInner}" />
      <polygon points="75,36 78,14 59,24" fill="${coat.fur}" stroke="#1f2937" stroke-width="2.4" stroke-linejoin="round" />
      <polygon points="73,33 75,18 62,25" fill="${coat.earInner}" />
      <!-- Cat Head -->
      <ellipse cx="50" cy="43" rx="26" ry="21" fill="${coat.fur}" stroke="#1f2937" stroke-width="2.4" />
      <!-- Forehead Tabby Stripes -->
      <path d="M46,25 L46,31 M50,24 L50,32 M54,25 L54,31" stroke="${coat.secondary}" stroke-width="2.2" stroke-linecap="round" />
      <!-- Rosy Cheeks -->
      <ellipse cx="32" cy="48" rx="4.5" ry="2.6" fill="#fda4af" opacity="0.75" />
      <ellipse cx="68" cy="48" rx="4.5" ry="2.6" fill="#fda4af" opacity="0.75" />
      <!-- Eyes -->
      ${eyesSvg}
      <!-- Cute Pink Nose & Mouth -->
      <polygon points="47,47 53,47 50,50.5" fill="#f43f5e" />
      <path d="M44,52 Q47,55 50,51.5 Q53,55 56,52" stroke="#1f2937" stroke-width="2" stroke-linecap="round" fill="none" />
      <!-- Whiskers -->
      <path d="M26,45 L16,43 M26,49 L15,50 M74,45 L84,43 M74,49 L85,50" stroke="#1f2937" stroke-width="1.6" stroke-linecap="round" />
      ${stardustSparkles}
      <!-- Hat Layer -->
      ${hatSvg}
    </svg>
  `;
}

/**
 * Custom SVG Vector Renderer for all 12 Silhouette Shapes & 84 Market Items
 */
function renderCustomGroceryItemInner(item, safeLabel) {
  const { primaryColor, secondaryColor, accentColor } = item;
  switch (item.id) {
    case 'am-milk':
      return `
        <polygon points="30,10 66,10 66,17 30,17" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.2" stroke-linejoin="round" />
        <polygon points="20,34 30,17 66,17 58,34" fill="${secondaryColor}" stroke="#1f2937" stroke-width="2.4" stroke-linejoin="round" />
        <polygon points="58,34 66,17 80,34" fill="#dbeafe" stroke="#1f2937" stroke-width="2.4" stroke-linejoin="round" />
        <polygon points="62,31 66,21 75,31" fill="${primaryColor}" stroke="#1f2937" stroke-width="1.7" stroke-linejoin="round" />
        <polygon points="20,34 58,34 58,107 20,107" fill="${secondaryColor}" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <polygon points="58,34 80,34 80,107 58,107" fill="#dbeafe" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <rect x="20" y="34" width="38" height="11" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.2" />
        <rect x="58" y="34" width="22" height="11" fill="${accentColor}" stroke="#1f2937" stroke-width="2.2" />
        <rect x="20" y="96" width="38" height="11" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.2" />
        <rect x="58" y="96" width="22" height="11" fill="${accentColor}" stroke="#1f2937" stroke-width="2.2" />
        <ellipse cx="32" cy="57" rx="6" ry="4.5" fill="#1f2937" />
        <circle cx="48" cy="52" r="4" fill="#1f2937" />
        <circle cx="52" cy="61" r="2.8" fill="#1f2937" />
        <ellipse cx="69" cy="58" rx="5.5" ry="6" fill="#1f2937" />
        <ellipse cx="67" cy="80" rx="5" ry="4.5" fill="#1f2937" />
        <circle cx="74" cy="70" r="3" fill="#1f2937" />
        <rect x="23" y="69" width="32" height="18" rx="4" fill="#ffffff" stroke="${accentColor}" stroke-width="2" />
        <text x="39" y="81.5" text-anchor="middle" font-size="9.5" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'am-cereal':
      return `
        <polygon points="16,24 24,16 84,16 78,24" fill="${accentColor}" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <rect x="16" y="24" width="66" height="84" rx="7" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" />
        <rect x="23" y="34" width="52" height="58" rx="10" fill="${secondaryColor}" stroke="#1f2937" stroke-width="1.8" />
        <path d="M35,59 Q49,73 63,59 Z" fill="${accentColor}" stroke="#1f2937" stroke-width="1.6" />
        <circle cx="43" cy="54" r="4" fill="none" stroke="${primaryColor}" stroke-width="2.5" />
        <circle cx="54" cy="53" r="4" fill="none" stroke="${primaryColor}" stroke-width="2.5" />
        <circle cx="49" cy="48" r="3.5" fill="none" stroke="${accentColor}" stroke-width="2.3" />
        <text x="49" y="84" text-anchor="middle" font-size="10" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'am-ketchup':
      return `
        <polygon points="46,6 54,6 56,16 44,16" fill="${accentColor}" stroke="#1f2937" stroke-width="2.2" stroke-linejoin="round" />
        <rect x="39" y="16" width="22" height="9" rx="3" fill="${accentColor}" stroke="#1f2937" stroke-width="2.2" />
        <path d="M39,25 C39,34 27,38 27,54 L27,98 C27,104 32,108 38,108 L62,108 C68,108 73,104 73,98 L73,54 C73,38 61,34 61,25 Z" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <polygon points="50,48 70,71 50,94 30,71" fill="${secondaryColor}" stroke="#1f2937" stroke-width="1.8" />
        <circle cx="50" cy="67" r="6" fill="${primaryColor}" />
        <path d="M47,61 L50,57 L53,61" fill="none" stroke="${accentColor}" stroke-width="2" stroke-linecap="round" />
        <text x="50" y="83" text-anchor="middle" font-size="7.5" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'am-pb':
      return `
        <rect x="28" y="18" width="44" height="13" rx="4" fill="${accentColor}" stroke="#1f2937" stroke-width="2.5" />
        <rect x="32" y="31" width="36" height="5" fill="${secondaryColor}" stroke="#1f2937" stroke-width="2" />
        <rect x="21" y="35" width="58" height="73" rx="18" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" />
        <rect x="26" y="53" width="48" height="38" rx="9" fill="${secondaryColor}" stroke="#1f2937" stroke-width="1.8" />
        <ellipse cx="45" cy="66" rx="6" ry="5" fill="#d97706" stroke="#78350f" stroke-width="1.4" />
        <ellipse cx="54" cy="66" rx="6" ry="5" fill="#d97706" stroke="#78350f" stroke-width="1.4" />
        <text x="50" y="85" text-anchor="middle" font-size="9.5" font-weight="900" fill="#1f2937">${safeLabel}</text>
        <path d="M27,45 Q25,70 27,95" stroke="rgba(255,255,255,0.45)" stroke-width="3.5" fill="none" stroke-linecap="round" />
      `;
    case 'am-soup':
      return `
        <rect x="23" y="24" width="54" height="7" rx="3" fill="#e5e7eb" stroke="#1f2937" stroke-width="2.3" />
        <rect x="25" y="30" width="50" height="72" rx="4" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" />
        <rect x="26" y="65" width="48" height="35" fill="${secondaryColor}" />
        <circle cx="50" cy="65" r="11" fill="${accentColor}" stroke="#1f2937" stroke-width="2" />
        <circle cx="50" cy="65" r="5" fill="${primaryColor}" />
        <text x="50" y="92" text-anchor="middle" font-size="9.5" font-weight="900" fill="#1f2937">${safeLabel}</text>
        <rect x="23" y="101" width="54" height="7" rx="3" fill="#d1d5db" stroke="#1f2937" stroke-width="2.3" />
      `;
    case 'am-chips':
      return `
        <polygon points="18,18 26,12 34,18 42,12 50,18 58,12 66,18 74,12 82,18 78,26 22,26" fill="${accentColor}" stroke="#1f2937" stroke-width="2.2" stroke-linejoin="round" />
        <path d="M22,25 C15,48 15,76 22,100 L78,100 C85,76 85,48 78,25 Z" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <polygon points="22,100 78,100 82,108 74,104 66,108 58,104 50,108 42,104 34,108 26,104 18,108" fill="${accentColor}" stroke="#1f2937" stroke-width="2.2" stroke-linejoin="round" />
        <ellipse cx="50" cy="62" rx="24" ry="22" fill="${secondaryColor}" stroke="#1f2937" stroke-width="2" />
        <ellipse cx="50" cy="54" rx="10" ry="6" fill="#facc15" stroke="#b45309" stroke-width="1.5" />
        <text x="50" y="75" text-anchor="middle" font-size="9.5" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'am-cola':
      return `
        <rect x="33" y="20" width="34" height="6" rx="3" fill="#e5e7eb" stroke="#1f2937" stroke-width="2.2" />
        <polygon points="34,26 66,26 72,36 28,36" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.3" stroke-linejoin="round" />
        <rect x="28" y="35" width="44" height="66" rx="6" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" />
        <path d="M29,56 Q50,44 71,56 L71,82 Q50,70 29,82 Z" fill="${secondaryColor}" />
        <circle cx="42" cy="45" r="3" fill="${secondaryColor}" />
        <circle cx="58" cy="42" r="2.2" fill="${secondaryColor}" />
        <text x="50" y="71" text-anchor="middle" font-size="8.8" font-weight="900" fill="#1f2937">${safeLabel}</text>
        <rect x="32" y="101" width="36" height="6" rx="3" fill="#d1d5db" stroke="#1f2937" stroke-width="2.2" />
      `;
    case 'am-bread':
      return `
        <path d="M18,56 C12,34 30,22 50,22 C70,22 88,34 82,56 L78,102 C78,106 74,108 68,108 L32,108 C26,108 22,106 22,102 Z" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <circle cx="34" cy="39" r="4" fill="#ef4444" />
        <circle cx="51" cy="34" r="4" fill="${accentColor}" />
        <circle cx="67" cy="41" r="4" fill="#eab308" />
        <rect x="21" y="64" width="58" height="34" rx="5" fill="${secondaryColor}" stroke="#1f2937" stroke-width="2.2" />
        <circle cx="32" cy="81" r="3.5" fill="#ef4444" />
        <circle cx="68" cy="81" r="3.5" fill="${accentColor}" />
        <text x="50" y="85" text-anchor="middle" font-size="9" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'am-oj':
      return `
        <path d="M68,36 C86,36 86,66 68,66" fill="none" stroke="${primaryColor}" stroke-width="9" stroke-linecap="round" />
        <path d="M68,36 C86,36 86,66 68,66" fill="none" stroke="#1f2937" stroke-width="2.5" stroke-linecap="round" />
        <rect x="36" y="14" width="22" height="10" rx="3" fill="${accentColor}" stroke="#1f2937" stroke-width="2.3" />
        <path d="M37,24 L57,24 L69,44 L69,100 C69,105 65,108 60,108 L34,108 C29,108 25,105 25,100 L25,44 Z" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <rect x="28" y="55" width="38" height="38" rx="7" fill="${secondaryColor}" stroke="#1f2937" stroke-width="1.8" />
        <circle cx="47" cy="68" r="8" fill="#fb923c" stroke="#ea580c" stroke-width="1.5" />
        <circle cx="47" cy="68" r="2.5" fill="#fffbeb" />
        <text x="47" y="87" text-anchor="middle" font-size="9.5" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'am-eggs':
      return `
        <circle cx="30" cy="46" r="11" fill="#fffbeb" stroke="#1f2937" stroke-width="2.3" />
        <circle cx="50" cy="44" r="12" fill="#fffbeb" stroke="#1f2937" stroke-width="2.3" />
        <circle cx="70" cy="46" r="11" fill="#fffbeb" stroke="#1f2937" stroke-width="2.3" />
        <polygon points="16,48 84,48 88,62 12,62" fill="${secondaryColor}" stroke="#1f2937" stroke-width="2.4" stroke-linejoin="round" />
        <polygon points="14,62 86,62 80,106 20,106" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <rect x="26" y="70" width="48" height="26" rx="6" fill="${secondaryColor}" stroke="#1f2937" stroke-width="1.8" />
        <text x="50" y="87" text-anchor="middle" font-size="9.5" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'am-cookies':
      return `
        <circle cx="50" cy="24" r="8" fill="${accentColor}" stroke="#1f2937" stroke-width="2.3" />
        <path d="M50,28 C76,28 86,58 84,92 L16,92 C14,58 24,28 50,28 Z" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <circle cx="38" cy="46" r="7" fill="#d97706" stroke="#1f2937" stroke-width="1.5" />
        <circle cx="62" cy="46" r="7" fill="#d97706" stroke="#1f2937" stroke-width="1.5" />
        <circle cx="37" cy="45" r="1.4" fill="#451a03" />
        <circle cx="63" cy="47" r="1.4" fill="#451a03" />
        <rect x="12" y="90" width="76" height="16" rx="7" fill="${secondaryColor}" stroke="#1f2937" stroke-width="2.5" />
        <rect x="28" y="58" width="44" height="26" rx="8" fill="${secondaryColor}" stroke="#1f2937" stroke-width="2" />
        <text x="50" y="75" text-anchor="middle" font-size="9" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'am-mac':
      return `
        <path d="M22,42 Q50,20 78,42 Z" fill="${accentColor}" stroke="#1f2937" stroke-width="2.4" stroke-linejoin="round" />
        <rect x="14" y="40" width="72" height="10" rx="5" fill="${secondaryColor}" stroke="#1f2937" stroke-width="2.5" />
        <polygon points="18,50 82,50 73,106 27,106" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <rect x="26" y="62" width="48" height="32" rx="8" fill="#fffbeb" stroke="${secondaryColor}" stroke-width="2.2" />
        <path d="M39,71 Q50,62 61,71" fill="none" stroke="#ea580c" stroke-width="4" stroke-linecap="round" />
        <text x="50" y="88" text-anchor="middle" font-size="9.5" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'fm-cider':
      return `
        <path d="M36,30 C21,29 21,49 34,51" fill="none" stroke="${primaryColor}" stroke-width="6" stroke-linecap="round" />
        <path d="M64,30 C79,29 79,49 66,51" fill="none" stroke="${primaryColor}" stroke-width="6" stroke-linecap="round" />
        <path d="M36,30 C21,29 21,49 34,51 M64,30 C79,29 79,49 66,51" fill="none" stroke="#1f2937" stroke-width="2.2" stroke-linecap="round" />
        <rect x="42" y="11" width="16" height="10" rx="3" fill="#d97706" stroke="#1f2937" stroke-width="2.2" />
        <rect x="39" y="20" width="22" height="14" rx="4" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.4" />
        <ellipse cx="50" cy="70" rx="31" ry="37" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" />
        <path d="M58,28 L72,34 L66,43 Z" fill="#16a34a" stroke="#1f2937" stroke-width="1.6" />
        <rect x="26" y="54" width="48" height="34" rx="9" fill="${secondaryColor}" stroke="#1f2937" stroke-width="1.8" />
        <circle cx="50" cy="65" r="6" fill="${accentColor}" />
        <path d="M50,59 Q53,54 56,57" fill="none" stroke="#15803d" stroke-width="2" stroke-linecap="round" />
        <text x="50" y="83" text-anchor="middle" font-size="9" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'fm-berries':
      return `
        <path d="M26,46 C26,30 42,26 42,42 C42,50 34,56 34,56 C34,56 26,52 26,46 Z" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.2" />
        <path d="M58,46 C58,30 74,26 74,42 C74,50 66,56 66,56 C66,56 58,52 58,46 Z" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.2" />
        <path d="M40,42 C40,22 60,22 60,42 C60,54 50,60 50,60 C50,60 40,54 40,42 Z" fill="#f43f5e" stroke="#1f2937" stroke-width="2.3" />
        <polygon points="43,27 50,18 57,27 50,31" fill="${accentColor}" stroke="#1f2937" stroke-width="1.8" stroke-linejoin="round" />
        <polygon points="28,33 34,26 40,33" fill="${accentColor}" stroke="#1f2937" stroke-width="1.6" />
        <polygon points="60,33 66,26 72,33" fill="${accentColor}" stroke="#1f2937" stroke-width="1.6" />
        <circle cx="48" cy="40" r="1.2" fill="#fde047" />
        <circle cx="53" cy="45" r="1.2" fill="#fde047" />
        <polygon points="14,54 86,54 78,106 22,106" fill="#22c55e" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <rect x="26" y="65" width="12" height="12" rx="3" fill="${secondaryColor}" stroke="#1f2937" stroke-width="1.4" />
        <rect x="62" y="65" width="12" height="12" rx="3" fill="${secondaryColor}" stroke="#1f2937" stroke-width="1.4" />
        <rect x="25" y="74" width="50" height="24" rx="6" fill="#fffbeb" stroke="#1f2937" stroke-width="1.8" />
        <text x="50" y="90" text-anchor="middle" font-size="9.5" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'fm-honey':
      return `
        <circle cx="32" cy="24" r="9" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.4" />
        <circle cx="68" cy="24" r="9" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.4" />
        <polygon points="41,9 59,9 61,21 39,21" fill="#facc15" stroke="#1f2937" stroke-width="2.3" stroke-linejoin="round" />
        <ellipse cx="50" cy="36" rx="22" ry="16" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" />
        <ellipse cx="50" cy="40" rx="8" ry="6" fill="${secondaryColor}" />
        <circle cx="50" cy="38" r="2.6" fill="#1f2937" />
        <circle cx="42" cy="32" r="2.2" fill="#1f2937" />
        <circle cx="58" cy="32" r="2.2" fill="#1f2937" />
        <ellipse cx="50" cy="79" rx="27" ry="28" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" />
        <circle cx="24" cy="65" r="7" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.2" />
        <circle cx="76" cy="65" r="7" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.2" />
        <rect x="30" y="65" width="40" height="28" rx="9" fill="${secondaryColor}" stroke="#1f2937" stroke-width="1.8" />
        <text x="50" y="83" text-anchor="middle" font-size="8.8" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'fm-pickles':
      return `
        <path d="M27,25 C17,25 17,45 25,45" fill="none" stroke="#64748b" stroke-width="3" stroke-linecap="round" />
        <path d="M73,25 C83,25 83,45 75,45" fill="none" stroke="#64748b" stroke-width="3" stroke-linecap="round" />
        <path d="M35,19 C35,10 65,10 65,19" fill="none" stroke="#64748b" stroke-width="3" stroke-linecap="round" />
        <rect x="28" y="19" width="44" height="11" rx="4" fill="#d97706" stroke="#1f2937" stroke-width="2.4" />
        <rect x="23" y="30" width="54" height="77" rx="14" fill="${secondaryColor}" stroke="#1f2937" stroke-width="2.5" />
        <rect x="30" y="36" width="11" height="63" rx="5.5" fill="${primaryColor}" stroke="#1f2937" stroke-width="1.8" />
        <rect x="44" y="34" width="12" height="66" rx="6" fill="${primaryColor}" stroke="#1f2937" stroke-width="1.8" />
        <rect x="59" y="37" width="11" height="61" rx="5.5" fill="${primaryColor}" stroke="#1f2937" stroke-width="1.8" />
        <rect x="28" y="60" width="44" height="26" rx="7" fill="#fffbeb" stroke="#1f2937" stroke-width="1.8" />
        <text x="50" y="77" text-anchor="middle" font-size="9.5" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'fm-jam':
      return `
        <path d="M24,22 Q50,10 76,22 L82,36 Q72,41 64,35 Q56,41 50,35 Q44,41 36,35 Q28,41 18,36 Z" fill="${accentColor}" stroke="#1f2937" stroke-width="2.3" stroke-linejoin="round" />
        <path d="M40,36 L34,44 M60,36 L66,44" stroke="#b45309" stroke-width="2.5" stroke-linecap="round" />
        <polygon points="30,36 70,36 80,58 74,106 26,106 20,58" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <ellipse cx="50" cy="74" rx="22" ry="17" fill="${secondaryColor}" stroke="#1f2937" stroke-width="1.8" />
        <circle cx="46" cy="65" r="4" fill="${primaryColor}" />
        <circle cx="54" cy="65" r="4" fill="${primaryColor}" />
        <circle cx="50" cy="69" r="4" fill="#1f2937" />
        <text x="50" y="84" text-anchor="middle" font-size="9.5" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'fm-lavender':
      return `
        <line x1="36" y1="48" x2="26" y2="16" stroke="${accentColor}" stroke-width="2.4" stroke-linecap="round" />
        <line x1="45" y1="48" x2="40" y2="11" stroke="${accentColor}" stroke-width="2.4" stroke-linecap="round" />
        <line x1="55" y1="48" x2="60" y2="11" stroke="${accentColor}" stroke-width="2.4" stroke-linecap="round" />
        <line x1="64" y1="48" x2="74" y2="16" stroke="${accentColor}" stroke-width="2.4" stroke-linecap="round" />
        <ellipse cx="26" cy="18" rx="4.5" ry="7" fill="${primaryColor}" stroke="#1f2937" stroke-width="1.6" />
        <ellipse cx="40" cy="14" rx="4.5" ry="7.5" fill="${primaryColor}" stroke="#1f2937" stroke-width="1.6" />
        <ellipse cx="60" cy="14" rx="4.5" ry="7.5" fill="${primaryColor}" stroke="#1f2937" stroke-width="1.6" />
        <ellipse cx="74" cy="18" rx="4.5" ry="7" fill="${primaryColor}" stroke="#1f2937" stroke-width="1.6" />
        <path d="M32,45 L68,45 L79,98 C80,104 74,108 66,108 L34,108 C26,108 20,104 21,98 Z" fill="#fef3c7" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <rect x="33" y="42" width="34" height="7" rx="3.5" fill="${primaryColor}" stroke="#1f2937" stroke-width="2" />
        <rect x="28" y="64" width="44" height="26" rx="7" fill="${secondaryColor}" stroke="#1f2937" stroke-width="1.8" />
        <text x="50" y="81" text-anchor="middle" font-size="9" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'fm-kombucha':
      return `
        <rect x="43" y="8" width="14" height="9" rx="4" fill="#fffbeb" stroke="#1f2937" stroke-width="2.2" />
        <path d="M40,14 L34,29 L40,34" fill="none" stroke="#64748b" stroke-width="2.4" stroke-linecap="round" />
        <path d="M42,17 L58,17 L61,38 L71,54 L71,102 C71,106 67,108 62,108 L38,108 C33,108 29,106 29,102 L29,54 L39,38 Z" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <polygon points="50,51 67,72 50,93 33,72" fill="${secondaryColor}" stroke="#1f2937" stroke-width="1.9" stroke-linejoin="round" />
        <circle cx="50" cy="64" r="4.5" fill="${accentColor}" />
        <text x="50" y="79" text-anchor="middle" font-size="7.8" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'fm-sourdough':
      return `
        <ellipse cx="50" cy="54" rx="34" ry="28" fill="#d97706" stroke="#1f2937" stroke-width="2.5" />
        <path d="M36,39 Q50,30 64,39 M34,47 Q50,41 66,47" fill="none" stroke="${secondaryColor}" stroke-width="3" stroke-linecap="round" />
        <path d="M13,64 L87,64 L79,103 C78,106 72,108 66,108 L34,108 C28,108 22,106 21,103 Z" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <line x1="16" y1="73" x2="84" y2="73" stroke="${accentColor}" stroke-width="2.2" />
        <line x1="18" y1="81" x2="82" y2="81" stroke="${accentColor}" stroke-width="2.2" />
        <rect x="27" y="76" width="46" height="24" rx="6" fill="${secondaryColor}" stroke="#1f2937" stroke-width="1.8" />
        <text x="50" y="92" text-anchor="middle" font-size="9" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'fm-maple':
      return `
        <path d="M66,35 C84,35 84,56 68,56" fill="none" stroke="${primaryColor}" stroke-width="7" stroke-linecap="round" />
        <path d="M66,35 C84,35 84,56 68,56" fill="none" stroke="#1f2937" stroke-width="2.3" stroke-linecap="round" />
        <polygon points="36,22 43,14 60,18 58,28 38,28" fill="${accentColor}" stroke="#1f2937" stroke-width="2.2" stroke-linejoin="round" />
        <path d="M39,28 L57,28 L72,56 L72,101 C72,105 68,108 63,108 L31,108 C26,108 22,105 22,101 L22,56 Z" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <rect x="27" y="59" width="40" height="36" rx="8" fill="${secondaryColor}" stroke="#1f2937" stroke-width="1.8" />
        <polygon points="47,63 50,69 56,67 52,72 55,77 47,75 39,77 42,72 38,67 44,69" fill="${accentColor}" />
        <text x="47" y="90" text-anchor="middle" font-size="8.5" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'fm-tomatoes':
      return `
        <path d="M22,38 Q50,18 78,38" fill="none" stroke="#15803d" stroke-width="3.2" stroke-linecap="round" />
        <circle cx="30" cy="46" r="14" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.3" />
        <circle cx="50" cy="42" r="15" fill="#dc2626" stroke="#1f2937" stroke-width="2.3" />
        <circle cx="70" cy="46" r="14" fill="#f97316" stroke="#1f2937" stroke-width="2.3" />
        <polygon points="45,29 50,24 55,29 50,33" fill="#16a34a" stroke="#1f2937" stroke-width="1.4" />
        <rect x="13" y="54" width="74" height="52" rx="4" fill="#d97706" stroke="#1f2937" stroke-width="2.5" />
        <line x1="13" y1="71" x2="87" y2="71" stroke="#92400e" stroke-width="2.4" />
        <line x1="13" y1="88" x2="87" y2="88" stroke="#92400e" stroke-width="2.4" />
        <rect x="28" y="69" width="44" height="24" rx="5" fill="${secondaryColor}" stroke="#1f2937" stroke-width="1.8" />
        <text x="50" y="85" text-anchor="middle" font-size="9.5" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'fm-pie':
      return `
        <ellipse cx="50" cy="48" rx="35" ry="22" fill="#f59e0b" stroke="#1f2937" stroke-width="2.5" />
        <ellipse cx="50" cy="48" rx="28" ry="15" fill="${accentColor}" />
        <line x1="28" y1="40" x2="72" y2="56" stroke="#fde68a" stroke-width="4" />
        <line x1="28" y1="56" x2="72" y2="40" stroke="#fde68a" stroke-width="4" />
        <line x1="36" y1="35" x2="64" y2="61" stroke="#fde68a" stroke-width="3.5" />
        <polygon points="12,56 88,56 79,102 21,102" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <rect x="27" y="67" width="46" height="24" rx="7" fill="${secondaryColor}" stroke="#1f2937" stroke-width="1.8" />
        <text x="50" y="83" text-anchor="middle" font-size="9.5" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'fm-goat':
      return `
        <path d="M20,42 L35,19 M28,31 L20,24 M26,35 L37,33" stroke="${accentColor}" stroke-width="3.2" stroke-linecap="round" />
        <rect x="20" y="42" width="60" height="36" rx="14" fill="#fffbeb" stroke="#1f2937" stroke-width="2.5" />
        <ellipse cx="26" cy="60" rx="6" ry="16" fill="#fef3c7" stroke="#1f2937" stroke-width="2" />
        <circle cx="43" cy="50" r="2" fill="${accentColor}" />
        <circle cx="66" cy="52" r="2" fill="${accentColor}" />
        <circle cx="58" cy="48" r="1.8" fill="${accentColor}" />
        <path d="M10,78 L78,78 Q92,78 92,88 Q92,98 78,98 L10,98 Z" fill="#b45309" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <circle cx="84" cy="88" r="3" fill="#fef3c7" stroke="#1f2937" stroke-width="1.5" />
        <rect x="28" y="55" width="44" height="21" rx="6" fill="${primaryColor}" stroke="#1f2937" stroke-width="1.8" />
        <text x="50" y="69" text-anchor="middle" font-size="8.2" font-weight="900" fill="#ffffff">${safeLabel}</text>
      `;
    case 'jp-matcha':
      return `
        <polygon points="56,6 64,6 55,44 48,44" fill="${accentColor}" stroke="#1f2937" stroke-width="2.2" stroke-linejoin="round" />
        <path d="M27,42 C27,20 73,20 73,42 Z" fill="${secondaryColor}" stroke="#1f2937" stroke-width="2.4" />
        <rect x="23" y="40" width="54" height="7" rx="3.5" fill="#ffffff" stroke="#1f2937" stroke-width="2.2" />
        <polygon points="27,47 73,47 66,107 34,107" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <path d="M29,76 Q50,66 71,76 L67,105 L33,105 Z" fill="${secondaryColor}" />
        <rect x="28" y="64" width="44" height="24" rx="7" fill="#fffbeb" stroke="#1f2937" stroke-width="1.8" />
        <text x="50" y="80" text-anchor="middle" font-size="8.5" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'jp-pocky':
      return `
        <line x1="34" y1="36" x2="26" y2="12" stroke="#fcd34d" stroke-width="4" stroke-linecap="round" />
        <line x1="45" y1="36" x2="43" y2="9" stroke="#fcd34d" stroke-width="4" stroke-linecap="round" />
        <line x1="56" y1="36" x2="58" y2="10" stroke="#fcd34d" stroke-width="4" stroke-linecap="round" />
        <line x1="66" y1="36" x2="73" y2="14" stroke="#fcd34d" stroke-width="4" stroke-linecap="round" />
        <line x1="31" y1="26" x2="26" y2="12" stroke="${primaryColor}" stroke-width="4.5" stroke-linecap="round" />
        <line x1="44" y1="25" x2="43" y2="9" stroke="${primaryColor}" stroke-width="4.5" stroke-linecap="round" />
        <line x1="57" y1="25" x2="58" y2="10" stroke="${primaryColor}" stroke-width="4.5" stroke-linecap="round" />
        <line x1="69" y1="26" x2="73" y2="14" stroke="${primaryColor}" stroke-width="4.5" stroke-linecap="round" />
        <rect x="24" y="34" width="52" height="74" rx="6" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" />
        <polygon points="24,56 76,46 76,84 24,94" fill="${secondaryColor}" stroke="#1f2937" stroke-width="1.8" />
        <text x="50" y="75" text-anchor="middle" font-size="10" font-weight="900" fill="${accentColor}">${safeLabel}</text>
      `;
    case 'jp-soy':
      return `
        <polygon points="34,19 25,13 36,11" fill="${accentColor}" stroke="#1f2937" stroke-width="2" stroke-linejoin="round" />
        <polygon points="66,19 75,13 64,11" fill="${accentColor}" stroke="#1f2937" stroke-width="2" stroke-linejoin="round" />
        <path d="M35,12 L65,12 L62,27 L38,27 Z" fill="${accentColor}" stroke="#1f2937" stroke-width="2.3" stroke-linejoin="round" />
        <rect x="37" y="27" width="26" height="7" rx="2" fill="#facc15" stroke="#1f2937" stroke-width="2" />
        <path d="M38,34 L62,34 L77,98 C78,104 73,108 66,108 L34,108 C27,108 22,104 23,98 Z" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <rect x="31" y="60" width="38" height="32" rx="7" fill="${secondaryColor}" stroke="#1f2937" stroke-width="1.8" />
        <circle cx="50" cy="69" r="4.5" fill="${accentColor}" />
        <text x="50" y="85" text-anchor="middle" font-size="8.8" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'jp-plum':
      return `
        <rect x="44" y="13" width="12" height="7" rx="3" fill="#d97706" stroke="#1f2937" stroke-width="2" />
        <rect x="27" y="20" width="46" height="9" rx="3" fill="#b45309" stroke="#1f2937" stroke-width="2.3" />
        <ellipse cx="50" cy="68" rx="30" ry="39" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" />
        <rect x="30" y="31" width="40" height="7" rx="3" fill="#fde68a" stroke="#1f2937" stroke-width="2" />
        <rect x="29" y="54" width="42" height="34" rx="8" fill="${secondaryColor}" stroke="#1f2937" stroke-width="1.9" />
        <circle cx="50" cy="65" r="6" fill="${accentColor}" />
        <text x="50" y="82" text-anchor="middle" font-size="9.5" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'jp-coffee':
      return `
        <rect x="31" y="22" width="38" height="6" rx="3" fill="#e5e7eb" stroke="#1f2937" stroke-width="2.2" />
        <path d="M31,28 L69,28 L72,40 L72,98 L68,107 L32,107 L28,98 L28,40 Z" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <line x1="29" y1="43" x2="71" y2="43" stroke="#93c5fd" stroke-width="2" />
        <line x1="29" y1="95" x2="71" y2="95" stroke="#93c5fd" stroke-width="2" />
        <rect x="30" y="54" width="40" height="32" rx="6" fill="${secondaryColor}" stroke="#1f2937" stroke-width="1.8" />
        <circle cx="50" cy="64" r="6" fill="${accentColor}" stroke="#1f2937" stroke-width="1.5" />
        <text x="50" y="80" text-anchor="middle" font-size="8.2" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'jp-senbei':
      return `
        <rect x="28" y="10" width="44" height="16" rx="4" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.3" />
        <circle cx="50" cy="18" r="3" fill="#ffffff" stroke="#1f2937" stroke-width="1.5" />
        <rect x="20" y="26" width="60" height="82" rx="8" fill="${secondaryColor}" stroke="#1f2937" stroke-width="2.5" />
        <circle cx="42" cy="54" r="14" fill="#d97706" stroke="#1f2937" stroke-width="2" />
        <rect x="35" y="48" width="14" height="16" rx="2" fill="#0f172a" />
        <circle cx="60" cy="66" r="14" fill="#f59e0b" stroke="#1f2937" stroke-width="2" />
        <rect x="53" y="60" width="14" height="16" rx="2" fill="#0f172a" />
        <rect x="27" y="79" width="46" height="22" rx="6" fill="#fffbeb" stroke="#1f2937" stroke-width="1.8" />
        <text x="50" y="94" text-anchor="middle" font-size="9" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'jp-ramune':
      return `
        <rect x="36" y="12" width="28" height="9" rx="4" fill="${accentColor}" stroke="#1f2937" stroke-width="2.2" />
        <path d="M38,21 L62,21 L60,34 L71,48 L71,101 C71,105 67,108 62,108 L38,108 C33,108 29,105 29,101 L29,48 L40,34 Z" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <circle cx="50" cy="36" r="6" fill="#e0f2fe" stroke="#1f2937" stroke-width="1.8" />
        <rect x="31" y="57" width="38" height="36" rx="7" fill="${secondaryColor}" stroke="#1f2937" stroke-width="1.8" />
        <circle cx="43" cy="66" r="2.5" fill="${accentColor}" />
        <circle cx="56" cy="64" r="2" fill="${primaryColor}" />
        <text x="50" y="83" text-anchor="middle" font-size="7.6" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'jp-melonpan':
      return `
        <path d="M16,66 C16,24 84,24 84,66 Z" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" />
        <path d="M29,40 L48,60 M48,30 L68,54 M66,38 L44,62 M44,32 L25,54" stroke="${accentColor}" stroke-width="2.5" stroke-linecap="round" />
        <polygon points="12,64 24,58 36,64 50,58 64,64 76,58 88,64 81,105 19,105" fill="${secondaryColor}" stroke="#1f2937" stroke-width="2.4" stroke-linejoin="round" />
        <rect x="27" y="72" width="46" height="24" rx="7" fill="#ffffff" stroke="#1f2937" stroke-width="1.8" />
        <text x="50" y="88" text-anchor="middle" font-size="9.5" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'jp-sake':
      return `
        <path d="M31,16 L51,16 L47,34 C60,44 63,82 58,106 L24,106 C19,82 22,44 35,34 Z" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <polygon points="65,78 88,78 84,106 69,106" fill="${secondaryColor}" stroke="#1f2937" stroke-width="2.3" stroke-linejoin="round" />
        <rect x="24" y="59" width="34" height="30" rx="6" fill="${secondaryColor}" stroke="#1f2937" stroke-width="1.8" />
        <circle cx="41" cy="67" r="4.5" fill="${accentColor}" />
        <text x="41" y="83" text-anchor="middle" font-size="8.5" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'jp-bento':
      return `
        <line x1="16" y1="22" x2="84" y2="38" stroke="#d97706" stroke-width="3.6" stroke-linecap="round" />
        <line x1="20" y1="16" x2="86" y2="31" stroke="#b45309" stroke-width="3.2" stroke-linecap="round" />
        <rect x="13" y="42" width="74" height="62" rx="10" fill="${secondaryColor}" stroke="#1f2937" stroke-width="2.5" />
        <rect x="20" y="49" width="28" height="24" rx="5" fill="#ffffff" />
        <circle cx="34" cy="61" r="4.5" fill="${primaryColor}" />
        <rect x="52" y="49" width="28" height="24" rx="5" fill="${accentColor}" />
        <rect x="20" y="77" width="60" height="20" rx="5" fill="#fffbeb" stroke="${primaryColor}" stroke-width="1.8" />
        <text x="50" y="91" text-anchor="middle" font-size="9.5" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'jp-onigiri':
      return `
        <path d="M50,16 Q66,18 85,84 Q88,104 71,106 L29,106 Q12,104 15,84 Q34,18 50,16 Z" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <path d="M16,74 L84,74 L85,87 Q87,104 71,106 L29,106 Q13,104 15,87 Z" fill="${secondaryColor}" stroke="#1f2937" stroke-width="2" />
        <circle cx="50" cy="41" r="7" fill="${accentColor}" />
        <rect x="29" y="54" width="42" height="24" rx="7" fill="#fffbeb" stroke="#1f2937" stroke-width="1.9" />
        <text x="50" y="70" text-anchor="middle" font-size="9.5" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'jp-ramen':
      return `
        <path d="M24,38 L38,16 L66,22 L72,38 Z" fill="#fef3c7" stroke="#1f2937" stroke-width="2.2" stroke-linejoin="round" />
        <line x1="10" y1="36" x2="90" y2="36" stroke="#d97706" stroke-width="4" stroke-linecap="round" />
        <rect x="21" y="38" width="58" height="9" rx="4" fill="${secondaryColor}" stroke="#1f2937" stroke-width="2.4" />
        <polygon points="24,47 76,47 68,107 32,107" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <rect x="29" y="61" width="42" height="30" rx="7" fill="${secondaryColor}" stroke="#1f2937" stroke-width="1.8" />
        <path d="M37,69 Q43,64 49,69 Q55,74 61,69" fill="none" stroke="${accentColor}" stroke-width="2.6" stroke-linecap="round" />
        <text x="50" y="84" text-anchor="middle" font-size="9" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'fr-cream':
      return `
        <path d="M68,42 C87,38 87,74 69,76" fill="none" stroke="${secondaryColor}" stroke-width="8" stroke-linecap="round" />
        <path d="M68,42 C87,38 87,74 69,76" fill="none" stroke="#1f2937" stroke-width="2.4" stroke-linecap="round" />
        <path d="M14,29 L33,29 L67,29 C73,54 74,98 63,106 L31,106 C20,98 22,52 14,29 Z" fill="${secondaryColor}" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <rect x="28" y="25" width="38" height="6" rx="3" fill="${primaryColor}" stroke="#1f2937" stroke-width="2" />
        <ellipse cx="47" cy="69" rx="19" ry="20" fill="${primaryColor}" stroke="#1f2937" stroke-width="1.9" />
        <circle cx="47" cy="60" r="4" fill="${accentColor}" />
        <text x="47" y="75" text-anchor="middle" font-size="8.2" font-weight="900" fill="#ffffff">${safeLabel}</text>
      `;
    case 'fr-macaron':
      return `
        <ellipse cx="50" cy="24" rx="15" ry="6" fill="#34d399" stroke="#1f2937" stroke-width="2" />
        <rect x="35" y="27" width="30" height="5" rx="2" fill="#fffbeb" />
        <ellipse cx="50" cy="35" rx="15" ry="6" fill="#34d399" stroke="#1f2937" stroke-width="2" />
        <ellipse cx="50" cy="48" rx="21" ry="7" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.1" />
        <rect x="29" y="52" width="42" height="6" rx="2" fill="#fffbeb" />
        <ellipse cx="50" cy="61" rx="21" ry="7" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.1" />
        <polygon points="15,74 85,74 79,106 21,106" fill="${secondaryColor}" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <rect x="27" y="80" width="46" height="20" rx="6" fill="#ffffff" stroke="${accentColor}" stroke-width="2" />
        <text x="50" y="94" text-anchor="middle" font-size="9.5" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'fr-dijon':
      return `
        <polygon points="62,8 70,12 58,34 52,31" fill="#d97706" stroke="#1f2937" stroke-width="2" stroke-linejoin="round" />
        <rect x="31" y="26" width="38" height="10" rx="4" fill="#b45309" stroke="#1f2937" stroke-width="2.3" />
        <path d="M26,36 L74,36 C82,56 80,98 70,106 L30,106 C20,98 18,56 26,36 Z" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <ellipse cx="50" cy="72" rx="21" ry="18" fill="${secondaryColor}" stroke="#1f2937" stroke-width="2" />
        <circle cx="50" cy="64" r="4" fill="${accentColor}" />
        <text x="50" y="79" text-anchor="middle" font-size="9.5" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'fr-confiture':
      return `
        <path d="M25,18 Q50,12 75,18 L80,33 L20,33 Z" fill="#dc2626" stroke="#1f2937" stroke-width="2.4" stroke-linejoin="round" />
        <line x1="34" y1="16" x2="34" y2="33" stroke="#ffffff" stroke-width="3" />
        <line x1="50" y1="15" x2="50" y2="33" stroke="#ffffff" stroke-width="3" />
        <line x1="66" y1="16" x2="66" y2="33" stroke="#ffffff" stroke-width="3" />
        <polygon points="26,33 74,33 78,54 74,106 26,106 22,54" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <rect x="28" y="55" width="44" height="36" rx="5" fill="${secondaryColor}" stroke="#1f2937" stroke-width="1.9" />
        <circle cx="50" cy="66" r="5.5" fill="${primaryColor}" />
        <text x="50" y="83" text-anchor="middle" font-size="8" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'fr-espresso':
      return `
        <circle cx="50" cy="11" r="5" fill="${accentColor}" stroke="#1f2937" stroke-width="2" />
        <polygon points="24,29 50,15 76,29" fill="${accentColor}" stroke="#1f2937" stroke-width="2.4" stroke-linejoin="round" />
        <polygon points="24,29 76,29 72,98 28,98" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <rect x="22" y="98" width="56" height="9" rx="3" fill="${accentColor}" stroke="#1f2937" stroke-width="2.3" />
        <rect x="30" y="47" width="40" height="36" rx="7" fill="${secondaryColor}" stroke="#1f2937" stroke-width="1.9" />
        <circle cx="50" cy="58" r="5" fill="${accentColor}" />
        <text x="50" y="75" text-anchor="middle" font-size="9.5" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'fr-madeleine':
      return `
        <ellipse cx="34" cy="46" rx="13" ry="22" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.3" />
        <ellipse cx="66" cy="46" rx="13" ry="22" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.3" />
        <ellipse cx="50" cy="40" rx="15" ry="25" fill="#fbbf24" stroke="#1f2937" stroke-width="2.4" />
        <line x1="50" y1="22" x2="50" y2="54" stroke="#b45309" stroke-width="1.8" />
        <line x1="43" y1="26" x2="46" y2="54" stroke="#b45309" stroke-width="1.6" />
        <line x1="57" y1="26" x2="54" y2="54" stroke="#b45309" stroke-width="1.6" />
        <polygon points="18,62 82,62 74,106 26,106" fill="${secondaryColor}" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <rect x="28" y="72" width="44" height="24" rx="7" fill="#ffffff" stroke="${accentColor}" stroke-width="2" />
        <text x="50" y="88" text-anchor="middle" font-size="9.5" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'fr-perrier':
      return `
        <rect x="43" y="9" width="14" height="22" rx="3" fill="${accentColor}" stroke="#1f2937" stroke-width="2.2" />
        <path d="M42,31 L58,31 C61,48 76,61 75,86 C74,100 64,107 50,107 C36,107 26,100 25,86 C24,61 39,48 42,31 Z" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <ellipse cx="50" cy="76" rx="20" ry="17" fill="${secondaryColor}" stroke="#1f2937" stroke-width="1.9" />
        <circle cx="44" cy="65" r="2.5" fill="${accentColor}" />
        <circle cx="56" cy="65" r="2.5" fill="${accentColor}" />
        <text x="50" y="81" text-anchor="middle" font-size="8.2" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'fr-baguette':
      return `
        <polygon points="26,56 44,10 56,14 40,60" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.4" stroke-linejoin="round" />
        <polygon points="52,58 68,14 80,19 64,62" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.4" stroke-linejoin="round" />
        <line x1="42" y1="22" x2="49" y2="27" stroke="${secondaryColor}" stroke-width="2.2" stroke-linecap="round" />
        <line x1="65" y1="25" x2="72" y2="31" stroke="${secondaryColor}" stroke-width="2.2" stroke-linecap="round" />
        <polygon points="22,48 76,56 72,107 26,107" fill="${secondaryColor}" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <rect x="29" y="69" width="42" height="25" rx="6" fill="#ffffff" stroke="${accentColor}" stroke-width="2" />
        <text x="50" y="85" text-anchor="middle" font-size="9.5" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'fr-syrup':
      return `
        <rect x="44" y="10" width="12" height="10" rx="3" fill="#fffbeb" stroke="#1f2937" stroke-width="2.2" />
        <rect x="42" y="20" width="16" height="18" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.3" />
        <path d="M42,38 L58,38 L68,52 L68,103 C68,106 64,108 59,108 L41,108 C36,108 32,106 32,103 L32,52 Z" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <line x1="38" y1="48" x2="38" y2="103" stroke="rgba(255,255,255,0.35)" stroke-width="2.2" />
        <line x1="62" y1="48" x2="62" y2="103" stroke="rgba(255,255,255,0.35)" stroke-width="2.2" />
        <rect x="33" y="60" width="34" height="32" rx="7" fill="${secondaryColor}" stroke="#1f2937" stroke-width="1.9" />
        <circle cx="50" cy="69" r="4.5" fill="${accentColor}" />
        <text x="50" y="85" text-anchor="middle" font-size="8.5" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'fr-butter':
      return `
        <ellipse cx="50" cy="36" rx="14" ry="8" fill="#fde047" stroke="#1f2937" stroke-width="2.2" />
        <polygon points="12,56 26,42 74,42 88,56 88,96 74,104 26,104 12,96" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <polygon points="12,56 26,42 26,104 12,96" fill="${secondaryColor}" stroke="#1f2937" stroke-width="2" />
        <polygon points="88,56 74,42 74,104 88,96" fill="${secondaryColor}" stroke="#1f2937" stroke-width="2" />
        <ellipse cx="50" cy="73" rx="22" ry="16" fill="${secondaryColor}" stroke="${accentColor}" stroke-width="2.2" />
        <text x="50" y="77" text-anchor="middle" font-size="8.5" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'fr-croissant':
      return `
        <ellipse cx="50" cy="84" rx="38" ry="16" fill="${secondaryColor}" stroke="#1f2937" stroke-width="2.3" />
        <path d="M16,74 C18,34 42,26 50,26 C58,26 82,34 84,74 C76,78 68,68 62,64 C55,61 45,61 38,64 C32,68 24,78 16,74 Z" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <path d="M35,34 L41,62 M65,34 L59,62" stroke="${accentColor}" stroke-width="2.4" stroke-linecap="round" />
        <rect x="28" y="68" width="44" height="22" rx="7" fill="#ffffff" stroke="#1f2937" stroke-width="1.9" />
        <text x="50" y="83" text-anchor="middle" font-size="8.2" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'fr-brie':
      return `
        <line x1="58" y1="22" x2="54" y2="52" stroke="#b45309" stroke-width="2.4" stroke-linecap="round" />
        <polygon points="58,20 75,26 58,33" fill="${accentColor}" stroke="#1f2937" stroke-width="1.8" stroke-linejoin="round" />
        <polygon points="15,64 68,36 86,62 24,96" fill="${secondaryColor}" stroke="#1f2937" stroke-width="2.4" stroke-linejoin="round" />
        <polygon points="15,64 24,96 86,96 86,62 24,80" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <rect x="28" y="71" width="44" height="22" rx="6" fill="#ffffff" stroke="#1f2937" stroke-width="1.8" />
        <text x="50" y="86" text-anchor="middle" font-size="9.5" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'it-milk':
      return `
        <path d="M36,15 Q50,6 64,15 L63,24 L37,24 Z" fill="${accentColor}" stroke="#1f2937" stroke-width="2.2" stroke-linejoin="round" />
        <path d="M38,24 L62,24 L66,42 C72,49 72,58 72,64 L72,102 C72,106 68,108 63,108 L37,108 C32,108 28,106 28,102 L28,64 C28,58 28,49 34,42 Z" fill="${secondaryColor}" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <rect x="30" y="54" width="40" height="36" rx="6" fill="${primaryColor}" stroke="#1f2937" stroke-width="1.8" />
        <rect x="33" y="64" width="34" height="20" rx="5" fill="#ffffff" />
        <text x="50" y="78" text-anchor="middle" font-size="9" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'it-pasta':
      return `
        <polygon points="22,16 78,16 73,33 27,33" fill="${accentColor}" stroke="#1f2937" stroke-width="2.4" stroke-linejoin="round" />
        <path d="M27,33 L73,33 L82,99 C83,104 78,108 72,108 L28,108 C22,108 17,104 18,99 Z" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <rect x="26" y="42" width="48" height="34" rx="8" fill="${secondaryColor}" stroke="#1f2937" stroke-width="1.9" />
        <polygon points="32,51 44,58 32,65" fill="#f59e0b" stroke="#1f2937" stroke-width="1.4" />
        <polygon points="56,51 44,58 56,65" fill="#f59e0b" stroke="#1f2937" stroke-width="1.4" />
        <polygon points="48,60 58,66 48,72" fill="#f59e0b" stroke="#1f2937" stroke-width="1.4" />
        <polygon points="68,60 58,66 68,72" fill="#f59e0b" stroke="#1f2937" stroke-width="1.4" />
        <rect x="26" y="79" width="48" height="21" rx="6" fill="#ffffff" stroke="#1f2937" stroke-width="1.8" />
        <text x="50" y="93" text-anchor="middle" font-size="9" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'it-balsamic':
      return `
        <rect x="44" y="9" width="12" height="17" rx="3" fill="${accentColor}" stroke="#1f2937" stroke-width="2.2" />
        <rect x="43" y="26" width="14" height="25" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.3" />
        <circle cx="50" cy="78" r="29" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" />
        <rect x="27" y="64" width="46" height="27" rx="8" fill="${secondaryColor}" stroke="${accentColor}" stroke-width="2" />
        <text x="50" y="81" text-anchor="middle" font-size="8.2" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'it-pesto':
      return `
        <ellipse cx="42" cy="18" rx="9" ry="5" fill="#22c55e" stroke="#1f2937" stroke-width="1.8" />
        <ellipse cx="58" cy="18" rx="9" ry="5" fill="#16a34a" stroke="#1f2937" stroke-width="1.8" />
        <rect x="31" y="24" width="38" height="11" rx="4" fill="${accentColor}" stroke="#1f2937" stroke-width="2.3" />
        <polygon points="27,35 73,35 80,58 74,106 26,106 20,58" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <rect x="27" y="57" width="46" height="32" rx="7" fill="${secondaryColor}" stroke="#1f2937" stroke-width="1.8" />
        <circle cx="50" cy="67" r="4.5" fill="${primaryColor}" />
        <text x="50" y="83" text-anchor="middle" font-size="9" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'it-tomato':
      return `
        <rect x="27" y="15" width="46" height="6" rx="3" fill="#e5e7eb" stroke="#1f2937" stroke-width="2.2" />
        <rect x="29" y="21" width="42" height="81" rx="4" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" />
        <rect x="30" y="27" width="13" height="71" fill="${accentColor}" />
        <rect x="43" y="27" width="14" height="71" fill="${secondaryColor}" />
        <rect x="28" y="45" width="44" height="40" rx="8" fill="#ffffff" stroke="#1f2937" stroke-width="1.8" />
        <ellipse cx="50" cy="59" rx="6" ry="8" fill="${primaryColor}" />
        <text x="50" y="79" text-anchor="middle" font-size="9.5" font-weight="900" fill="#1f2937">${safeLabel}</text>
        <rect x="27" y="102" width="46" height="6" rx="3" fill="#d1d5db" stroke="#1f2937" stroke-width="2.2" />
      `;
    case 'it-grissini':
      return `
        <line x1="36" y1="104" x2="29" y2="14" stroke="#f59e0b" stroke-width="7" stroke-linecap="round" />
        <line x1="44" y1="104" x2="41" y2="11" stroke="#fbbf24" stroke-width="7" stroke-linecap="round" />
        <line x1="56" y1="104" x2="59" y2="11" stroke="#f59e0b" stroke-width="7" stroke-linecap="round" />
        <line x1="64" y1="104" x2="71" y2="14" stroke="#fbbf24" stroke-width="7" stroke-linecap="round" />
        <line x1="50" y1="105" x2="50" y2="10" stroke="#d97706" stroke-width="7.5" stroke-linecap="round" />
        <rect x="26" y="48" width="48" height="36" rx="7" fill="${secondaryColor}" stroke="#1f2937" stroke-width="2.2" />
        <line x1="25" y1="54" x2="75" y2="54" stroke="${accentColor}" stroke-width="3" />
        <text x="50" y="72" text-anchor="middle" font-size="9" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'it-chinotto':
      return `
        <polygon points="40,11 60,11 57,29 43,29" fill="${accentColor}" stroke="#1f2937" stroke-width="2.2" stroke-linejoin="round" />
        <ellipse cx="69" cy="24" rx="9" ry="5" fill="#22c55e" stroke="#1f2937" stroke-width="1.8" />
        <path d="M43,29 L57,29 C67,44 74,56 72,99 C71,105 66,108 60,108 L40,108 C34,108 29,105 28,99 C26,56 33,44 43,29 Z" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <circle cx="38" cy="48" r="2.2" fill="#fed7aa" />
        <circle cx="62" cy="48" r="2.2" fill="#fed7aa" />
        <rect x="30" y="58" width="40" height="32" rx="8" fill="${secondaryColor}" stroke="#1f2937" stroke-width="1.8" />
        <text x="50" y="78" text-anchor="middle" font-size="9" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'it-ciabatta':
      return `
        <path d="M12,62 C12,35 28,32 50,32 C72,32 88,35 88,62 C88,88 76,98 50,98 C24,98 12,88 12,62 Z" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" />
        <ellipse cx="30" cy="44" rx="7" ry="3.5" fill="#fffbeb" opacity="0.7" />
        <ellipse cx="70" cy="45" rx="6" ry="3" fill="#fffbeb" opacity="0.7" />
        <rect x="26" y="53" width="48" height="44" rx="5" fill="${secondaryColor}" stroke="#1f2937" stroke-width="2.2" />
        <line x1="27" y1="61" x2="73" y2="61" stroke="#dc2626" stroke-width="3" />
        <line x1="27" y1="90" x2="73" y2="90" stroke="#16a34a" stroke-width="3" />
        <text x="50" y="79" text-anchor="middle" font-size="9.5" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'it-oliveoil':
      return `
        <polygon points="28,25 32,12 39,14 37,25" fill="${accentColor}" stroke="#1f2937" stroke-width="2" stroke-linejoin="round" />
        <path d="M48,25 C48,13 68,13 68,25" fill="none" stroke="#1f2937" stroke-width="3.2" stroke-linecap="round" />
        <polygon points="20,25 74,25 82,33 82,102 74,107 20,107" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <line x1="74" y1="25" x2="74" y2="107" stroke="#1f2937" stroke-width="2" />
        <rect x="25" y="45" width="44" height="42" rx="6" fill="${secondaryColor}" stroke="#1f2937" stroke-width="1.8" />
        <ellipse cx="47" cy="58" rx="4.5" ry="6.5" fill="${primaryColor}" stroke="#1f2937" stroke-width="1.4" />
        <text x="47" y="79" text-anchor="middle" font-size="9.5" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'it-parm':
      return `
        <polygon points="56,14 66,18 52,44 46,41" fill="#e5e7eb" stroke="#1f2937" stroke-width="2" stroke-linejoin="round" />
        <rect x="58" y="8" width="8" height="10" rx="2" fill="#78350f" stroke="#1f2937" stroke-width="1.8" />
        <polygon points="15,58 74,34 86,60 22,88" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <polygon points="15,58 22,88 86,98 86,60 22,88" fill="${secondaryColor}" stroke="#1f2937" stroke-width="2.4" stroke-linejoin="round" />
        <polygon points="74,34 86,60 86,98 72,96" fill="${accentColor}" stroke="#1f2937" stroke-width="2.2" stroke-linejoin="round" />
        <rect x="26" y="64" width="46" height="22" rx="6" fill="#ffffff" stroke="#1f2937" stroke-width="1.8" />
        <text x="49" y="79" text-anchor="middle" font-size="8.2" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'it-cannoli':
      return `
        <ellipse cx="22" cy="40" rx="8" ry="11" fill="#fffbeb" stroke="#1f2937" stroke-width="2" />
        <ellipse cx="78" cy="40" rx="8" ry="11" fill="#fffbeb" stroke="#1f2937" stroke-width="2" />
        <polygon points="24,29 80,55 72,71 18,45" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.4" stroke-linejoin="round" />
        <polygon points="76,29 20,55 28,71 82,45" fill="#d97706" stroke="#1f2937" stroke-width="2.4" stroke-linejoin="round" />
        <circle cx="20" cy="40" r="2.2" fill="${accentColor}" />
        <circle cx="79" cy="40" r="2.2" fill="${accentColor}" />
        <rect x="14" y="66" width="72" height="36" rx="10" fill="${secondaryColor}" stroke="#1f2937" stroke-width="2.4" />
        <rect x="26" y="73" width="48" height="22" rx="6" fill="#ffffff" stroke="#1f2937" stroke-width="1.8" />
        <text x="50" y="88" text-anchor="middle" font-size="9.5" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'it-gelato':
      return `
        <polygon points="26,12 34,10 42,40 34,42" fill="#d97706" stroke="#1f2937" stroke-width="1.8" stroke-linejoin="round" />
        <line x1="65" y1="38" x2="73" y2="11" stroke="#94a3b8" stroke-width="3.5" stroke-linecap="round" />
        <circle cx="40" cy="40" r="14" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.3" />
        <circle cx="60" cy="40" r="14" fill="#fbcfe8" stroke="#1f2937" stroke-width="2.3" />
        <circle cx="50" cy="24" r="5" fill="${accentColor}" stroke="#1f2937" stroke-width="1.8" />
        <path d="M18,50 L82,50 C78,76 64,84 55,86 L55,100 L68,100 L68,107 L32,107 L32,100 L45,100 L45,86 C36,84 22,76 18,50 Z" fill="${secondaryColor}" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <rect x="27" y="57" width="46" height="22" rx="7" fill="#ffffff" stroke="#1f2937" stroke-width="1.8" />
        <text x="50" y="72" text-anchor="middle" font-size="8.8" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'mx-horchata':
      return `
        <line x1="56" y1="26" x2="66" y2="8" stroke="#94a3b8" stroke-width="3.5" stroke-linecap="round" />
        <rect x="33" y="20" width="34" height="11" rx="4" fill="${accentColor}" stroke="#1f2937" stroke-width="2.3" />
        <path d="M32,31 L68,31 C78,44 79,90 71,105 L29,105 C21,90 22,44 32,31 Z" fill="${secondaryColor}" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <path d="M25,62 L75,62 L71,105 L29,105 Z" fill="${primaryColor}" stroke="#1f2937" stroke-width="1.8" />
        <line x1="39" y1="53" x2="61" y2="43" stroke="#78350f" stroke-width="4" stroke-linecap="round" />
        <rect x="28" y="67" width="44" height="25" rx="7" fill="#fffbeb" stroke="#1f2937" stroke-width="1.8" />
        <text x="50" y="83" text-anchor="middle" font-size="8.8" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'mx-choco':
      return `
        <polygon points="32,16 68,16 84,32 84,88 68,104 32,104 16,88 16,32" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <polygon points="35,23 65,23 77,35 77,85 65,97 35,97 23,85 23,35" fill="${secondaryColor}" stroke="#1f2937" stroke-width="1.8" />
        <circle cx="50" cy="48" r="14" fill="${accentColor}" stroke="#1f2937" stroke-width="1.8" />
        <line x1="38" y1="48" x2="62" y2="48" stroke="#fef08a" stroke-width="1.5" />
        <line x1="50" y1="36" x2="50" y2="60" stroke="#fef08a" stroke-width="1.5" />
        <rect x="27" y="68" width="46" height="22" rx="6" fill="#ffffff" stroke="#1f2937" stroke-width="1.8" />
        <text x="50" y="83" text-anchor="middle" font-size="9.5" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'mx-tajin':
      return `
        <rect x="38" y="12" width="24" height="14" rx="4" fill="${accentColor}" stroke="#1f2937" stroke-width="2.3" />
        <path d="M36,26 L64,26 L70,101 C70,105 66,108 61,108 L39,108 C34,108 30,105 30,101 Z" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <rect x="33" y="51" width="34" height="40" rx="6" fill="${secondaryColor}" stroke="#1f2937" stroke-width="1.8" />
        <circle cx="55" cy="61" r="5" fill="${accentColor}" />
        <path d="M40,65 Q43,56 49,62" fill="none" stroke="${primaryColor}" stroke-width="3.5" stroke-linecap="round" />
        <text x="50" y="82" text-anchor="middle" font-size="8.8" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'mx-verde':
      return `
        <polygon points="56,16 68,20 55,54 45,50" fill="#475569" stroke="#1f2937" stroke-width="2.3" stroke-linejoin="round" />
        <path d="M16,52 L84,52 C84,78 72,92 50,92 C28,92 16,78 16,52 Z" fill="#334155" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <ellipse cx="50" cy="52" rx="34" ry="10" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.3" />
        <polygon points="24,87 34,87 30,107 20,107" fill="#334155" stroke="#1f2937" stroke-width="2.2" />
        <polygon points="45,91 55,91 55,108 45,108" fill="#334155" stroke="#1f2937" stroke-width="2.2" />
        <polygon points="66,87 76,87 80,107 70,107" fill="#334155" stroke="#1f2937" stroke-width="2.2" />
        <rect x="27" y="61" width="46" height="22" rx="7" fill="${secondaryColor}" stroke="#1f2937" stroke-width="1.8" />
        <text x="50" y="76" text-anchor="middle" font-size="9" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'mx-jalapeno':
      return `
        <path d="M29,34 C32,16 60,12 69,24 C63,34 45,38 29,34 Z" fill="#22c55e" stroke="#1f2937" stroke-width="2.3" stroke-linejoin="round" />
        <path d="M68,21 L76,15" stroke="#15803d" stroke-width="3" stroke-linecap="round" />
        <rect x="22" y="38" width="56" height="68" rx="6" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" />
        <rect x="22" y="38" width="56" height="8" rx="3" fill="#e5e7eb" stroke="#1f2937" stroke-width="2.2" />
        <rect x="26" y="56" width="48" height="36" rx="7" fill="${secondaryColor}" stroke="${accentColor}" stroke-width="2" />
        <text x="50" y="78" text-anchor="middle" font-size="9" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'mx-totopos':
      return `
        <polygon points="22,58 36,24 49,58" fill="#facc15" stroke="#1f2937" stroke-width="2.2" stroke-linejoin="round" />
        <polygon points="40,58 55,20 69,58" fill="#fde047" stroke="#1f2937" stroke-width="2.2" stroke-linejoin="round" />
        <polygon points="58,58 72,26 84,58" fill="#f59e0b" stroke="#1f2937" stroke-width="2.2" stroke-linejoin="round" />
        <polygon points="12,56 88,56 78,104 22,104" fill="${accentColor}" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <line x1="16" y1="68" x2="84" y2="68" stroke="${primaryColor}" stroke-width="4" />
        <rect x="27" y="69" width="46" height="24" rx="7" fill="${secondaryColor}" stroke="#1f2937" stroke-width="1.8" />
        <text x="50" y="85" text-anchor="middle" font-size="9.5" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'mx-jarritos':
      return `
        <rect x="42" y="9" width="16" height="6" rx="2" fill="${accentColor}" stroke="#1f2937" stroke-width="2" />
        <path d="M43,15 L57,15 L59,36 L68,52 L68,102 C68,106 64,108 59,108 L41,108 C36,108 32,106 32,102 L32,52 L41,36 Z" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <polygon points="50,55 66,74 50,93 34,74" fill="${secondaryColor}" stroke="#1f2937" stroke-width="1.9" stroke-linejoin="round" />
        <text x="50" y="77" text-anchor="middle" font-size="8.8" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'mx-concha':
      return `
        <ellipse cx="50" cy="86" rx="38" ry="15" fill="${secondaryColor}" stroke="#1f2937" stroke-width="2.3" />
        <path d="M14,76 C14,34 86,34 86,76 Z" fill="#f59e0b" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <path d="M18,70 C20,38 80,38 82,70 Z" fill="${primaryColor}" stroke="#1f2937" stroke-width="2" />
        <path d="M50,42 C42,50 40,60 40,68 M50,42 C58,50 60,60 60,68 M50,42 L50,68 M33,47 C29,55 28,62 28,68 M67,47 C71,55 72,62 72,68" fill="none" stroke="${secondaryColor}" stroke-width="2.4" stroke-linecap="round" />
        <rect x="26" y="72" width="48" height="22" rx="6" fill="#ffffff" stroke="${accentColor}" stroke-width="1.9" />
        <text x="50" y="87" text-anchor="middle" font-size="8.5" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'mx-jamaica':
      return `
        <path d="M68,40 C87,38 87,76 69,76" fill="none" stroke="${primaryColor}" stroke-width="8" stroke-linecap="round" />
        <path d="M68,40 C87,38 87,76 69,76" fill="none" stroke="#1f2937" stroke-width="2.4" stroke-linecap="round" />
        <path d="M17,27 L64,27 L72,56 L70,100 C69,105 64,108 58,108 L34,108 C28,108 23,105 22,100 L22,52 Z" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <circle cx="46" cy="48" r="6" fill="${secondaryColor}" />
        <circle cx="46" cy="48" r="2.5" fill="${accentColor}" />
        <rect x="26" y="61" width="40" height="28" rx="7" fill="${secondaryColor}" stroke="#1f2937" stroke-width="1.8" />
        <text x="46" y="79" text-anchor="middle" font-size="8.2" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'mx-avocado':
      return `
        <path d="M50,14 C65,14 78,44 78,74 C78,94 65,107 50,107 C35,107 22,94 22,74 C22,44 35,14 50,14 Z" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" />
        <path d="M50,21 C60,21 71,47 71,73 C71,89 61,99 50,99 C39,99 29,89 29,73 C29,47 40,21 50,21 Z" fill="${accentColor}" stroke="#1f2937" stroke-width="1.8" />
        <circle cx="50" cy="68" r="14" fill="#78350f" stroke="#1f2937" stroke-width="2.2" />
        <circle cx="45" cy="63" r="3.5" fill="#d97706" opacity="0.6" />
        <rect x="28" y="81" width="44" height="21" rx="6" fill="${secondaryColor}" stroke="#1f2937" stroke-width="1.8" />
        <text x="50" y="95" text-anchor="middle" font-size="9" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'mx-tamale':
      return `
        <polygon points="32,58 26,20 42,14 48,58" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.2" stroke-linejoin="round" />
        <polygon points="52,58 58,14 74,20 68,58" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.2" stroke-linejoin="round" />
        <path d="M18,62 C10,62 10,78 20,78 M82,62 C90,62 90,78 80,78" fill="none" stroke="#b45309" stroke-width="4" stroke-linecap="round" />
        <path d="M18,54 L82,54 C84,82 74,106 50,106 C26,106 16,82 18,54 Z" fill="#b45309" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <rect x="27" y="65" width="46" height="24" rx="7" fill="${secondaryColor}" stroke="${accentColor}" stroke-width="2" />
        <text x="50" y="81" text-anchor="middle" font-size="9" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'mx-queso':
      return `
        <ellipse cx="44" cy="36" rx="9" ry="5" fill="${accentColor}" stroke="#1f2937" stroke-width="1.8" />
        <ellipse cx="56" cy="37" rx="8" ry="4.5" fill="#22c55e" stroke="#1f2937" stroke-width="1.8" />
        <ellipse cx="50" cy="54" rx="35" ry="15" fill="${secondaryColor}" stroke="#1f2937" stroke-width="2.4" />
        <path d="M15,54 L15,86 C15,96 30,104 50,104 C70,104 85,96 85,86 L85,54 C85,64 70,71 50,71 C30,71 15,64 15,54 Z" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <polygon points="50,54 78,44 85,54 76,65" fill="#fef08a" stroke="#1f2937" stroke-width="1.6" />
        <rect x="27" y="72" width="46" height="22" rx="6" fill="#ffffff" stroke="#1f2937" stroke-width="1.8" />
        <text x="50" y="87" text-anchor="middle" font-size="9.5" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'uk-custard':
      return `
        <path d="M68,40 C87,38 87,74 68,74" fill="none" stroke="${primaryColor}" stroke-width="8" stroke-linecap="round" />
        <path d="M68,40 C87,38 87,74 68,74" fill="none" stroke="#1f2937" stroke-width="2.4" stroke-linecap="round" />
        <path d="M16,24 L35,28 L66,24 L72,62 C74,88 67,106 58,106 L34,106 C25,106 18,88 22,58 Z" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <rect x="25" y="56" width="44" height="32" rx="7" fill="${secondaryColor}" stroke="#1f2937" stroke-width="1.8" />
        <circle cx="47" cy="64" r="4" fill="${accentColor}" />
        <text x="47" y="80" text-anchor="middle" font-size="7.5" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'uk-shortbread':
      return `
        <rect x="26" y="16" width="19" height="28" rx="3" fill="#fde68a" stroke="#1f2937" stroke-width="2.2" />
        <rect x="55" y="16" width="19" height="28" rx="3" fill="#fde68a" stroke="#1f2937" stroke-width="2.2" />
        <circle cx="35" cy="24" r="1.5" fill="#92400e" />
        <circle cx="64" cy="24" r="1.5" fill="#92400e" />
        <rect x="17" y="38" width="66" height="69" rx="7" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" />
        <line x1="18" y1="54" x2="82" y2="54" stroke="${accentColor}" stroke-width="5" />
        <line x1="34" y1="39" x2="34" y2="106" stroke="${accentColor}" stroke-width="4" />
        <line x1="66" y1="39" x2="66" y2="106" stroke="${accentColor}" stroke-width="4" />
        <rect x="25" y="61" width="50" height="30" rx="7" fill="${secondaryColor}" stroke="#1f2937" stroke-width="1.9" />
        <text x="50" y="80" text-anchor="middle" font-size="9.5" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'uk-hp':
      return `
        <rect x="42" y="10" width="16" height="22" rx="2" fill="${accentColor}" stroke="#1f2937" stroke-width="2.3" />
        <polygon points="41,32 59,32 72,44 72,107 28,107 28,44" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <rect x="33" y="54" width="34" height="40" rx="6" fill="${secondaryColor}" stroke="${accentColor}" stroke-width="2" />
        <polygon points="50,58 53,67 47,67" fill="${accentColor}" />
        <text x="50" y="83" text-anchor="middle" font-size="8.5" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'uk-marmalade':
      return `
        <path d="M27,24 Q50,13 73,24 L76,35 L24,35 Z" fill="${secondaryColor}" stroke="#1f2937" stroke-width="2.3" stroke-linejoin="round" />
        <path d="M26,35 L74,35 L78,62 C76,84 68,94 65,101 L68,107 L32,107 L35,101 C32,94 24,84 22,62 Z" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <rect x="27" y="56" width="46" height="30" rx="7" fill="#fffbeb" stroke="${accentColor}" stroke-width="2" />
        <circle cx="50" cy="64" r="4.5" fill="${primaryColor}" />
        <text x="50" y="79" text-anchor="middle" font-size="8" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'uk-tea':
      return `
        <path d="M24,62 Q10,50 12,35 Q20,38 28,50" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.4" stroke-linejoin="round" />
        <path d="M74,50 C92,50 92,82 74,82" fill="none" stroke="${primaryColor}" stroke-width="8" stroke-linecap="round" />
        <path d="M74,50 C92,50 92,82 74,82" fill="none" stroke="#1f2937" stroke-width="2.4" stroke-linecap="round" />
        <circle cx="50" cy="21" r="5" fill="${accentColor}" stroke="#1f2937" stroke-width="2" />
        <path d="M31,37 C34,24 66,24 69,37 Z" fill="${accentColor}" stroke="#1f2937" stroke-width="2.3" />
        <ellipse cx="50" cy="69" rx="28" ry="33" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" />
        <ellipse cx="50" cy="70" rx="20" ry="16" fill="${secondaryColor}" stroke="#1f2937" stroke-width="1.8" />
        <text x="50" y="74" text-anchor="middle" font-size="10" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'uk-crisps':
      return `
        <rect x="23" y="16" width="54" height="9" rx="2" fill="${accentColor}" stroke="#1f2937" stroke-width="2.2" />
        <rect x="24" y="24" width="52" height="74" rx="5" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" />
        <rect x="23" y="98" width="54" height="9" rx="2" fill="${accentColor}" stroke="#1f2937" stroke-width="2.2" />
        <polygon points="24,60 76,40 76,66 24,86" fill="${secondaryColor}" stroke="#1f2937" stroke-width="1.8" />
        <text x="50" y="68" text-anchor="middle" font-size="9.5" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'uk-elder':
      return `
        <rect x="44" y="10" width="12" height="14" rx="3" fill="${accentColor}" stroke="#1f2937" stroke-width="2.2" />
        <path d="M43,24 L57,24 L60,40 C69,48 70,56 70,66 L70,103 C70,106 66,108 61,108 L39,108 C34,108 30,106 30,103 L30,66 C30,56 31,48 40,40 Z" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <rect x="31" y="59" width="38" height="35" rx="7" fill="${secondaryColor}" stroke="#1f2937" stroke-width="1.8" />
        <circle cx="50" cy="68" r="5" fill="#ffffff" stroke="${accentColor}" stroke-width="2" />
        <text x="50" y="86" text-anchor="middle" font-size="8" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'uk-crumpets':
      return `
        <rect x="20" y="76" width="60" height="20" rx="9" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.4" />
        <rect x="19" y="58" width="62" height="20" rx="9" fill="#f59e0b" stroke="#1f2937" stroke-width="2.4" />
        <rect x="20" y="40" width="60" height="20" rx="9" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.4" />
        <rect x="40" y="29" width="20" height="12" rx="3" fill="#fde047" stroke="#1f2937" stroke-width="2.1" />
        <circle cx="32" cy="48" r="2" fill="#78350f" />
        <circle cx="67" cy="49" r="2" fill="#78350f" />
        <rect x="26" y="66" width="48" height="25" rx="6" fill="${secondaryColor}" stroke="${accentColor}" stroke-width="2" />
        <text x="50" y="82" text-anchor="middle" font-size="9" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'uk-squash':
      return `
        <rect x="42" y="10" width="16" height="12" rx="3" fill="${accentColor}" stroke="#1f2937" stroke-width="2.2" />
        <path d="M40,22 L60,22 L70,40 L63,56 L72,72 L68,104 C67,107 63,108 58,108 L42,108 C37,108 33,107 32,104 L28,72 L37,56 L30,40 Z" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <rect x="29" y="63" width="42" height="30" rx="7" fill="${secondaryColor}" stroke="#1f2937" stroke-width="1.8" />
        <text x="50" y="82" text-anchor="middle" font-size="7.8" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'uk-biscuits':
      return `
        <rect x="24" y="20" width="54" height="34" rx="5" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.4" />
        <rect x="21" y="42" width="58" height="9" rx="3" fill="#fffbeb" stroke="#1f2937" stroke-width="2" />
        <rect x="20" y="49" width="60" height="54" rx="6" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" />
        <rect x="26" y="56" width="48" height="40" rx="4" fill="${secondaryColor}" stroke="${accentColor}" stroke-width="2" />
        <text x="50" y="80" text-anchor="middle" font-size="9" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'uk-scone':
      return `
        <path d="M22,42 C24,20 76,20 78,42 Z" fill="#f59e0b" stroke="#1f2937" stroke-width="2.4" stroke-linejoin="round" />
        <path d="M18,52 C20,38 80,38 82,52 C82,59 70,62 60,57 C52,62 44,57 38,60 C28,62 18,58 18,52 Z" fill="#fffbeb" stroke="#1f2937" stroke-width="2.2" />
        <path d="M19,60 Q35,54 50,60 Q65,66 81,60 L82,69 L18,69 Z" fill="${primaryColor}" stroke="#1f2937" stroke-width="2" />
        <path d="M18,68 L82,68 L78,101 C77,105 72,107 66,107 L34,107 C28,107 23,105 22,101 Z" fill="${accentColor}" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <rect x="28" y="75" width="44" height="22" rx="6" fill="${secondaryColor}" stroke="#1f2937" stroke-width="1.8" />
        <text x="50" y="90" text-anchor="middle" font-size="9.5" font-weight="900" fill="#1f2937">${safeLabel}</text>
      `;
    case 'uk-beans':
      return `
        <ellipse cx="52" cy="24" rx="14" ry="8" fill="#ea580c" stroke="#1f2937" stroke-width="2.2" />
        <path d="M52,25 L78,16" stroke="#94a3b8" stroke-width="4" stroke-linecap="round" />
        <rect x="23" y="32" width="54" height="7" rx="3" fill="#e5e7eb" stroke="#1f2937" stroke-width="2.2" />
        <rect x="25" y="38" width="50" height="63" rx="4" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" />
        <rect x="28" y="51" width="44" height="38" rx="8" fill="${secondaryColor}" stroke="#1f2937" stroke-width="1.9" />
        <circle cx="44" cy="60" r="3.5" fill="${accentColor}" />
        <circle cx="55" cy="61" r="3.5" fill="#ea580c" />
        <text x="50" y="79" text-anchor="middle" font-size="9.5" font-weight="900" fill="#1f2937">${safeLabel}</text>
        <rect x="23" y="101" width="54" height="7" rx="3" fill="#d1d5db" stroke="#1f2937" stroke-width="2.2" />
      `;
    default:
      return null;
  }
}

function renderGroceryItemSvg(item, isSilhouette = false) {
  const { shape, primaryColor, secondaryColor, accentColor, labelText } = item;
  const safeLabel = escapeHtml(labelText || '');
  const safeName = escapeHtml(item.name || '');
  const filterStyle = isSilhouette
    ? 'filter: brightness(0.18) saturate(0.25) contrast(1.4); opacity: 0.72;'
    : '';
  const shadow = !isSilhouette
    ? `<ellipse cx="50" cy="110" rx="33" ry="5" fill="rgba(0,0,0,0.18)" />`
    : '';

  let inner = renderCustomGroceryItemInner(item, safeLabel);
  if (inner === null) {
    if (shape === 'tall-carton') {
      inner = `
        <polygon points="24,30 50,10 76,30" fill="${secondaryColor}" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <rect x="40" y="5" width="20" height="7" rx="3" fill="${accentColor}" stroke="#1f2937" stroke-width="2" />
        <circle cx="60" cy="21" r="5.5" fill="${accentColor}" stroke="#1f2937" stroke-width="2" />
        <rect x="24" y="30" width="52" height="78" rx="6" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" />
        <rect x="26" y="48" width="48" height="42" fill="${secondaryColor}" />
        <rect x="29" y="34" width="5" height="68" rx="2.5" fill="rgba(255,255,255,0.32)" />
        <circle cx="50" cy="64" r="9" fill="${accentColor}" />
        <text x="50" y="84" text-anchor="middle" font-size="9.5" font-weight="800" fill="#1f2937">${labelText}</text>
      `;
    } else if (shape === 'wide-box') {
      inner = `
        <polygon points="16,24 24,16 84,16 78,24" fill="${accentColor}" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <rect x="16" y="24" width="66" height="84" rx="7" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" />
        <rect x="23" y="34" width="52" height="58" rx="10" fill="${secondaryColor}" stroke="#1f2937" stroke-width="1.8" />
        <circle cx="49" cy="57" r="13" fill="${accentColor}" />
        <circle cx="45" cy="54" r="4" fill="${secondaryColor}" />
        <circle cx="54" cy="59" r="3.5" fill="${primaryColor}" />
        <text x="49" y="84" text-anchor="middle" font-size="10" font-weight="900" fill="#1f2937">${labelText}</text>
      `;
    } else if (shape === 'squeeze-bottle') {
      inner = `
        <polygon points="46,6 54,6 56,16 44,16" fill="${accentColor}" stroke="#1f2937" stroke-width="2.2" stroke-linejoin="round" />
        <rect x="39" y="16" width="22" height="9" rx="3" fill="${accentColor}" stroke="#1f2937" stroke-width="2.2" />
        <path d="M39,25 C39,34 27,38 27,54 L27,98 C27,104 32,108 38,108 L62,108 C68,108 73,104 73,98 L73,54 C73,38 61,34 61,25 Z" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <rect x="33" y="54" width="34" height="36" rx="8" fill="${secondaryColor}" stroke="#1f2937" stroke-width="1.8" />
        <path d="M33,46 L33,96" stroke="rgba(255,255,255,0.4)" stroke-width="3.5" stroke-linecap="round" />
        <circle cx="50" cy="67" r="6.5" fill="${accentColor}" />
        <text x="50" y="84" text-anchor="middle" font-size="8.5" font-weight="800" fill="#1f2937">${labelText}</text>
      `;
    } else if (shape === 'round-jar') {
      inner = `
        <rect x="28" y="18" width="44" height="13" rx="4" fill="${accentColor}" stroke="#1f2937" stroke-width="2.5" />
        <rect x="32" y="31" width="36" height="5" fill="${secondaryColor}" stroke="#1f2937" stroke-width="2" />
        <rect x="21" y="35" width="58" height="73" rx="18" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" />
        <rect x="26" y="53" width="48" height="38" rx="9" fill="${secondaryColor}" stroke="#1f2937" stroke-width="1.8" />
        <circle cx="50" cy="66" r="7" fill="${accentColor}" />
        <text x="50" y="84" text-anchor="middle" font-size="9" font-weight="800" fill="#1f2937">${labelText}</text>
        <path d="M27,45 Q25,70 27,95" stroke="rgba(255,255,255,0.45)" stroke-width="3.5" fill="none" stroke-linecap="round" />
      `;
    } else if (shape === 'tin-can') {
      inner = `
        <rect x="23" y="24" width="54" height="7" rx="3" fill="#e5e7eb" stroke="#1f2937" stroke-width="2.3" />
        <rect x="25" y="30" width="50" height="72" rx="4" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" />
        <rect x="26" y="65" width="48" height="35" fill="${secondaryColor}" />
        <circle cx="50" cy="65" r="11" fill="${accentColor}" stroke="#1f2937" stroke-width="2" />
        <text x="50" y="91" text-anchor="middle" font-size="9.5" font-weight="900" fill="#1f2937">${labelText}</text>
        <rect x="23" y="101" width="54" height="7" rx="3" fill="#d1d5db" stroke="#1f2937" stroke-width="2.3" />
      `;
    } else if (shape === 'crinkle-bag') {
      inner = `
        <polygon points="18,18 26,12 34,18 42,12 50,18 58,12 66,18 74,12 82,18 78,26 22,26" fill="${accentColor}" stroke="#1f2937" stroke-width="2.2" stroke-linejoin="round" />
        <path d="M22,25 C15,48 15,76 22,100 L78,100 C85,76 85,48 78,25 Z" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <polygon points="22,100 78,100 82,108 74,104 66,108 58,104 50,108 42,104 34,108 26,104 18,108" fill="${accentColor}" stroke="#1f2937" stroke-width="2.2" stroke-linejoin="round" />
        <ellipse cx="50" cy="62" rx="24" ry="22" fill="${secondaryColor}" stroke="#1f2937" stroke-width="2" />
        <circle cx="50" cy="55" r="8" fill="${accentColor}" />
        <text x="50" y="75" text-anchor="middle" font-size="9.5" font-weight="900" fill="#1f2937">${labelText}</text>
      `;
    } else if (shape === 'soda-can') {
      inner = `
        <rect x="33" y="20" width="34" height="6" rx="3" fill="#e5e7eb" stroke="#1f2937" stroke-width="2.2" />
        <polygon points="34,26 66,26 72,36 28,36" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.3" stroke-linejoin="round" />
        <rect x="28" y="35" width="44" height="66" rx="6" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" />
        <path d="M29,56 Q50,44 71,56 L71,82 Q50,70 29,82 Z" fill="${secondaryColor}" />
        <circle cx="42" cy="45" r="3" fill="${secondaryColor}" />
        <circle cx="58" cy="42" r="2.2" fill="${secondaryColor}" />
        <text x="50" y="71" text-anchor="middle" font-size="8.8" font-weight="900" fill="#1f2937">${labelText}</text>
        <rect x="32" y="101" width="36" height="6" rx="3" fill="#d1d5db" stroke="#1f2937" stroke-width="2.2" />
      `;
    } else if (shape === 'bread-loaf') {
      inner = `
        <path d="M18,56 C12,34 30,22 50,22 C70,22 88,34 82,56 L78,102 C78,106 74,108 68,108 L32,108 C26,108 22,106 22,102 Z" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <path d="M34,34 Q42,29 48,36 M48,32 Q56,27 62,34" stroke="${secondaryColor}" stroke-width="3" stroke-linecap="round" fill="none" />
        <rect x="21" y="64" width="58" height="34" rx="5" fill="${secondaryColor}" stroke="#1f2937" stroke-width="2.2" />
        <circle cx="33" cy="81" r="4" fill="${accentColor}" />
        <circle cx="67" cy="81" r="4" fill="${accentColor}" />
        <text x="50" y="85" text-anchor="middle" font-size="9" font-weight="900" fill="#1f2937">${labelText}</text>
      `;
    } else if (shape === 'jug-handle') {
      inner = `
        <path d="M68,36 C86,36 86,66 68,66" fill="none" stroke="${primaryColor}" stroke-width="9" stroke-linecap="round" />
        <path d="M68,36 C86,36 86,66 68,66" fill="none" stroke="#1f2937" stroke-width="2.5" stroke-linecap="round" />
        <rect x="36" y="14" width="22" height="10" rx="3" fill="${accentColor}" stroke="#1f2937" stroke-width="2.3" />
        <path d="M37,24 L57,24 L69,44 L69,100 C69,105 65,108 60,108 L34,108 C29,108 25,105 25,100 L25,44 Z" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <rect x="30" y="55" width="34" height="38" rx="7" fill="${secondaryColor}" stroke="#1f2937" stroke-width="1.8" />
        <circle cx="47" cy="68" r="7" fill="${accentColor}" />
        <text x="47" y="86" text-anchor="middle" font-size="8.5" font-weight="900" fill="#1f2937">${labelText}</text>
      `;
    } else if (shape === 'egg-carton') {
      inner = `
        <circle cx="30" cy="46" r="11" fill="${accentColor}" stroke="#1f2937" stroke-width="2.3" />
        <circle cx="50" cy="44" r="12" fill="${accentColor}" stroke="#1f2937" stroke-width="2.3" />
        <circle cx="70" cy="46" r="11" fill="${accentColor}" stroke="#1f2937" stroke-width="2.3" />
        <polygon points="16,48 84,48 88,62 12,62" fill="${secondaryColor}" stroke="#1f2937" stroke-width="2.4" stroke-linejoin="round" />
        <polygon points="14,62 86,62 80,106 20,106" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <rect x="26" y="70" width="48" height="26" rx="6" fill="${secondaryColor}" stroke="#1f2937" stroke-width="1.8" />
        <text x="50" y="87" text-anchor="middle" font-size="9.5" font-weight="900" fill="#1f2937">${labelText}</text>
      `;
    } else if (shape === 'pastry-dome') {
      inner = `
        <circle cx="50" cy="24" r="8" fill="${accentColor}" stroke="#1f2937" stroke-width="2.3" />
        <path d="M50,28 C76,28 86,58 84,92 L16,92 C14,58 24,28 50,28 Z" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <rect x="12" y="90" width="76" height="16" rx="7" fill="${secondaryColor}" stroke="#1f2937" stroke-width="2.5" />
        <rect x="28" y="56" width="44" height="28" rx="8" fill="${secondaryColor}" stroke="#1f2937" stroke-width="2" />
        <text x="50" y="74" text-anchor="middle" font-size="9.5" font-weight="900" fill="#1f2937">${labelText}</text>
      `;
    } else {
      // bowl-cup
      inner = `
        <path d="M22,42 Q50,20 78,42 Z" fill="${accentColor}" stroke="#1f2937" stroke-width="2.4" stroke-linejoin="round" />
        <rect x="14" y="40" width="72" height="10" rx="5" fill="${secondaryColor}" stroke="#1f2937" stroke-width="2.5" />
        <polygon points="18,50 82,50 73,106 27,106" fill="${primaryColor}" stroke="#1f2937" stroke-width="2.5" stroke-linejoin="round" />
        <rect x="27" y="63" width="46" height="30" rx="7" fill="${secondaryColor}" stroke="#1f2937" stroke-width="1.8" />
        <text x="50" y="82" text-anchor="middle" font-size="9.5" font-weight="900" fill="#1f2937">${labelText}</text>
      `;
    }
  }

  return `<svg viewBox="0 0 100 116" style="width:100%;height:100%;${filterStyle}" aria-label="${safeName}">${shadow}${inner}</svg>`;
}

/**
 * Seeded Generator & Board Solver
 */
function createRng(seed) {
  let a = seed >>> 0;
  return function () {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffleWithRng(arr, rng) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function wouldFormTripleInRow(row, slotIdx, itemType) {
  for (let i = 0; i < 3; i++) {
    const cellType = i === slotIdx ? itemType : row[i] && row[i].itemType;
    if (cellType === null || cellType === undefined || cellType !== itemType) {
      return false;
    }
  }
  return true;
}

/**
 * Breaks any accidental 3-of-a-kind row without creating a triple in the partner row.
 */
function breakSameRowTriples(shelves, allowSplitToOpenSlot = false) {
  for (let sIdx = 0; sIdx < shelves.length; sIdx++) {
    for (let lIdx = 0; lIdx < shelves[sIdx].layers.length; lIdx++) {
      const row = shelves[sIdx].layers[lIdx];
      if (
        row[0] &&
        row[1] &&
        row[2] &&
        row[0].itemType === row[1].itemType &&
        row[1].itemType === row[2].itemType
      ) {
        const tripleType = row[0].itemType;
        let resolved = false;
        outerSwap: for (let otherS = 0; otherS < shelves.length; otherS++) {
          for (let otherL = 0; otherL < shelves[otherS].layers.length; otherL++) {
            if (otherS === sIdx && otherL === lIdx) continue;
            const otherRow = shelves[otherS].layers[otherL];
            for (let slot = 0; slot < 3; slot++) {
              const candidate = otherRow[slot];
              if (
                candidate &&
                candidate.itemType !== tripleType &&
                !wouldFormTripleInRow(otherRow, slot, tripleType)
              ) {
                otherRow[slot] = row[2];
                row[2] = candidate;
                resolved = true;
                break outerSwap;
              }
            }
          }
        }
        if (!resolved && allowSplitToOpenSlot) {
          splitLoop: for (let otherS = 0; otherS < shelves.length; otherS++) {
            for (let otherL = 0; otherL < shelves[otherS].layers.length; otherL++) {
              if (otherS === sIdx && otherL === lIdx) continue;
              const otherRow = shelves[otherS].layers[otherL];
              for (let slot = 0; slot < 3; slot++) {
                if (otherRow[slot] === null && !wouldFormTripleInRow(otherRow, slot, tripleType)) {
                  otherRow[slot] = row[2];
                  row[2] = null;
                  break splitLoop;
                }
              }
            }
          }
        }
      }
    }
  }
}

function generateLevelBoard(spec) {
  const rng = createRng(spec.seed);
  const allIndices = Array.from({ length: 12 }, (_, i) => i);
  const selectedTypes = shuffleWithRng(allIndices, rng).slice(0, spec.itemTypesCount);

  const itemsPool = [];
  let uidCounter = 1;
  for (let t = 0; t < spec.totalTriples; t++) {
    const itemType = selectedTypes[t % selectedTypes.length];
    for (let k = 0; k < 3; k++) {
      itemsPool.push({
        uid: `item-${spec.levelNumber}-${uidCounter++}`,
        itemType,
      });
    }
  }

  const shelves = Array.from({ length: spec.shelfCount }, (_, idx) => ({
    id: idx,
    layers: [[null, null, null]],
  }));

  const mixedPool = shuffleWithRng(itemsPool, rng);
  const activeShelfCount = Math.max(2, spec.shelfCount - 1);
  let poolIdx = 0;

  for (let depth = 0; depth < spec.maxDepth && poolIdx < mixedPool.length; depth++) {
    const shelfOrder = shuffleWithRng(
      Array.from({ length: activeShelfCount }, (_, i) => i),
      rng
    );
    // Reserve at least 1 item per deeper target layer so deep levels actually reach spec.maxDepth
    const minReserveForDeeper = Math.max(0, spec.maxDepth - 1 - depth);
    for (const shelfIdx of shelfOrder) {
      const remItems = mixedPool.length - poolIdx;
      if (remItems <= minReserveForDeeper) break;
      while (shelves[shelfIdx].layers.length <= depth) {
        shelves[shelfIdx].layers.push([null, null, null]);
      }
      const row = shelves[shelfIdx].layers[depth];
      const layersLeft = Math.max(1, spec.maxDepth - depth);
      const avgPerShelfRow = remItems / (activeShelfCount * layersLeft);
      let targetItemsInRow;
      if (depth === 0) {
        targetItemsInRow = rng() < 0.65 ? 2 : 3;
      } else if (avgPerShelfRow <= 1.45) {
        targetItemsInRow = rng() < 0.65 ? 1 : 2;
      } else if (avgPerShelfRow <= 2.2) {
        targetItemsInRow = rng() < 0.55 ? 2 : rng() < 0.5 ? 1 : 3;
      } else {
        targetItemsInRow = rng() < 0.35 ? 2 : 3;
      }
      const slotOrder = shuffleWithRng([0, 1, 2], rng);
      let placed = 0;
      for (const s of slotOrder) {
        if (placed >= targetItemsInRow || mixedPool.length - poolIdx <= minReserveForDeeper) break;
        row[s] = mixedPool[poolIdx++];
        placed++;
      }
    }
  }

  let safetyLayer = 0;
  while (poolIdx < mixedPool.length && safetyLayer < spec.maxDepth + 2) {
    for (let sIdx = 0; sIdx < activeShelfCount && poolIdx < mixedPool.length; sIdx++) {
      if (safetyLayer === 0 && sIdx >= activeShelfCount - 2) continue;
      while (shelves[sIdx].layers.length <= safetyLayer) {
        shelves[sIdx].layers.push([null, null, null]);
      }
      const row = shelves[sIdx].layers[safetyLayer];
      for (let slot = 0; slot < 3 && poolIdx < mixedPool.length; slot++) {
        if (row[slot] === null) {
          row[slot] = mixedPool[poolIdx++];
        }
      }
    }
    safetyLayer++;
  }

  // Strip any empty inner or trailing back layers before breaking triples
  for (const shelf of shelves) {
    const nonEmpty = shelf.layers.filter((row) => row.some((item) => item !== null));
    shelf.layers = nonEmpty.length > 0 ? nonEmpty : [[null, null, null]];
  }

  // Prevent starting with 3 identical items in the same shelf row
  breakSameRowTriples(shelves, true);

  return shuffleWithRng(shelves, rng).map((s, idx) => ({
    ...s,
    id: idx,
  }));
}

function cloneShelves(shelves) {
  return shelves.map((s) => ({
    id: s.id,
    layers: s.layers.map((r) => [...r]),
  }));
}

function countRemainingItems(shelves) {
  let count = 0;
  for (const shelf of shelves) {
    for (const row of shelf.layers) {
      for (const slot of row) {
        if (slot !== null) count++;
      }
    }
  }
  return count;
}

function isBoardDeadlocked(shelves) {
  if (countRemainingItems(shelves) === 0) return false;
  for (const shelf of shelves) {
    if (shelf.layers[0].some((slot) => slot === null)) return false;
  }
  return true;
}

function normalizeShelfLayers(shelves) {
  const advancedShelfIds = [];
  const updatedShelves = shelves.map((shelf) => {
    const frontWasEmpty = shelf.layers[0].every((item) => item === null);
    const nonEmptyLayers = shelf.layers
      .map((row) => [...row])
      .filter((row) => row.some((item) => item !== null));
    const advanced = frontWasEmpty && nonEmptyLayers.length > 0;
    if (advanced) advancedShelfIds.push(shelf.id);
    return {
      ...shelf,
      layers: nonEmptyLayers.length > 0 ? nonEmptyLayers : [[null, null, null]],
    };
  });
  return { updatedShelves, advancedShelfIds };
}

function findSpotlightHint(shelves) {
  const frontByType = new Map();
  for (const shelf of shelves) {
    shelf.layers[0].forEach((item, slotIdx) => {
      if (item) {
        const list = frontByType.get(item.itemType) || [];
        list.push({ uid: item.uid, shelfId: shelf.id, slotIdx });
        frontByType.set(item.itemType, list);
      }
    });
  }

  for (const [itemType, instances] of frontByType.entries()) {
    if (instances.length >= 3) {
      let bestShelfId = null;
      for (const shelf of shelves) {
        const front = shelf.layers[0];
        const sameCount = front.filter((x) => x && x.itemType === itemType).length;
        const emptyCount = front.filter((x) => x === null).length;
        if (sameCount === 2 && emptyCount === 1) {
          bestShelfId = shelf.id;
          break;
        }
      }
      if (bestShelfId === null) {
        for (const shelf of shelves) {
          const front = shelf.layers[0];
          const sameCount = front.filter((x) => x && x.itemType === itemType).length;
          const emptyCount = front.filter((x) => x === null).length;
          if (sameCount >= 1 && sameCount + emptyCount === 3) {
            bestShelfId = shelf.id;
            break;
          }
        }
      }
      if (bestShelfId === null) {
        const emptyShelf = shelves.find((s) => s.layers[0].every((x) => x === null));
        if (emptyShelf) bestShelfId = emptyShelf.id;
      }
      return {
        itemType,
        highlightedUids: instances.slice(0, 3).map((x) => x.uid),
        targetShelfId: bestShelfId,
        message: 'Three matching items are ready on the front shelves!',
      };
    }
  }

  for (const [itemType, instances] of frontByType.entries()) {
    if (instances.length === 2) {
      let targetShelfId = null;
      for (const inst of instances) {
        const shelf = shelves.find((s) => s.id === inst.shelfId);
        if (shelf && shelf.layers[0].some((x) => x === null)) {
          targetShelfId = shelf.id;
          break;
        }
      }
      if (targetShelfId === null) {
        const openShelf = shelves.find((s) => s.layers[0].some((x) => x === null));
        if (openShelf) targetShelfId = openShelf.id;
      }
      return {
        itemType,
        highlightedUids: instances.map((x) => x.uid),
        targetShelfId,
        message: 'Group these two matching items and clear a shelf to reveal the third!',
      };
    }
  }

  const deepShelf = shelves.find(
    (s) => s.layers.length > 1 && s.layers[0].some((x) => x !== null)
  );
  if (deepShelf) {
    const frontItems = deepShelf.layers[0].filter((x) => x !== null);
    return {
      itemType: frontItems[0].itemType,
      highlightedUids: frontItems.map((x) => x.uid),
      targetShelfId: null,
      message: 'Move these front items to uncover the hidden back row behind them!',
    };
  }
  return null;
}

function executeAutoPackTrio(shelves) {
  const counts = new Map();
  for (const shelf of shelves) {
    shelf.layers.forEach((row, depth) => {
      row.forEach((item) => {
        if (item) {
          const entry = counts.get(item.itemType) || {
            total: 0,
            front: 0,
            firstShelfId: shelf.id,
          };
          entry.total += 1;
          if (depth === 0) {
            entry.front += 1;
            entry.firstShelfId = shelf.id;
          }
          counts.set(item.itemType, entry);
        }
      });
    });
  }

  let chosenType = null;
  let bestScore = -1;
  for (const [itemType, info] of counts.entries()) {
    if (info.total >= 3) {
      const score = info.front * 10 + info.total;
      if (score > bestScore) {
        bestScore = score;
        chosenType = itemType;
      }
    }
  }
  if (chosenType === null) return null;

  let toRemove = 3;
  const copy = cloneShelves(shelves);
  let packedCount = 0;
  for (let depth = 0; depth < 10 && toRemove > 0; depth++) {
    for (const shelf of copy) {
      if (depth >= shelf.layers.length) continue;
      const row = shelf.layers[depth];
      for (let slot = 0; slot < 3 && toRemove > 0; slot++) {
        if (row[slot] && row[slot].itemType === chosenType) {
          row[slot] = null;
          toRemove--;
          packedCount++;
        }
      }
    }
  }

  return {
    nextShelves: normalizeShelfLayers(copy).updatedShelves,
    packedItemType: packedCount === 3 ? chosenType : null,
  };
}

function shuffleRemainingBoard(shelves) {
  const allItems = [];
  for (const shelf of shelves) {
    for (const row of shelf.layers) {
      for (const item of row) {
        if (item) allItems.push(item);
      }
    }
  }
  for (let i = allItems.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allItems[i], allItems[j]] = [allItems[j], allItems[i]];
  }

  const nextShelves = shelves.map((s) => ({
    id: s.id,
    layers: [[null, null, null]],
  }));
  const activeCount = Math.max(1, nextShelves.length - 1);
  let idx = 0;
  let depth = 0;
  while (idx < allItems.length) {
    for (let s = 0; s < activeCount && idx < allItems.length; s++) {
      while (nextShelves[s].layers.length <= depth) {
        nextShelves[s].layers.push([null, null, null]);
      }
      const row = nextShelves[s].layers[depth];
      const maxSlots = depth === 0 && s >= activeCount - 2 ? 2 : 3;
      for (let slot = 0; slot < maxSlots && idx < allItems.length; slot++) {
        if (row[slot] === null) row[slot] = allItems[idx++];
      }
    }
    depth++;
  }

  breakSameRowTriples(nextShelves, true);
  return normalizeShelfLayers(nextShelves).updatedShelves;
}

/**
 * Web Audio Synthesizer
 */
class CozyAudio {
  constructor() {
    this.ctx = null;
    this.sfxEnabled = true;
    this.sfxVolume = 0.8; // 0.0 to 1.0 (80% default)
    this.musicEnabled = false;
    this.musicVolume = 0.7; // 0.0 to 1.0 (70% default)
    this.themeMatchedMusic = false;
    this.activeThemeId = 'american';
    this.musicTimer = null;
  }
  setThemeMusicConfig(themeMatched, themeId) {
    const nextMatched = Boolean(themeMatched);
    const nextTheme = themeId || 'american';
    const changed =
      this.themeMatchedMusic !== nextMatched ||
      (nextMatched && this.activeThemeId !== nextTheme);
    this.themeMatchedMusic = nextMatched;
    this.activeThemeId = nextTheme;
    if (this.musicEnabled && changed) {
      this.setMusic(true);
    }
  }
  ensure() {
    if (!this.sfxEnabled && !this.musicEnabled) return null;
    if (!this.ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (AC) this.ctx = new AC();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }
  getSfxGain(baseGain) {
    const scale = Math.max(0, Math.min(1, this.sfxVolume)) * 1.25;
    return Math.max(0.0005, baseGain * scale);
  }
  canPlaySfx() {
    return this.sfxEnabled && this.sfxVolume > 0.005;
  }
  playPickup() {
    if (!this.canPlaySfx()) return;
    const ctx = this.ensure();
    if (!ctx) return;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(320, now);
    osc.frequency.exponentialRampToValueAtTime(520, now + 0.085);
    gain.gain.setValueAtTime(this.getSfxGain(0.14), now);
    gain.gain.exponentialRampToValueAtTime(0.0005, now + 0.09);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.095);
  }
  playPlace() {
    if (!this.canPlaySfx()) return;
    const ctx = this.ensure();
    if (!ctx) return;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(240, now);
    osc.frequency.exponentialRampToValueAtTime(135, now + 0.09);
    gain.gain.setValueAtTime(this.getSfxGain(0.22), now);
    gain.gain.exponentialRampToValueAtTime(0.0005, now + 0.1);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.105);
  }
  playSlideForward() {
    if (!this.canPlaySfx()) return;
    const ctx = this.ensure();
    if (!ctx) return;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(190, now);
    osc.frequency.exponentialRampToValueAtTime(295, now + 0.16);
    gain.gain.setValueAtTime(this.getSfxGain(0.1), now);
    gain.gain.exponentialRampToValueAtTime(0.0005, now + 0.17);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.18);
  }
  playPackMatch() {
    if (!this.canPlaySfx()) return;
    const ctx = this.ensure();
    if (!ctx) return;
    [523.25, 659.25, 783.99, 1046.5].forEach((freq, idx) => {
      const start = ctx.currentTime + idx * 0.065;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, start);
      gain.gain.setValueAtTime(this.getSfxGain(0.18), start);
      gain.gain.exponentialRampToValueAtTime(0.0005, start + 0.32);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(start);
      osc.stop(start + 0.34);
    });
  }
  playLevelComplete() {
    if (!this.canPlaySfx()) return;
    const ctx = this.ensure();
    if (!ctx) return;
    [523.25, 659.25, 783.99, 987.77, 1046.5].forEach((freq, idx) => {
      const start = ctx.currentTime + idx * 0.09;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, start);
      gain.gain.setValueAtTime(this.getSfxGain(0.2), start);
      gain.gain.exponentialRampToValueAtTime(0.0005, start + 0.65);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(start);
      osc.stop(start + 0.7);
    });
  }
  playSparkle() {
    if (!this.canPlaySfx()) return;
    const ctx = this.ensure();
    if (!ctx) return;
    [880, 1174.66, 1396.91, 1760].forEach((f, i) => {
      const t = ctx.currentTime + i * 0.05;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, t);
      gain.gain.setValueAtTime(this.getSfxGain(0.11), t);
      gain.gain.exponentialRampToValueAtTime(0.0005, t + 0.22);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(t);
      osc.stop(t + 0.24);
    });
  }
  playCatPurr() {
    if (!this.canPlaySfx()) return;
    const ctx = this.ensure();
    if (!ctx) return;
    const now = ctx.currentTime;
    // Soft rumbling purr bursts + cute ascending chirp meow
    for (let i = 0; i < 6; i++) {
      const t = now + i * 0.045;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(62 + (i % 2) * 8, t);
      gain.gain.setValueAtTime(this.getSfxGain(0.075), t);
      gain.gain.exponentialRampToValueAtTime(0.0005, t + 0.04);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(t);
      osc.stop(t + 0.042);
    }
    const meowOsc = ctx.createOscillator();
    const meowGain = ctx.createGain();
    meowOsc.type = 'sine';
    meowOsc.frequency.setValueAtTime(520, now + 0.12);
    meowOsc.frequency.exponentialRampToValueAtTime(780, now + 0.24);
    meowOsc.frequency.exponentialRampToValueAtTime(690, now + 0.34);
    meowGain.gain.setValueAtTime(0.0005, now + 0.12);
    meowGain.gain.linearRampToValueAtTime(this.getSfxGain(0.13), now + 0.18);
    meowGain.gain.exponentialRampToValueAtTime(0.0005, now + 0.36);
    meowOsc.connect(meowGain);
    meowGain.connect(ctx.destination);
    meowOsc.start(now + 0.12);
    meowOsc.stop(now + 0.37);
  }
  playToySound(toyId) {
    if (!this.canPlaySfx()) return;
    const ctx = this.ensure();
    if (!ctx) return;
    const now = ctx.currentTime;
    if (toyId === 'bell' || toyId === 'maneki') {
      // Clear brass counter bell / lucky coin chime
      [1318.5, 1975.5].forEach((freq, idx) => {
        const t = now + idx * 0.07;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, t);
        gain.gain.setValueAtTime(this.getSfxGain(0.18), t);
        gain.gain.exponentialRampToValueAtTime(0.0005, t + 0.55);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(t);
        osc.stop(t + 0.58);
      });
    } else if (toyId === 'mouse' || toyId === 'taiyaki') {
      // Cute double squeak
      [0, 0.12].forEach((offset, idx) => {
        const t = now + offset;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880 + idx * 110, t);
        osc.frequency.exponentialRampToValueAtTime(1480, t + 0.07);
        gain.gain.setValueAtTime(this.getSfxGain(0.14), t);
        gain.gain.exponentialRampToValueAtTime(0.0005, t + 0.09);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(t);
        osc.stop(t + 0.095);
      });
    } else if (toyId === 'musicbox') {
      // Crystalline music box arpeggio
      [659.25, 783.99, 1046.5, 1318.5, 1567.98].forEach((freq, idx) => {
        const t = now + idx * 0.085;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, t);
        gain.gain.setValueAtTime(this.getSfxGain(0.14), t);
        gain.gain.exponentialRampToValueAtTime(0.0005, t + 0.38);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(t);
        osc.stop(t + 0.4);
      });
    } else {
      // Playful yarn bap / catnip / teacup cozy trill + purr
      this.playCatPurr();
    }
  }
  setMusic(enabled) {
    this.musicEnabled = enabled;
    if (this.musicTimer) {
      clearInterval(this.musicTimer);
      this.musicTimer = null;
    }
    if (enabled) {
      this.ensure();
      // 3 Rotating Homey & Upbeat Acoustic Songs (32 eighth-note steps per song @ ~116 BPM = 260ms/step)
      // Song 0: "Sunny Morning Market" (C -> Am -> F -> G)
      // Song 1: "Boulangerie Stroll" (F -> C -> Dm -> G)
      // Song 2: "Weekend Harvest" (C -> G -> Am -> F)
      const SONGS = [
        {
          name: 'Sunny Morning Market',
          bass: [
            130.81, 0, 196.0, 0, 130.81, 0, 196.0, 0, // C2 - G2
            110.0, 0, 164.81, 0, 110.0, 0, 164.81, 0, // A2 - E3
            174.61, 0, 261.63, 0, 174.61, 0, 261.63, 0, // F3 - C4
            196.0, 0, 293.66, 0, 196.0, 0, 246.94, 0, // G3 - D4 - B3
          ],
          chords: [
            [261.63, 329.63, 392.0], // C
            [220.0, 261.63, 329.63], // Am
            [261.63, 349.23, 440.0], // F
            [246.94, 293.66, 392.0], // G
          ],
          melody: [
            523.25, 659.25, 783.99, 659.25, 587.33, 523.25, 0, 392.0,
            440.0, 523.25, 659.25, 523.25, 587.33, 0, 523.25, 0,
            698.46, 659.25, 587.33, 523.25, 440.0, 523.25, 659.25, 0,
            587.33, 659.25, 587.33, 493.88, 523.25, 0, 392.0, 0,
          ],
        },
        {
          name: 'Boulangerie Stroll',
          bass: [
            174.61, 0, 261.63, 0, 174.61, 0, 261.63, 0, // F
            130.81, 0, 196.0, 0, 130.81, 0, 196.0, 0,  // C
            146.83, 0, 220.0, 0, 146.83, 0, 220.0, 0,  // Dm
            196.0, 0, 293.66, 0, 196.0, 0, 246.94, 0,  // G
          ],
          chords: [
            [261.63, 349.23, 440.0], // F
            [261.63, 329.63, 392.0], // C
            [293.66, 349.23, 440.0], // Dm
            [246.94, 293.66, 392.0], // G
          ],
          melody: [
            698.46, 0, 880.0, 698.46, 587.33, 523.25, 587.33, 0,
            659.25, 523.25, 392.0, 523.25, 659.25, 783.99, 0, 0,
            587.33, 698.46, 880.0, 698.46, 659.25, 587.33, 523.25, 0,
            587.33, 783.99, 659.25, 587.33, 523.25, 0, 0, 0,
          ],
        },
        {
          name: 'Weekend Harvest',
          bass: [
            130.81, 0, 196.0, 0, 164.81, 0, 196.0, 0, // C
            196.0, 0, 246.94, 0, 293.66, 0, 246.94, 0, // G
            220.0, 0, 261.63, 0, 329.63, 0, 261.63, 0, // Am
            174.61, 0, 220.0, 0, 196.0, 0, 246.94, 0,  // F -> G
          ],
          chords: [
            [261.63, 329.63, 392.0], // C
            [246.94, 293.66, 392.0], // G
            [220.0, 261.63, 329.63], // Am
            [261.63, 349.23, 440.0], // F
          ],
          melody: [
            783.99, 659.25, 523.25, 659.25, 783.99, 880.0, 783.99, 0,
            783.99, 587.33, 493.88, 587.33, 783.99, 659.25, 587.33, 0,
            659.25, 523.25, 440.0, 523.25, 659.25, 783.99, 659.25, 0,
            698.46, 659.25, 587.33, 493.88, 523.25, 659.25, 523.25, 0,
          ],
        },
      ];

      const THEME_SONGS = {
        american: {
          name: 'Hometown Corner Jazz',
          stepMs: 255,
          melodyWave: 'sine',
          ornament: 'shimmer',
          bass: [
            130.81, 0, 196.0, 0, 130.81, 0, 196.0, 0,
            110.0, 0, 164.81, 0, 110.0, 0, 164.81, 0,
            146.83, 0, 220.0, 0, 146.83, 0, 220.0, 0,
            196.0, 0, 146.83, 0, 196.0, 0, 246.94, 0,
          ],
          chords: [
            [261.63, 329.63, 392.0, 493.88],
            [220.0, 261.63, 329.63, 392.0],
            [293.66, 349.23, 440.0, 523.25],
            [246.94, 293.66, 349.23, 392.0],
          ],
          melody: [
            659.25, 0, 783.99, 659.25, 587.33, 523.25, 493.88, 0,
            440.0, 523.25, 659.25, 783.99, 659.25, 0, 523.25, 0,
            587.33, 698.46, 880.0, 698.46, 659.25, 587.33, 523.25, 0,
            493.88, 587.33, 659.25, 783.99, 659.25, 587.33, 523.25, 0,
          ],
        },
        farmers: {
          name: 'Sunlit Meadow Acoustic',
          stepMs: 265,
          melodyWave: 'triangle',
          ornament: 'shimmer',
          bass: [
            98.0, 0, 146.83, 0, 98.0, 0, 196.0, 0,
            130.81, 0, 196.0, 0, 130.81, 0, 196.0, 0,
            164.81, 0, 246.94, 0, 164.81, 0, 246.94, 0,
            146.83, 0, 220.0, 0, 146.83, 0, 196.0, 0,
          ],
          chords: [
            [196.0, 246.94, 293.66],
            [261.63, 329.63, 392.0],
            [246.94, 329.63, 392.0],
            [220.0, 293.66, 369.99],
          ],
          melody: [
            392.0, 493.88, 587.33, 783.99, 659.25, 587.33, 493.88, 0,
            523.25, 659.25, 783.99, 659.25, 587.33, 523.25, 392.0, 0,
            659.25, 587.33, 493.88, 440.0, 493.88, 587.33, 659.25, 0,
            587.33, 739.99, 880.0, 739.99, 587.33, 493.88, 392.0, 0,
          ],
        },
        japanese: {
          name: 'Tokyo Konbini Chimes',
          stepMs: 245,
          melodyWave: 'sine',
          ornament: 'celesta',
          bass: [
            164.81, 0, 246.94, 0, 164.81, 0, 293.66, 0,
            196.0, 0, 293.66, 0, 196.0, 0, 329.63, 0,
            110.0, 0, 164.81, 0, 220.0, 0, 164.81, 0,
            123.47, 0, 196.0, 0, 146.83, 0, 164.81, 0,
          ],
          chords: [
            [246.94, 329.63, 440.0],
            [246.94, 293.66, 392.0],
            [220.0, 293.66, 440.0],
            [246.94, 329.63, 392.0],
          ],
          melody: [
            659.25, 0, 587.33, 493.88, 440.0, 392.0, 440.0, 0,
            587.33, 659.25, 783.99, 659.25, 587.33, 0, 493.88, 0,
            440.0, 493.88, 587.33, 659.25, 880.0, 783.99, 659.25, 0,
            587.33, 493.88, 440.0, 392.0, 329.63, 0, 493.88, 0,
          ],
        },
        french: {
          name: 'Parisian Boulangerie Waltz',
          stepMs: 250,
          melodyWave: 'triangle',
          ornament: 'shimmer',
          bass: [
            110.0, 0, 164.81, 0, 110.0, 0, 164.81, 0,
            146.83, 0, 220.0, 0, 146.83, 0, 220.0, 0,
            98.0, 0, 146.83, 0, 196.0, 0, 146.83, 0,
            130.81, 0, 196.0, 0, 164.81, 0, 196.0, 0,
          ],
          chords: [
            [220.0, 261.63, 329.63],
            [293.66, 349.23, 440.0],
            [246.94, 293.66, 392.0],
            [261.63, 329.63, 493.88],
          ],
          melody: [
            659.25, 0, 880.0, 783.99, 659.25, 587.33, 523.25, 0,
            587.33, 698.46, 880.0, 698.46, 659.25, 587.33, 440.0, 0,
            587.33, 659.25, 783.99, 659.25, 587.33, 493.88, 523.25, 0,
            659.25, 587.33, 523.25, 493.88, 440.0, 0, 523.25, 0,
          ],
        },
        italian: {
          name: 'Tuscan Piazza Mandolin',
          stepMs: 240,
          melodyWave: 'triangle',
          ornament: 'mandolin',
          bass: [
            174.61, 0, 261.63, 0, 174.61, 0, 261.63, 0,
            116.54, 0, 174.61, 0, 233.08, 0, 174.61, 0,
            130.81, 0, 196.0, 0, 130.81, 0, 196.0, 0,
            174.61, 0, 220.0, 0, 261.63, 0, 174.61, 0,
          ],
          chords: [
            [261.63, 349.23, 440.0],
            [233.08, 293.66, 349.23],
            [261.63, 329.63, 392.0, 466.16],
            [261.63, 349.23, 440.0],
          ],
          melody: [
            523.25, 698.46, 880.0, 783.99, 698.46, 659.25, 587.33, 0,
            587.33, 698.46, 932.33, 880.0, 783.99, 698.46, 587.33, 0,
            659.25, 783.99, 880.0, 783.99, 698.46, 659.25, 587.33, 0,
            523.25, 587.33, 698.46, 880.0, 698.46, 0, 523.25, 0,
          ],
        },
        mexican: {
          name: 'Mercado Fiesta Marimba',
          stepMs: 235,
          melodyWave: 'sine',
          ornament: 'marimba',
          bass: [
            146.83, 0, 220.0, 0, 146.83, 0, 220.0, 0,
            98.0, 0, 146.83, 0, 196.0, 0, 146.83, 0,
            110.0, 0, 164.81, 0, 220.0, 0, 164.81, 0,
            146.83, 0, 185.0, 0, 220.0, 0, 146.83, 0,
          ],
          chords: [
            [293.66, 369.99, 440.0],
            [246.94, 293.66, 392.0],
            [220.0, 277.18, 329.63, 392.0],
            [293.66, 369.99, 440.0],
          ],
          melody: [
            587.33, 739.99, 880.0, 739.99, 659.25, 587.33, 739.99, 0,
            783.99, 659.25, 587.33, 493.88, 587.33, 783.99, 659.25, 0,
            554.37, 659.25, 880.0, 783.99, 659.25, 554.37, 659.25, 0,
            587.33, 739.99, 880.0, 659.25, 587.33, 0, 440.0, 0,
          ],
        },
        british: {
          name: 'Tea Room Celesta',
          stepMs: 260,
          melodyWave: 'sine',
          ornament: 'celesta',
          bass: [
            130.81, 0, 196.0, 0, 123.47, 0, 196.0, 0,
            110.0, 0, 164.81, 0, 174.61, 0, 196.0, 0,
            130.81, 0, 196.0, 0, 123.47, 0, 196.0, 0,
            174.61, 0, 196.0, 0, 130.81, 0, 196.0, 0,
          ],
          chords: [
            [261.63, 329.63, 392.0],
            [246.94, 293.66, 392.0],
            [220.0, 261.63, 329.63],
            [261.63, 349.23, 392.0],
          ],
          melody: [
            523.25, 659.25, 783.99, 1046.5, 987.77, 783.99, 659.25, 0,
            587.33, 659.25, 783.99, 659.25, 587.33, 493.88, 523.25, 0,
            440.0, 523.25, 659.25, 783.99, 698.46, 659.25, 587.33, 0,
            698.46, 659.25, 587.33, 493.88, 523.25, 659.25, 523.25, 0,
          ],
        },
      };

      let tick = 0;
      let songIdx = 0;

      const playTone = (ctx, freq, type, startTime, duration, peakGain) => {
        if (!freq || freq <= 0) return;
        const volScale = Math.max(0, Math.min(1, this.musicVolume)) * 1.45;
        if (volScale <= 0.001) return;
        const scaledPeak = peakGain * volScale;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, startTime);
        gain.gain.setValueAtTime(0.0005, startTime);
        gain.gain.linearRampToValueAtTime(scaledPeak, startTime + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0005, startTime + duration);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(startTime);
        osc.stop(startTime + duration + 0.02);
      };

      const initialThemeSong = this.themeMatchedMusic
        ? THEME_SONGS[this.activeThemeId] || THEME_SONGS.american
        : null;
      const stepMs = initialThemeSong ? initialThemeSong.stepMs : 260;

      this.musicTimer = setInterval(() => {
        if (!this.musicEnabled || document.hidden) return;
        const ctx = this.ensure();
        if (!ctx || ctx.state !== 'running') return;

        const now = ctx.currentTime;
        const step = tick % 32;
        if (!this.themeMatchedMusic && step === 0 && tick > 0) {
          songIdx = (songIdx + 1) % SONGS.length;
        }
        const song = this.themeMatchedMusic
          ? THEME_SONGS[this.activeThemeId] || SONGS[0]
          : SONGS[songIdx];

        // 1. Acoustic / Rhythmic Bassline
        const bassFreq = song.bass[step];
        if (bassFreq) {
          playTone(ctx, bassFreq, 'triangle', now, 0.22, 0.055);
        }

        // 2. Warm Chord Strum (on steps 2, 6, 10, 14...)
        if (step % 4 === 2) {
          const measure = Math.floor(step / 8);
          const chord = song.chords[measure] || song.chords[0];
          chord.forEach((cFreq, idx) => {
            playTone(ctx, cFreq, 'sine', now + idx * 0.018, 0.32, 0.022);
          });
        }

        // 3. Lead Melody with Theme-Specific Ornamentation
        const melFreq = song.melody[step];
        if (melFreq) {
          const wave = song.melodyWave || 'sine';
          playTone(ctx, melFreq, wave, now, 0.24, 0.045);
          if (song.ornament === 'mandolin' && step % 2 === 0) {
            playTone(ctx, melFreq, 'triangle', now + 0.085, 0.14, 0.022);
          } else if (song.ornament === 'marimba' && step % 4 === 0) {
            playTone(ctx, melFreq * 1.2599, 'sine', now + 0.015, 0.18, 0.018);
          } else if (song.ornament === 'celesta') {
            playTone(ctx, melFreq * 2, 'sine', now, 0.18, 0.013);
          } else if (step % 4 === 0) {
            playTone(ctx, melFreq * 2, 'sine', now, 0.14, 0.012);
          }
        }

        tick++;
      }, stepMs);
    }
  }
}

const soundEngine = new CozyAudio();

/**
 * Application State & Persistence
 */
const STORAGE_KEY = 'cozy_market_sort_save_v1';
const ACTIVE_BOARD_KEY = 'cozy_market_sort_board_v1';
const DEFAULT_SAVE = {
  marketTitle: PERSONALIZATION.defaultMarketTitle,
  currentLevelNumber: 1,
  highestUnlockedLevel: 1,
  completedLevels: [],
  stars: 0,
  points: 30,
  unlockedThemes: ['american'],
  activeThemeId: 'american',
  rotateThemes: false,
  sfxEnabled: true,
  sfxVolume: 80,
  musicEnabled: false,
  musicVolume: 70,
  themeMatchedMusic: false,
  darkMode: false,
  catName: 'Mochi',
  catCoatId: 'ginger',
  unlockedCatOutfits: ['grocer'],
  equippedHatId: 'grocer',
  equippedClothingId: 'grocer',
  unlockedCatToys: ['yarn'],
  equippedToyId: 'yarn',
  catPetsCount: 0,
  catToyPlaysCount: 0,
  petBonusLevelKey: null,
  toyBonusLevelKey: null,
  packedTrioCounts: {},
};

const VALID_ITEM_IDS = new Set(
  STORE_THEMES.flatMap((t) => t.items.map((item) => item.id))
);

function sanitizeNonNegNumber(val, fallback) {
  return typeof val === 'number' && Number.isFinite(val) && val >= 0 ? val : fallback;
}

function clampVolume(val, fallback) {
  return typeof val === 'number' && Number.isFinite(val)
    ? Math.max(0, Math.min(100, val))
    : fallback;
}

function sanitizeSaveObject(rawObj) {
  const parsed = { ...DEFAULT_SAVE, ...(rawObj || {}) };
  // Migrate previous placeholder title to Katlyn's Cozy Corner
  if (parsed.marketTitle === 'Cozy Market Sort') {
    parsed.marketTitle = PERSONALIZATION.defaultMarketTitle;
  } else if (typeof parsed.marketTitle !== 'string' || !parsed.marketTitle.trim()) {
    parsed.marketTitle = PERSONALIZATION.defaultMarketTitle;
  } else {
    parsed.marketTitle = parsed.marketTitle.trim().slice(0, 32);
  }

  const validThemeIds = new Set(STORE_THEMES.map((t) => t.id));
  parsed.unlockedThemes = Array.isArray(parsed.unlockedThemes)
    ? Array.from(new Set(parsed.unlockedThemes.filter((id) => validThemeIds.has(id))))
    : ['american'];
  if (parsed.unlockedThemes.length === 0) parsed.unlockedThemes = ['american'];
  if (!validThemeIds.has(parsed.activeThemeId)) {
    parsed.activeThemeId = parsed.unlockedThemes[0];
  }

  parsed.completedLevels = Array.isArray(parsed.completedLevels)
    ? Array.from(
        new Set(
          parsed.completedLevels.filter(
            (n) => Number.isInteger(n) && n >= 1 && n <= LEVEL_SPECS.length
          )
        )
      )
    : [];

  const curLvl = Number(parsed.currentLevelNumber);
  parsed.currentLevelNumber =
    Number.isFinite(curLvl)
      ? Math.min(LEVEL_SPECS.length, Math.max(1, Math.trunc(curLvl)))
      : 1;
  const highLvl = Number(parsed.highestUnlockedLevel);
  parsed.highestUnlockedLevel =
    Number.isFinite(highLvl)
      ? Math.min(LEVEL_SPECS.length, Math.max(parsed.currentLevelNumber, Math.trunc(highLvl)))
      : parsed.currentLevelNumber;

  parsed.stars = sanitizeNonNegNumber(parsed.stars, DEFAULT_SAVE.stars);
  parsed.points = sanitizeNonNegNumber(parsed.points, DEFAULT_SAVE.points);
  parsed.catPetsCount = sanitizeNonNegNumber(parsed.catPetsCount, 0);
  parsed.catToyPlaysCount = sanitizeNonNegNumber(parsed.catToyPlaysCount, 0);
  parsed.sfxVolume = clampVolume(parsed.sfxVolume, DEFAULT_SAVE.sfxVolume);
  parsed.musicVolume = clampVolume(parsed.musicVolume, DEFAULT_SAVE.musicVolume);
  parsed.sfxEnabled = Boolean(parsed.sfxEnabled);
  parsed.musicEnabled = Boolean(parsed.musicEnabled);
  parsed.themeMatchedMusic = Boolean(parsed.themeMatchedMusic);
  parsed.darkMode = Boolean(parsed.darkMode);
  parsed.rotateThemes = Boolean(parsed.rotateThemes);

  const validCoatIds = new Set(
    CAT_COATS.filter((c) => isPetUnlockedItem(c, parsed.catPetsCount)).map((c) => c.id)
  );
  if (!validCoatIds.has(parsed.catCoatId)) {
    parsed.catCoatId = 'ginger';
  }
  parsed.catName =
    typeof parsed.catName === 'string' && parsed.catName.trim()
      ? parsed.catName.trim().slice(0, 18)
      : 'Mochi';

  const validOutfitIds = new Set(
    CAT_OUTFITS.filter((o) => isPetUnlockedItem(o, parsed.catPetsCount)).map((o) => o.id)
  );
  parsed.unlockedCatOutfits = Array.isArray(parsed.unlockedCatOutfits)
    ? Array.from(new Set(parsed.unlockedCatOutfits.filter((id) => validOutfitIds.has(id))))
    : ['grocer'];
  if (!parsed.unlockedCatOutfits.includes('grocer')) {
    parsed.unlockedCatOutfits.unshift('grocer');
  }

  const validToyIds = new Set(
    CAT_PERCH_TOYS.filter((t) => isPetUnlockedItem(t, parsed.catPetsCount)).map((t) => t.id)
  );
  parsed.unlockedCatToys = Array.isArray(parsed.unlockedCatToys)
    ? Array.from(new Set(parsed.unlockedCatToys.filter((id) => validToyIds.has(id))))
    : ['yarn'];
  if (!parsed.unlockedCatToys.includes('yarn')) {
    parsed.unlockedCatToys.unshift('yarn');
  }

  syncPetMilestoneUnlocks(parsed);

  if (
    parsed.equippedHatId !== 'none' &&
    !parsed.unlockedCatOutfits.includes(parsed.equippedHatId)
  ) {
    parsed.equippedHatId = 'grocer';
  }
  if (
    parsed.equippedClothingId !== 'none' &&
    !parsed.unlockedCatOutfits.includes(parsed.equippedClothingId)
  ) {
    parsed.equippedClothingId = 'grocer';
  }
  if (!parsed.unlockedCatToys.includes(parsed.equippedToyId)) {
    parsed.equippedToyId = 'yarn';
  }

  parsed.petBonusLevelKey = typeof parsed.petBonusLevelKey === 'string' ? parsed.petBonusLevelKey : null;
  parsed.toyBonusLevelKey = typeof parsed.toyBonusLevelKey === 'string' ? parsed.toyBonusLevelKey : null;

  const cleanCounts = {};
  if (parsed.packedTrioCounts && typeof parsed.packedTrioCounts === 'object' && !Array.isArray(parsed.packedTrioCounts)) {
    Object.entries(parsed.packedTrioCounts).forEach(([k, v]) => {
      if (VALID_ITEM_IDS.has(k) && typeof v === 'number' && Number.isFinite(v) && v > 0) {
        cleanCounts[k] = Math.trunc(v);
      }
    });
  }
  parsed.packedTrioCounts = cleanCounts;
  return parsed;
}

function loadSave() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return sanitizeSaveObject(DEFAULT_SAVE);
    return sanitizeSaveObject(JSON.parse(raw));
  } catch {
    return sanitizeSaveObject(DEFAULT_SAVE);
  }
}

function encodeSaveCode(saveObj) {
  const json = JSON.stringify(saveObj);
  const bytes = new TextEncoder().encode(json);
  let bin = '';
  for (let i = 0; i < bytes.length; i++) {
    bin += String.fromCharCode(bytes[i]);
  }
  return `KCC1-${btoa(bin)}`;
}

function decodeSaveCode(codeStr) {
  if (typeof codeStr !== 'string') return null;
  const trimmed = codeStr.trim();
  if (!trimmed) return null;
  try {
    let jsonStr = '';
    if (trimmed.startsWith('KCC1-')) {
      const b64 = trimmed.slice(5).replace(/\s+/g, '');
      const bin = atob(b64);
      const bytes = new Uint8Array(bin.length);
      for (let i = 0; i < bin.length; i++) {
        bytes[i] = bin.charCodeAt(i);
      }
      jsonStr = new TextDecoder().decode(bytes);
    } else if (trimmed.startsWith('{')) {
      jsonStr = trimmed;
    } else {
      return null;
    }
    const parsed = JSON.parse(jsonStr);
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
      return null;
    }
    const hasExpectedKey =
      'currentLevelNumber' in parsed ||
      'stars' in parsed ||
      'points' in parsed ||
      'completedLevels' in parsed;
    if (!hasExpectedKey) return null;
    return sanitizeSaveObject(parsed);
  } catch {
    return null;
  }
}

function isValidSavedShelves(shelves, expectedShelfCount) {
  if (!Array.isArray(shelves) || shelves.length !== expectedShelfCount) return false;
  const seenShelfIds = new Set();
  const typeCounts = new Map();
  let totalItems = 0;
  for (const shelf of shelves) {
    if (!shelf || typeof shelf !== 'object' || !Number.isInteger(shelf.id) || seenShelfIds.has(shelf.id)) {
      return false;
    }
    seenShelfIds.add(shelf.id);
    if (!Array.isArray(shelf.layers) || shelf.layers.length < 1 || shelf.layers.length > 20) {
      return false;
    }
    for (const row of shelf.layers) {
      if (!Array.isArray(row) || row.length !== 3) return false;
      for (const slot of row) {
        if (slot === null) continue;
        if (
          typeof slot !== 'object' ||
          typeof slot.uid !== 'string' ||
          !slot.uid ||
          !Number.isInteger(slot.itemType) ||
          slot.itemType < 0
        ) {
          return false;
        }
        totalItems++;
        typeCounts.set(slot.itemType, (typeCounts.get(slot.itemType) || 0) + 1);
      }
    }
  }
  if (totalItems === 0 || totalItems % 3 !== 0) return false;
  for (const cnt of typeCounts.values()) {
    if (cnt % 3 !== 0) return false;
  }
  return true;
}

function clearSavedBoard() {
  try {
    localStorage.removeItem(ACTIVE_BOARD_KEY);
  } catch {}
}

function persistBoardState() {
  try {
    if (!state.shelves || state.shelves.length === 0 || countRemainingItems(state.shelves) === 0) {
      clearSavedBoard();
      return;
    }
    const spec = getActiveLevelSpec();
    const payload = {
      levelNumber: spec.levelNumber,
      isRelaxMode: Boolean(state.isRelaxMode),
      relaxDifficulty: state.relaxDifficulty,
      relaxRound: state.relaxRound,
      relaxSpec: state.isRelaxMode ? state.relaxSpec : null,
      shelves: state.shelves,
      undoStack: state.undoStack.slice(-10),
    };
    localStorage.setItem(ACTIVE_BOARD_KEY, JSON.stringify(payload));
  } catch {}
}

function loadSavedBoard() {
  try {
    const raw = localStorage.getItem(ACTIVE_BOARD_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return null;

    const isRelax = Boolean(parsed.isRelaxMode);
    let expectedSpec = null;
    if (isRelax) {
      const rs = parsed.relaxSpec;
      if (
        rs &&
        typeof rs === 'object' &&
        Number.isInteger(rs.shelfCount) &&
        rs.shelfCount >= 4 &&
        rs.shelfCount <= 18 &&
        typeof rs.title === 'string' &&
        typeof rs.tierName === 'string' &&
        Number.isFinite(rs.starReward) &&
        Number.isFinite(rs.completionPoints)
      ) {
        expectedSpec = rs;
      }
    } else {
      if (parsed.levelNumber !== state.save.currentLevelNumber) {
        return null;
      }
      expectedSpec = LEVEL_SPECS[parsed.levelNumber - 1] || null;
    }

    if (!expectedSpec || !isValidSavedShelves(parsed.shelves, expectedSpec.shelfCount)) {
      return null;
    }

    const normalizedBoard = normalizeShelfLayers(cloneShelves(parsed.shelves)).updatedShelves;
    const cleanUndo = Array.isArray(parsed.undoStack)
      ? parsed.undoStack
          .filter((snap) => isValidSavedShelves(snap, expectedSpec.shelfCount))
          .slice(-10)
          .map((snap) => cloneShelves(snap))
      : [];

    return {
      isRelaxMode: isRelax,
      relaxDifficulty: ['cozy', 'medium', 'challenging'].includes(parsed.relaxDifficulty)
        ? parsed.relaxDifficulty
        : 'medium',
      relaxRound: Number.isInteger(parsed.relaxRound) && parsed.relaxRound >= 1 ? parsed.relaxRound : 1,
      relaxSpec: isRelax ? expectedSpec : null,
      shelves: normalizedBoard,
      undoStack: cleanUndo,
    };
  } catch {
    return null;
  }
}

function recordPackedTrio(itemType) {
  if (!Number.isInteger(itemType) || itemType < 0) return;
  const theme = getThemeById(state.save.activeThemeId);
  const item = theme.items[itemType % theme.items.length];
  if (!item || !item.id) return;
  if (!state.save.packedTrioCounts || typeof state.save.packedTrioCounts !== 'object') {
    state.save.packedTrioCounts = {};
  }
  state.save.packedTrioCounts[item.id] = (state.save.packedTrioCounts[item.id] || 0) + 1;
}

function persistSave() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.save));
  } catch {}
  soundEngine.sfxEnabled = state.save.sfxEnabled;
  soundEngine.sfxVolume = clampVolume(state.save.sfxVolume, 80) / 100;
  soundEngine.musicVolume = clampVolume(state.save.musicVolume, 70) / 100;
  soundEngine.setThemeMusicConfig(state.save.themeMatchedMusic, state.save.activeThemeId);
}

const state = {
  save: loadSave(),
  isRelaxMode: false,
  relaxDifficulty: 'medium',
  relaxRound: 1,
  relaxSpec: null,
  boardGeneration: 0,
  advanceTimer: null,
  packTimer: null,
  catTimer: null,
  suppressNextClickUntil: 0,
  shelves: [],
  undoStack: [],
  selectedItem: null, // { shelfId, slotIdx, item }
  packingState: null, // { shelfId, itemType }
  advancedShelfIds: [],
  highlightedUids: [],
  hintTargetShelfId: null,
  hintMessage: null,
  activeModal: null, // 'themes' | 'levels' | 'settings' | 'celebration' | null
  shopTab: 'markets', // 'markets' | 'cat' | 'toys' | 'catalog'
  catalogFilterThemeId: 'all',
  justUnlockedNote: null,
  saveCodeStatus: null,
  celebrationData: null,
  isAnimating: false,
  drag: null,
  catIsHappy: false,
  toyIsPlaying: false,
  catSpeech: "Purrrr... Welcome to Katlyn's Cozy Corner! Tap me for pets or play with my counter toy!",
};

function getCurrentLevelBonusKey() {
  return state.isRelaxMode
    ? `relax-${state.relaxDifficulty}-${state.relaxRound}`
    : `lvl-${state.save.currentLevelNumber}`;
}

function clearPendingAdvanceTimer() {
  if (state.advanceTimer !== null) {
    clearTimeout(state.advanceTimer);
    state.advanceTimer = null;
  }
}

function clearPendingPackTimer() {
  if (state.packTimer !== null) {
    clearTimeout(state.packTimer);
    state.packTimer = null;
  }
}

function scheduleAdvanceClear(moveGen) {
  clearPendingAdvanceTimer();
  state.advanceTimer = setTimeout(() => {
    state.advanceTimer = null;
    if (state.boardGeneration !== moveGen) return;
    state.advancedShelfIds = [];
    if (!state.isAnimating) {
      renderApp();
    }
  }, 380);
}

soundEngine.sfxEnabled = state.save.sfxEnabled;
soundEngine.sfxVolume = (state.save.sfxVolume ?? 80) / 100;
soundEngine.musicVolume = (state.save.musicVolume ?? 70) / 100;
soundEngine.setThemeMusicConfig(state.save.themeMatchedMusic, state.save.activeThemeId);
if (state.save.musicEnabled) {
  soundEngine.setMusic(true);
}

function getActiveLevelSpec() {
  if (state.isRelaxMode && state.relaxSpec) return state.relaxSpec;
  const idx = Math.min(
    LEVEL_SPECS.length - 1,
    Math.max(0, state.save.currentLevelNumber - 1)
  );
  return LEVEL_SPECS[idx];
}

function getLevelModeIcon(spec, isRelaxMode) {
  if (!isRelaxMode) return '🌎';
  if (spec && spec.tierName) {
    if (spec.tierName.includes('Cozy')) return '🌿';
    if (spec.tierName.includes('Medium')) return '☀️';
    if (spec.tierName.includes('Challenging')) return '✨';
  }
  return '☕';
}

function applyThemeCssVariables() {
  const theme = getThemeById(state.save.activeThemeId);
  const root = document.documentElement;
  root.style.setProperty('--wall-bg', theme.palette.wallBg);
  root.style.setProperty('--wall-pattern', theme.palette.wallPattern);
  root.style.setProperty('--awning-primary', theme.palette.awningPrimary);
  root.style.setProperty('--awning-secondary', theme.palette.awningSecondary);
  root.style.setProperty('--wood-top', theme.palette.shelfWoodTop);
  root.style.setProperty('--wood-front', theme.palette.shelfWoodFront);
  root.style.setProperty('--backboard', theme.palette.shelfBackboard);
  root.style.setProperty('--shelf-shadow', theme.palette.shelfShadow);
  root.style.setProperty('--container-primary', theme.containerPrimary);
  root.style.setProperty('--container-secondary', theme.containerSecondary);
  if (state.save.darkMode) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
  soundEngine.setThemeMusicConfig(state.save.themeMatchedMusic, state.save.activeThemeId);
}

function startLevelBoard(spec, rotateIfEnabled = false, initialHintMessage = null) {
  state.boardGeneration += 1;
  clearPendingAdvanceTimer();
  clearPendingPackTimer();
  clearSavedBoard();
  if (
    rotateIfEnabled &&
    state.save.rotateThemes &&
    state.save.unlockedThemes.length > 1
  ) {
    const curIdx = state.save.unlockedThemes.indexOf(state.save.activeThemeId);
    state.save.activeThemeId =
      state.save.unlockedThemes[(curIdx + 1) % state.save.unlockedThemes.length];
    persistSave();
  }
  state.shelves = generateLevelBoard(spec);
  state.undoStack = [];
  state.selectedItem = null;
  state.packingState = null;
  state.advancedShelfIds = [];
  state.highlightedUids = [];
  state.hintTargetShelfId = null;
  state.hintMessage = initialHintMessage;
  state.celebrationData = null;
  state.activeModal = null;
  state.isAnimating = false;
  persistBoardState();
  applyThemeCssVariables();
  renderApp();
}

function checkAndTriggerVictory() {
  if (countRemainingItems(state.shelves) === 0) {
    clearSavedBoard();
    soundEngine.playLevelComplete();
    const spec = getActiveLevelSpec();
    const alreadyDone =
      !state.isRelaxMode && state.save.completedLevels.includes(spec.levelNumber);
    const earnedStars = alreadyDone ? 0 : spec.starReward;
    const earnedPoints = alreadyDone ? 4 : spec.completionPoints;

    if (!state.isRelaxMode && !alreadyDone) {
      state.save.completedLevels.push(spec.levelNumber);
    }
    if (!state.isRelaxMode) {
      state.save.highestUnlockedLevel = Math.min(
        LEVEL_SPECS.length,
        Math.max(state.save.highestUnlockedLevel, spec.levelNumber + 1)
      );
    }
    state.save.stars += earnedStars;
    state.save.points += earnedPoints;
    persistSave();

    const victoryLabel = state.isRelaxMode
      ? spec.title
      : `Level ${spec.levelNumber}`;
    state.catIsHappy = true;
    state.catSpeech = `Mrrrow! ${victoryLabel} complete! You earned +${earnedPoints} pts!`;
    state.celebrationData = { earnedStars, earnedPoints };
    state.activeModal = 'celebration';
    renderApp();
  }
}

function performMove(fromShelfId, fromSlotIdx, toShelfId, toSlotIdx) {
  if (state.isAnimating) return false;
  if (fromShelfId === toShelfId && fromSlotIdx === toSlotIdx) return false;

  const sourceShelf = state.shelves.find((s) => s.id === fromShelfId);
  const targetShelf = state.shelves.find((s) => s.id === toShelfId);
  if (!sourceShelf || !targetShelf) return false;

  const movingItem = sourceShelf.layers[0][fromSlotIdx];
  if (!movingItem) return false;

  let finalTargetSlot = toSlotIdx;
  if (targetShelf.layers[0][finalTargetSlot] !== null) {
    finalTargetSlot = targetShelf.layers[0].findIndex((s) => s === null);
  }
  if (finalTargetSlot === -1) return false;

  state.undoStack.push(cloneShelves(state.shelves));
  if (state.undoStack.length > 25) state.undoStack.shift();

  sourceShelf.layers[0][fromSlotIdx] = null;
  targetShelf.layers[0][finalTargetSlot] = movingItem;

  state.selectedItem = null;
  state.highlightedUids = [];
  state.hintTargetShelfId = null;
  state.hintMessage = null;

  soundEngine.playPlace();

  const targetFront = targetShelf.layers[0];
  const isTripleMatch =
    targetFront[0] !== null &&
    targetFront[1] !== null &&
    targetFront[2] !== null &&
    targetFront[0].itemType === targetFront[1].itemType &&
    targetFront[1].itemType === targetFront[2].itemType;

  const moveGen = state.boardGeneration;

  const { updatedShelves: afterSourceAdvance, advancedShelfIds: sourceAdv } =
    normalizeShelfLayers(state.shelves);
  state.shelves = afterSourceAdvance;

  if (sourceAdv.length > 0) {
    soundEngine.playSlideForward();
    state.advancedShelfIds = sourceAdv;
    scheduleAdvanceClear(moveGen);
  } else {
    clearPendingAdvanceTimer();
    state.advancedShelfIds = [];
  }

  if (isTripleMatch) {
    const matchedType = targetFront[0].itemType;
    const theme = getThemeById(state.save.activeThemeId);
    const matchedItemName = theme.items[matchedType % theme.items.length].name;
    recordPackedTrio(matchedType);
    state.isAnimating = true;
    state.packingState = { shelfId: toShelfId, itemType: matchedType };
    state.catIsHappy = true;
    state.catSpeech = `Purr-fect! Packed 3 ${matchedItemName}s into a ${theme.containerName}!`;
    soundEngine.playPackMatch();
    persistSave();
    renderApp();

    clearPendingPackTimer();
    state.packTimer = setTimeout(() => {
      state.packTimer = null;
      if (state.boardGeneration !== moveGen) return;
      const targetAfter = state.shelves.find((s) => s.id === toShelfId);
      if (targetAfter) {
        targetAfter.layers[0] = [null, null, null];
      }
      const { updatedShelves: finalBoard, advancedShelfIds: targetAdv } =
        normalizeShelfLayers(state.shelves);
      state.shelves = finalBoard;
      state.packingState = null;
      state.isAnimating = false;
      state.catIsHappy = false;

      if (targetAdv.length > 0) {
        soundEngine.playSlideForward();
        state.advancedShelfIds = Array.from(
          new Set([...state.advancedShelfIds, ...targetAdv])
        );
        scheduleAdvanceClear(moveGen);
      } else {
        clearPendingAdvanceTimer();
        state.advancedShelfIds = [];
      }

      if (countRemainingItems(state.shelves) > 0) {
        persistBoardState();
      }
      renderApp();
      checkAndTriggerVictory();
    }, 580);
  } else {
    persistBoardState();
    renderApp();
  }
  return true;
}

/**
 * UI Rendering
 */
function renderApp() {
  const appEl = document.getElementById('app');
  if (!appEl) return;

  // Preserve scroll positions across full re-renders (e.g., clicking inside Shop / Level Map)
  const prevBoardScroll = appEl.querySelector('.board-scroll');
  const prevBoardScrollTop = prevBoardScroll ? prevBoardScroll.scrollTop : 0;
  const prevModalBody = appEl.querySelector('.modal-body, .modal-card.narrow');
  const prevModalScrollTop = prevModalBody ? prevModalBody.scrollTop : 0;
  const prevModalType = appEl.getAttribute('data-active-modal') || '';
  const prevModalSubkey = appEl.getAttribute('data-modal-subkey') || '';

  const theme = getThemeById(state.save.activeThemeId);
  const spec = getActiveLevelSpec();
  const remainingItems = countRemainingItems(state.shelves);
  const remainingTriples = Math.ceil(remainingItems / 3);
  const deadlocked =
    !state.isAnimating &&
    state.activeModal === null &&
    isBoardDeadlocked(state.shelves);

  const numCols = state.shelves.length <= 9 ? 3 : 4;
  const gridColsClass = numCols === 3 ? 'cols-3' : 'cols-4';
  const numRows = Math.ceil(state.shelves.length / numCols);
  const gridRowsClass = numRows <= 2 ? 'rows-2' : numRows === 3 ? 'rows-3' : 'rows-4';

  const shelvesHtml = state.shelves
    .map((shelf) => {
      const frontRow = shelf.layers[0];
      const secondRow = shelf.layers.length > 1 ? shelf.layers[1] : null;
      const backRowsRemaining = Math.max(0, shelf.layers.length - 1);
      const isPacking = state.packingState && state.packingState.shelfId === shelf.id;
      const isHintTarget = state.hintTargetShelfId === shelf.id;
      const hasOpenSlot = frontRow.some((s) => s === null);
      const canReceive =
        state.selectedItem &&
        state.selectedItem.shelfId !== shelf.id &&
        hasOpenSlot;
      const isAdvanced = state.advancedShelfIds.includes(shelf.id);

      const slotsHtml = [0, 1, 2]
        .map((slotIdx) => {
          const frontItem = frontRow[slotIdx];
          const backItem = secondRow ? secondRow[slotIdx] : null;
          const isSelected =
            state.selectedItem &&
            state.selectedItem.shelfId === shelf.id &&
            state.selectedItem.slotIdx === slotIdx;
          const isSpotlight =
            frontItem && state.highlightedUids.includes(frontItem.uid);

          const backHtml = backItem
            ? `<div class="back-item-wrap">${renderGroceryItemSvg(
                theme.items[backItem.itemType % theme.items.length],
                true
              )}</div>`
            : '';

          const placeholderHtml =
            !frontItem && state.selectedItem
              ? `<div class="place-placeholder">Place</div>`
              : '';

          const frontHtml = frontItem
            ? `<div class="front-item-wrap ${isSelected ? 'selected' : ''} ${
                isSpotlight ? 'spotlight' : ''
              } ${isPacking ? `anim-pack-${slotIdx}` : isAdvanced ? 'anim-slide-forward' : ''}"
                data-drag-shelf="${shelf.id}"
                data-drag-slot="${slotIdx}"
              >${renderGroceryItemSvg(
                theme.items[frontItem.itemType % theme.items.length],
                false
              )}</div>`
            : '';

          return `
            <div class="shelf-slot" data-shelf-id="${shelf.id}" data-slot-idx="${slotIdx}">
              ${backHtml}
              ${placeholderHtml}
              ${frontHtml}
            </div>
          `;
        })
        .join('');

      const packingOverlayHtml = isPacking
        ? `<div class="packing-basket-back" aria-hidden="true">
            <svg viewBox="0 0 120 78" width="112" height="76">
              <path d="M 24 34 C 24 5, 96 5, 96 34" fill="none" stroke="#92400e" stroke-width="6.5" stroke-linecap="round" />
              <path d="M 24 34 C 24 5, 96 5, 96 34" fill="none" stroke="#f59e0b" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="6 4" />
              <ellipse cx="60" cy="35" rx="44" ry="11" fill="#451a03" stroke="#b45309" stroke-width="3" />
            </svg>
          </div>
          <div class="packing-basket-front" aria-hidden="true">
            <svg viewBox="0 0 120 78" width="112" height="76">
              <path d="M 18 35 Q 34 45 48 37 Q 62 45 76 37 Q 90 45 102 35 L 99 45 Q 60 52 21 45 Z" fill="var(--container-secondary)" />
              <path d="M 16 35 Q 60 44 104 35 L 95 70 Q 60 76 25 70 Z" fill="#d97706" stroke="#78350f" stroke-width="2.5" stroke-linejoin="round" />
              <path d="M 19 47 Q 60 55 101 47" fill="none" stroke="var(--container-primary)" stroke-width="6" />
              <path d="M 22 59 Q 60 66 98 59" fill="none" stroke="#b45309" stroke-width="2.5" />
              <path d="M 38 38 L 41 72 M 60 40 L 60 73 M 82 38 L 79 72" stroke="#92400e" stroke-width="2" opacity="0.7" />
              <path d="M 14 34 Q 60 44 106 34" fill="none" stroke="#f59e0b" stroke-width="5" stroke-linecap="round" />
              <path d="M 16 33 Q 60 43 104 33" fill="none" stroke="#fde68a" stroke-width="1.6" stroke-linecap="round" stroke-dasharray="5 5" />
            </svg>
          </div>
          <div class="packing-sparkle-tag">✨ Packed Trio!</div>`
        : '';

      return `
        <div class="shelf-unit ${canReceive ? 'can-receive' : ''} ${
        isHintTarget ? 'hint-target' : ''
      }" data-shelf-box="${shelf.id}">
          <div class="shelf-top-trim"></div>
          ${
            backRowsRemaining > 0
              ? `<div class="depth-badge" title="${backRowsRemaining} back row(s) waiting">+${backRowsRemaining} deep</div>`
              : ''
          }
          <div class="shelf-cubby">
            ${slotsHtml}
            ${packingOverlayHtml}
          </div>
          <div class="shelf-plank-top"></div>
          <div class="shelf-plank-front">
            <span class="price-tag"></span>
            <span class="price-tag"></span>
            <span class="price-tag"></span>
          </div>
        </div>
      `;
    })
    .join('');

  const hatObj = CAT_OUTFITS.find((o) => o.id === state.save.equippedHatId);
  const clothObj = CAT_OUTFITS.find((o) => o.id === state.save.equippedClothingId);
  const toyObj = CAT_PERCH_TOYS.find((t) => t.id === state.save.equippedToyId) || CAT_PERCH_TOYS[0];
  const outfitSummary =
    hatObj && clothObj && hatObj.id === clothObj.id
      ? hatObj.name
      : `${hatObj ? hatObj.hatName : 'No Hat'} + ${clothObj ? clothObj.clothingName : 'Cozy Fur'}`;

  const petsCount = state.save.catPetsCount || 0;
  const petHeartIcon = getPetTierHeartIcon(petsCount);
  const catPerchHtml = `
    <div class="cat-perch-bar">
      <div class="cat-perch-left">
        <button class="cat-avatar-btn ${state.catIsHappy ? 'pet-bounce' : ''} ${
    petsCount >= 10000 ? 'pet-legend' : ''
  }" id="btn-pet-cat" title="Tap to pet ${escapeHtml(state.save.catName)}!">
          ${renderShopCatSvg(
            state.save.catCoatId,
            state.save.equippedHatId,
            state.save.equippedClothingId,
            state.catIsHappy
          )}
          ${state.catIsHappy ? `<span class="cat-heart-float">${petHeartIcon}</span>` : ''}
        </button>
        <button class="cat-toy-btn ${state.toyIsPlaying ? 'toy-bounce' : ''}" id="btn-play-toy" title="Tap to play with ${escapeHtml(toyObj.name)}!">
          <div style="width:44px;height:44px;">
            ${renderCatToySvg(toyObj.id, state.toyIsPlaying)}
          </div>
          ${state.toyIsPlaying ? `<span class="cat-heart-float">${toyObj.sparkleEmoji}</span>` : ''}
        </button>
        <div class="cat-speech-bubble">
          <div style="display:flex;align-items:center;gap:6px;margin-bottom:2px;flex-wrap:wrap;">
            <span style="font-weight:900;color:#d97706;">🐾 ${escapeHtml(state.save.catName)}</span>
            <span style="font-size:10.5px;padding:1px 7px;border-radius:999px;background:rgba(245,158,11,0.16);color:#b45309;font-weight:800;">
              👗 ${escapeHtml(outfitSummary)}
            </span>
            <span style="font-size:10.5px;padding:1px 7px;border-radius:999px;background:rgba(236,72,153,0.14);color:#be185d;font-weight:800;">
              ${toyObj.sparkleEmoji} ${escapeHtml(toyObj.name)}
            </span>
            <span style="font-size:10.5px;opacity:0.75;">${petHeartIcon} ${petsCount.toLocaleString()} pets</span>
          </div>
          <div>${escapeHtml(state.catSpeech)}</div>
        </div>
      </div>
    </div>
  `;

  const hintToastHtml = state.hintMessage
    ? `<div class="hint-toast">💡 ${state.hintMessage}</div>`
    : '';

  appEl.innerHTML = `
    <div class="awning-stripes"></div>
    <header class="header-bar">
      <div class="header-left">
        <button class="btn btn-level" id="btn-open-levels" title="Open Level Map & Relax Mode">
          ${getLevelModeIcon(spec, state.isRelaxMode)} ${state.isRelaxMode ? 'Relax Mode' : `Level ${spec.levelNumber}`}
        </button>
        <div class="title-group">
          <h1>${escapeHtml(state.save.marketTitle)}</h1>
          <p>${spec.tierName} • ${spec.title} • ${remainingTriples} ${
    remainingTriples === 1 ? 'trio' : 'trios'
  } left</p>
        </div>
      </div>

      <div class="header-right">
        <button class="btn pill pill-theme" id="btn-open-themes" title="Switch or Unlock Store Themes">
          <span style="font-size:17px;">${theme.flagEmoji}</span>
          <span>${theme.shortName}</span>
        </button>
        <button class="btn pill pill-cat" id="btn-header-cat-shop" title="Open Cat Closet, Perch Toys &amp; Sticker Book">
          🐾 <span>${escapeHtml(state.save.catName)}</span>
        </button>
        <button class="btn pill pill-stars" id="btn-open-themes-stars" title="Theme Stars (Unlock new stores!)">
          ⭐ <span>${state.save.stars}</span>
        </button>
        <div class="pill pill-points" title="Market Points (Use for Cat Outfits, Hints & Shuffles)">
          🪙 <span>${state.save.points}</span>
        </div>
        <button class="btn icon-btn ${state.save.sfxEnabled ? 'active' : ''}" id="btn-toggle-sfx" title="Toggle Sound Effects">
          ${state.save.sfxEnabled ? '🔊' : '🔇'}
        </button>
        <button class="btn icon-btn ${state.save.musicEnabled ? 'active' : ''}" id="btn-toggle-music" title="Toggle Cozy Ambient Chimes">
          🎵
        </button>
        <button class="btn icon-btn" id="btn-open-settings" title="Personalize Market Name & Guide">
          ⚙️
        </button>
      </div>
    </header>

    <main class="board-scroll">
      ${catPerchHtml}
      <div class="board-main-stage">
        ${
          !state.isRelaxMode &&
          state.save.currentLevelNumber === 1 &&
          state.undoStack.length === 0
            ? `<div class="welcome-banner">✨ ${escapeHtml(
                PERSONALIZATION.welcomeSubtitle
              )} Match <strong>3 identical items</strong> on any shelf to pack them away!</div>`
            : ''
        }
        <div class="shelf-grid ${gridColsClass} ${gridRowsClass}">
          ${shelvesHtml}
        </div>
      </div>
    </main>

    <footer class="footer-toolbar">
      ${hintToastHtml}
      <div class="toolbar-grid">
        <button class="btn tool-btn" id="btn-undo" ${
          state.undoStack.length === 0 ? 'disabled' : ''
        }>
          <span class="icon">↩️</span>
          <span class="label">Undo</span>
          <span class="cost">Free</span>
        </button>
        <button class="btn tool-btn amber" id="btn-hint" ${
          state.save.points < HINT_COSTS.SPOTLIGHT ? 'disabled' : ''
        }>
          <span class="icon">💡</span>
          <span class="label">Hint</span>
          <span class="cost">🪙 ${HINT_COSTS.SPOTLIGHT}</span>
        </button>
        <button class="btn tool-btn emerald" id="btn-autopack" ${
          state.save.points < HINT_COSTS.AUTO_PACK ? 'disabled' : ''
        }>
          <span class="icon">🪄</span>
          <span class="label">Auto-Pack</span>
          <span class="cost">🪙 ${HINT_COSTS.AUTO_PACK}</span>
        </button>
        <button class="btn tool-btn sky" id="btn-shuffle" ${
          state.save.points < HINT_COSTS.SHUFFLE ? 'disabled' : ''
        }>
          <span class="icon">🔀</span>
          <span class="label">Shuffle</span>
          <span class="cost">🪙 ${HINT_COSTS.SHUFFLE}</span>
        </button>
        <button class="btn tool-btn" id="btn-restart">
          <span class="icon">🔄</span>
          <span class="label">Restart</span>
          <span class="cost">Free</span>
        </button>
      </div>
    </footer>

    ${renderModalHtml(theme, spec, deadlocked)}
  `;

  const nextModalType = deadlocked ? 'deadlock' : state.activeModal || '';
  const nextModalSubkey =
    nextModalType === 'themes'
      ? `${state.shopTab}:${state.catalogFilterThemeId || 'all'}`
      : nextModalType;
  appEl.setAttribute('data-active-modal', nextModalType);
  appEl.setAttribute('data-modal-subkey', nextModalSubkey);
  const nextBoardScroll = appEl.querySelector('.board-scroll');
  if (nextBoardScroll && prevBoardScrollTop > 0) {
    nextBoardScroll.scrollTop = prevBoardScrollTop;
  }
  const nextModalBody = appEl.querySelector('.modal-body, .modal-card.narrow');
  if (nextModalBody && nextModalType === 'levels' && prevModalType !== 'levels') {
    const currentCell =
      nextModalBody.querySelector('.level-cell.current') ||
      nextModalBody.querySelector(`[data-pick-level="${state.save.currentLevelNumber}"]`);
    if (currentCell) {
      const bodyRect = nextModalBody.getBoundingClientRect();
      const cellRect = currentCell.getBoundingClientRect();
      nextModalBody.scrollTop = Math.max(
        0,
        nextModalBody.scrollTop +
          (cellRect.top - bodyRect.top) -
          bodyRect.height / 2 +
          cellRect.height / 2
      );
    }
  } else if (
    nextModalBody &&
    prevModalScrollTop > 0 &&
    nextModalType === prevModalType &&
    nextModalSubkey === prevModalSubkey
  ) {
    nextModalBody.scrollTop = prevModalScrollTop;
  }

  bindAppEvents();
}

function renderModalHtml(theme, spec, deadlocked) {
  if (deadlocked) {
    return `
      <div class="modal-backdrop">
        <div class="modal-card narrow" style="text-align:center;">
          <div style="font-size:44px;margin-bottom:8px;">🛒</div>
          <h2 style="font-size:22px;font-weight:900;margin-bottom:6px;">Shelves Are Full!</h2>
          <p class="muted-copy" style="font-size:13px;color:#57534e;margin-bottom:18px;">
            All front shelf slots are currently occupied with no matching trios. How would you like to continue?
          </p>
          <div style="display:flex;flex-direction:column;gap:10px;">
            ${
              state.undoStack.length > 0
                ? `<button class="btn" id="modal-undo" style="padding:12px;background:#f59e0b;color:#fff;font-size:14px;">↩️ Undo Last Move (Free)</button>`
                : ''
            }
            <button class="btn" id="modal-shuffle" ${
              state.save.points < HINT_COSTS.SHUFFLE ? 'disabled' : ''
            } style="padding:12px;background:#e0f2fe;color:#075985;border:1.5px solid #7dd3fc;font-size:14px;">
              🔀 Shuffle Remaining Items (${HINT_COSTS.SHUFFLE} pts)
            </button>
            <button class="btn" id="modal-autopack" ${
              state.save.points < HINT_COSTS.AUTO_PACK ? 'disabled' : ''
            } style="padding:12px;background:#ecfdf5;color:#065f46;border:1.5px solid #6ee7b7;font-size:14px;">
              🪄 Auto-Pack Matching Trio (${HINT_COSTS.AUTO_PACK} pts)
            </button>
            <button class="btn" id="modal-restart" style="padding:12px;background:#f5f5f4;color:#44403c;font-size:14px;">
              🔄 Restart This Level Fresh (Free)
            </button>
          </div>
        </div>
      </div>
    `;
  }

  if (state.activeModal === 'celebration' && state.celebrationData) {
    const canUnlockNew = STORE_THEMES.some(
      (t) =>
        !state.save.unlockedThemes.includes(t.id) &&
        state.save.stars >= t.unlockStars
    );
    const isFinale = !state.isRelaxMode && spec.levelNumber === LEVEL_SPECS.length;

    return `
      <div class="modal-backdrop">
        <div class="modal-card narrow" style="text-align:center;">
          <div style="width:88px;height:88px;margin:0 auto 8px auto;">
            ${renderShopCatSvg(
              state.save.catCoatId,
              state.save.equippedHatId,
              state.save.equippedClothingId,
              true
            )}
          </div>
          <div style="display:inline-block;padding:4px 12px;border-radius:999px;background:#ecfdf5;color:#065f46;font-size:12px;font-weight:800;margin-bottom:8px;">
            ✨ ${state.isRelaxMode ? 'Relax Puzzle Complete!' : `Level ${spec.levelNumber} Complete!`}
          </div>
          <h2 style="font-size:24px;font-weight:900;margin-bottom:6px;">
            ${isFinale ? 'Grand Market Master!' : spec.title}
          </h2>
          <p class="muted-copy" style="font-size:13px;color:#57534e;margin-bottom:18px;">
            ${
              isFinale
                ? PERSONALIZATION.grandFinaleMessage
                : `Every shelf in the ${theme.name} is neatly packed and stocked!`
            }
          </p>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:18px;">
            <div style="padding:12px;border-radius:16px;background:#fefce8;border:1.5px solid #fde047;">
              <div style="font-size:20px;font-weight:900;color:#a16207;">⭐ +${state.celebrationData.earnedStars}</div>
              <div style="font-size:11px;font-weight:800;color:#854d0e;">Theme Stars</div>
            </div>
            <div style="padding:12px;border-radius:16px;background:#ecfdf5;border:1.5px solid #6ee7b7;">
              <div style="font-size:20px;font-weight:900;color:#047857;">🪙 +${state.celebrationData.earnedPoints}</div>
              <div style="font-size:11px;font-weight:800;color:#065f46;">Market Points</div>
            </div>
          </div>
          ${
            canUnlockNew
              ? `<button class="btn" id="celeb-open-themes" style="width:100%;padding:12px;margin-bottom:10px;background:#facc15;color:#1c1917;font-size:13.5px;">
                  🌍 New International Market Ready to Unlock!
                </button>`
              : ''
          }
          <button class="btn" id="celeb-open-cat-shop" style="width:100%;padding:11px;margin-bottom:10px;background:#fdf2f8;border:1.5px solid #f472b6;color:#9d174d;font-size:13px;">
            👗 Visit ${escapeHtml(state.save.catName)}'s Cat Boutique (${state.save.points} 🪙)
          </button>
          <button class="btn" id="celeb-next-level" style="width:100%;padding:14px;background:${theme.palette.awningPrimary};color:#fff;font-size:15px;">
            ${
              state.isRelaxMode
                ? 'Next Relax Puzzle ➡️'
                : spec.levelNumber < LEVEL_SPECS.length
                ? `Continue to Level ${spec.levelNumber + 1} ➡️`
                : 'Enter Endless Relax Mode ➡️'
            }
          </button>
        </div>
      </div>
    `;
  }

  if (state.activeModal === 'themes') {
    const isCatTab = state.shopTab === 'cat';
    const isToysTab = state.shopTab === 'toys';
    const isCatalogTab = state.shopTab === 'catalog';
    const isMarketsTab = !isCatTab && !isToysTab && !isCatalogTab;

    const countsMap = state.save.packedTrioCounts || {};
    let collectedStickerCount = 0;
    let totalTriosPacked = 0;
    STORE_THEMES.forEach((t) => {
      t.items.forEach((it) => {
        const cnt = countsMap[it.id] || 0;
        if (cnt > 0) collectedStickerCount++;
        totalTriosPacked += cnt;
      });
    });

    // Tab 1: International Store Themes
    const marketCardsHtml = STORE_THEMES.map((t) => {
      const unlocked = state.save.unlockedThemes.includes(t.id);
      const active = state.save.activeThemeId === t.id;
      const canAfford = state.save.stars >= t.unlockStars;

      const previewHtml = t.items
        .slice(0, 4)
        .map(
          (item) =>
            `<div style="height:56px;display:flex;align-items:flex-end;justify-content:center;">${renderGroceryItemSvg(
              item,
              !unlocked
            )}</div>`
        )
        .join('');

      return `
        <div class="theme-card ${active ? 'active' : ''}">
          <div>
            <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:6px;">
              <div style="display:flex;align-items:center;gap:8px;">
                <span style="font-size:28px;">${t.flagEmoji}</span>
                <div>
                  <div style="font-weight:900;font-size:15px;">${t.name}</div>
                  <div style="font-size:11.5px;color:#78716c;">${t.subtitle}</div>
                </div>
              </div>
              ${
                active
                  ? `<span style="padding:3px 9px;border-radius:999px;background:#d1fae5;color:#065f46;font-size:11px;font-weight:800;">✓ Active</span>`
                  : ''
              }
            </div>
            <div style="margin:10px 0;padding:10px;border-radius:14px;background:${t.palette.shelfBackboard};border:2px solid ${t.palette.shelfWoodFront};display:grid;grid-template-columns:repeat(4,1fr);gap:6px;">
              ${previewHtml}
            </div>
            <div class="muted-copy" style="font-size:11px;color:#57534e;margin-bottom:10px;">
              Packing Container: <strong>${t.containerName}</strong>
            </div>
          </div>
          ${
            unlocked
              ? `<button class="btn" data-select-theme="${t.id}" style="width:100%;padding:10px;background:${
                  active ? '#059669' : '#f59e0b'
                };color:#fff;font-size:13px;">
                  ${active ? 'Currently Active Market' : `Switch to ${t.shortName}`}
                </button>`
              : `<button class="btn" data-unlock-theme="${t.id}" ${
                  !canAfford ? 'disabled' : ''
                } style="width:100%;padding:10px;background:${
                  canAfford ? '#facc15' : '#e7e5e4'
                };color:${canAfford ? '#1c1917' : '#78716c'};font-size:13px;">
                  ${
                    canAfford
                      ? `✨ Unlock Market (${t.unlockStars} ⭐)`
                      : `🔒 Requires ${t.unlockStars} ⭐ (Need ${
                          t.unlockStars - state.save.stars
                        } more)`
                  }
                </button>`
          }
        </div>
      `;
    }).join('');

    // Tab 2: Shop Cat Boutique (16 Complete Outfits + Secret Pet Milestone Rewards)
    const petsTotal = state.save.catPetsCount || 0;
    const visibleCoats = CAT_COATS.filter((c) => isPetUnlockedItem(c, petsTotal));
    const selectedCoat =
      visibleCoats.find((c) => c.id === state.save.catCoatId) || visibleCoats[0];
    const coatOptionsHtml = visibleCoats.map((c) => {
      const isSelected = selectedCoat.id === c.id;
      return `<option value="${c.id}" ${isSelected ? 'selected' : ''}>${escapeHtml(c.name)}</option>`;
    }).join('');

    const visibleOutfits = CAT_OUTFITS.filter(
      (outfit) =>
        isPetUnlockedItem(outfit, petsTotal) || state.save.unlockedCatOutfits.includes(outfit.id)
    );
    const catOutfitCardsHtml = visibleOutfits.map((outfit) => {
      const unlocked = state.save.unlockedCatOutfits.includes(outfit.id);
      const isHatEquipped = state.save.equippedHatId === outfit.id;
      const isClothEquipped = state.save.equippedClothingId === outfit.id;
      const isFullEquipped = isHatEquipped && isClothEquipped;
      const canAfford = state.save.points >= outfit.costPoints;

      return `
        <div class="theme-card ${isFullEquipped ? 'active' : ''}">
          <div>
            <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:8px;">
              <div>
                <div style="font-weight:900;font-size:15px;">${outfit.name}</div>
                <div style="font-size:11px;color:#78716c;">${outfit.subtitle}</div>
              </div>
              ${
                isFullEquipped
                  ? `<span style="padding:3px 9px;border-radius:999px;background:#d1fae5;color:#065f46;font-size:10.5px;font-weight:800;flex-shrink:0;">✓ Full Set</span>`
                  : isHatEquipped || isClothEquipped
                  ? `<span style="padding:3px 9px;border-radius:999px;background:#fef3c7;color:#92400e;font-size:10.5px;font-weight:800;flex-shrink:0;">✓ Mixed</span>`
                  : outfit.unlockPets
                  ? `<span style="padding:3px 9px;border-radius:999px;background:#fce7f3;color:#be185d;font-size:10.5px;font-weight:800;flex-shrink:0;">💖 Secret</span>`
                  : ''
              }
            </div>

            <div class="cat-preview-box" style="display:flex;align-items:center;gap:12px;margin:8px 0;padding:10px;border-radius:16px;background:rgba(254,243,199,0.45);border:1.5px solid #fde68a;">
              <div style="width:74px;height:74px;flex-shrink:0;">
                ${renderShopCatSvg(state.save.catCoatId, outfit.id, outfit.id, unlocked)}
              </div>
              <div style="font-size:11.5px;line-height:1.45;">
                <div>🧢 <strong>Hat:</strong> ${outfit.hatName}</div>
                <div>👕 <strong>Clothing:</strong> ${outfit.clothingName}</div>
              </div>
            </div>
          </div>

          ${
            unlocked
              ? `
                <div style="display:flex;flex-direction:column;gap:6px;">
                  <button class="btn" data-equip-full="${outfit.id}" style="width:100%;padding:8px;background:${
                  isFullEquipped ? '#059669' : '#f59e0b'
                };color:#fff;font-size:12.5px;">
                    ${isFullEquipped ? '✓ Wearing Full Outfit' : '✨ Wear Full Outfit'}
                  </button>
                  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
                    <button class="btn" data-equip-hat="${outfit.id}" style="padding:6px;font-size:11px;background:${
                  isHatEquipped ? '#dbeafe' : '#f5f5f4'
                };color:${isHatEquipped ? '#1e40af' : '#44403c'};border:1.5px solid ${
                  isHatEquipped ? '#60a5fa' : '#d6d3d1'
                };">
                      🧢 ${isHatEquipped ? 'Hat On ✓' : 'Hat Only'}
                    </button>
                    <button class="btn" data-equip-cloth="${outfit.id}" style="padding:6px;font-size:11px;background:${
                  isClothEquipped ? '#fce7f3' : '#f5f5f4'
                };color:${isClothEquipped ? '#9d174d' : '#44403c'};border:1.5px solid ${
                  isClothEquipped ? '#f472b6' : '#d6d3d1'
                };">
                      👕 ${isClothEquipped ? 'Top On ✓' : 'Top Only'}
                    </button>
                  </div>
                </div>
              `
              : `
                <button class="btn" data-unlock-cat-outfit="${outfit.id}" ${
                  !canAfford ? 'disabled' : ''
                } style="width:100%;padding:10px;background:${
                  canAfford ? '#10b981' : '#e7e5e4'
                };color:${canAfford ? '#ffffff' : '#78716c'};font-size:13px;">
                  ${
                    canAfford
                      ? `🔓 Unlock Outfit (🪙 ${outfit.costPoints})`
                      : `🔒 ${outfit.costPoints} 🪙 (Need ${
                          outfit.costPoints - state.save.points
                        } more)`
                  }
                </button>
              `
          }
        </div>
      `;
    }).join('');

    // Tab 3: Cat Perch Toys & Countertop Accessories (8 Interactive Toys + Secret Milestone Toy)
    const visibleToys = CAT_PERCH_TOYS.filter(
      (toy) =>
        isPetUnlockedItem(toy, petsTotal) || (state.save.unlockedCatToys || ['yarn']).includes(toy.id)
    );
    const catToyCardsHtml = visibleToys.map((toy) => {
      const unlocked = (state.save.unlockedCatToys || ['yarn']).includes(toy.id);
      const isEquipped = state.save.equippedToyId === toy.id;
      const canAfford = state.save.points >= toy.costPoints;

      return `
        <div class="theme-card ${isEquipped ? 'active' : ''}">
          <div>
            <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:8px;">
              <div>
                <div style="font-weight:900;font-size:15px;">${toy.sparkleEmoji} ${toy.name}</div>
                <div style="font-size:11px;color:#78716c;">${toy.subtitle}</div>
              </div>
              ${
                isEquipped
                  ? `<span style="padding:3px 9px;border-radius:999px;background:#d1fae5;color:#065f46;font-size:10.5px;font-weight:800;flex-shrink:0;">✓ On Perch</span>`
                  : toy.unlockPets
                  ? `<span style="padding:3px 9px;border-radius:999px;background:#fce7f3;color:#be185d;font-size:10.5px;font-weight:800;flex-shrink:0;">💖 Secret</span>`
                  : ''
              }
            </div>

            <div class="toy-preview-box" style="display:flex;align-items:center;gap:12px;margin:8px 0;padding:10px;border-radius:16px;background:rgba(253,242,248,0.6);border:1.5px solid #fbcfe8;">
              <div style="width:68px;height:68px;flex-shrink:0;">
                ${renderCatToySvg(toy.id, isEquipped)}
              </div>
              <div class="muted-copy" style="font-size:11.5px;line-height:1.45;color:#57534e;">
                <strong>Tap Reaction:</strong> ${escapeHtml(state.save.catName)} ${toy.reaction}
              </div>
            </div>
          </div>

          ${
            unlocked
              ? `
                <button class="btn" data-equip-toy="${toy.id}" style="width:100%;padding:9px;background:${
                  isEquipped ? '#059669' : '#ec4899'
                };color:#fff;font-size:12.5px;">
                  ${isEquipped ? '✓ Placed on Counter Perch' : `${toy.sparkleEmoji} Place on Counter Perch`}
                </button>
              `
              : `
                <button class="btn" data-unlock-cat-toy="${toy.id}" ${
                  !canAfford ? 'disabled' : ''
                } style="width:100%;padding:10px;background:${
                  canAfford ? '#10b981' : '#e7e5e4'
                };color:${canAfford ? '#ffffff' : '#78716c'};font-size:13px;">
                  ${
                    canAfford
                      ? `🔓 Unlock Perch Toy (🪙 ${toy.costPoints})`
                      : `🔒 ${toy.costPoints} 🪙 (Need ${
                          toy.costPoints - state.save.points
                        } more)`
                  }
                </button>
              `
          }
        </div>
      `;
    }).join('');

    // Tab 4: Pantry Sticker Book & Item Catalog (84 Items + Trio Counts)
    const activeFilter = state.catalogFilterThemeId || 'all';
    const filterPillsHtml = [
      `<button class="btn tier-jump-pill ${activeFilter === 'all' ? 'active' : ''}" data-catalog-filter="all">🌟 All 7 Markets (84)</button>`,
      ...STORE_THEMES.map((t) => {
        const themeCollected = t.items.filter((it) => (countsMap[it.id] || 0) > 0).length;
        return `<button class="btn tier-jump-pill ${activeFilter === t.id ? 'active' : ''}" data-catalog-filter="${t.id}">${t.flagEmoji} ${t.shortName} (${themeCollected}/12)</button>`;
      }),
    ].join('');

    const filteredThemes =
      activeFilter === 'all'
        ? STORE_THEMES
        : STORE_THEMES.filter((t) => t.id === activeFilter);

    const catalogSectionsHtml = filteredThemes
      .map((t) => {
        const themeUnlocked = state.save.unlockedThemes.includes(t.id);
        const cardsHtml = t.items
          .map((item) => {
            const packedCount = countsMap[item.id] || 0;
            const isCollected = packedCount > 0;
            const showSilhouette = !themeUnlocked && !isCollected;
            return `
              <div class="catalog-card ${isCollected ? 'collected' : ''}">
                <div style="width:100%;display:flex;align-items:center;justify-content:space-between;font-size:10px;font-weight:800;opacity:0.75;">
                  <span>${t.flagEmoji} ${escapeHtml(item.labelText || '')}</span>
                  <span>${isCollected ? '⭐' : themeUnlocked ? '•' : '🔒'}</span>
                </div>
                <div style="height:64px;width:64px;display:flex;align-items:flex-end;justify-content:center;">
                  ${renderGroceryItemSvg(item, showSilhouette)}
                </div>
                <div style="font-size:12px;font-weight:900;line-height:1.25;">${escapeHtml(item.name)}</div>
                <div class="catalog-badge ${isCollected ? 'collected' : 'uncollected'}" style="font-size:10.5px;font-weight:800;padding:3px 8px;border-radius:999px;background:${
                  isCollected
                    ? '#d1fae5'
                    : themeUnlocked
                    ? 'rgba(120,113,108,0.12)'
                    : 'rgba(120,113,108,0.16)'
                };color:${isCollected ? '#065f46' : '#57534e'};">
                  ${
                    isCollected
                      ? `✨ ${packedCount} ${packedCount === 1 ? 'trio' : 'trios'} packed`
                      : themeUnlocked
                      ? '📦 0 trios yet'
                      : `🔒 ${t.unlockStars} ⭐`
                  }
                </div>
              </div>
            `;
          })
          .join('');

        return `
          <div style="margin-bottom:20px;">
            <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:10px;">
              <div style="font-size:14px;font-weight:900;">${t.flagEmoji} ${t.name}</div>
              <span class="catalog-container-label" style="font-size:11px;font-weight:800;color:#b45309;">📦 ${t.containerName}</span>
            </div>
            <div class="catalog-grid">${cardsHtml}</div>
          </div>
        `;
      })
      .join('');

    return `
      <div class="modal-backdrop" id="modal-backdrop-close">
        <div class="modal-card" onclick="event.stopPropagation()">
          <div class="modal-header">
            <div>
              <h2 style="font-size:18px;font-weight:900;">
                ${
                  isCatalogTab
                    ? '📖 Pantry Sticker Book & Item Catalog'
                    : isToysTab
                    ? `🧸 ${escapeHtml(state.save.catName)}'s Countertop Perch Toys`
                    : isCatTab
                    ? `🐾 ${escapeHtml(state.save.catName)}'s Cat Boutique & Closet`
                    : '🌍 World Market Theme Shop'
                }
              </h2>
              <p class="muted-copy" style="font-size:12px;color:#78716c;">
                ${
                  isCatalogTab
                    ? `${collectedStickerCount} of 84 grocery stickers collected • ${totalTriosPacked} total trios packed across all stores!`
                    : isToysTab
                    ? `Place an interactive toy beside ${escapeHtml(state.save.catName)} on the wooden perch and tap it anytime!`
                    : isCatTab
                    ? `Unlock 16 outfits with Market Points (🪙) and mix & match hats and clothing!`
                    : `Complete levels to earn Stars (⭐) and unlock international grocery themes!`
                }
              </p>
            </div>
            <div style="display:flex;align-items:center;gap:8px;">
              <div class="pill pill-stars">⭐ ${state.save.stars}</div>
              <div class="pill pill-points">🪙 ${state.save.points}</div>
              <button class="btn icon-btn" id="btn-close-modal">✕</button>
            </div>
          </div>

          <!-- Shop Mode Switcher Tabs -->
          <div class="shop-tabs" style="flex-wrap:wrap;">
            <button class="shop-tab-btn ${isMarketsTab ? 'active' : ''}" id="tab-btn-markets">
              🌍 Store Themes (${state.save.unlockedThemes.length}/7)
            </button>
            <button class="shop-tab-btn ${isCatTab ? 'active' : ''}" id="tab-btn-cat">
              👗 Cat Outfits (${state.save.unlockedCatOutfits.length}/${visibleOutfits.length})
            </button>
            <button class="shop-tab-btn ${isToysTab ? 'active' : ''}" id="tab-btn-toys">
              🧸 Perch Toys (${(state.save.unlockedCatToys || ['yarn']).length}/${visibleToys.length})
            </button>
            <button class="shop-tab-btn ${isCatalogTab ? 'active' : ''}" id="tab-btn-catalog">
              📖 Sticker Book (${collectedStickerCount}/84)
            </button>
          </div>

          ${
            isCatalogTab
              ? `
                <div class="tier-jump-bar">
                  ${filterPillsHtml}
                </div>
              `
              : isMarketsTab
              ? `
                <div style="background:#fef3c7;padding:10px 20px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;border-bottom:1px solid #fde68a;">
                  <span style="font-size:12.5px;font-weight:800;color:#78350f;">
                    🔄 Auto-Rotate Unlocked Markets Every Level (World Tour Mode)
                  </span>
                  <button class="btn" id="btn-toggle-rotate" style="padding:6px 12px;font-size:12px;background:${
                    state.save.rotateThemes ? '#059669' : '#ffffff'
                  };color:${
                  state.save.rotateThemes ? '#ffffff' : '#292524'
                };border:1.5px solid #d6d3d1;">
                    ${state.save.rotateThemes ? '✓ Rotation ON' : 'Rotation OFF'}
                  </button>
                </div>
              `
              : `
                <div class="cat-closet-banner" style="padding:12px 20px;background:rgba(253,242,248,0.75);border-bottom:1.5px solid #fbcfe8;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px;">
                  <div style="display:flex;align-items:center;gap:12px;">
                    <div style="width:64px;height:64px;">
                      ${renderShopCatSvg(
                        state.save.catCoatId,
                        state.save.equippedHatId,
                        state.save.equippedClothingId,
                        true
                      )}
                    </div>
                    <div>
                      <form id="form-cat-name" style="display:flex;align-items:center;gap:6px;margin-bottom:4px;">
                        <input
                          type="text"
                          id="input-cat-name"
                          value="${escapeHtml(state.save.catName)}"
                          maxlength="18"
                          style="padding:4px 8px;border-radius:8px;border:1.5px solid #f472b6;font-size:13px;font-weight:900;width:120px;"
                        />
                        <button type="submit" class="btn" id="btn-save-cat-name" style="padding:4px 10px;background:#ec4899;color:#fff;font-size:11.5px;">Rename</button>
                      </form>
                      <div style="display:flex;gap:6px;flex-wrap:wrap;">
                        <button class="btn" id="btn-remove-hat" style="padding:3px 8px;font-size:11px;background:#fff;border:1px solid #d6d3d1;color:#44403c;">
                          🧢 No Hat
                        </button>
                        <button class="btn" id="btn-remove-cloth" style="padding:3px 8px;font-size:11px;background:#fff;border:1px solid #d6d3d1;color:#44403c;">
                          👕 No Clothing
                        </button>
                      </div>
                    </div>
                  </div>
                  <div style="display:flex;flex-direction:column;gap:4px;">
                    <label for="select-cat-coat" class="closet-sub-label" style="font-size:10.5px;font-weight:800;text-transform:uppercase;color:#9d174d;">Fur Coat Color (Free):</label>
                    <div style="display:flex;align-items:center;gap:8px;">
                      <span style="width:16px;height:16px;border-radius:50%;background:${selectedCoat.fur};display:inline-block;border:1.5px solid #1f2937;flex-shrink:0;" title="${escapeHtml(selectedCoat.name)}"></span>
                      <select id="select-cat-coat" class="coat-select">
                        ${coatOptionsHtml}
                      </select>
                    </div>
                  </div>
                </div>
              `
          }

          ${
            state.justUnlockedNote
              ? `<div style="margin:12px 20px 0 20px;padding:10px 14px;border-radius:14px;background:#d1fae5;color:#065f46;font-size:13px;font-weight:800;">
                  🎉 ${escapeHtml(state.justUnlockedNote)}
                </div>`
              : ''
          }
          <div class="modal-body">
            ${
              isCatalogTab
                ? catalogSectionsHtml
                : `<div class="themes-grid">${
                    isToysTab
                      ? catToyCardsHtml
                      : isCatTab
                      ? catOutfitCardsHtml
                      : marketCardsHtml
                  }</div>`
            }
          </div>
        </div>
      </div>
    `;
  }

  if (state.activeModal === 'levels') {
    const tiers = [
      { name: 'Tier 1 • Welcome Aisle (Levels 1–20)', min: 1, max: 20 },
      { name: 'Tier 2 • Morning Stocking (Levels 21–50)', min: 21, max: 50 },
      { name: 'Tier 3 • Midday Market (Levels 51–95)', min: 51, max: 95 },
      { name: 'Tier 4 • Afternoon Rush (Levels 96–145)', min: 96, max: 145 },
      { name: 'Tier 5 • Master Grocer (Levels 146–200)', min: 146, max: 200 },
      { name: 'Tier 6 • Boutique Curators (Levels 201–260)', min: 201, max: 260 },
      { name: 'Tier 7 • Grand Market (Levels 261–320)', min: 261, max: 320 },
      { name: 'Tier 8 • World Bazaar (Levels 321–380)', min: 321, max: 380 },
      { name: 'Tier 9 • Evening Showcase (Levels 381–440)', min: 381, max: 440 },
      { name: 'Tier 10 • Royal Emporium (Levels 441–500)', min: 441, max: 500 },
    ];

    const activeTierIdx =
      tiers.findIndex(
        (t) =>
          state.save.currentLevelNumber >= t.min &&
          state.save.currentLevelNumber <= t.max
      ) + 1;

    const tierJumpPillsHtml = [
      `<button class="btn tier-jump-pill current-jump" id="btn-jump-current-level">🎯 Lvl ${state.save.currentLevelNumber}</button>`,
      ...tiers.map(
        (t, idx) =>
          `<button class="btn tier-jump-pill ${
            idx + 1 === activeTierIdx ? 'active' : ''
          }" data-jump-tier="${idx + 1}" title="${t.name}">T${idx + 1} (${t.min}–${
            t.max
          })</button>`
      ),
    ].join('');

    const tiersHtml = tiers
      .map((tier, idx) => {
        const specsInTier = LEVEL_SPECS.filter(
          (l) => l.levelNumber >= tier.min && l.levelNumber <= tier.max
        );
        const cells = specsInTier
          .map((lvl) => {
            const completed = state.save.completedLevels.includes(lvl.levelNumber);
            const unlocked = lvl.levelNumber <= state.save.highestUnlockedLevel;
            const current = state.save.currentLevelNumber === lvl.levelNumber;
            const milestone = lvl.levelNumber % 10 === 0;

            return `
              <button class="level-cell ${current ? 'current' : ''} ${
              completed ? 'completed' : ''
            }" data-pick-level="${lvl.levelNumber}" ${!unlocked ? 'disabled' : ''}>
                ${
                  milestone
                    ? `<span style="position:absolute;top:-6px;right:-6px;background:#facc15;color:#1c1917;font-size:9px;padding:1px 5px;border-radius:999px;font-weight:900;">2★</span>`
                    : ''
                }
                <span style="font-size:15px;">${lvl.levelNumber}</span>
                <span style="font-size:11px;margin-top:2px;">
                  ${completed ? '⭐✓' : unlocked ? '✨' : '🔒'}
                </span>
              </button>
            `;
          })
          .join('');

        return `
          <div id="level-tier-section-${idx + 1}" style="margin-bottom:18px;">
            <div style="font-size:13px;font-weight:900;color:#b45309;margin-bottom:8px;text-transform:uppercase;letter-spacing:0.03em;">
              ${tier.name}
            </div>
            <div class="levels-grid">${cells}</div>
          </div>
        `;
      })
      .join('');

    return `
      <div class="modal-backdrop" id="modal-backdrop-close">
        <div class="modal-card" onclick="event.stopPropagation()">
          <div class="modal-header">
            <div>
              <h2 style="font-size:18px;font-weight:900;">🗺️ 500-Level Market Map & Endless Relax Mode</h2>
              <p class="muted-copy" style="font-size:12px;color:#78716c;">${
                state.save.completedLevels.length
              } of 500 Main Levels Completed • Replay any level or generate a custom Relax puzzle!</p>
            </div>
            <button class="btn icon-btn" id="btn-close-modal">✕</button>
          </div>
          <div style="background:#ecfdf5;padding:12px 20px;border-bottom:1.5px solid #a7f3d0;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px;">
            <div>
              <div style="font-size:13.5px;font-weight:900;color:#065f46;">☕ Endless Relax Mode (Free Play)</div>
              <div style="font-size:11.5px;color:#047857;">Play fresh, 100% solvable puzzles anytime to earn bonus Points & Stars:</div>
            </div>
            <div style="display:flex;gap:8px;flex-wrap:wrap;">
              <button class="btn" data-start-relax="cozy" style="padding:7px 12px;background:#fff;border:1.5px solid #6ee7b7;color:#065f46;font-size:12px;">🌿 Cozy (8 Shelves)</button>
              <button class="btn" data-start-relax="medium" style="padding:7px 12px;background:#fff;border:1.5px solid #fcd34d;color:#92400e;font-size:12px;">☀️ Pleasant (11 Shelves)</button>
              <button class="btn" data-start-relax="challenging" style="padding:7px 12px;background:#fff;border:1.5px solid #fda4af;color:#9f1239;font-size:12px;">✨ Master (14 Shelves)</button>
            </div>
          </div>
          <div class="tier-jump-bar">
            ${tierJumpPillsHtml}
          </div>
          <div class="modal-body">
            ${tiersHtml}
          </div>
        </div>
      </div>
    `;
  }

  if (state.activeModal === 'settings') {
    const isDark = Boolean(state.save.darkMode);
    const isThemeMusic = Boolean(state.save.themeMatchedMusic);
    const musicVol = state.save.musicVolume ?? 70;
    const sfxVol = state.save.sfxVolume ?? 80;
    return `
      <div class="modal-backdrop" id="modal-backdrop-close">
        <div class="modal-card narrow" onclick="event.stopPropagation()">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;padding-bottom:10px;border-bottom:1px solid #e7e5e4;">
            <h2 style="font-size:18px;font-weight:900;">❤️ Personalize Market & Settings</h2>
            <button class="btn icon-btn" id="btn-close-modal">✕</button>
          </div>
          <div style="display:flex;align-items:center;justify-content:space-between;padding:12px 14px;border-radius:16px;background:${
            isDark ? '#292524' : '#f5f5f4'
          };border:1.5px solid ${
      isDark ? '#57534e' : '#d6d3d1'
    };margin-bottom:12px;">
            <div>
              <div style="font-size:14px;font-weight:900;">🌙 Evening Market (Dark Mode)</div>
              <div style="font-size:11.5px;opacity:0.75;">Cozy warm dark backdrop for nighttime play</div>
            </div>
            <button type="button" class="btn" id="btn-toggle-darkmode" style="padding:8px 14px;background:${
              isDark ? '#f59e0b' : '#ffffff'
            };color:${
      isDark ? '#ffffff' : '#292524'
    };border:1.5px solid #d6d3d1;font-size:12.5px;">
              ${isDark ? '🌙 Dark ON' : '☀️ Light ON'}
            </button>
          </div>

          <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;padding:12px 14px;border-radius:16px;background:${
            isDark ? '#292524' : '#f5f5f4'
          };border:1.5px solid ${
      isDark ? '#57534e' : '#d6d3d1'
    };margin-bottom:12px;">
            <div>
              <div style="font-size:14px;font-weight:900;">🎼 Market-Matched Ambient Music</div>
              <div style="font-size:11.5px;opacity:0.75;">${
                isThemeMusic
                  ? `Playing custom ${theme.shortName} soundtrack`
                  : 'Default 3-track market mix (tap to match active store)'
              }</div>
            </div>
            <button type="button" class="btn" id="btn-toggle-theme-music" style="padding:8px 12px;flex-shrink:0;background:${
              isThemeMusic ? '#059669' : '#ffffff'
            };color:${
      isThemeMusic ? '#ffffff' : '#292524'
    };border:1.5px solid #d6d3d1;font-size:12px;">
              ${isThemeMusic ? '🌍 Theme ON' : '🎵 Default'}
            </button>
          </div>

          <div style="padding:12px 14px;border-radius:16px;background:${
            isDark ? '#292524' : '#f5f5f4'
          };border:1.5px solid ${
      isDark ? '#57534e' : '#d6d3d1'
    };margin-bottom:12px;">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
              <div>
                <div style="font-size:14px;font-weight:900;">🎵 Background Music Volume</div>
                <div style="font-size:11.5px;opacity:0.75;">Adjust the homey market soundtrack level</div>
              </div>
              <span id="music-vol-label" style="font-size:13px;font-weight:900;padding:3px 9px;border-radius:999px;background:#f59e0b;color:#fff;">
                ${musicVol}%
              </span>
            </div>
            <input
              type="range"
              id="slider-music-volume"
              min="0"
              max="100"
              step="1"
              value="${musicVol}"
              style="width:100%;accent-color:#f59e0b;cursor:pointer;height:6px;"
            />
          </div>

          <div style="padding:12px 14px;border-radius:16px;background:${
            isDark ? '#292524' : '#f5f5f4'
          };border:1.5px solid ${
      isDark ? '#57534e' : '#d6d3d1'
    };margin-bottom:16px;">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
              <div>
                <div style="font-size:14px;font-weight:900;">🔊 Sound Effects & Cat Purr Volume</div>
                <div style="font-size:11.5px;opacity:0.75;">Adjust shelf pops, chimes, cat purrs & perch toys</div>
              </div>
              <span id="sfx-vol-label" style="font-size:13px;font-weight:900;padding:3px 9px;border-radius:999px;background:#10b981;color:#fff;">
                ${sfxVol}%
              </span>
            </div>
            <input
              type="range"
              id="slider-sfx-volume"
              min="0"
              max="100"
              step="1"
              value="${sfxVol}"
              style="width:100%;accent-color:#10b981;cursor:pointer;height:6px;"
            />
          </div>
          <form id="form-market-title" style="margin-bottom:16px;">
            <label style="display:block;font-size:11px;font-weight:800;text-transform:uppercase;opacity:0.75;margin-bottom:6px;">
              Storefront Awning Title
            </label>
            <div style="display:flex;gap:8px;">
              <input
                type="text"
                id="input-market-title"
                value="${escapeHtml(state.save.marketTitle)}"
                maxlength="32"
                style="flex:1;padding:9px 12px;border-radius:12px;border:1.5px solid #d6d3d1;font-size:14px;font-weight:700;background:${
                  isDark ? '#292524' : '#ffffff'
                };color:${isDark ? '#fafaf9' : '#1c1917'};"
              />
              <button type="submit" class="btn" style="padding:9px 14px;background:#f59e0b;color:#fff;font-size:13px;">
                Save
              </button>
            </div>
          </form>
          <div style="padding:12px 14px;border-radius:16px;background:${
            isDark ? '#292524' : '#f5f5f4'
          };border:1.5px solid ${
      isDark ? '#57534e' : '#d6d3d1'
    };margin-bottom:14px;">
            <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:6px;">
              <div style="font-size:13.5px;font-weight:900;">💾 Backup & Restore Save Code</div>
              <button type="button" class="btn" id="btn-export-save" style="padding:5px 10px;background:#f59e0b;color:#fff;font-size:11.5px;">
                📋 Copy Code
              </button>
            </div>
            <div style="font-size:11px;opacity:0.75;margin-bottom:8px;">
              Generate a backup code to save or transfer your progress to another iPad or browser.
            </div>
            <div style="display:flex;gap:6px;">
              <input
                type="text"
                id="input-save-code"
                placeholder="Paste KCC1-... backup code here"
                style="flex:1;min-width:0;padding:7px 10px;border-radius:10px;border:1.5px solid #d6d3d1;font-size:12px;font-weight:700;background:${
                  isDark ? '#1c1917' : '#ffffff'
                };color:${isDark ? '#fafaf9' : '#1c1917'};"
              />
              <button type="button" class="btn" id="btn-import-save" style="padding:7px 12px;background:#059669;color:#fff;font-size:12px;flex-shrink:0;">
                Restore
              </button>
            </div>
            ${
              state.saveCodeStatus
                ? `<div id="save-code-status" style="margin-top:8px;padding:6px 10px;border-radius:10px;font-size:11.5px;font-weight:800;background:${
                    state.saveCodeStatus.type === 'error' ? '#fee2e2' : '#d1fae5'
                  };color:${
                    state.saveCodeStatus.type === 'error' ? '#991b1b' : '#065f46'
                  };">${escapeHtml(state.saveCodeStatus.text)}</div>`
                : ''
            }
          </div>
          <div style="padding:14px;border-radius:16px;background:${
            isDark ? '#292524' : '#fffbeb'
          };border:1.5px solid #fde68a;font-size:12.5px;line-height:1.5;margin-bottom:12px;">
            <div style="font-weight:900;margin-bottom:4px;">🛍️ How to Stock the Shelves</div>
            <div>• Move items between front shelves by <strong>dragging</strong> or <strong>tapping an item then tapping an open shelf</strong>.</div>
            <div>• Place <strong>3 matching items</strong> on the same shelf to pack them away!</div>
            <div>• Clearing all 3 front slots of a shelf causes darkened silhouette items in the back row to slide forward.</div>
          </div>
          <div style="padding:14px;border-radius:16px;background:${
            isDark ? '#112638' : '#f0f9ff'
          };border:1.5px solid #bae6fd;font-size:12px;line-height:1.45;color:${
      isDark ? '#e0f2fe' : '#0c4a6e'
    };">
            <div style="font-weight:900;margin-bottom:3px;">📱 Install on iPad & iPhone Home Screen</div>
            <div>In Safari, tap <strong>Share</strong> → <strong>"Add to Home Screen"</strong> for a full-screen offline app experience!</div>
          </div>
        </div>
      </div>
    `;
  }

  return '';
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function bindAppEvents() {
  const on = (id, fn) => {
    const el = document.getElementById(id);
    if (el) el.onclick = fn;
  };

  on('btn-open-levels', () => {
    if (state.isAnimating) return;
    state.activeModal = 'levels';
    renderApp();
  });
  on('btn-open-themes', () => {
    if (state.isAnimating) return;
    state.justUnlockedNote = null;
    state.shopTab = 'markets';
    state.activeModal = 'themes';
    renderApp();
  });
  on('btn-open-themes-stars', () => {
    if (state.isAnimating) return;
    state.justUnlockedNote = null;
    state.shopTab = 'markets';
    state.activeModal = 'themes';
    renderApp();
  });
  on('btn-header-cat-shop', () => {
    if (state.isAnimating) return;
    state.justUnlockedNote = null;
    state.shopTab = 'cat';
    state.activeModal = 'themes';
    renderApp();
  });
  on('tab-btn-markets', () => {
    state.justUnlockedNote = null;
    state.shopTab = 'markets';
    renderApp();
  });
  on('tab-btn-cat', () => {
    state.justUnlockedNote = null;
    state.shopTab = 'cat';
    renderApp();
  });
  on('tab-btn-toys', () => {
    state.justUnlockedNote = null;
    state.shopTab = 'toys';
    renderApp();
  });
  on('tab-btn-catalog', () => {
    state.justUnlockedNote = null;
    state.shopTab = 'catalog';
    renderApp();
  });
  document.querySelectorAll('[data-catalog-filter]').forEach((btn) => {
    btn.onclick = () => {
      state.catalogFilterThemeId = btn.getAttribute('data-catalog-filter') || 'all';
      renderApp();
    };
  });

  const scheduleCatMoodReset = () => {
    if (state.catTimer !== null) {
      clearTimeout(state.catTimer);
    }
    state.catTimer = setTimeout(() => {
      state.catTimer = null;
      state.toyIsPlaying = false;
      state.catIsHappy = false;
      const focusedTag = document.activeElement && document.activeElement.tagName;
      if (state.isAnimating || state.activeModal || focusedTag === 'INPUT' || focusedTag === 'TEXTAREA') {
        const petBtn = document.getElementById('btn-pet-cat');
        const toyBtn = document.getElementById('btn-play-toy');
        if (petBtn) petBtn.classList.remove('pet-bounce');
        if (toyBtn) toyBtn.classList.remove('toy-bounce');
        return;
      }
      renderApp();
    }, 650);
  };

  // Play with the Countertop Perch Toy!
  on('btn-play-toy', () => {
    if (state.isAnimating) return;
    const toy =
      CAT_PERCH_TOYS.find((t) => t.id === state.save.equippedToyId) ||
      CAT_PERCH_TOYS[0];
    soundEngine.playToySound(toy.id);
    state.save.catToyPlaysCount = (state.save.catToyPlaysCount || 0) + 1;
    const levelKey = getCurrentLevelBonusKey();
    const isPlayBonus =
      state.save.toyBonusLevelKey !== levelKey &&
      state.save.catToyPlaysCount % 5 === 0;
    if (isPlayBonus) {
      state.save.points += 2;
      state.save.toyBonusLevelKey = levelKey;
      state.catSpeech = `${toy.sparkleEmoji} Playtime Bonus! ${state.save.catName} ${toy.reaction} (+2 🪙)`;
    } else {
      state.catSpeech = `${toy.sparkleEmoji} ${state.save.catName} ${toy.reaction}`;
    }
    state.toyIsPlaying = true;
    state.catIsHappy = true;
    persistSave();
    renderApp();
    scheduleCatMoodReset();
  });

  // Pet the Shop Cat interaction!
  on('btn-pet-cat', () => {
    if (state.isAnimating) return;
    soundEngine.playCatPurr();
    const prevPets = state.save.catPetsCount || 0;
    const nextPets = prevPets + 1;
    state.save.catPetsCount = nextPets;
    const newlyUnlocked = syncPetMilestoneUnlocks(state.save, prevPets);
    const levelKey = getCurrentLevelBonusKey();
    const isTreatBonus =
      state.save.petBonusLevelKey !== levelKey &&
      nextPets % 5 === 0;
    if (isTreatBonus) {
      state.save.points += 2;
      state.save.petBonusLevelKey = levelKey;
    }

    if (newlyUnlocked.length > 0) {
      soundEngine.playSparkle();
      const coinNote = isTreatBonus ? ' (+2 🪙 bonus!)' : '';
      state.catSpeech = `🎉 SECRET UNLOCK! Reached ${nextPets.toLocaleString()} pets — unlocked ${newlyUnlocked.join(
        ' & '
      )}!${coinNote}`;
    } else if (isTreatBonus) {
      state.catSpeech = `Purrrr-fect pets! ${state.save.catName} found +2 🪙 bonus coins under the cushion for this level!`;
    } else {
      const quotePool = nextPets >= 100 ? [...CAT_QUOTES, ...SECRET_PET_QUOTES] : CAT_QUOTES;
      state.catSpeech = quotePool[nextPets % quotePool.length];
    }
    state.catIsHappy = true;
    persistSave();
    renderApp();
    scheduleCatMoodReset();
  });

  on('btn-open-settings', () => {
    if (state.isAnimating) return;
    state.saveCodeStatus = null;
    state.activeModal = 'settings';
    renderApp();
  });
  const closeActiveModal = () => {
    state.saveCodeStatus = null;
    if (
      state.activeModal === 'themes' &&
      state.celebrationData &&
      countRemainingItems(state.shelves) === 0
    ) {
      state.activeModal = 'celebration';
    } else {
      state.activeModal = null;
    }
    renderApp();
  };
  on('btn-close-modal', closeActiveModal);
  on('modal-backdrop-close', closeActiveModal);

  on('btn-toggle-sfx', () => {
    state.save.sfxEnabled = !state.save.sfxEnabled;
    if (state.save.sfxEnabled && (!state.save.sfxVolume || state.save.sfxVolume <= 0)) {
      state.save.sfxVolume = 50;
    }
    persistSave();
    renderApp();
  });
  on('btn-toggle-music', () => {
    state.save.musicEnabled = !state.save.musicEnabled;
    if (state.save.musicEnabled && (!state.save.musicVolume || state.save.musicVolume <= 0)) {
      state.save.musicVolume = 50;
    }
    soundEngine.musicVolume = clampVolume(state.save.musicVolume, 70) / 100;
    soundEngine.setThemeMusicConfig(state.save.themeMatchedMusic, state.save.activeThemeId);
    soundEngine.setMusic(state.save.musicEnabled);
    persistSave();
    renderApp();
  });
  on('btn-toggle-darkmode', () => {
    state.save.darkMode = !state.save.darkMode;
    soundEngine.playPickup();
    persistSave();
    applyThemeCssVariables();
    renderApp();
  });
  on('btn-toggle-theme-music', () => {
    state.save.themeMatchedMusic = !state.save.themeMatchedMusic;
    soundEngine.playPickup();
    persistSave();
    renderApp();
  });

  on('btn-export-save', () => {
    const code = encodeSaveCode(state.save);
    state.saveCodeStatus = {
      type: 'success',
      text: '✓ Backup code created! Copy from the box below or paste on another device.',
    };
    soundEngine.playSparkle();
    if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
      navigator.clipboard
        .writeText(code)
        .then(() => {
          state.saveCodeStatus = {
            type: 'success',
            text: '✓ Backup code copied to clipboard!',
          };
          const statusEl = document.getElementById('save-code-status');
          if (statusEl) statusEl.textContent = state.saveCodeStatus.text;
        })
        .catch(() => {});
    }
    renderApp();
    const inp = document.getElementById('input-save-code');
    if (inp) {
      inp.value = code;
      inp.focus();
      inp.select();
    }
  });

  on('btn-import-save', () => {
    const inp = document.getElementById('input-save-code');
    const code = inp ? inp.value : '';
    const restored = decodeSaveCode(code);
    if (!restored) {
      state.saveCodeStatus = {
        type: 'error',
        text: '⚠️ Invalid backup code. Make sure the full KCC1-... code was pasted.',
      };
      renderApp();
      return;
    }
    state.save = restored;
    state.isRelaxMode = false;
    state.relaxSpec = null;
    state.saveCodeStatus = null;
    clearSavedBoard();
    persistSave();
    soundEngine.setMusic(state.save.musicEnabled);
    soundEngine.playSparkle();
    startLevelBoard(
      getActiveLevelSpec(),
      false,
      `💾 Progress restored! Welcome back to Level ${state.save.currentLevelNumber}.`
    );
  });

  const volSlider = document.getElementById('slider-music-volume');
  if (volSlider) {
    volSlider.oninput = (e) => {
      const val = Number(e.target.value);
      state.save.musicVolume = val;
      soundEngine.musicVolume = val / 100;
      const lbl = document.getElementById('music-vol-label');
      if (lbl) lbl.textContent = `${val}%`;
      if (val > 0 && !state.save.musicEnabled) {
        state.save.musicEnabled = true;
        soundEngine.setMusic(true);
      } else if (val === 0 && state.save.musicEnabled) {
        state.save.musicEnabled = false;
        soundEngine.setMusic(false);
      }
      const musicBtn = document.getElementById('btn-toggle-music');
      if (musicBtn) musicBtn.classList.toggle('active', state.save.musicEnabled);
      persistSave();
    };
  }

  const sfxSlider = document.getElementById('slider-sfx-volume');
  if (sfxSlider) {
    sfxSlider.oninput = (e) => {
      const val = Number(e.target.value);
      state.save.sfxVolume = val;
      soundEngine.sfxVolume = val / 100;
      const lbl = document.getElementById('sfx-vol-label');
      if (lbl) lbl.textContent = `${val}%`;
      if (val > 0 && !state.save.sfxEnabled) {
        state.save.sfxEnabled = true;
      } else if (val === 0 && state.save.sfxEnabled) {
        state.save.sfxEnabled = false;
      }
      const sfxBtn = document.getElementById('btn-toggle-sfx');
      if (sfxBtn) {
        sfxBtn.classList.toggle('active', state.save.sfxEnabled);
        sfxBtn.textContent = state.save.sfxEnabled ? '🔊' : '🔇';
      }
      persistSave();
    };
    sfxSlider.onchange = () => {
      if (state.save.sfxVolume > 0) {
        soundEngine.playCatPurr();
      }
    };
  }

  // Toolbar Actions
  const handleUndo = () => {
    if (state.undoStack.length === 0 || state.isAnimating) return;
    clearPendingAdvanceTimer();
    state.advancedShelfIds = [];
    state.shelves = state.undoStack.pop();
    state.selectedItem = null;
    state.highlightedUids = [];
    state.hintTargetShelfId = null;
    state.hintMessage = null;
    soundEngine.playPickup();
    persistBoardState();
    renderApp();
  };

  const handleHint = () => {
    if (state.save.points < HINT_COSTS.SPOTLIGHT || state.isAnimating) return;
    const hint = findSpotlightHint(state.shelves);
    if (!hint) return;
    soundEngine.playSparkle();
    state.save.points -= HINT_COSTS.SPOTLIGHT;
    persistSave();
    state.highlightedUids = hint.highlightedUids;
    state.hintTargetShelfId = hint.targetShelfId;
    state.hintMessage = hint.message;
    renderApp();
  };

  const handleAutoPack = () => {
    if (state.save.points < HINT_COSTS.AUTO_PACK || state.isAnimating) return;
    const res = executeAutoPackTrio(state.shelves);
    if (!res) return;
    clearPendingAdvanceTimer();
    state.advancedShelfIds = [];
    if (res.packedItemType !== null) {
      recordPackedTrio(res.packedItemType);
    }
    soundEngine.playPackMatch();
    state.undoStack.push(cloneShelves(state.shelves));
    if (state.undoStack.length > 25) state.undoStack.shift();
    state.save.points -= HINT_COSTS.AUTO_PACK;
    persistSave();
    state.shelves = res.nextShelves;
    state.selectedItem = null;
    state.highlightedUids = [];
    state.hintTargetShelfId = null;
    state.hintMessage = '✨ Magic Auto-Pack cleared 3 matching items for you!';
    persistBoardState();
    renderApp();
    checkAndTriggerVictory();
  };

  const handleShuffle = () => {
    if (state.save.points < HINT_COSTS.SHUFFLE || state.isAnimating) return;
    clearPendingAdvanceTimer();
    state.advancedShelfIds = [];
    soundEngine.playSparkle();
    state.undoStack.push(cloneShelves(state.shelves));
    if (state.undoStack.length > 25) state.undoStack.shift();
    state.save.points -= HINT_COSTS.SHUFFLE;
    let shuffled = shuffleRemainingBoard(state.shelves);
    let packedAnyFrontTriple = false;
    for (const shelf of shuffled) {
      const f = shelf.layers[0];
      if (f[0] && f[1] && f[2] && f[0].itemType === f[1].itemType && f[1].itemType === f[2].itemType) {
        recordPackedTrio(f[0].itemType);
        shelf.layers[0] = [null, null, null];
        packedAnyFrontTriple = true;
      }
    }
    persistSave();
    if (packedAnyFrontTriple) {
      shuffled = normalizeShelfLayers(shuffled).updatedShelves;
      soundEngine.playPackMatch();
    }
    state.shelves = shuffled;
    state.selectedItem = null;
    state.highlightedUids = [];
    state.hintTargetShelfId = null;
    state.hintMessage = '🔄 Shelves reshuffled with fresh open slots!';
    persistBoardState();
    renderApp();
    if (packedAnyFrontTriple) {
      checkAndTriggerVictory();
    }
  };

  const handleRestart = () => {
    if (state.isAnimating) return;
    soundEngine.playSlideForward();
    startLevelBoard(getActiveLevelSpec(), false);
  };

  on('btn-undo', handleUndo);
  on('btn-hint', handleHint);
  on('btn-autopack', handleAutoPack);
  on('btn-shuffle', handleShuffle);
  on('btn-restart', handleRestart);

  on('modal-undo', handleUndo);
  on('modal-shuffle', handleShuffle);
  on('modal-autopack', handleAutoPack);
  on('modal-restart', handleRestart);

  on('celeb-open-themes', () => {
    state.shopTab = 'markets';
    state.activeModal = 'themes';
    renderApp();
  });
  on('celeb-open-cat-shop', () => {
    state.shopTab = 'cat';
    state.activeModal = 'themes';
    renderApp();
  });
  on('celeb-next-level', () => {
    if (state.isRelaxMode) {
      state.relaxRound += 1;
      state.relaxSpec = createRelaxLevelSpec(
        state.relaxDifficulty || 'medium',
        state.relaxRound
      );
      startLevelBoard(state.relaxSpec, true);
    } else if (state.save.currentLevelNumber < LEVEL_SPECS.length) {
      state.save.currentLevelNumber += 1;
      state.save.highestUnlockedLevel = Math.max(
        state.save.highestUnlockedLevel,
        state.save.currentLevelNumber
      );
      persistSave();
      startLevelBoard(LEVEL_SPECS[state.save.currentLevelNumber - 1], true);
    } else {
      state.isRelaxMode = true;
      state.relaxDifficulty = 'medium';
      state.relaxRound = 1;
      state.relaxSpec = createRelaxLevelSpec('medium', 1);
      startLevelBoard(state.relaxSpec, true);
    }
  });

  on('btn-toggle-rotate', () => {
    state.save.rotateThemes = !state.save.rotateThemes;
    persistSave();
    renderApp();
  });

  // Cat Boutique Events (Rename, Coat, Unlock Outfit, Equip Full / Hat / Clothing)
  const catNameForm = document.getElementById('form-cat-name');
  if (catNameForm) {
    catNameForm.onsubmit = (e) => {
      e.preventDefault();
      const inp = document.getElementById('input-cat-name');
      if (inp) {
        state.save.catName = inp.value.trim() || 'Mochi';
        soundEngine.playCatPurr();
        persistSave();
        renderApp();
      }
    };
  }
  on('btn-remove-hat', () => {
    state.save.equippedHatId = 'none';
    soundEngine.playPickup();
    persistSave();
    renderApp();
  });
  on('btn-remove-cloth', () => {
    state.save.equippedClothingId = 'none';
    soundEngine.playPickup();
    persistSave();
    renderApp();
  });

  const coatSelect = document.getElementById('select-cat-coat');
  if (coatSelect) {
    coatSelect.onchange = () => {
      const coatId = coatSelect.value;
      const coatObj = CAT_COATS.find((c) => c.id === coatId);
      if (coatObj && isPetUnlockedItem(coatObj, state.save.catPetsCount)) {
        state.save.catCoatId = coatId;
        soundEngine.playCatPurr();
        persistSave();
        renderApp();
      }
    };
  }

  document.querySelectorAll('[data-unlock-cat-outfit]').forEach((btn) => {
    btn.onclick = () => {
      const id = btn.getAttribute('data-unlock-cat-outfit');
      const outfit = CAT_OUTFITS.find((o) => o.id === id);
      if (
        outfit &&
        state.save.points >= outfit.costPoints &&
        !state.save.unlockedCatOutfits.includes(id)
      ) {
        soundEngine.playSparkle();
        soundEngine.playCatPurr();
        state.save.points -= outfit.costPoints;
        state.save.unlockedCatOutfits.push(id);
        state.save.equippedHatId = id;
        state.save.equippedClothingId = id;
        state.justUnlockedNote = `${outfit.name} (${outfit.hatName} + ${outfit.clothingName}) unlocked for ${state.save.catName}!`;
        persistSave();
        renderApp();
      }
    };
  });

  document.querySelectorAll('[data-equip-full]').forEach((btn) => {
    btn.onclick = () => {
      const id = btn.getAttribute('data-equip-full');
      state.save.equippedHatId = id;
      state.save.equippedClothingId = id;
      soundEngine.playCatPurr();
      persistSave();
      renderApp();
    };
  });

  document.querySelectorAll('[data-equip-hat]').forEach((btn) => {
    btn.onclick = () => {
      const id = btn.getAttribute('data-equip-hat');
      state.save.equippedHatId = state.save.equippedHatId === id ? 'none' : id;
      soundEngine.playPickup();
      persistSave();
      renderApp();
    };
  });

  document.querySelectorAll('[data-equip-cloth]').forEach((btn) => {
    btn.onclick = () => {
      const id = btn.getAttribute('data-equip-cloth');
      state.save.equippedClothingId =
        state.save.equippedClothingId === id ? 'none' : id;
      soundEngine.playPickup();
      persistSave();
      renderApp();
    };
  });

  document.querySelectorAll('[data-unlock-cat-toy]').forEach((btn) => {
    btn.onclick = () => {
      const id = btn.getAttribute('data-unlock-cat-toy');
      const toy = CAT_PERCH_TOYS.find((t) => t.id === id);
      if (!Array.isArray(state.save.unlockedCatToys)) {
        state.save.unlockedCatToys = ['yarn'];
      }
      if (
        toy &&
        state.save.points >= toy.costPoints &&
        !state.save.unlockedCatToys.includes(id)
      ) {
        soundEngine.playSparkle();
        soundEngine.playToySound(id);
        state.save.points -= toy.costPoints;
        state.save.unlockedCatToys.push(id);
        state.save.equippedToyId = id;
        state.justUnlockedNote = `${toy.sparkleEmoji} ${toy.name} unlocked and placed on ${state.save.catName}'s perch!`;
        persistSave();
        renderApp();
      }
    };
  });

  document.querySelectorAll('[data-equip-toy]').forEach((btn) => {
    btn.onclick = () => {
      const id = btn.getAttribute('data-equip-toy');
      state.save.equippedToyId = id;
      soundEngine.playToySound(id);
      persistSave();
      renderApp();
    };
  });

  // Theme selection & unlocking
  document.querySelectorAll('[data-select-theme]').forEach((btn) => {
    btn.onclick = () => {
      const id = btn.getAttribute('data-select-theme');
      soundEngine.playPickup();
      state.save.activeThemeId = id;
      persistSave();
      applyThemeCssVariables();
      renderApp();
    };
  });

  document.querySelectorAll('[data-unlock-theme]').forEach((btn) => {
    btn.onclick = () => {
      const id = btn.getAttribute('data-unlock-theme');
      const t = getThemeById(id);
      if (state.save.stars >= t.unlockStars && !state.save.unlockedThemes.includes(id)) {
        soundEngine.playSparkle();
        state.save.stars -= t.unlockStars;
        state.save.unlockedThemes.push(id);
        state.save.activeThemeId = id;
        state.justUnlockedNote = `${t.name} unlocked! ${PERSONALIZATION.themeUnlockNote}`;
        persistSave();
        applyThemeCssVariables();
        renderApp();
      }
    };
  });

  // Level Map selection & Tier Jump Pills
  on('btn-jump-current-level', () => {
    const modalBody = document.querySelector('.modal-body');
    const currentCell =
      modalBody &&
      (modalBody.querySelector('.level-cell.current') ||
        modalBody.querySelector(`[data-pick-level="${state.save.currentLevelNumber}"]`));
    if (modalBody && currentCell) {
      const bodyRect = modalBody.getBoundingClientRect();
      const cellRect = currentCell.getBoundingClientRect();
      const top = Math.max(
        0,
        modalBody.scrollTop + (cellRect.top - bodyRect.top) - bodyRect.height / 2 + cellRect.height / 2
      );
      if (typeof modalBody.scrollTo === 'function') {
        modalBody.scrollTo({ top, behavior: 'smooth' });
      } else {
        modalBody.scrollTop = top;
      }
    }
  });

  document.querySelectorAll('[data-jump-tier]').forEach((btn) => {
    btn.onclick = () => {
      const tierNum = btn.getAttribute('data-jump-tier');
      const modalBody = document.querySelector('.modal-body');
      const sectionEl = document.getElementById(`level-tier-section-${tierNum}`);
      if (modalBody && sectionEl) {
        const bodyRect = modalBody.getBoundingClientRect();
        const secRect = sectionEl.getBoundingClientRect();
        const top = Math.max(0, modalBody.scrollTop + (secRect.top - bodyRect.top) - 10);
        if (typeof modalBody.scrollTo === 'function') {
          modalBody.scrollTo({ top, behavior: 'smooth' });
        } else {
          modalBody.scrollTop = top;
        }
      }
    };
  });

  document.querySelectorAll('[data-pick-level]').forEach((btn) => {
    btn.onclick = () => {
      const lvl = Number(btn.getAttribute('data-pick-level'));
      state.isRelaxMode = false;
      state.save.currentLevelNumber = lvl;
      persistSave();
      startLevelBoard(LEVEL_SPECS[lvl - 1], false);
    };
  });

  document.querySelectorAll('[data-start-relax]').forEach((btn) => {
    btn.onclick = () => {
      const diff = btn.getAttribute('data-start-relax') || 'medium';
      state.isRelaxMode = true;
      state.relaxDifficulty = diff;
      state.relaxRound += 1;
      state.relaxSpec = createRelaxLevelSpec(diff, state.relaxRound);
      startLevelBoard(state.relaxSpec, false);
    };
  });

  // Settings Title Form
  const form = document.getElementById('form-market-title');
  if (form) {
    form.onsubmit = (e) => {
      e.preventDefault();
      const input = document.getElementById('input-market-title');
      if (input) {
        state.save.marketTitle =
          input.value.trim() || PERSONALIZATION.defaultMarketTitle;
        persistSave();
        state.activeModal = null;
        renderApp();
      }
    };
  }

  // Shelf & Slot Tap-to-Move Listeners
  document.querySelectorAll('.shelf-slot').forEach((slotEl) => {
    slotEl.onclick = (e) => {
      e.stopPropagation();
      if (state.isAnimating || Date.now() < state.suppressNextClickUntil) return;
      const shelfId = Number(slotEl.getAttribute('data-shelf-id'));
      const slotIdx = Number(slotEl.getAttribute('data-slot-idx'));
      const shelf = state.shelves.find((s) => s.id === shelfId);
      if (!shelf) return;

      const clickedItem = shelf.layers[0][slotIdx];
      if (clickedItem) {
        if (
          state.selectedItem &&
          state.selectedItem.shelfId === shelfId &&
          state.selectedItem.slotIdx === slotIdx
        ) {
          state.selectedItem = null;
        } else {
          soundEngine.playPickup();
          state.selectedItem = { shelfId, slotIdx, item: clickedItem };
        }
        renderApp();
      } else if (state.selectedItem) {
        performMove(
          state.selectedItem.shelfId,
          state.selectedItem.slotIdx,
          shelfId,
          slotIdx
        );
      }
    };
  });

  document.querySelectorAll('[data-shelf-box]').forEach((boxEl) => {
    boxEl.onclick = () => {
      if (!state.selectedItem || state.isAnimating || Date.now() < state.suppressNextClickUntil) return;
      const shelfId = Number(boxEl.getAttribute('data-shelf-box'));
      if (shelfId === state.selectedItem.shelfId) return;
      const shelf = state.shelves.find((s) => s.id === shelfId);
      if (!shelf) return;
      const openIdx = shelf.layers[0].findIndex((s) => s === null);
      if (openIdx !== -1) {
        performMove(
          state.selectedItem.shelfId,
          state.selectedItem.slotIdx,
          shelfId,
          openIdx
        );
      }
    };
  });

  // Pointer Drag-and-Drop Initiation
  document.querySelectorAll('[data-drag-shelf]').forEach((itemEl) => {
    itemEl.onpointerdown = (e) => {
      if (state.isAnimating || state.drag) return;
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      const shelfId = Number(itemEl.getAttribute('data-drag-shelf'));
      const slotIdx = Number(itemEl.getAttribute('data-drag-slot'));
      const shelf = state.shelves.find((s) => s.id === shelfId);
      if (!shelf || !shelf.layers[0][slotIdx]) return;

      try {
        if (typeof itemEl.setPointerCapture === 'function') {
          itemEl.setPointerCapture(e.pointerId);
        }
      } catch {}

      state.drag = {
        pointerId: e.pointerId,
        targetEl: itemEl,
        shelfId,
        slotIdx,
        item: shelf.layers[0][slotIdx],
        startX: e.clientX,
        startY: e.clientY,
        isDragging: false,
      };
    };
  });
}

function findBestSlotInShelf(shelf, clientX) {
  if (!shelf) return -1;
  const emptyIndices = [];
  shelf.layers[0].forEach((s, idx) => {
    if (s === null) emptyIndices.push(idx);
  });
  if (emptyIndices.length === 0) return -1;
  if (emptyIndices.length === 1) return emptyIndices[0];
  let bestIdx = emptyIndices[0];
  let bestDx = Infinity;
  emptyIndices.forEach((slotIdx) => {
    const slotEl = document.querySelector(
      `[data-shelf-id="${shelf.id}"][data-slot-idx="${slotIdx}"]`
    );
    if (slotEl) {
      const r = slotEl.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const dx = Math.abs(clientX - cx);
      if (dx < bestDx) {
        bestDx = dx;
        bestIdx = slotIdx;
      }
    }
  });
  return bestIdx;
}

function findBestDropTarget(clientX, clientY, sourceShelfId) {
  const el = document.elementFromPoint(clientX, clientY);
  const slotEl = el && el.closest('[data-shelf-id]');
  if (slotEl) {
    const targetShelfId = Number(slotEl.getAttribute('data-shelf-id'));
    if (targetShelfId === sourceShelfId) return null;
    const targetSlotIdx = Number(slotEl.getAttribute('data-slot-idx'));
    const targetShelf = state.shelves.find((s) => s.id === targetShelfId);
    if (targetShelf && targetShelf.layers[0].some((s) => s === null)) {
      return { shelfId: targetShelfId, slotIdx: targetSlotIdx };
    }
    return null;
  }

  const boxEl = el && el.closest('[data-shelf-box]');
  if (boxEl) {
    const targetShelfId = Number(boxEl.getAttribute('data-shelf-box'));
    if (targetShelfId === sourceShelfId) return null;
    const targetShelf = state.shelves.find((s) => s.id === targetShelfId);
    if (targetShelf) {
      const slotIdx = findBestSlotInShelf(targetShelf, clientX);
      if (slotIdx !== -1) {
        return { shelfId: targetShelfId, slotIdx };
      }
    }
    return null;
  }

  // Forgiving drop snap: find closest open target shelf within 44px of release point
  let nearestTarget = null;
  let bestDist = 44;
  document.querySelectorAll('[data-shelf-box]').forEach((candidateEl) => {
    const shelfId = Number(candidateEl.getAttribute('data-shelf-box'));
    if (shelfId === sourceShelfId) return;
    const shelf = state.shelves.find((s) => s.id === shelfId);
    if (!shelf || !shelf.layers[0].some((s) => s === null)) return;
    const rect = candidateEl.getBoundingClientRect();
    const clampedX = Math.max(rect.left, Math.min(clientX, rect.right));
    const clampedY = Math.max(rect.top, Math.min(clientY, rect.bottom));
    const d = Math.hypot(clientX - clampedX, clientY - clampedY);
    if (d <= bestDist) {
      bestDist = d;
      const slotIdx = findBestSlotInShelf(shelf, clientX);
      if (slotIdx !== -1) {
        nearestTarget = { shelfId, slotIdx };
      }
    }
  });
  return nearestTarget;
}

// Global Pointer Move & Up for smooth Drag-and-Drop on iPad & iPhone
window.addEventListener('pointermove', (e) => {
  if (!state.drag || e.pointerId !== state.drag.pointerId) return;
  const dist = Math.hypot(
    e.clientX - state.drag.startX,
    e.clientY - state.drag.startY
  );
  const ghostEl = document.getElementById('drag-ghost');

  if (!state.drag.isDragging && dist > 8) {
    state.drag.isDragging = true;
    soundEngine.playPickup();
    state.selectedItem = {
      shelfId: state.drag.shelfId,
      slotIdx: state.drag.slotIdx,
      item: state.drag.item,
    };
    if (state.drag.targetEl) {
      state.drag.targetEl.classList.add('selected');
    }
    document.querySelectorAll('[data-shelf-box]').forEach((boxEl) => {
      const id = Number(boxEl.getAttribute('data-shelf-box'));
      const shelf = state.shelves.find((s) => s.id === id);
      if (id !== state.drag.shelfId && shelf && shelf.layers[0].some((s) => s === null)) {
        boxEl.classList.add('can-receive');
      }
    });
    const theme = getThemeById(state.save.activeThemeId);
    if (ghostEl) {
      ghostEl.innerHTML = renderGroceryItemSvg(
        theme.items[state.drag.item.itemType % theme.items.length],
        false
      );
      ghostEl.style.display = 'block';
    }
  }

  if (state.drag.isDragging) {
    if (ghostEl) {
      ghostEl.style.left = `${e.clientX}px`;
      ghostEl.style.top = `${e.clientY}px`;
    }
    const hoverTarget = findBestDropTarget(e.clientX, e.clientY, state.drag.shelfId);
    document.querySelectorAll('[data-shelf-box]').forEach((boxEl) => {
      const id = Number(boxEl.getAttribute('data-shelf-box'));
      boxEl.classList.toggle(
        'drag-hover-target',
        Boolean(hoverTarget && hoverTarget.shelfId === id)
      );
    });
  }
});

const cleanupActiveDrag = (e, shouldDrop) => {
  if (!state.drag || e.pointerId !== state.drag.pointerId) return;
  const activeDrag = state.drag;
  state.drag = null;

  try {
    if (
      activeDrag.targetEl &&
      typeof activeDrag.targetEl.releasePointerCapture === 'function'
    ) {
      activeDrag.targetEl.releasePointerCapture(activeDrag.pointerId);
    }
  } catch {}

  const ghostEl = document.getElementById('drag-ghost');
  if (ghostEl) ghostEl.style.display = 'none';
  document.querySelectorAll('.drag-hover-target').forEach((el) => {
    el.classList.remove('drag-hover-target');
  });

  if (activeDrag.isDragging) {
    state.suppressNextClickUntil = Date.now() + 80;
    let moved = false;
    if (shouldDrop) {
      const target = findBestDropTarget(e.clientX, e.clientY, activeDrag.shelfId);
      if (target) {
        moved = performMove(
          activeDrag.shelfId,
          activeDrag.slotIdx,
          target.shelfId,
          target.slotIdx
        );
      }
    }
    if (!moved) {
      state.selectedItem = null;
      renderApp();
    }
  }
};

window.addEventListener('pointerup', (e) => cleanupActiveDrag(e, true));
window.addEventListener('pointercancel', (e) => cleanupActiveDrag(e, false));

// Resume suspended Web Audio context on first user gesture (required by iOS Safari / Chrome)
const resumeAudioOnGesture = () => {
  if (soundEngine.ctx && soundEngine.ctx.state === 'running') return;
  if (soundEngine.musicEnabled || soundEngine.sfxEnabled) {
    soundEngine.ensure();
  }
};
window.addEventListener('pointerdown', resumeAudioOnGesture, { passive: true });
window.addEventListener('keydown', resumeAudioOnGesture, { passive: true });

// Initialize Game on Load (resuming any mid-level saved board cleanly)
function initGameOnLoad() {
  const resumed = loadSavedBoard();
  if (resumed) {
    state.isRelaxMode = resumed.isRelaxMode;
    state.relaxDifficulty = resumed.relaxDifficulty;
    state.relaxRound = resumed.relaxRound;
    state.relaxSpec = resumed.relaxSpec;
    state.shelves = resumed.shelves;
    state.undoStack = resumed.undoStack;
    applyThemeCssVariables();
    renderApp();
  } else {
    startLevelBoard(getActiveLevelSpec(), false);
  }
}

initGameOnLoad();
