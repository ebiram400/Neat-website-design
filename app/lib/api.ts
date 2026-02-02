export async function getProfile() {
  const res = await fetch('https://example.com/api/profile', {
    cache: 'no-store',
  });

  if (!res.ok) throw new Error('Failed');

  return res.json();
}

export async function updateProfile(data: { name: string }) {
  const res = await fetch('https://example.com/api/profile', {
    method: 'POST',
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error('Failed');

  return res.json();
}
