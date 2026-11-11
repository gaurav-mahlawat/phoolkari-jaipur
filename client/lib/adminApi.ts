export const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
export async function adminRequest(path: string, token?: string, init: RequestInit = {}) {
  const response = await fetch(`${API_BASE}${path}`, { ...init, headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}), ...init.headers } });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(payload.message || `Request failed (${response.status})`);
  return payload;
}
