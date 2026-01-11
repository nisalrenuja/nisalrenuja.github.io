import Parser from "rss-parser";

type MediumPost = {
  title: string;
  link: string;
  pubDate: string;
  creator: string;
  content: string;
  contentSnippet: string;
  categories: string[];
  thumbnail?: string;
};

export async function getMediumPosts(): Promise<MediumPost[]> {
  const parser = new Parser();
  const feedUrl = "https://medium.com/feed/@nisalrenuja";

  try {
    const feed = await parser.parseURL(feedUrl);
    
    // Process the items to extract a thumbnail if possible
    // Medium feeds usually put the image in the content
    const posts = feed.items.map((item: any) => {
      // Simple regex to extract the first image tag src if it exists in content
      const imgMatch = item['content:encoded']?.match(/<img[^>]+src="([^">]+)"/);
      const output: MediumPost = {
        title: item.title || "Untitled",
        link: item.link || "#",
        pubDate: item.pubDate || "",
        creator: item.creator || "",
        content: item['content:encoded'] || item.content || "",
        contentSnippet: item.contentSnippet || "",
        categories: item.categories || [],
        thumbnail: imgMatch ? imgMatch[1] : undefined
      };
      return output;
    });

    return posts;
  } catch (error) {
    console.error("Error fetching Medium feed:", error);
    return [];
  }
}
