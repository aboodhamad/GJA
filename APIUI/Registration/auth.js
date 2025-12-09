const togglePasswordButtons = document.querySelectorAll('.toggle-password');

togglePasswordButtons.forEach(button => {
    button.addEventListener('click', function() {
        const inputWrapper = this.closest('.input-wrapper');
        const passwordInput = inputWrapper.querySelector('input');
        const eyeOpen = this.querySelector('.eye-open');
        const eyeClosed = this.querySelector('.eye-closed');
        
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            eyeOpen.style.display = 'none';
            eyeClosed.style.display = 'block';
        } else {
            passwordInput.type = 'password';
            eyeOpen.style.display = 'block';
            eyeClosed.style.display = 'none';
        }
    });
});

// ============================================
// FORM VALIDATION
// ============================================
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePassword(password) {
    // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;
    return re.test(password);
}

function validateUsername(username) {
    // 3-20 characters, alphanumeric and underscores only
    const re = /^[a-zA-Z0-9_]{3,20}$/;
    return re.test(username);
}

function showError(fieldId, message) {
    const errorElement = document.getElementById(fieldId + 'Error');
    const inputWrapper = document.getElementById(fieldId).closest('.input-wrapper');
    
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
    
    if (inputWrapper) {
        inputWrapper.classList.add('error');
    }
}

function clearError(fieldId) {
    const errorElement = document.getElementById(fieldId + 'Error');
    const inputWrapper = document.getElementById(fieldId).closest('.input-wrapper');
    
    if (errorElement) {
        errorElement.textContent = '';
        errorElement.style.display = 'none';
    }
    
    if (inputWrapper) {
        inputWrapper.classList.remove('error');
    }
}

// ============================================
// LOGIN FORM HANDLING
// ============================================
const loginForm = document.getElementById('loginForm');

if (loginForm) {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const submitBtn = document.getElementById('submitBtn');

    // Real-time validation
    emailInput?.addEventListener('blur', function() {
        if (!this.value) {
            showError('email', 'Email is required');
        } else if (!validateEmail(this.value)) {
            showError('email', 'Please enter a valid email address');
        } else {
            clearError('email');
        }
    });

    emailInput?.addEventListener('input', function() {
        if (this.value) clearError('email');
    });

    passwordInput?.addEventListener('blur', function() {
        if (!this.value) {
            showError('password', 'Password is required');
        } else {
            clearError('password');
        }
    });

    passwordInput?.addEventListener('input', function() {
        if (this.value) clearError('password');
    });

    // Form submission
    loginForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        let isValid = true;

        // Validate email
        if (!emailInput.value) {
            showError('email', 'Email is required');
            isValid = false;
        } else if (!validateEmail(emailInput.value)) {
            showError('email', 'Please enter a valid email address');
            isValid = false;
        }

        // Validate password
        if (!passwordInput.value) {
            showError('password', 'Password is required');
            isValid = false;
        }

        if (!isValid) return;

        // Show loading state
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;

        // Simulate API call
        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Show success state
            submitBtn.classList.remove('loading');
            submitBtn.classList.add('success');
            
            showToast('Login successful! Redirecting...', 'success');
            
            setTimeout(() => {
                window.location.href = '../landing/landing.html';
            }, 1500);
            
        } catch (error) {
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
            showToast('Login failed. Please check your credentials.', 'error');
        }
    });
}

// ============================================
// REGISTRATION FORM HANDLING
// ============================================
const registerForm = document.getElementById('registerForm');

if (registerForm) {
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const submitBtn = document.getElementById('submitBtn');

    // Real-time validation
    usernameInput?.addEventListener('blur', function() {
        if (!this.value) {
            showError('username', 'Username is required');
        } else if (!validateUsername(this.value)) {
            showError('username', 'Username must be 3-20 characters (letters, numbers, underscores only)');
        } else {
            clearError('username');
        }
    });

    usernameInput?.addEventListener('input', function() {
        if (this.value) clearError('username');
    });

    emailInput?.addEventListener('blur', function() {
        if (!this.value) {
            showError('email', 'Email is required');
        } else if (!validateEmail(this.value)) {
            showError('email', 'Please enter a valid email address');
        } else {
            clearError('email');
        }
    });

    emailInput?.addEventListener('input', function() {
        if (this.value) clearError('email');
    });

    passwordInput?.addEventListener('blur', function() {
        if (!this.value) {
            showError('password', 'Password is required');
        } else if (!validatePassword(this.value)) {
            showError('password', 'Password must be at least 8 characters with uppercase, lowercase, and number');
        } else {
            clearError('password');
        }
    });

    passwordInput?.addEventListener('input', function() {
        if (this.value) clearError('password');
    });

    confirmPasswordInput?.addEventListener('blur', function() {
        if (!this.value) {
            showError('confirmPassword', 'Please confirm your password');
        } else if (this.value !== passwordInput.value) {
            showError('confirmPassword', 'Passwords do not match');
        } else {
            clearError('confirmPassword');
        }
    });

    confirmPasswordInput?.addEventListener('input', function() {
        if (this.value) clearError('confirmPassword');
    });

    // Form submission
    registerForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        let isValid = true;

        // Validate all fields
        if (!usernameInput.value || !validateUsername(usernameInput.value)) {
            showError('username', 'Please enter a valid username');
            isValid = false;
        }

        if (!emailInput.value || !validateEmail(emailInput.value)) {
            showError('email', 'Please enter a valid email address');
            isValid = false;
        }

        if (!passwordInput.value || !validatePassword(passwordInput.value)) {
            showError('password', 'Please enter a valid password');
            isValid = false;
        }

        if (confirmPasswordInput.value !== passwordInput.value) {
            showError('confirmPassword', 'Passwords do not match');
            isValid = false;
        }

        if (!isValid) return;

        // Show loading state
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;

        // Simulate API call
        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Show success state
            submitBtn.classList.remove('loading');
            submitBtn.classList.add('success');
            
            showToast('Registration successful! Redirecting to verification...', 'success');
            
            setTimeout(() => {
                window.location.href = 'Otp.html';
            }, 1500);
            
        } catch (error) {
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
            showToast('Registration failed. Please try again.', 'error');
        }
    });
}

