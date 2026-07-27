export const generateMockContent = async (params: any) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Dummy response based on user input
  const { topic, platform } = params;
  
  return {
    caption: `✨ Upgrade your everyday style with our premium ${topic || 'product'}. Designed for elegance, durability, and everyday convenience. Perfect for your next adventure! 🌟`,
    description: `Looking for a premium ${topic || 'product'}? Our exclusive collection combines timeless design with long-lasting quality. Whether for daily use or gifting, it's the perfect choice. Available now on our store!`,
    hashtags: `#${topic?.replace(/\s+/g, '') || 'Premium'} #Handmade #Luxury #Style #Trending #Fashion #ShopNow #GiftIdeas #${platform}Marketing`,
    seoKeywords: `${topic?.toLowerCase() || 'premium product'}, genuine quality, gift for men, buy online, trending style`,
    title: `Premium Handmade ${topic || 'Product'}`,
    cta: `Shop Now →`,
    emojis: `👜 ✨ 🔥 🎁 💼`,
  };
};
