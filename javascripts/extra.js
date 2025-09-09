/*
 * HakoForge Custom JavaScript for HakoCore Documentation
 * Version: 1.0
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== TABLE ENHANCEMENTS =====
    enhanceTables();
    
    // ===== COPY TO CLIPBOARD =====
    addCopyButtons();
    
    // ===== SEARCH ENHANCEMENTS =====
    enhanceSearch();
    
    // ===== SCROLL ENHANCEMENTS =====
    addScrollToTop();
    
    // ===== PRINT HELPERS =====
    addPrintStyles();
});

// Enhance tables with sorting and filtering
function enhanceTables() {
    const tables = document.querySelectorAll('table.specs');
    
    tables.forEach(table => {
        // Add table wrapper for better responsive behavior
        const wrapper = document.createElement('div');
        wrapper.className = 'table-wrapper';
        table.parentNode.insertBefore(wrapper, table);
        wrapper.appendChild(table);
        
        // Add sorting capability to specification tables
        if (table.classList.contains('specs')) {
            addTableSorting(table);
        }
    });
}

// Add sorting functionality to tables
function addTableSorting(table) {
    const headers = table.querySelectorAll('th');
    
    headers.forEach((header, index) => {
        header.style.cursor = 'pointer';
        header.addEventListener('click', () => sortTable(table, index));
        
        // Add sort indicator
        const indicator = document.createElement('span');
        indicator.className = 'sort-indicator';
        indicator.innerHTML = ' ↕️';
        header.appendChild(indicator);
    });
}

// Sort table by column
function sortTable(table, columnIndex) {
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));
    
    const isAscending = !table.dataset.sortDirection || table.dataset.sortDirection === 'desc';
    table.dataset.sortDirection = isAscending ? 'asc' : 'desc';
    
    rows.sort((a, b) => {
        const aText = a.cells[columnIndex].textContent.trim();
        const bText = b.cells[columnIndex].textContent.trim();
        
        // Try to parse as numbers
        const aNum = parseFloat(aText.replace(/[^\d.-]/g, ''));
        const bNum = parseFloat(bText.replace(/[^\d.-]/g, ''));
        
        if (!isNaN(aNum) && !isNaN(bNum)) {
            return isAscending ? aNum - bNum : bNum - aNum;
        } else {
            return isAscending ? aText.localeCompare(bText) : bText.localeCompare(aText);
        }
    });
    
    // Reorder rows
    rows.forEach(row => tbody.appendChild(row));
    
    // Update sort indicators
    table.querySelectorAll('.sort-indicator').forEach((indicator, index) => {
        if (index === columnIndex) {
            indicator.innerHTML = isAscending ? ' ↑' : ' ↓';
        } else {
            indicator.innerHTML = ' ↕️';
        }
    });
}

// Add copy buttons to code blocks
function addCopyButtons() {
    const codeBlocks = document.querySelectorAll('pre code');
    
    codeBlocks.forEach(codeBlock => {
        const pre = codeBlock.parentElement;
        const button = document.createElement('button');
        button.className = 'copy-button';
        button.innerHTML = '📋 Copy';
        button.setAttribute('aria-label', 'Copy code to clipboard');
        
        button.addEventListener('click', () => {
            const text = codeBlock.textContent;
            navigator.clipboard.writeText(text).then(() => {
                button.innerHTML = '✓ Copied!';
                button.classList.add('copied');
                
                setTimeout(() => {
                    button.innerHTML = '📋 Copy';
                    button.classList.remove('copied');
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
                button.innerHTML = '❌ Error';
                setTimeout(() => {
                    button.innerHTML = '📋 Copy';
                }, 2000);
            });
        });
        
        pre.style.position = 'relative';
        pre.appendChild(button);
    });
}

// Enhance search functionality
function enhanceSearch() {
    const searchInput = document.querySelector('[data-md-search-input]');
    if (!searchInput) return;
    
    // Add search shortcuts
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + K to focus search
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            searchInput.focus();
        }
        
        // Escape to clear search
        if (e.key === 'Escape' && document.activeElement === searchInput) {
            searchInput.value = '';
            searchInput.blur();
        }
    });
    
    // Add search placeholder enhancement
    searchInput.placeholder = 'Search documentation (Ctrl+K)';
}

// Add scroll to top button
function addScrollToTop() {
    const button = document.createElement('button');
    button.className = 'scroll-to-top';
    button.innerHTML = '↑';
    button.setAttribute('aria-label', 'Scroll to top');
    button.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: var(--hf-yellow);
        color: var(--hf-dark);
        border: none;
        font-size: 24px;
        cursor: pointer;
        display: none;
        z-index: 1000;
        box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        transition: all 0.3s ease;
    `;
    
    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    document.body.appendChild(button);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
    });
}

// Add print-specific enhancements
function addPrintStyles() {
    // Add print button to each page
    const printButton = document.createElement('button');
    printButton.className = 'print-button md-button hf-secondary';
    printButton.innerHTML = '🖨️ Print Page';
    printButton.addEventListener('click', () => window.print());
    
    // Find a good place to add the print button (e.g., after the main title)
    const mainTitle = document.querySelector('h1');
    if (mainTitle) {
        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'print-button-container';
        buttonContainer.style.cssText = 'margin: 20px 0; text-align: right;';
        buttonContainer.appendChild(printButton);
        mainTitle.parentNode.insertBefore(buttonContainer, mainTitle.nextSibling);
    }
    
    // Add print event listener to clean up content
    window.addEventListener('beforeprint', () => {
        // Hide navigation and other non-content elements
        document.body.classList.add('printing');
    });
    
    window.addEventListener('afterprint', () => {
        document.body.classList.remove('printing');
    });
}

// Utility function to create notifications
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 12px 20px;
        background-color: var(--hf-yellow);
        color: var(--hf-dark);
        border-radius: 6px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        z-index: 10000;
        transition: all 0.3s ease;
    `;
    
    if (type === 'error') {
        notification.style.backgroundColor = '#ff4444';
        notification.style.color = 'white';
    } else if (type === 'success') {
        notification.style.backgroundColor = '#4CAF50';
        notification.style.color = 'white';
    }
    
    document.body.appendChild(notification);
    
    // Auto-remove after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Additional CSS for JavaScript enhancements
const additionalCSS = `
    .table-wrapper {
        overflow-x: auto;
        margin: 20px 0;
        border: 1px solid #e0e0e0;
        border-radius: 6px;
    }
    
    .copy-button {
        position: absolute;
        top: 10px;
        right: 10px;
        padding: 5px 10px;
        background-color: var(--hf-yellow);
        color: var(--hf-dark);
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 12px;
        transition: all 0.3s ease;
    }
    
    .copy-button:hover {
        background-color: var(--hf-orange);
        color: white;
    }
    
    .copy-button.copied {
        background-color: #4CAF50;
        color: white;
    }
    
    .sort-indicator {
        font-size: 0.8em;
        margin-left: 5px;
    }
    
    th:hover .sort-indicator {
        opacity: 1;
    }
    
    @media print {
        .print-button-container,
        .copy-button,
        .scroll-to-top {
            display: none !important;
        }
        
        .table-wrapper {
            border: none;
        }
    }
    
    .printing .md-header,
    .printing .md-sidebar,
    .printing .md-footer,
    .printing .copy-button,
    .printing .scroll-to-top,
    .printing .print-button-container {
        display: none !important;
    }
`;

// Inject additional CSS
const style = document.createElement('style');
style.textContent = additionalCSS;
document.head.appendChild(style);