// --- Data Source ---
const mentorsData = [
    {
      id: "fatima-ali",
      name: "Fatima Ali",
      university: "Universiti Malaya (UM)",
      category: "Tech",
      expertise: "Data Science & AI",
      bio: "Specializing in Artificial Intelligence and Big Data Analytics at Universiti Malaya. I can help you with Python, R, Machine Learning models, and data visualization techniques.",
      price: "PKR 3,000",
      image: "mentors/images/fatima-ali.jpg",
      whatsapp: "+60123456789",
      reviews: 62,
      rating: 4.7
    },
    {
      id: "sarah-jenkins",
      name: "Ayesha Iqbal",
      university: "Aga Khan University (AKU)",
      category: "Medicine",
      expertise: "Medicine (MBBS)",
      bio: "AKU Final year students looking to helping students with entry tests (MDCAT) and survival guides for medical school. Focused on Anatomy, Physiology, and clinical skills rotation advice.",
      price: "PKR 2,000",
      image: "mentors/images/1.jpg",
      whatsapp: "+923001234567",
      reviews: 85,
      rating: 5.0
    },
    {
      id: "ahmed-khan",
      name: "Ahmed Khan",
      university: "FAST NUCES",
      category: "Tech",
      expertise: "Computer Science (CS)",
      bio: "Bachelors in Computer Science from FAST. Expert in Data Structures, Algorithms, C++, and Web Development. I can help you ace your programming fundamentals and semester projects.",
      price: "PKR 1,500",
      image: "mentors/images/ahmed-khan.jpg",
      whatsapp: "+923123456789",
      reviews: 120,
      rating: 4.9
    },
    {
      id: "emily-zhang",
      name: "Saad Ahmed",
      university: "IBA Karachi",
      category: "Business",
      expertise: "Accounting & Finance",
      bio: "Bachelors in Accounting and Finance from IBA. CFA Level 1 Candidate. I teach Financial Accounting, Corporate Finance, and help with internship interview preparation.",
      price: "PKR 2,000",
      image: "mentors/images/saad-ahmed.jpg",
      whatsapp: "+923456789012",
      reviews: 34,
      rating: 4.6
    },
    {
      id: "john-doe",
      name: "Abdul Mussawir",
      university: "LUMS",
      category: "Business",
      expertise: "Business Admin (BBA)",
      bio: "Bachelors in Business Administration from LUMS. Specializing in Marketing and Supply Chain Management. Let's work on your case studies, presentations, and leadership skills.",
      price: "PKR 2,500",
      image: "mentors/images/abdul-mussawir.jpg",
      whatsapp: "+923334567890",
      reviews: 200,
      rating: 4.9
    },
    {
      id: "mike-ross",
      name: "Bilal Ahmed",
      university: "Denning Law School",
      category: "Law",
      expertise: "UK Law & LLB",
      bio: "Law graduate from Denning Law School. Expert in Contract Law, Criminal Law, and Mooting. I can guide you through the University of London external program requirements.",
      price: "PKR 3,000",
      image: "mentors/images/bilal-ahmed.jpg",
      whatsapp: "+923216549870",
      reviews: 45,
      rating: 4.8
    }
];

// --- Utilities ---
function renderMentorCard(mentor) {
    // Note: Linking to individual HTML files now
    return `
    <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group">
        <div class="relative h-48 overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
            <img src="${mentor.image}" alt="${mentor.name}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
            <div class="absolute bottom-4 left-4 z-20 text-white">
                <span class="bg-purple-600 text-xs font-bold px-2 py-1 rounded mb-2 inline-block">${mentor.category}</span>
                <h3 class="text-xl font-bold">${mentor.name}</h3>
            </div>
        </div>
        <div class="p-6">
            <div class="flex justify-between items-center mb-3">
                <div class="flex items-center text-yellow-500 text-sm">
                    <i class="fas fa-star mr-1"></i>
                    <span class="font-bold text-gray-800">${mentor.rating}</span>
                    <span class="text-gray-400 ml-1">(${mentor.reviews})</span>
                </div>
                <span class="text-sm font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">${mentor.price}/hr</span>
            </div>
            <p class="text-gray-600 text-sm mb-2 flex items-center"><i class="fas fa-university w-5 text-purple-500"></i> ${mentor.university}</p>
            <p class="text-gray-600 text-sm mb-4 flex items-center"><i class="fas fa-briefcase w-5 text-purple-500"></i> ${mentor.expertise}</p>
            <div class="flex gap-3 mt-4">
                <a href="${mentor.id}.html" class="flex-1 py-2 text-center rounded-lg border border-purple-600 text-purple-600 font-medium hover:bg-purple-50 transition-colors text-sm">View Profile</a>
                <button onclick="window.openBookingModal('${mentor.id}')" class="flex-1 py-2 text-center rounded-lg bg-gradient-to-r from-purple-600 to-green-500 text-white font-medium shadow-md hover:shadow-lg transition-all text-sm">Book Now</button>
            </div>
        </div>
    </div>
    `;
}

