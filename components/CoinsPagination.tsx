"use client";

import {
  Pagination as PaginationRoot,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { buildPageNumbers, cn, ELLIPSIS } from "@/lib/utils";
import { useRouter } from "next/navigation"
import React from 'react'

function CoinsPagination({ currentPage, totalPages, hasMorePages }: Pagination) {
  const router = useRouter()
  const handlePageChange = (page: number) => {
    router.push(`/coins?page=${page}`);
  }
  const pageNumbers = buildPageNumbers(currentPage, totalPages)
  const isLastPage = !hasMorePages || currentPage === totalPages
  
  return (
    <PaginationRoot id="coins-pagination" className="my-8">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious 
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage > 1) handlePageChange(currentPage - 1);
            }}
            className={cn(currentPage === 1 ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'cursor-pointer')}
          />
        </PaginationItem>

        <div className="flex items-center gap-1">
          {pageNumbers.map((page, index) => (
            <PaginationItem key={index}>
              {page === ELLIPSIS ? (
                <span>...</span>
              ) : (
                <PaginationLink 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(Number(page));
                  }}
                  isActive={currentPage === Number(page)}
                  className="cursor-pointer"
                >
                  {page}
                </PaginationLink>
              )}
            </PaginationItem>
          ))}
        </div>

        <PaginationItem>
          <PaginationNext 
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (!isLastPage) handlePageChange(currentPage + 1);
            }}
            className={cn(isLastPage ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'cursor-pointer')}
          />
        </PaginationItem>
      </PaginationContent>
    </PaginationRoot>
  )
}

export default CoinsPagination