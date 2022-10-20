import { typography } from "../../theme/typography";
import { color } from "./color";

const BASE = {
    fontSize: 16,
    color: color,
    fontFamily: typography.primary,
}

const BASE_BOLD = {
    fontSize: 16,
    color: color.white,
    fontFamily: typography.primaryBold,
}

const BOLD = {
    color: color.white,
    fontFamily: typography.secondary,
}

export const presets = {
    default: BASE,
    bold: BOLD,
    h1: {
        ...BOLD,
        fontSize: 32,
    },
    h2: {
        ...BOLD,
        fontSize: 28,
    },
    h3: {
        ...BASE_BOLD,
        fontSize: 24,
    },
    h4: {
        ...BASE_BOLD,
        fontSize: 18,
    },
    small: {
        ...BASE,
        fontSize: 12,
    }
};