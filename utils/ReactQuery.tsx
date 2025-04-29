"use client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import React, { useState } from "react";

/* ReactQueryProvider Component:
 * This component wraps its children with a QueryClientProvider, which allows
 * React Query to manage server state within the application.*/
const ReactQueryProvider = ({ children }: { children: React.ReactNode }) => {
  // Initialize a QueryClient instance only once using React's useState.
  const [queryClient] = useState(() => new QueryClient());
  // Provide the QueryClient instance to the QueryClientProvider,
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}; // ReactQueryProvider()

export default ReactQueryProvider;
