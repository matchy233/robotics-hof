import fs from 'fs';

// file is in public/data/rss_string.txt
export const rss_hof = fs.readFileSync("public/data/rss_string.txt", "utf-8");

export const sr_hof = fs.readFileSync("public/data/sr_string.txt", "utf-8");

export const ijrr_hof = fs.readFileSync("public/data/ijrr_string.txt", "utf-8");

export const tro_hof = fs.readFileSync("public/data/tro_string.txt", "utf-8");

export const all_hof = fs.readFileSync("public/data/joined.txt", "utf-8");

export const last5_hof = fs.readFileSync("public/data/joined_last5.txt", "utf-8");
