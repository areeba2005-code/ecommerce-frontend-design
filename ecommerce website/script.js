function toggleFilter(element) {
    // Ye 'element' wo div hai jispe click hua (filter-header)
    // Hum uske parent (filter-group) ko toggle karenge
    const filterGroup = element.closest('.filter-group');
    filterGroup.classList.toggle('collapsed');
}


function toggleView(view) {
    const wrapper = document.getElementById('products-wrapper');
    const gridBtn = document.getElementById('grid-btn');
    const listBtn = document.getElementById('list-btn');

    if (view === 'grid') {
        wrapper.classList.add('grid-view');
        wrapper.classList.remove('list-view');
        gridBtn.classList.add('active');
        listBtn.classList.remove('active');
    } else {
        wrapper.classList.add('list-view');
        wrapper.classList.remove('grid-view');
        listBtn.classList.add('active');
        gridBtn.classList.remove('active');
    }
}

// Sidebar toggle function (jo error de raha tha pehle)
function toggleFilter(element) {
    const filterGroup = element.closest('.filter-group');
    filterGroup.classList.toggle('collapsed');
    
    // Icon change (up/down)
    const icon = element.querySelector('.toggle-icon');
    if (filterGroup.classList.contains('collapsed')) {
        icon.classList.replace('fa-chevron-up', 'fa-chevron-down');
    } else {
        icon.classList.replace('fa-chevron-down', 'fa-chevron-up');
    }
}


function openSidebar() {
    const sidebar = document.getElementById("categorySidebar");
    const overlay = document.getElementById("sidebarOverlay");
    
    sidebar.classList.add("active");
    overlay.classList.add("active");
}

function closeSidebar() {
    const sidebar = document.getElementById("categorySidebar");
    const overlay = document.getElementById("sidebarOverlay");
    
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
}
