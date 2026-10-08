import { motion } from "motion/react";

function ProjectCard({
  variants,
  number,
  title,
  titleLink,
  description,
  image,
  imageAlt,
  reverse = false,
  onOpen,
}) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onOpen?.();
    }
  };

  return (
    <motion.div
      variants={variants}
      role="button"
      tabIndex={0}
      aria-label={`Åpne prosjektet ${title}`}
      onClick={onOpen}
      onKeyDown={handleKeyDown}
      className={`group flex cursor-pointer flex-col items-center gap-6 rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-8 lg:items-center lg:gap-12 dark:focus-visible:ring-offset-black ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
    >
      {/* Bildet ligger alltid først i DOM-en, så det havner øverst
          på mobil uansett — reverse styrer kun venstre/høyre-siden
          på desktop via flex-row/flex-row-reverse. */}
      <div className="w-full sm:w-3/4 lg:w-1/2">
        {/* layoutId gjør at bildet "flyter" over i modalen når den åpnes */}
        <motion.div
          layoutId={`project-image-${number ?? title}`}
          className="overflow-hidden rounded-2xl"
        >
          <img
            src={image}
            alt={imageAlt}
            className="h-48 w-full rounded-2xl object-cover ring-1 ring-black/10 transition-transform duration-500 group-hover:scale-[1.03] sm:h-56 md:h-64 dark:ring-white/10 lg:h-80"
          />
        </motion.div>
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
                onClick={(e) => e.stopPropagation()}
                className="font-light text-blue-500 hover:underline"
              >
                {titleLink.label}
              </a>
            </>
          )}
        </h2>

        {/* line-clamp kutter teksten etter 4 linjer og legger på "…" */}
        <p className="line-clamp-4 text-sm font-medium leading-relaxed sm:text-base lg:text-lg">
          {description}
        </p>

        <span className="mt-4 inline-flex w-fit items-center gap-1 text-sm font-medium text-blue-500 group-hover:underline sm:text-base">
          Les mer
        </span>
      </div>
    </motion.div>
  );
}

export default ProjectCard;