import { getMediumPosts } from "@/lib/medium";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import Section from "./Section";

export default async function BlogSection() {
  const posts = await getMediumPosts();
  const recentPosts = posts.slice(0, 3); // Take top 3

  return (
    <Section id="blog" className="py-16 md:py-24">
      <div className="flex flex-col gap-12">
        <div className="grid md:grid-cols-3 gap-12 items-end">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground md:col-span-2">
            Recent Writing
          </h2>
          <div className="md:text-right hidden md:block">
            <Link
              href="/blog"
              className="inline-flex items-center text-lg font-medium text-accent hover:underline decoration-2 underline-offset-4"
            >
              View all articles <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentPosts.map((post, index) => (
            <article
              key={index}
              className="flex flex-col h-full bg-card rounded-2xl overflow-hidden border border-border transition-all hover:shadow-lg hover:border-accent/50 group"
            >
              {/* <div className="relative h-48 w-full overflow-hidden bg-muted">
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

        <div className="md:hidden text-center mt-4">
            <Link
              href="/blog"
              className="inline-flex items-center px-6 py-3 rounded-full bg-foreground text-background font-semibold hover:opacity-90 transition-opacity"
            >
              View All Articles <ArrowRight size={18} className="ml-2" />
            </Link>
        </div>
      </div>
    </Section>
  );
}