// ============================================
// OTP VERIFICATION
// ============================================
const otpInputs = document.querySelectorAll('.otp-input');

otpInputs.forEach((input, index) => {
    // Auto-focus next input
    input.addEventListener('input', function() {
        if (this.value.length === 1 && index < otpInputs.length - 1) {
            otpInputs[index + 1].focus();
        }
        
        // Auto-submit when all fields are filled
        const allFilled = Array.from(otpInputs).every(input => input.value.length === 1);
        if (allFilled) {
            verifyOTP();
        }
    });

    // Handle backspace
    input.addEventListener('keydown', function(e) {
        if (e.key === 'Backspace' && !this.value && index > 0) {
            otpInputs[index - 1].focus();
        }
    });

    // Only allow numbers
    input.addEventListener('keypress', function(e) {
        if (!/^\d$/.test(e.key)) {
            e.preventDefault();
        }
    });

    // Handle paste
    input.addEventListener('paste', function(e) {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text').slice(0, 6);
        const digits = pastedData.split('');
        
        digits.forEach((digit, i) => {
            if (otpInputs[i] && /^\d$/.test(digit)) {
                otpInputs[i].value = digit;
            }
        });
        
        if (digits.length === 6) {
            verifyOTP();
        }
    });
});

async function verifyOTP() {
    const otp = Array.from(otpInputs).map(input => input.value).join('');
    const verifyBtn = document.getElementById('verifyBtn');
    
    if (verifyBtn) {
        verifyBtn.classList.add('loading');
        verifyBtn.disabled = true;
    }
    
    try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        if (verifyBtn) {
            verifyBtn.classList.remove('loading');
            verifyBtn.classList.add('success');
        }
        
        showToast('Verification successful! Welcome to JGA!', 'success');
        
        setTimeout(() => {
            window.location.href = '../landing/landing.html';
        }, 1500);
        
    } catch (error) {
        if (verifyBtn) {
            verifyBtn.classList.remove('loading');
            verifyBtn.disabled = false;
        }
        
        otpInputs.forEach(input => {
            input.value = '';
            input.classList.add('error');
        });
        
        setTimeout(() => {
            otpInputs.forEach(input => input.classList.remove('error'));
            otpInputs[0].focus();
        }, 1000);
        
        showToast('Invalid OTP. Please try again.', 'error');
    }
}

const verifyBtn = document.getElementById('verifyBtn');
if (verifyBtn) {
    verifyBtn.addEventListener('click', verifyOTP);
}

// Resend OTP
const resendBtn = document.getElementById('resendOtp');
if (resendBtn) {
    let countdown = 0;
    
    resendBtn.addEventListener('click', async function() {
        if (countdown > 0) return;
        
        this.disabled = true;
        countdown = 60;
        
        const originalText = this.innerHTML;
        
        const timer = setInterval(() => {
            this.innerHTML = `Resend Code (${countdown}s)`;
            countdown--;
            
            if (countdown < 0) {
                clearInterval(timer);
                this.innerHTML = originalText;
                this.disabled = false;
            }
        }, 1000);
        
        // Simulate API call
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            showToast('New code sent to your email!', 'success');
        } catch (error) {
            showToast('Failed to send code. Please try again.', 'error');
        }
    });
}

// ============================================
// SOCIAL LOGIN BUTTONS
// ============================================
const socialButtons = document.querySelectorAll('.btn-social');

socialButtons.forEach(button => {
    button.addEventListener('click', function() {
        const provider = this.classList.contains('btn-google') ? 'Google' :
                        this.classList.contains('btn-discord') ? 'Discord' :
                        this.classList.contains('btn-steam') ? 'Steam' : 'Social';
        
        showToast(`${provider} login coming soon!`, 'info');
    });
});

// ============================================
// TOAST NOTIFICATIONS
// ============================================
function showToast(message, type = 'info') {
    const toastContainer = document.getElementById('toastContainer');
    
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    const icons = {
        success: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>',
        error: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>',
        info: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>'
    };
    
    toast.innerHTML = `
        <div class="toast-icon">${icons[type]}</div>
        <div class="toast-message">${message}</div>
        <button class="toast-close" onclick="this.parentElement.remove()">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>
    `;
    
    toastContainer.appendChild(toast);
    
    // Animate in
    setTimeout(() => toast.classList.add('show'), 10);
    
    // Auto remove after 4 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

// ============================================
// INPUT FOCUS EFFECTS
// ============================================
const inputs = document.querySelectorAll('input:not([type="checkbox"])');

inputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.closest('.input-wrapper')?.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
        this.closest('.input-wrapper')?.classList.remove('focused');
    });
});

// ============================================
// PAGE LOAD ANIMATION
// ============================================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

console.log('%c Jordan Gaming Arena - Auth System ', 'background: linear-gradient(135deg, #8b5cf6, #ec4899); color: white; font-size: 16px; padding: 8px; font-weight: bold;');