// Make openBookingModal available globally immediately
window.openBookingModal = function(mentorId) {
    const mentor = mentorsData.find(m => m.id === mentorId);
    if (!mentor) return;

    const modal = document.getElementById('booking-modal');
    const nameEl = document.getElementById('modal-mentor-name');
    const idInput = document.getElementById('mentor-id');
    const nameInput = document.getElementById('mentor-name-input');

    if(nameEl) nameEl.textContent = `with ${mentor.name}`;
    if(idInput) idInput.value = mentor.id;
    if(nameInput) nameInput.value = mentor.name;
    
    if(modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.style.overflow = 'hidden';
    }
};

// --- Logic ---
document.addEventListener('DOMContentLoaded', () => {
    console.log("Guiden Script Loaded");

    // Initialize AOS if available
    // @ts-ignore
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 800, once: true, offset: 50 });
    }

    // Navbar Logic
    const navbar = document.getElementById('navbar');
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    window.addEventListener('scroll', () => {
        if(!navbar) return;
        if (window.scrollY > 50) {
            navbar.classList.add('bg-white/90', 'backdrop-blur-md', 'shadow-md', 'py-3');
            navbar.classList.remove('py-5', 'bg-transparent');
        } else {
            navbar.classList.remove('bg-white/90', 'backdrop-blur-md', 'shadow-md', 'py-3');
            navbar.classList.add('py-5');
        }
    });

    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
            const icon = mobileBtn.querySelector('i');
            if (mobileMenu.classList.contains('hidden')) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            } else {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            }
        });
    }

    // Page Specific Logic
    const pageId = document.body.id;
    console.log("Current Page ID:", pageId);

    // LANDING PAGE LOGIC
    if (pageId === 'landing-page') {
        const container = document.getElementById('featured-mentors-container');
        if (container) {
            // Render first 3 mentors using map and join for one-time insertion
            const cardsHtml = mentorsData.slice(0, 3)
                .map(mentor => renderMentorCard(mentor))
                .join('');
            
            container.innerHTML = cardsHtml;
            console.log("Featured mentors injected successfully.");
        }
    }

    // MENTORS LISTING PAGE LOGIC
    if (pageId === 'mentors-page') {
        const grid = document.getElementById('mentors-grid');
        const searchInput = document.getElementById('search-input');
        const categorySelect = document.getElementById('category-select');
        const noResults = document.getElementById('no-results');

        function filterMentors() {
            const query = searchInput ? searchInput.value.toLowerCase() : '';
            const category = categorySelect ? categorySelect.value : 'All';
            
            const filtered = mentorsData.filter(m => {
                const matchesSearch = m.name.toLowerCase().includes(query) || 
                                      m.university.toLowerCase().includes(query) ||
                                      m.expertise.toLowerCase().includes(query);
                const matchesCategory = category === 'All' || m.category === category;
                return matchesSearch && matchesCategory;
            });

            if(grid) {
                if (filtered.length === 0) {
                     grid.innerHTML = '';
                    if(noResults) noResults.classList.remove('hidden');
                } else {
                    if(noResults) noResults.classList.add('hidden');
                    // Use map/join for better performance
                    grid.innerHTML = filtered.map(m => renderMentorCard(m)).join('');
                }
            }
        }

        if (searchInput && categorySelect) {
            searchInput.addEventListener('input', filterMentors);
            categorySelect.addEventListener('change', filterMentors);
            filterMentors(); // Initial render
        } else if (grid) {
            // If filters missing but grid exists, show all
             grid.innerHTML = mentorsData.map(m => renderMentorCard(m)).join('');
        }
    }

    // PROFILE PAGE LOGIC (Works for both dynamic URL and static file ID)
    if (pageId === 'profile-page') {
        let mentorId = null;
        
        // Check if ID is hardcoded in the body tag (Static File approach)
        const bodyId = document.body.getAttribute('data-mentor-id');
        if (bodyId) {
            mentorId = bodyId;
        } else {
            // Fallback to URL params (Dynamic approach)
            const urlParams = new URLSearchParams(window.location.search);
            mentorId = urlParams.get('id');
        }

        const mentor = mentorsData.find(m => m.id === mentorId);
        
        const container = document.getElementById('profile-container');
        const loading = document.getElementById('loading-state');
        const error = document.getElementById('error-state');

        if (mentor) {
            // Set Page Title
            document.title = `${mentor.name} - Guiden Mentor`;

            document.getElementById('p-image').src = mentor.image;
            document.getElementById('p-name').textContent = mentor.name;
            document.getElementById('p-university').textContent = mentor.university;
            document.getElementById('p-category').textContent = mentor.category;
            document.getElementById('p-rating').textContent = mentor.rating;
            document.getElementById('p-reviews').textContent = `(${mentor.reviews})`;
            document.getElementById('p-price').textContent = mentor.price;
            document.getElementById('p-bio').textContent = mentor.bio;
            
            const expContainer = document.getElementById('p-expertise');
            if(expContainer) {
                expContainer.innerHTML = '';
                // Add specific expertise tags
                mentor.expertise.split('&').forEach(exp => {
                    expContainer.innerHTML += `<span class="bg-green-50 text-green-700 px-4 py-2 rounded-lg font-medium">${exp.trim()}</span>`;
                });
                // Add general tags
                expContainer.innerHTML += `<span class="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg font-medium">Career Advice</span>`;
            }

            const bookBtn = document.getElementById('profile-book-btn');
            if(bookBtn) {
                bookBtn.onclick = () => window.openBookingModal(mentor.id);
            }
            
            if(loading) loading.classList.add('hidden');
            if(container) container.classList.remove('hidden');
        } else {
            if(loading) loading.classList.add('hidden');
            if(error) error.classList.remove('hidden');
        }
    }

    // Modal Logic
    setupModal();
});

