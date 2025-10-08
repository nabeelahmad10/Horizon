import postgres from "postgres";
const sql = postgres("postgresql://postgres.kcztjkigohnoemokrnzh:kT8mOm7v6fo9xWuC@aws-1-us-east-2.pooler.supabase.com:6543/postgres");
async function test() {
  const result = await sql`SELECT NOW()`;
  console.log(result);
}
test();

