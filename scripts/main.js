/**
 * Registration Form with Real-time Validation
 * ES6+ implementation with comprehensive validation
 * @author Your Name
 * @version 1.0.0
 */

'use strict';

/**
 * ValidationManager Class
 * Handles all form validation logic
 */
class ValidationManager {
    constructor() {
        this.validators = {
            name: this.validateName.bind(this),
            email: this.validateEmail.bind(this),
            password: this.validatePassword.bind(this),
            phone: this.validatePhone.bind(this)
        };
    }

    /**
     * Validates name field - letters and spaces only
     * @param {string} value - The name to validate
     * @returns {Object} Validation result with isValid and message
     */
    validateName(value) {
        if (!value.trim()) {
            return { isValid: false, message: 'Name is required' };
        }
        if (!/^[A-Za-z\s]+$/.test(value)) {
            return { 
                isValid: false, 
                message: 'Name must contain only letters and spaces' 
            };
        }
        if (value.trim().length < 2) {
            return { 
                isValid: false, 
                message: 'Name must be at least 2 characters' 
            };
        }
        return { isValid: true, message: 'Name is valid' };
    }

    /**
     * Validates email format
     * @param {string} value - The email to validate
     * @returns {Object} Validation result
     */
    validateEmail(value) {
        if (!value.trim()) {
            return { isValid: false, message: 'Email is required' };
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            return { 
                isValid: false, 
                message: 'Please enter a valid email address' 
            };
        }
        return { isValid: true, message: 'Email is valid' };
    }

    /**
     * Validates password strength
     * Must contain: 8+ chars, uppercase, lowercase, number, special char
     * @param {string} value - The password to validate
     * @returns {Object} Validation result
     */
    validatePassword(value) {
        if (!value) {
            return { isValid: false, message: 'Password is required' };
        }
        if (value.length < 8) {
            return { 
                isValid: false, 
                message: 'Password must be at least 8 characters' 
            };
        }
        if (!/[A-Z]/.test(value)) {
            return { 
                isValid: false, 
                message: 'Password must contain an uppercase letter' 
            };
        }
        if (!/[a-z]/.test(value)) {
            return { 
                isValid: false, 
                message: 'Password must contain a lowercase letter' 
            };
        }
        if (!/[0-9]/.test(value)) {
            return { 
                isValid: false, 
                message: 'Password must contain a number' 
            };
        }
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
            return { 
                isValid: false, 
                message: 'Password must contain a special character' 
            };
        }
        return { isValid: true, message: 'Password is strong' };
    }

    /**
     * Validates phone number format
     * Accepts: (123) 456-7890, 123-456-7890, 1234567890
     * @param {string} value - The phone number to validate
     * @returns {Object} Validation result
     */
    validatePhone(value) {
        if (!value.trim()) {
            return { isValid: false, message: 'Phone number is required' };
        }
        const phoneRegex = /^[\d\s\-\(\)]+$/;
        if (!phoneRegex.test(value)) {
            return { 
                isValid: false, 
                message: 'Phone number can only contain digits, spaces, hyphens, and parentheses' 
            };
        }
        const digitsOnly = value.replace(/\D/g, '');
        if (digitsOnly.length < 10) {
            return { 
                isValid: false, 
                message: 'Phone number must be at least 10 digits' 
            };
        }
        if (digitsOnly.length > 15) {
            return { 
                isValid: false, 
                message: 'Phone number is too long' 
            };
        }
        return { isValid: true, message: 'Phone number is valid' };
    }

    /**
     * Validates a field by name
     * @param {string} fieldName - Name of the field to validate
     * @param {string} value - Value to validate
     * @returns {Object} Validation result
     */
    validate(fieldName, value) {
        const validator = this.validators[fieldName];
        return validator ? validator(value) : { isValid: false, message: 'Unknown field' };
    }
}

/**
 * RegistrationForm Class
 * Main form controller
 */
class RegistrationForm {
    constructor() {
        this.validator = new ValidationManager();
        this.formState = {
            name: { value: '', isValid: false, touched: false },
            email: { value: '', isValid: false, touched: false },
            password: { value: '', isValid: false, touched: false },
            phone: { value: '', isValid: false, touched: false }
        };
        
        this.init();
    }

    /**
     * Initialize form - cache DOM elements and attach event listeners
     */
    init() {
        // Cache DOM elements
        this.elements = {
            nameInput: document.getElementById('name'),
            emailInput: document.getElementById('email'),
            passwordInput: document.getElementById('password'),
            phoneInput: document.getElementById('phone'),
            submitBtn: document.getElementById('submitBtn'),
            resetBtn: document.getElementById('resetBtn'),
            togglePasswordBtn: document.getElementById('togglePassword'),
            successMessage: document.getElementById('successMessage')
        };

        // Attach event listeners
        this.attachEventListeners();
        
        console.log('Registration form initialized');
    }

    /**
     * Attach all event listeners
     */
    attachEventListeners() {
        // Input event listeners for real-time validation
        ['name', 'email', 'password', 'phone'].forEach(field => {
            const input = this.elements[`${field}Input`];
            input.addEventListener('input', (e) => this.handleInput(field, e.target.value));
            input.addEventListener('blur', () => this.markAsTouched(field));
        });

        // Submit button
        this.elements.submitBtn.addEventListener('click', () => this.handleSubmit());

        // Reset button
        this.elements.resetBtn?.addEventListener('click', () => this.resetForm());

        // Password toggle
        this.elements.togglePasswordBtn?.addEventListener('click', () => this.togglePasswordVisibility());
    }

