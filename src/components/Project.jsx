import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <>
      <div
        className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        <div> {/* This div holds the title and tags */}
          <p className="text-2xl">{title}</p> {/* THIS LINE IS CRUCIAL FOR THE TITLE */}
          <div className="flex flex-wrap gap-3 mt-6">
            {tags.map((tag) => (
              <span
                key={tag.id}
                className="group flex flex-col items-center justify-center hover-animation" // Added 'group' class here
              >
                <img
                  src={tag.path}
                  alt={tag.name}
                  className="w-7 h-7 mb-1"
                />
                <p className="text-xs text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200">{tag.name}</p>
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-1 cursor-pointer hover-animation"
        >
          Read More
          <img src="assets/arrow-right.svg" className="w-5" />
        </button>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;
