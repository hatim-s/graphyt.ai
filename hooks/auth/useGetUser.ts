import { createSupabaseClient } from "@/supabase/client";
import { User } from "@/types/user";
import { useEffect, useState } from "react";

export function useGetUser() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const supabase = createSupabaseClient();
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        console.error("[ERR] Error while fetching user details", error);
      }
      setUser(data.user as unknown as User);
    };

    getUser();
  }, []);

  return user;
}
