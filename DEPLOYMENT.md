# Deployment Guide - Sky Photography Website

This guide will help you deploy your Sky Photography website to various hosting platforms.

## 🚀 GitHub Pages Deployment

### Step 1: Create GitHub Repository
1. Go to [GitHub](https://github.com) and sign in
2. Click "New repository"
3. Name it: `sky-photography-website`
4. Make it **Public** (required for free GitHub Pages)
5. Don't initialize with README (we already have one)

### Step 2: Push to GitHub
```bash
# Add all files
git add .

# Commit changes
git commit -m "Initial commit: Sky Photography website"

# Add remote repository (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/sky-photography-website.git

# Push to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Select "main" branch and "/ (root)" folder
6. Click "Save"

Your website will be available at: `https://YOUR_USERNAME.github.io/sky-photography-website`

## 🌐 Other Deployment Options

### Netlify (Recommended)
1. Go to [Netlify](https://netlify.com)
2. Drag and drop your project folder
3. Your site will be live instantly
4. Get a custom domain or use the provided URL

### Vercel
1. Go to [Vercel](https://vercel.com)
2. Connect your GitHub repository
3. Deploy automatically on every push

### Custom Domain Setup
1. Purchase a domain (GoDaddy, Namecheap, etc.)
2. Update DNS settings to point to your hosting provider
3. Update the domain in your website files

## 📧 Form Setup

### Formspree Setup
1. Go to [Formspree](https://formspree.io)
2. Create account and new form
3. Get your form ID
4. Update in `index.html` and `assets/js/main.js`

### EmailJS Setup (Alternative)
1. Go to [EmailJS](https://emailjs.com)
2. Create account and email service
3. Create email template
4. Update IDs in `assets/js/emailjs-alternative.js`

## 🔧 Post-Deployment Checklist

- [ ] Test all pages and links
- [ ] Verify form submission works
- [ ] Check mobile responsiveness
- [ ] Test gallery functionality
- [ ] Verify contact information
- [ ] Update social media links
- [ ] Test booking form
- [ ] Check loading speed

## 📱 Performance Optimization

### Image Optimization
- Compress JPG images to 80-85% quality
- Use WebP format for better compression
- Implement lazy loading (already included)

### SEO Optimization
- Update meta tags with your domain
- Add Google Analytics
- Submit sitemap to search engines

## 🔒 Security Considerations

- Use HTTPS (automatic with GitHub Pages)
- Validate form inputs (already implemented)
- Keep dependencies updated
- Regular backups

## 📊 Analytics Setup

### Google Analytics
1. Create Google Analytics account
2. Get tracking code
3. Add to `<head>` section of `index.html`

### Google Search Console
1. Submit your site to Google Search Console
2. Verify ownership
3. Submit sitemap

## 🆘 Troubleshooting

### Common Issues
- **Form not working**: Check Formspree/EmailJS configuration
- **Images not loading**: Verify file paths and permissions
- **Mobile issues**: Test on different devices
- **Slow loading**: Optimize images and check hosting

### Support
- Email: skyphotographyltd@gmail.com
- Phone: +256 757 282 316
- WhatsApp: +256 757 282 316

---

**Your website is now ready for deployment!** 🎉
