function pluralize(count, singular) {
  if (!singular) {
    throw new Error("Pluralize: You must provide a singular option");
  }

  if (count === 1) return singular;

  return singular + "s";
}

export { pluralize };
