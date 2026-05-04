"use client";

import Image from "next/image";

import Header from "@/components/Header";
import Introduction from "@/components/Introduction";
import { useState, useEffect } from "react";
import wireframingImg from "../../../public/assets/images/blog-wireframing.png";
import boxShadowImg from "../../../public/assets/images/blog-box-shadow.png";
import uiuxReplicationImg from "../../../public/assets/images/blog-ui-ux-replication.png";
import blogIcon from "../../../public/assets/icons/blog.svg";
import Socials from "@/components/Socials";
type Theme = "dark" | "light";
const BlogPage = () => {
    const [theme, setTheme] = useState<Theme>("dark");
              
    // 1. Theme Persistence Logic
     useEffect(() => {
      const savedTheme =
      (localStorage.getItem("theme") as Theme | null) || "dark";
        setTheme(savedTheme);
    }, []);
              
    useEffect(() => {
         localStorage.setItem("theme", theme);
    }, [theme]);
    return (
        <>
            <div className="pt-8">
                <div className="w-[90%] mx-auto">
                    <Header theme={theme} setTheme={setTheme} />
                </div>
                <main>
                    <div className="w-[90%] mx-auto mt-8 mb-24">
                        <Introduction theme={theme} />
                        <p className="text-lg md:text-2xl text-white/[0.69]">
                            I am a freelance writer dedicated to writing blogs and articles on UI/UX and any other thing I find interesting
                            things. I see writing as a way of giving back to the community. I constantly blog on Hashnode.
                        </p>
                    </div>
                    <section className="grid gap-8 justify-center gap-x-[calc(2rem+5vw)] auto-rows-fr mb-24 md:w-[90%] md:mx-auto md:grid-cols-[repeat(auto-fill,minmax(400px,1fr))]">
                        <article className="max-w-[520px]">
                            <figure>
                                <Image
                                    src={wireframingImg}
                                    alt=""
                                    className="w-full object-cover xs:w-[90%] xs:mx-auto xs:rounded-[0.875rem] md:w-full"
                                />
                                <figcaption className="p-6">
                                    <h3 className="text-white/[0.69] font-medium text-2xl mb-3">Wireframing is not a big deal (The non-designer approach)</h3>
                                    <p className="text-white/[0.79] text-base">
                                        Image attribution by Photo by{" "}
                                        <a
                                            href="https://unsplash.com/@sigmund?utm_source=Hashnode&utm_medium=referral"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="underline"
                                        >Sigmund</a>
                                        {" "}on{" "}
                                        <a
                                            href="https://unsplash.com/?utm_source=Hashnode&utm_medium=referral"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="underline"
                                        >Unsplash</a>
                                    </p>
                                </figcaption>
                            </figure>
                        </article>
                        <article className="max-w-[520px]">
                            <figure>
                                <Image
                                    src={boxShadowImg}
                                    alt=""
                                    className="w-full object-cover xs:w-[90%] xs:mx-auto xs:rounded-[0.875rem] md:w-full"
                                />
                                <figcaption className="p-6">
                                    <h3 className="text-white/[0.69] font-medium text-2xl mb-3">The mystery of the box-shadow.</h3>
                                </figcaption>
                            </figure>
                        </article>
                        <article className="max-w-[520px]">
                            <figure>
                                <Image
                                    src={uiuxReplicationImg}
                                    alt=""
                                    className="w-full object-cover xs:w-[90%] xs:mx-auto xs:rounded-[0.875rem] md:w-full"
                                />
                                <figcaption className="p-6">
                                    <h3 className="text-white/[0.69] font-medium text-2xl mb-3">Terms in UI/UX replication</h3>
                                    <p>
                                        Image attribution by Photo by{" "}
                                        <a
                                            href="https://unsplash.com/@fakurian?utm_source=Hashnode&utm_medium=referral"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="underline"
                                        >Fakurian Design</a>
                                        {" "}on{" "}
                                        <a
                                            href="https://unsplash.com/?utm_source=Hashnode&utm_medium=referral"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="underline"
                                        >Unsplash</a>
                                    </p>
                                </figcaption>
                            </figure>
                        </article>
                        <a
                            href="https://arbydesign.hashnode.dev"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="max-w-[520px] bg-gray-300/[0.21] grid place-content-center max-h-[580px] xs:rounded-[0.875rem]">
                            <figure className="flex items-center gap-4">
                                <Image
                                    src={blogIcon}
                                    alt="Blog icon"
                                />
                                <figcaption className="font-extralight italic text-2xl md:text-[3.125rem]">Visit my blog</figcaption>
                            </figure>
                        </a>
                    </section>

                    <div className="pb-8 px-[5%]">
                        <Socials />
                    </div>
                </main>
            </div>
        </>
    );
}

export default BlogPage;