"use client";
import Header from "@/components/Header";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Blog from "@/components/Blog";

export default async function InnerBlog() {
  const searchParams = useSearchParams();
  const idBlog = searchParams.get("id");
  async function getData() {
    const res = await fetch("https://vazilegal.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
      body: JSON.stringify({
        query: `
         query post($id: ID! = "${idBlog}") {
       post(id: $id){
      	title
        content
        commentCount
        date
         comments{
          nodes{
            content
          }
        }
        featuredImage{
          node{
            sourceUrl
          }
        }
      }
    }
        `,
      }),
    });

    const json = await res.json();
    return json.data.post;
  }
  const data = await getData();
  // const search = searchParams.get('id');
  // console.log(search);
  return (
    <main>
      <div>
        <Header />
      </div>
      <Blog post={data} />
    </main>
  );
}
