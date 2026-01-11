import { getMediumPosts } from "@/lib/medium";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Section from "@/components/Section";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation"; // Reusing navigation, might need adjustment if links are anchors

export default async function BlogPage() {
  const posts = await getMediumPosts();

  return (
    <main className="flex flex-col min-h-screen">
      {/* 
        Ideally we want a Header specific for inner pages or reuse Navigation.
        Navigation is designed with #anchors for the home page.
        However, Next.js Link handles scrolling to #id on the same page, or navigating to /#id.
        Let's try reusing Navigation. 
      */}
      <Navigation /> 
      
      <div className="pt-24 md:pt-32 pb-12 px-6">
         <Section className="py-0">
             <div className="flex flex-col gap-6 mb-12">
                 <Link href="/#blog" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors w-fit">
                    <ArrowLeft size={16} className="mr-2" /> Back to Home
                 </Link>
                 <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                    All Articles
                 </h1>
                 <p className="text-xl text-muted-foreground max-w-2xl">
                    A collection of my thoughts, tutorials, and insights on software engineering, cloud architecture, and more.
                 </p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, index) => (
                    <article
                        key={index}
                        className="flex flex-col h-full bg-card rounded-2xl overflow-hidden border border-border transition-all hover:shadow-lg hover:border-accent/50 group"
                    >
                        {/* <div className="relative h-56 w-full overflow-hidden bg-muted">
                        {post.thumbnail ? (
                            <Image
                            src={post.thumbnail}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        ) : (
                            <div className="flex items-center justify-center w-full h-full text-muted-foreground">
                            <span className="text-sm">No Image</span>
                            </div>
                        )}
                        </div> */}
                        <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                            <time dateTime={post.pubDate}>
                            {new Date(post.pubDate).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                            })}
                            </time>
                            <span className="px-2 py-1 rounded-full bg-muted/50 font-medium">Medium</span>
                        </div>
                        
                        <h3 className="text-xl font-bold mb-3 line-clamp-2 leading-tight group-hover:text-accent transition-colors">
                            <a href={post.link} target="_blank" rel="noopener noreferrer">
                            {post.title}
                            </a>
                        </h3>
                        
                        <div 
                            className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-grow"
                            dangerouslySetInnerHTML={{ __html: post.contentSnippet.substring(0, 150) + "..." }}
                        />

                        <div className="pt-4 mt-auto border-t border-border/50 flex justify-between items-center">
                            <a
                            href={post.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm font-medium text-foreground hover:text-accent transition-colors"
                            >
                            Read Article <ExternalLink size={14} className="ml-1" />
                            </a>
                        </div>
                        </div>
                    </article>
                ))}
             </div>
         </Section>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </main>
  );
}
