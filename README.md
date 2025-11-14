# Registration Form with Real-time Validation

## 🎯 Project Overview

This project demonstrates a professional registration form implementation featuring:
- Real-time field validation
- Comprehensive password strength requirements
- Accessible form controls
- Responsive design

## ✨ Features

### Validation Rules

#### Name Field
- **Required**: Yes
- **Format**: Letters and spaces only
- **Min Length**: 2 characters
- **Real-time**: Validates on input

#### Email Field
- **Required**: Yes
- **Format**: Valid email format (user@domain.com)
- **Validation**: RFC 5322 compliant regex

#### Password Field
- **Required**: Yes
- **Min Length**: 8 characters
- **Requirements**:
  - At least one uppercase letter
  - At least one lowercase letter
  - At least one number
  - At least one special character
- **Features**: Toggle visibility button

#### Phone Number Field
- **Required**: Yes
- **Format**: Flexible (supports various formats)
- **Min Digits**: 10
- **Max Digits**: 15
- **Accepted formats**: 
  - (123) 456-7890
  - 123-456-7890
  - 1234567890

### User Experience Features

- **Real-time Validation**: Instant feedback as users type
- **Visual Indicators**: Color-coded borders (red/green)
- **Clear Messages**: Descriptive error/success messages
- **Disabled Submit**: Button disabled until all fields valid
- **Success Feedback**: Confirmation message on successful submission
- **Password Toggle**: Show/hide password functionality
- **Keyboard Accessible**: Full keyboard navigation support

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: BEM methodology, CSS Grid, Flexbox
- **JavaScript ES6+**: Classes, Arrow Functions, Template Literals
- **No Dependencies**: Pure vanilla JavaScript

## 📁 Project Structure
```
Exercise3_Moise_M_Chirusha_25211377037/
│
├── index.html          # Main HTML file with semantic structure
├── styles/
│   └── main.css        # BEM methodology CSS with custom properties
└── scripts/
    └── main.js         # ES6+ JavaScript with class-based architecture
```

## 🚀 Setup Instructions

### Local Development

1. **Clone or download the project**
```bash
   git clone <25211377037_Moise_M_Chirusha_ClientSide>
   cd Exercise3_Moise_M_Chirusha_25211377037
```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server

3. **No build process required** - Pure vanilla implementation

### Testing

1. Open the form in your browser
2. Try each validation scenario:
   - Leave fields empty and click submit
   - Enter invalid formats
   - Meet all requirements
   - Test password visibility toggle

## 🎨 Code Quality Features

### HTML5 Best Practices
- Semantic elements (`<header>`, `<main>`, `<footer>`)
- Proper form accessibility (labels, ARIA attributes)
- Descriptive IDs and classes
- Valid W3C markup

### CSS Best Practices
- BEM (Block Element Modifier) methodology
- CSS custom properties (variables)
- Mobile-first responsive design
- Reduced motion support
- High contrast mode support

### JavaScript Best Practices
- ES6+ features (classes, arrow functions, destructuring)
- Comprehensive JSDoc comments
- Separation of concerns (Validation vs UI logic)
- Error-free console output
- Event delegation

## ♿ Accessibility (WCAG Compliance)

- **Keyboard Navigation**: Full tab navigation support
- **Screen Readers**: Proper ARIA labels and descriptions
- **Focus Indicators**: Visible focus states
- **Color Contrast**: WCAG AA compliant
- **Error Identification**: Clear error messages
- **Labels**: All inputs properly labeled

## 📱 Responsive Design

- **Mobile**: Optimized for 320px+
- **Tablet**: Enhanced layout for 768px+
- **Desktop**: Full experience at 1024px+
- **Flexible**: Adapts to any screen size

## 🌐 Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+

## 📊 Performance

- **First Paint**: < 1s
- **Time to Interactive**: < 1.5s
- **File Sizes**:
  - HTML: ~4KB
  - CSS: ~6KB
  - JavaScript: ~8KB
- **No external dependencies**
- **Optimized for fast loading**

## 🔒 Security Considerations

- Client-side validation (always validate server-side too)
- No sensitive data stored in localStorage
- XSS protection through proper escaping
- HTTPS recommended for production

## 💡 Usage Examples

### Basic Usage
1. Fill in all required fields
2. Watch real-time validation feedback
3. Submit button enables when all fields valid
4. Success message appears on submission

### Testing Validation

**Name Field:**
```
❌ "123" → Error: Must contain only letters
❌ "A" → Error: Must be at least 2 characters
✅ "Moise Chirusha" → Valid
```

**Email Field:**
```
❌ "notanemail" → Error: Invalid format
❌ "user@" → Error: Invalid format
✅ "user@example.com" → Valid
```

**Password Field:**
```
❌ "password" → Error: Missing uppercase, number, special char
❌ "Password" → Error: Missing number, special char
❌ "Pass123" → Error: Missing special char
✅ "Pass123!" → Valid (meets all requirements)
```

**Phone Field:**
```
❌ "123" → Error: Too short
❌ "abcd" → Error: Invalid characters
✅ "(555) 123-4567" → Valid
✅ "0997720056" → Valid
```

## 🔧 Customization

### Modify Validation Rules

Edit the `ValidationManager` class in `scripts/main.js`:
```javascript
validateName(value) {
    // Customize name validation
    if (value.length < 3) { // Change min length
        return { isValid: false, message: 'Your custom message' };
    }
    // Add more rules...
}
```

### Change Styles

Edit CSS variables in `styles/main.css`:
```css
:root {
    --color-primary: #your-color;
    --radius-md: 0.75rem;
    /* Customize other variables */
}
```

### Add New Fields

1. Add HTML input in `index.html`
2. Add validation method in `ValidationManager`
3. Add field to `formState` in `RegistrationForm`
4. Update event listeners

## 📝 Code Documentation

All code is thoroughly documented with:
- JSDoc comments for functions
- Inline comments for complex logic
- Clear variable and function names
- Organized structure

## 🐛 Known Issues

None currently. Please report issues via GitHub.


## 👤 Author

**Moise Chirusha**
- Student Number: 25211377037
- Email: moseschirusha@gmail.com
- GitHub: [@MosesChirusha](https://github.com/MosesChirusha/)

## 📄 License

This project is created for educational purposes.

## 🙏 Acknowledgments

- Icons: Lucide Icons
- Design inspiration: Modern web best practices
- Validation patterns: OWASP guidelines

## 📞 Support

For questions or issues:
1. Check the documentation
2. Review the code comments
3. Open an issue on GitHub
4. Contact via email

---

**Last Updated**: November 2025
**Version**: 1.0.0