    /**
     * Handle input changes and trigger validation
     * @param {string} fieldName - Name of the field
     * @param {string} value - Current input value
     */
    handleInput(fieldName, value) {
        // Update form state
        this.formState[fieldName].value = value;
        this.formState[fieldName].touched = true;

        // Validate field
        const result = this.validator.validate(fieldName, value);
        this.formState[fieldName].isValid = result.isValid;

        // Update UI
        this.updateFieldUI(fieldName, result);
        this.updateSubmitButton();
    }

    /**
     * Mark field as touched (for blur events)
     * @param {string} fieldName - Name of the field
     */
    markAsTouched(fieldName) {
        this.formState[fieldName].touched = true;
        const result = this.validator.validate(
            fieldName, 
            this.formState[fieldName].value
        );
        this.updateFieldUI(fieldName, result);
    }

    /**
     * Update field UI based on validation result
     * @param {string} fieldName - Name of the field
     * @param {Object} result - Validation result
     */
    updateFieldUI(fieldName, result) {
        const input = this.elements[`${fieldName}Input`];
        const errorElement = document.getElementById(`${fieldName}-error`);

        // Remove previous validation classes
        input.classList.remove('form__input--valid', 'form__input--error');
        errorElement.classList.remove('form__validation--success', 'form__validation--error');

        // Only show validation if field has been touched
        if (this.formState[fieldName].touched) {
            // Add appropriate class
            input.classList.add(
                result.isValid ? 'form__input--valid' : 'form__input--error'
            );
            errorElement.classList.add(
                result.isValid ? 'form__validation--success' : 'form__validation--error'
            );

            // Update validation message
            const iconSVG = result.isValid 
                ? '<svg class="form__validation-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>'
                : '<svg class="form__validation-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>';
            
            errorElement.innerHTML = `${iconSVG}<span>${result.message}</span>`;
            errorElement.hidden = false;

            // Update aria-invalid
            input.setAttribute('aria-invalid', !result.isValid);
        } else {
            errorElement.hidden = true;
        }
    }

    /**
     * Update submit button state
     */
    updateSubmitButton() {
        const isFormValid = Object.values(this.formState).every(field => field.isValid);
        
        this.elements.submitBtn.disabled = !isFormValid;
        this.elements.submitBtn.textContent = isFormValid 
            ? 'Register' 
            : 'Complete All Fields to Register';
    }

    /**
     * Handle form submission
     */
    handleSubmit() {
        // Mark all fields as touched
        Object.keys(this.formState).forEach(field => {
            this.formState[field].touched = true;
            const result = this.validator.validate(field, this.formState[field].value);
            this.updateFieldUI(field, result);
        });

        // Check if form is valid
        const isFormValid = Object.values(this.formState).every(field => field.isValid);

        if (isFormValid) {
            // Get form data
            const formData = {};
            Object.keys(this.formState).forEach(field => {
                formData[field] = this.formState[field].value;
            });

            console.log('Form submitted successfully:', formData);
            
           // Show success message
            this.elements.successMessage.classList.remove('registration__success--hidden');
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    /**
     * Toggle password visibility
     */
    togglePasswordVisibility() {
        const input = this.elements.passwordInput;
        const eyeIcon = this.elements.togglePasswordBtn.querySelector('.form__icon--eye');
        const eyeOffIcon = this.elements.togglePasswordBtn.querySelector('.form__icon--eye-off');

        if (input.type === 'password') {
            input.type = 'text';
            eyeIcon.hidden = true;
            eyeOffIcon.hidden = false;
            this.elements.togglePasswordBtn.setAttribute('aria-label', 'Hide password');
        } else {
            input.type = 'password';
            eyeIcon.hidden = false;
            eyeOffIcon.hidden = true;
            this.elements.togglePasswordBtn.setAttribute('aria-label', 'Show password');
        }
    }

    /**
     * Reset form to initial state
     */
    resetForm() {
        // Reset form state
        Object.keys(this.formState).forEach(field => {
            this.formState[field] = { value: '', isValid: false, touched: false };
            
            // Clear input
            const input = this.elements[`${field}Input`];
            input.value = '';
            input.classList.remove('form__input--valid', 'form__input--error');
            input.setAttribute('aria-invalid', 'false');
            
            // Hide validation message
            const errorElement = document.getElementById(`${field}-error`);
            errorElement.hidden = true;
            errorElement.classList.remove('form__validation--success', 'form__validation--error');
        });

        // Hide success message
        this.elements.successMessage.classList.add('registration__success--hidden');

        // Update submit button
        this.updateSubmitButton();

        // Reset password visibility
        if (this.elements.passwordInput.type === 'text') {
            this.togglePasswordVisibility();
        }

        // Focus first input
        this.elements.nameInput.focus();

        console.log('Form reset successfully');
    }
}

/**
 * Initialize form when DOM is ready
 */
document.addEventListener('DOMContentLoaded', () => {
    new RegistrationForm();
});