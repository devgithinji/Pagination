const paginate = (followers) => {
    const itemsPerPage = 10;
    const pages = Math.ceil(followers.length / itemsPerPage);

    return Array.from({length: pages}, (_, index) => {
        const start = index * itemsPerPage;
        return followers.slice(start, start + itemsPerPage)
    });
}

export default paginate
