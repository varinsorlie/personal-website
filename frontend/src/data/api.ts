const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

// Get all lists
export async function getLists() {
  const res = await fetch(`${BASE_URL}/lists`);

  if (!res.ok) {
    throw new Error("Failed to fetch lists");
  }

  return res.json();
}

// Get one list
export async function getList(slug: string) {
  const res = await fetch(`${BASE_URL}/lists/${slug}`);

  if (!res.ok) {
    throw new Error("List not found");
  }

  return res.json();
}

// Get all travelTips
export async function getTravelTips() {
  const res = await fetch(`${BASE_URL}/travelTips`);

  if (!res.ok) {
    throw new Error("Failed to fetch travelTips");
  }

  return res.json();
}

// Get one TravelTip
export async function getTravelTip(slug: string) {
  const res = await fetch(`${BASE_URL}/travelTips/${slug}`);

  if (!res.ok) {
    throw new Error("travelTip not found");
  }

  return res.json();
}