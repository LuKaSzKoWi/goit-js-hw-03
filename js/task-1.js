function slugify(title) {
    
    let lowerCaseTitle = title.toLowerCase();
    
    let slug = lowerCaseTitle.split(' ').join('-');
    
    return slug;
}