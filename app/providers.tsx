"use client";

import Navigation from "@/components/Navigation";
import { FavoriteListProvider } from "@/contexts";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <FavoriteListProvider>
      <Navigation>{children}</Navigation>
    </FavoriteListProvider>
  );
};

export default Providers;
