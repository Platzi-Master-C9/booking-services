/**
 * @param {number} page
 * @param {number} pages Total of pages.
 * @param {unknown[]} rows Results per page.
 * @returns {{ currentPage: number; total: number; rows: unknown[] }} Paginated results.
 */
const makePagination = (page = 1, pages = 0, rows = []) => ({
  page,
  pages,
  rows,
});

module.exports = {
  makePagination,
};
