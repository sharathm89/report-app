import { format } from "date-fns";
import Constants from "./constants";

export const getColorCode = (value) => {
  const typeValue = value.toLowerCase();

  if (typeValue === "negative" || typeValue === "mandatory" || typeValue === "very high") {
    return Constants.COLORS.ERROR;
  } else if (typeValue === "high") {
    return Constants.COLORS.PRIMARY;
  } else if (typeValue === "optional" || typeValue === "very low") {
    return Constants.COLORS.BAY_OF_MANY;
  } else if (typeValue === "medium") {
    return Constants.COLORS.WARNING;
  }

  return "inherit";
};

export const getFontColorCode = (value) => {
  const typeValue = value.toLowerCase();

  if (typeValue === "negative" || typeValue === "mandatory" || typeValue === "very high") {
    return Constants.COLORS.WHITE;
  } else if (typeValue === "optional" || typeValue === "very low") {
    return Constants.COLORS.WHITE;
  } else if (typeValue === "none") {
    return Constants.COLORS.MINE_SHAFT;
  }

  return "inherit";
};

export const getFormattedDate = (value, type = "type1") => {
  if (!value) return null;

  if (value && value.toString().includes("0000")) {
    return null;
  }

  if (type === "type1") {
    return format(new Date(value), "dd MMM, yyyy"); // 22 Jan, 2023
  }

  return value;
};
