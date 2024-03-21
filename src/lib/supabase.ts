import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabase = createClient(
"https://iberokcutpfxxhbebtts.supabase.co",
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImliZXJva2N1dHBmeHhoYmVidHRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU0NTc5NDQsImV4cCI6MjAyMTAzMzk0NH0.82x6OmMl-CC9t6yuwZTVxFfBqWJHJHFk7OP9vJC12yw"
);
