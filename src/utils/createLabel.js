export const createLabel = (labelId) => {
  const labelLists = [
    { id: 1, description: "Urgent", color: "#ca3521" },
    { id: 2, description: "Important", color: "#0b66e4" },
    { id: 3, description: "Medium", color: "#e1b205" },
    { id: 4, description: "Low", color: "#4cce97" },
  ];
  const label = labelLists.find((el) => el.id === labelId);
  return label;
};
