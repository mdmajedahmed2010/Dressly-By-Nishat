import { ProductStatus } from '@prisma/client';
import { prisma } from '../lib/db';

const categoriesData = [
  {
    name: 'Organza Suits',
    slug: 'organza-luxury-suits',
    image: '/images/728637838_1615289890013049_2658242435754841211_n_hq.jpg',
  },
  {
    name: 'Chiffon Edition',
    slug: 'chiffon-embroidered-edition',
    image: '/images/728760397_1682205009864129_8763326460166934979_n_hq.jpg',
  },
  {
    name: 'Festive Wear',
    slug: 'festive-party-wear',
    image: '/images/729139236_1750557062791862_7222316665621924949_n_hq.jpg',
  },
  {
    name: 'Bridal Special',
    slug: 'bridal-special-collection',
    image: '/images/730749821_1615344106197724_7135912925053885740_n_hq.jpg',
  },
];

const images = [
  '/images/728637838_1615289890013049_2658242435754841211_n_hq.jpg',
  '/images/728760397_1682205009864129_8763326460166934979_n_hq.jpg',
  '/images/729139236_1750557062791862_7222316665621924949_n_hq.jpg',
  '/images/730749821_1615344106197724_7135912925053885740_n_hq.jpg',
  '/images/731031468_1904149560270689_3282748209998895624_n_hq.jpg',
  '/images/731093476_27189608070706041_6749501909087384384_n_hq.jpg',
  '/images/731808899_1334308374831843_7222113530617211681_n_hq.jpg',
  '/images/732675634_955669617521797_2773457596092441066_n_hq.jpg',
  '/images/733157142_1920826938559927_4791560861567041341_n_hq.jpg',
  '/images/733209465_1571577664628184_4158579103692325024_n_hq.jpg',
  '/images/733443298_1029214096246585_915180975862635647_n_hq.jpg',
  '/images/734384536_1562219958955593_3047803468069606658_n_hq.jpg',
  '/images/734664308_1669348764338039_7400307755056890326_n_hq.jpg',
  '/images/734685929_959330833809272_6343974826253921814_n_hq.jpg',
];

const productsData = [
  { name: 'Royal Emerald Organza Edition', price: 6500, categoryIndex: 0 },
  { name: 'Crimson Red Handwork Organza', price: 7200, categoryIndex: 0 },
  { name: 'Pastel Pink Premium Organza Suit', price: 5500, categoryIndex: 0 },
  { name: 'Midnight Blue Chiffon Elegance', price: 8500, categoryIndex: 1 },
  { name: 'Mint Green Sequined Chiffon', price: 8900, categoryIndex: 1 },
  { name: 'Royal Maroon Heavy Zari Chiffon', price: 9500, categoryIndex: 1 },
  { name: 'Festive Gold Threadwork Edition', price: 12500, categoryIndex: 2 },
  { name: 'Teal Green Bridal Wear', price: 15000, categoryIndex: 2 },
  { name: 'Ruby Red Velvet Accent Suit', price: 11000, categoryIndex: 2 },
  { name: 'Sapphire Blue Wedding Pret', price: 13500, categoryIndex: 2 },
  { name: 'Bridal Heritage Heavy Velvet', price: 25000, categoryIndex: 3 },
  { name: 'Golden Zari Royal Bridal Suit', price: 28000, categoryIndex: 3 },
  { name: 'Exquisite Rose Gold Bridal Set', price: 22000, categoryIndex: 3 },
  { name: 'Premium Maroon Reception Couture', price: 30000, categoryIndex: 3 },
];

async function main() {
  console.log('Start seeding...');

  // Clean up existing data
  await prisma.productVariant.deleteMany({});
  await prisma.product.deleteMany({});
  await prisma.category.deleteMany({});

  // 1. Create Categories
  console.log('Creating Categories...');
  const createdCategories = [];
  for (const cat of categoriesData) {
    const category = await prisma.category.create({
      data: {
        name: cat.name,
        slug: cat.slug,
        image: cat.image,
      },
    });
    createdCategories.push(category);
    console.log(`Created category: ${category.name}`);
  }

  // 2. Create Products and Variants
  console.log('Creating Products...');
  for (let i = 0; i < productsData.length; i++) {
    const pData = productsData[i];
    const categoryId = createdCategories[pData!.categoryIndex]?.id || '';
    const imagePath = images[i]!;

    const product = await prisma.product.create({
      data: {
        name: pData!.name,
        slug: pData!.name.toLowerCase().replace(/\s+/g, '-'),
        description: `Experience the epitome of elegance with our ${pData!.name}. Perfect for any special occasion. Made with premium quality authentic materials.`,
        basePrice: pData!.price,
        categoryId: categoryId,
        status: ProductStatus.ACTIVE,
        isFeatured: true,
        seoTitle: pData!.name,
        seoDesc: `Buy ${pData!.name} from Sew In Style by Farzana.`,
        ogImage: imagePath,
        variants: {
          create: [
            {
              sku: `SIS-2026-${i + 1}A`,
              size: 'Unstitched',
              color: 'As Pictured',
              price: pData!.price,
              stock: 15,
              images: [imagePath],
            },
          ],
        },
      },
    });

    console.log(`Created product: ${product.name}`);
  }

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
