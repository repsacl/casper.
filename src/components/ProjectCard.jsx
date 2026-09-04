import { motion } from "motion/react";

function ProjectCard({
  variants,
  number,
  title,
  titleLink,
  description,
  linkHref,
  linkLabel,
  image,
  imageAlt,
  reverse = false,
}) {
  return (
    <motion.div
      variants={variants}
      className={`flex flex-col items-center gap-6 lg:items-center lg:gap-12 ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      {/* Bildet ligger alltid først i DOM-en, så det havner øverst
          på mobil uansett — reverse styrer kun venstre/høyre-siden
          på desktop via flex-row/flex-row-reverse. */}
      <div className="w-full sm:w-3/4 lg:w-1/2">
        <img
          src={image}
          alt={imageAlt}
          className="h-48 w-full rounded-2xl object-cover ring-1 ring-black/10 sm:h-56 md:h-64 dark:ring-white/10 lg:h-80"
        />
      </div>

      <div className="flex w-full flex-col lg:w-1/2">
        {number && (
          <span className="mb-2 text-sm text-gray-400 dark:text-gray-500">
            {number}
          </span>
        )}

        <h2 className="mb-3 text-xl font-bold sm:text-2xl">
          {title}
          {titleLink && (
            <>
              {" "}
              <a
                href={titleLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-light text-blue-500 hover:underline"
              >
                {titleLink.label}
              </a>
            </>
          )}
        </h2>

        <p className="text-sm font-medium leading-relaxed sm:text-base lg:text-lg">
          {description}
          {linkHref && (
            <a
              href={linkHref}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 font-light text-blue-500 hover:underline"
            >
              {linkLabel}
            </a>
          )}
        </p>
      </div>
    </motion.div>
  );
}

export default ProjectCard;