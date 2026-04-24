"use client";

import { useMemo, useState } from "react";

export function usePagination<T>(items: T[], pageSize = 6) {
  const [page, setPage] = useState(1);

  const paginatedItems = useMemo(() => {
    const start = (page - 1) * pageSize;
    return items.slice(start, start + pageSize);
  }, [items, page, pageSize]);

  const totalPages = Math.ceil(items.length / pageSize);

  return { page, setPage, totalPages, paginatedItems };
}
