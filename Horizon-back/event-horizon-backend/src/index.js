import { Pool } from '@neondatabase/serverless';

function withCors(response) {
  const headers = new Headers(response.headers);
  headers.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  headers.set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  headers.set('Access-Control-Allow-Headers', 'Content-Type');
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

   // For OPTIONS (preflight)
if (request.method === 'OPTIONS') {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:3000',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    }
  });
}

    // For GET /api/events
    if (request.method === 'GET' && url.pathname === '/api/events') {
      const pool = new Pool({ connectionString: env.SUPABASE_DB_URL });
      const client = await pool.connect();
      const { rows } = await client.query('SELECT * FROM events');
      client.release();
      return withCors(new Response(JSON.stringify(rows), {
        headers: { 'Content-Type': 'application/json' }
      }));
    }

    // For POST /api/events
    if (request.method === 'POST' && url.pathname === '/api/events') {
      const body = await request.json();
      if (!body.name || !body.start_date || !body.end_date) {
        return withCors(new Response(JSON.stringify({ error: "Missing required fields" }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }));
      }

      const pool = new Pool({ connectionString: env.SUPABASE_DB_URL });
      const client = await pool.connect();
      try {
        const result = await client.query(
          `INSERT INTO events (name, description, start_date, end_date, venue)
           VALUES ($1, $2, $3, $4, $5)
           RETURNING *`,
          [body.name, body.description || '', body.start_date, body.end_date, body.venue || '']
        );
        client.release();
        return withCors(new Response(JSON.stringify(result.rows[0]), {
          status: 201,
          headers: { 'Content-Type': 'application/json' }
        }));
      } catch (e) {
        client.release();
        return withCors(new Response(JSON.stringify({ error: e.message }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        }));
      }
    }

    // Catch-all (Not found/other)
    return withCors(new Response('Hello World!', { status: 404 }));
  }
};
