import { ArrowUpRight } from "lucide-react";

const BlogsIntro = ({ head }) => {
    return (
        <div className="">
            <h2 className="text-4xl text-center font-bold tracking-tight text-text-primary sm:text-5xl lg:text-[50px]">
                {head}
            </h2>
        </div>
    );
};

export default BlogsIntro;