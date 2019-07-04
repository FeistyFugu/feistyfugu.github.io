document.getElementById("addSearchTag").addEventListener("keypress", addSearchTag);
document.querySelectorAll(".tag-filter").forEach(elem => elem.addEventListener("click", excludeSearchTag));
document.querySelectorAll(".remove-tag-filter").forEach(elem => elem.addEventListener("click", removeSearchTag));

function addSearchTag(evt) {
    if (evt.key === 'Enter' && evt.target.value.length > 0) {
        // Div
        const newTagFilter = document.createElement("div");
        newTagFilter.classList.add("btn-group", "tag-filter-container");
        
        // Filter button
        const filterBtn = document.createElement("button");
        filterBtn.type = "button";
        filterBtn.classList.add("btn", "btn-light", "tag-filter", "active");
        filterBtn.setAttribute("data-toggle", "button");

        // Filter text
        const filterText = document.createTextNode(evt.target.value);

        // Remove filter button
        const removeFilterBtn = document.createElement("button");
        removeFilterBtn.type = "button";
        removeFilterBtn.classList.add("btn", "btn-light", "remove-tag-filter");

        // Remove filter icon
        const removeIcon = document.createElement("i");
        removeIcon.classList.add("fas", "fa-times", "fa-fw");

        // Putting it all together
        filterBtn.appendChild(filterText);
        removeFilterBtn.appendChild(removeIcon);
        newTagFilter.appendChild(filterBtn);
        newTagFilter.appendChild(removeFilterBtn);
        document.getElementById("tagFilterList").appendChild(newTagFilter);

        filterBtn.addEventListener("click", excludeSearchTag);
        removeFilterBtn.addEventListener("click", removeSearchTag);
        evt.target.value = "";
    }
}

function removeSearchTag(evt) {
    evt.target.closest("div .tag-filter-container").remove();
}

function excludeSearchTag(evt) {
    evt.target.classList.toggle("excluded-tag-filter");
}