// Global Modal Functions
function setupModal() {
    const modal = document.getElementById('booking-modal');
    const closeBtn = document.getElementById('close-modal-btn');
    const backdrop = document.getElementById('modal-backdrop');
    const form = document.getElementById('booking-form');
    const successMsg = document.getElementById('booking-success');

    if (!modal) return;

    // Initialize EmailJS
    if (typeof emailjs !== 'undefined') {
        emailjs.init("6_eb_-ctznHxxwVtP"); // Your Public User ID
    }

    function closeModal() {
        modal.classList.remove('flex');
        modal.classList.add('hidden');
        document.body.style.overflow = '';
        // Reset form
        if(form) {
            setTimeout(() => {
                form.reset();
                form.classList.remove('hidden');
                if(successMsg) successMsg.classList.add('hidden');
            }, 300);
        }
    }

    if(closeBtn) closeBtn.addEventListener('click', closeModal);
    if(backdrop) backdrop.addEventListener('click', closeModal);

    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = document.getElementById('submit-btn');
            const originalText = btn ? btn.innerHTML : 'Confirm';

            if(btn) {
                btn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Processing...';
                btn.disabled = true;
            }

            // Collect data from the form
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            console.log("Sending Email...", data);

            // Send email using EmailJS with all relevant fields
            emailjs.send(
                'service_0igwqg5',      // Your Service ID
                'template_2wo4xww',     // Your Template ID
                {
                    fullName: data.fullName,
                    email: data.email,
                    mentorName: data.mentorName,
                    topic: data.topic,
                    date: data.date,
                    time: data.time,
                    whatsapp: data.whatsapp
                }
            ).then(response => {
                console.log('SUCCESS!', response.status, response.text);

                if(btn) {
                    btn.innerHTML = originalText;
                    btn.disabled = false;
                }
                form.classList.add('hidden');
                if(successMsg) successMsg.classList.remove('hidden');

                // Auto close after 3 seconds
                setTimeout(closeModal, 3000);
            }).catch(error => {
                console.error('FAILED...', error);
                if(btn) {
                    btn.innerHTML = originalText;
                    btn.disabled = false;
                }
                alert("Oops! Something went wrong while sending the email. Please try again.");
            });
        });
    }
}
