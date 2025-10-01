// Authentication and User Management
class AuthManager {
    constructor() {
        this.init();
    }

    init() {
        // Check authentication status on page load
        this.updateUserInterface();

        // Listen for storage changes (for cross-tab sync)
        window.addEventListener('storage', () => {
            this.updateUserInterface();
        });

        // Listen for custom auth events
        window.addEventListener('auth-changed', () => {
            this.updateUserInterface();
        });
    }

    // Check if user is logged in
    isLoggedIn() {
        return localStorage.getItem('isLoggedIn') === 'true';
    }

    // Get current user data
    getCurrentUser() {
        try {
            const userData = localStorage.getItem('user');
            return userData ? JSON.parse(userData) : null;
        } catch (error) {
            console.error('Error parsing user data:', error);
            return null;
        }
    }

    // Update user interface based on login status
    // Update user interface based on login status
    updateUserInterface() {
        console.log('=== DEBUG AUTH ===');
        console.log('isLoggedIn:', this.isLoggedIn());
        console.log('user:', this.getCurrentUser());

        const loginSection = document.getElementById('login-section');
        const userSection = document.getElementById('user-section');
        const userNameDisplay = document.getElementById('user-name-display');
        const userAvatar = document.getElementById('user-avatar');

        console.log('Elements found:', {
            loginSection: !!loginSection,
            userSection: !!userSection,
            userNameDisplay: !!userNameDisplay,
            userAvatar: !!userAvatar
        });

        if (!loginSection || !userSection) {
            console.warn('User interface elements not found');
            return;
        }

        if (this.isLoggedIn()) {
            const user = this.getCurrentUser();
            console.log('Logged in user:', user);

            if (user && user.fullName) {
                // Hide login section, show user section
                loginSection.style.display = 'none';
                userSection.style.display = 'flex';

                // Update user name display
                if (userNameDisplay) {
                    userNameDisplay.textContent = user.fullName;
                    console.log('Setting user name to:', user.fullName);
                }

                // Update avatar with first letter of name
                if (userAvatar) {
                    userAvatar.textContent = user.fullName.charAt(0).toUpperCase();
                    console.log('Setting avatar to:', user.fullName.charAt(0).toUpperCase());
                }

                console.log('User interface updated for:', user.fullName);
            } else {
                console.log('Invalid user data, logging out');
                // Invalid user data, logout
                this.logout();
            }
        } else {
            console.log('User not logged in, showing login section');
            // Show login section, hide user section
            loginSection.style.display = 'flex';
            userSection.style.display = 'none';
        }
        console.log('=== END DEBUG ===');
    }
}

// Create global auth manager instance
const authManager = new AuthManager();

// Global functions for backward compatibility
function updateUserInterface() {
    authManager.updateUserInterface();
}

function logout() {
    if (confirm('Bạn có chắc muốn đăng xuất?')) {
        authManager.logout();
        alert('Đã đăng xuất thành công!');
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    authManager.updateUserInterface();
});


