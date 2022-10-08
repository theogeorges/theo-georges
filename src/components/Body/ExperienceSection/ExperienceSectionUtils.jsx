import { differenceInMonths, intlFormat } from "date-fns";

export const buildExperienceDate = (experience) => {
  return (
    intlFormat(
      experience.start,
      { month: "short", year: "numeric" },
      { locale: "fr-FR" }
    ) +
    " - " +
    intlFormat(
      experience.end,
      { month: "short", year: "numeric" },
      { locale: "fr-FR" }
    ) +
    " (" +
    differenceInMonths(experience.end, experience.start) +
    " mois)"
  );
};
