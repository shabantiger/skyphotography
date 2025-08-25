# Sky Photo Studio - Modern Photography Website

A modern, responsive photography website for Sky Photo Studio based in Wakiso, Uganda. This website showcases professional photography services with a beautiful, user-friendly interface.

## 🌟 Features

### ✨ Modern Design
- **Responsive Layout**: Mobile-first design that works perfectly on all devices
- **Professional Typography**: Uses Inter and Playfair Display fonts for elegant typography
- **Smooth Animations**: CSS animations and transitions for enhanced user experience
- **Modern Color Scheme**: Professional blue and gold color palette

### 📱 User Experience
- **Interactive Gallery**: Filterable photo gallery with lightbox functionality
- **Smooth Navigation**: Fixed navigation with smooth scrolling
- **Mobile Menu**: Hamburger menu for mobile devices
- **Loading States**: Visual feedback for form submissions and interactions

### 🎨 Visual Elements
- **Hero Section**: Full-screen hero with gradient background and call-to-action buttons
- **Service Cards**: Detailed service packages with pricing information
- **Contact Information**: Multiple ways to get in touch
- **Social Media Integration**: Direct links to Instagram, TikTok, and WhatsApp

### ⚡ Performance & Technical
- **Fast Loading**: Optimized CSS and JavaScript
- **SEO Optimized**: Proper meta tags and structured content
- **Accessibility**: ARIA labels and keyboard navigation support
- **Cross-browser Compatible**: Works on all modern browsers

## 📁 Project Structure

```
sky-photography/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css       # Main stylesheet
│   ├── js/
│   │   └── main.js         # JavaScript functionality
│   ├── gallery/            # Gallery images
│   │   ├── photo1.svg
│   │   ├── photo2.svg
│   │   └── ...
│   └── images/             # Other images (favicon, etc.)
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- Basic knowledge of HTML, CSS, and JavaScript (for customization)

### Installation
1. Clone or download the project files
2. Open `index.html` in your web browser
3. The website should load immediately with all functionality

### Local Development
For local development, you can use any local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## 🎯 Key Sections

### 1. Hero Section
- Eye-catching gradient background
- Clear value proposition
- Call-to-action buttons
- Statistics showcase

### 2. Gallery
- Filterable by category (Cultural, Portrait, Events)
- Lightbox functionality for image viewing
- Responsive grid layout
- Hover effects and animations

### 3. Services
- Three main service categories:
  - **Cultural Conceptual**: Traditional and cultural photography
  - **Regular Photoshoot**: Portrait and family sessions
  - **Events & Functions**: Wedding and event coverage
- Detailed pricing packages
- Feature highlights for each service

### 4. About Section
- Company story and background
- Key features and benefits
- Professional credentials

### 5. Booking Form
- Comprehensive booking form
- Package selection
- Date and time picker
- Form validation and submission handling

### 6. Contact Information
- Multiple contact methods
- Social media links
- Location information
- Interactive map placeholder

## 🛠 Customization

### Colors
The main color scheme is defined in CSS variables. You can modify these in `assets/css/style.css`:

```css
:root {
  --primary-color: #3b82f6;
  --secondary-color: #fbbf24;
  --text-color: #1a1a1a;
  --background-color: #f8fafc;
}
```

### Content
- **Business Information**: Update contact details, social media links, and pricing in `index.html`
- **Images**: Replace placeholder images in `assets/gallery/` with actual photography work
- **Services**: Modify service packages and pricing in the services section

### Styling
- **Fonts**: Change fonts by updating the Google Fonts link in the HTML head
- **Layout**: Modify grid layouts and spacing in the CSS file
- **Animations**: Adjust animation timing and effects in the CSS

## 📧 Form Integration

The booking form is currently set up with a simulated submission. To integrate with a real backend:

1. **Formspree**: Replace the form action with your Formspree endpoint
2. **Custom Backend**: Modify the form submission in `assets/js/main.js`
3. **Email Service**: Integrate with services like SendGrid or Mailgun

Example Formspree integration:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

## 📱 Mobile Optimization

The website is fully optimized for mobile devices with:
- Responsive navigation menu
- Touch-friendly buttons and interactions
- Optimized image loading
- Mobile-first CSS approach

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📈 Performance Features

- **Lazy Loading**: Images load as needed
- **Optimized CSS**: Minified and efficient styles
- **Smooth Scrolling**: Native smooth scroll behavior
- **Debounced Events**: Optimized scroll and resize handlers

## 🎨 Design System

### Typography
- **Headings**: Playfair Display (serif)
- **Body Text**: Inter (sans-serif)
- **Hierarchy**: Clear typographic scale

### Spacing
- Consistent spacing system using rem units
- Responsive padding and margins
- Grid-based layout system

### Components
- Reusable button styles
- Card components for services
- Form input styling
- Navigation elements

## 🔒 Security Considerations

- Form validation on both client and server side
- XSS protection through proper HTML encoding
- HTTPS recommended for production deployment

## 📊 Analytics Integration

The website includes analytics tracking for:
- Button clicks
- Gallery views
- Form interactions
- Page views

To enable Google Analytics, add your tracking code to the HTML head section.

## 🚀 Deployment

### Static Hosting
The website can be deployed to any static hosting service:
- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Push to a GitHub repository
- **AWS S3**: Upload files to an S3 bucket

### Custom Domain
Update the meta tags in `index.html` with your domain:
```html
<meta property="og:url" content="https://yourdomain.com/">
```

## 📞 Support

For questions or customization requests:
- Email: skyphotographyltd@gmail.com
- Phone: +256 757 282 316
- WhatsApp: +256 757 282 316

## 📄 License

This project is created for Sky Photo Studio. All rights reserved.

---

**Sky Photo Studio** - Capturing life's precious moments with creativity and professionalism in Wakiso, Uganda.
