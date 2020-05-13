import fs from "fs";
import path from "path";

const gamesDirectory = path.join(process.cwd(), "games");

export function getGamesData() {
  const fullPath = path.join(gamesDirectory, "TJPP.json");
  const rawData = fs.readFileSync(fullPath);
  const data = JSON.parse(rawData);
  return data;
}
