const certifications = [
    {
        name: "Data Privacy Compliance & Cyber Security Awareness",
        issuer: "Ariva Academy",
        year: "2025",
        image: ""
    },
    {
        name: "Research Colloquium",
        issuer: "Bicol College",
        year: "2024",
        image: ""
    },
    {
        name: "Research Colloquium",
        issuer: "Bicol College",
        year: "2024",
        image: ""
    },
    {
        name: "Bicol IT Students Congress (BITSCON)",
        issuer: "CNSC",
        year: "2024",
        image: "BITSCON.jpg"
    },
    
];

const ITEMS_PER_PAGE = 4;
let currentPage = 1;

function totalPages() {
    return Math.max(1, Math.ceil(certifications.length / ITEMS_PER_PAGE));
}

function renderCerts() {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const items = certifications.slice(start, start + ITEMS_PER_PAGE);

    $('#certsGrid').html(items.map(cert => `
        <div class="cert-card-full">
            <div class="cert-thumb">
                ${cert.image
                    ? `<img src="${cert.image}" alt="${cert.name}">`
                    : `<div class="cert-thumb-placeholder">
                        <div class="ph-issuer">${cert.issuer}</div>
                        <div class="ph-title">${cert.name}</div>
                        <div class="ph-label">Statement of Accomplishment</div>
                       </div>`
                }
            </div>
            <div class="cert-card-body">
                <div class="cert-name">${cert.name}</div>
                <div class="cert-meta">${cert.issuer} • ${cert.year}</div>
            </div>
        </div>
    `).join(''));
}

function renderPagination() {
    const total = totalPages();
    let html = `<button class="page-btn page-nav" ${currentPage === 1 ? 'disabled' : ''} onclick="goPage(${currentPage - 1})">← Prev</button>`;
    for (let i = 1; i <= total; i++) {
        html += `<button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="goPage(${i})">${i}</button>`;
    }
    html += `<button class="page-btn page-nav" ${currentPage === total ? 'disabled' : ''} onclick="goPage(${currentPage + 1})">Next →</button>`;
    $('#pagination').html(html);
}

function goPage(n) {
    if (n < 1 || n > totalPages()) return;
    currentPage = n;
    renderCerts();
    renderPagination();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

$(document).ready(function () {
    renderCerts();
    renderPagination();
});