import { Pool } from '@neondatabase/serverless';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // For GET /api/events
    if (request.method === 'GET' && url.pathname === '/api/events') {
      const pool = new Pool({ connectionString: env.SUPABASE_DB_URL });
      const client = await pool.connect();
      const { rows } = await client.query('SELECT * FROM events');
      client.release();
      return new Response(JSON.stringify(rows), {
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
      });
    }

    // For POST /api/events
    if (request.method === 'POST' && url.pathname === '/api/events') {
      const body = await request.json();
      // Expecting: { name, description, start_date, end_date, venue }
      if (!body.name || !body.start_date || !body.end_date) {
        return new Response(JSON.stringify({ error: "Missing required fields" }), {
          status: 400,
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });
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
        return new Response(JSON.stringify(result.rows[0]), {
          status: 201,
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });
      } catch (e) {
        client.release();
        return new Response(JSON.stringify({ error: e.message }), {
          status: 500,
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });
      }
    }

    // Allow OPTIONS for CORS & preflight
    if (request.method === 'OPTIONS') {
      return new Response('', {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type'
        }
      });
    }

    return new Response('Hello World!');
  }
};
