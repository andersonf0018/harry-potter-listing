"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

import { useFavoriteListContext } from "@/contexts";
import type { House } from "@/types";
import HouseIcon from "../HouseIcon";
import FavoriteIcon from "../FavoriteIcon";

interface PaginationProps<T> {
  children: (item: T) => React.ReactNode;
  data: T[];
  title: string;
  searchKey: keyof T;
  pageSize?: number;
  isHouse?: boolean;
}

const Pagination = <T,>({
  children,
  data,
  title,
  searchKey,
  pageSize = 12,
  isHouse = false,
}: PaginationProps<T>) => {
  const router = useRouter();
  const { isFavoriteHouse, setFavoriteHouse } = useFavoriteListContext();
  const [filteredData, setFilteredData] = useState(data);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const calculateTotalPages = (resultsQty: number, pageSize: number) => {
    return Math.ceil(resultsQty / pageSize);
  };

  useEffect(() => {
    const totalPages = calculateTotalPages(filteredData.length, pageSize);
    setTotalPages(totalPages);
  }, [filteredData.length, pageSize]);

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const handleTypeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
  };

  const handleClickSearch = () => {
    setPage(1);
    setFilteredData(
      data.filter((item) =>
        (item[searchKey] as string).toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  const handleSearchOnEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleClickSearch();
    }
  };

  const handleGoBackToHome = () => {
    router.push("/");
  };

  const paginatedData = filteredData.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  const hasResults = paginatedData.length > 0;

  const handleFavoriteClick = () => {
    if (isFavoriteHouse(title as House)) {
      setFavoriteHouse(null);
    } else {
      setFavoriteHouse(title as House);
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-start items-start mb-5 md:flex-row md:items-center md:justify-between gap-2">
        {isHouse ? (
          <div className="flex items-center gap-2">
            <HouseIcon house={title as House} width={50} height={50} />
            <h1 className="text-2xl font-bold">
              {title} ({filteredData.length})
            </h1>
            <FavoriteIcon
              onClick={handleFavoriteClick}
              isFavorite={isFavoriteHouse(title as House)}
            />
          </div>
        ) : (
          <h1 className="text-2xl font-bold">
            {title} ({filteredData.length})
          </h1>
        )}
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 rounded-md p-2 text-black"
              onChange={handleTypeSearch}
              onKeyDown={handleSearchOnEnter}
            />
            <button
              className="bg-blue-500 text-white px-4 py-3 rounded hover:bg-blue-600"
              onClick={handleClickSearch}
            >
              <Search size={16} />
            </button>
          </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {hasResults ? (
          paginatedData.map((item) => children(item))
        ) : (
          <div>
            <p className="text-gray-300">No results found</p>
            <button
              className="bg-blue-500 text-white px-2 py-1 rounded mt-2 hover:bg-blue-600"
              onClick={handleGoBackToHome}
            >
              Go back to home
            </button>
          </div>
        )}
      </div>
      {hasResults && (
        <div className="flex justify-center mt-8 items-center gap-1">
          <button
            onClick={() => handlePageChange(Math.max(1, page - 1))}
            disabled={page === 1}
            className="px-3 py-2 mx-1 bg-gray-200 hover:bg-gray-300 text-black rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .filter(
              (p) => p === 1 || p === totalPages || Math.abs(p - page) <= 2
            )
            .map((currentPage, idx, arr) => (
              <span key={currentPage}>
                <button
                  onClick={() => handlePageChange(currentPage)}
                  className={`px-4 py-2 mx-1 ${
                    page === currentPage
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 hover:bg-gray-300 text-black"
                  } rounded transition-colors`}
                >
                  {currentPage}
                </button>
                {arr[idx + 1] - currentPage > 1 && (
                  <span className="mx-1">...</span>
                )}
              </span>
            ))}
          <button
            onClick={() => handlePageChange(Math.min(totalPages, page + 1))}
            disabled={page === totalPages}
            className="px-3 py-2 mx-1 bg-gray-200 hover:bg-gray-300 text-black rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Pagination;
