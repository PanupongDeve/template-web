
export const offsetGenerator = (page, limit, totalItems?) => {
    const maxPages = Math.ceil(totalItems / limit);
    let offset;
    let pageCal = null;

    if (page <= 0) {
        pageCal = 1;
    } else if (page >= maxPages) {
        pageCal = maxPages;
    } else {
        pageCal = page;
    }

    console.log(maxPages);

    if (maxPages === 0) {
        offset = 0;
    } else {
        offset = (limit * pageCal) - limit;
    }

    return {
        offset,
        maxPages: maxPages,
        pageCal
    };
}