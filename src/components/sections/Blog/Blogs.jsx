import { blogs } from "../../../assets/assets";
import BlogsIntro from "./BlogsIntro";
import BlogCard from "./BlogCard";

const Blogs = () => {
    return (
        <section className="relative overflow-hidden px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
            <div className="mx-auto max-w-7xl">
                <BlogsIntro head={blogs.head} />

                <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
                    {blogs.content.map((blog, index) => (
                        <BlogCard
                            key={blog.href}
                            blog={blog}
                            index={index}
                            buttonText={blogs.button}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blogs;