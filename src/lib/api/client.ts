import { API_BASE_URL } from '~/lib/config';

export async function apiFetch(endpoint: string, options: RequestInit = {}) {
    // Ensure we are in browser environment
    if (typeof window === 'undefined') return fetch(`${API_BASE_URL}${endpoint}`, options);

    let token = sessionStorage.getItem('access_token');

    const headers = {
        'Content-Type': 'application/json',
        ...(options.headers || {}),
    } as Record<string, string>;

    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    let response = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...options,
        headers,
    });

    if (response.status === 401) {
        // Try refresh
        const refreshToken = sessionStorage.getItem('refresh_token');
        if (refreshToken) {
            try {
                const refreshRes = await fetch(`${API_BASE_URL}/api/v1/auth/refresh`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ refresh_token: refreshToken })
                });

                if (refreshRes.ok) {
                    const data = await refreshRes.json();
                    sessionStorage.setItem('access_token', data.access_token);
                    // Retry original request
                    headers['Authorization'] = `Bearer ${data.access_token}`;
                    response = await fetch(`${API_BASE_URL}${endpoint}`, {
                        ...options,
                        headers,
                    });
                } else {
                    // Refresh failed, logout
                    sessionStorage.clear();
                    window.location.href = '/login';
                    throw new Error('Session expired');
                }
            } catch (e) {
                sessionStorage.clear();
                window.location.href = '/login';
                throw e;
            }
        } else {
            // No refresh token, redirect to login
            // Only redirect if we are not already on login page to avoid loops (though usually this is called from protected pages)
            if (!window.location.pathname.includes('/login')) {
                window.location.href = '/login';
            }
        }
    }

    return response;
}
