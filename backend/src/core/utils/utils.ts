
export const offsetGenerator = (page, limit, totalItems?) => {
    const maxPages = Math.ceil(totalItems / limit);
    let pageCal = null;

    if (page <= 0) {
        pageCal = 1;
    } else if (page >= maxPages) {
        pageCal = maxPages;
    } else {
        pageCal = page;
    }

    return {
        offset: (limit * pageCal) - limit,
        maxPages: maxPages,
        pageCal
    };
}