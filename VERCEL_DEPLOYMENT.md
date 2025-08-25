# 🚀 Vercel Deployment Guide - Sky Photography Website

This guide will help you deploy your Sky Photography website to Vercel with Analytics and Insights enabled.

## 📋 Prerequisites

- [Vercel Account](https://vercel.com/signup) (free)
- [GitHub Account](https://github.com) (for repository)
- Your website files ready

## 🎯 Step 1: Prepare Your Repository

### 1.1 Push to GitHub
```bash
# If you haven't already, push your code to GitHub
git add .
git commit -m "Add Vercel Analytics and deployment configuration"
git push origin main
```

### 1.2 Repository Structure
Ensure your repository has this structure:
```
sky-photography/
├── index.html
├── vercel.json
├── package.json
├── assets/
│   ├── css/
│   ├── js/
│   ├── images/
│   └── gallery/
└── README.md
```

## 🌐 Step 2: Deploy to Vercel

### 2.1 Connect Repository
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your GitHub repository
4. Select the `sky-photography` repository

### 2.2 Configure Project
- **Project Name**: `sky-photography-website` (or your preferred name)
- **Framework Preset**: Other
- **Root Directory**: `./` (leave as default)
- **Build Command**: Leave empty (static site)
- **Output Directory**: Leave empty (static site)

### 2.3 Deploy
Click "Deploy" and wait for the build to complete.

## 📊 Step 3: Enable Vercel Analytics

### 3.1 Access Analytics
1. Go to your project dashboard on Vercel
2. Click on "Analytics" tab
3. Click "Enable Analytics"

### 3.2 Configure Analytics
- **Plan**: Start with the free plan
- **Data Retention**: 30 days (free plan)
- **Privacy**: Configure based on your needs

### 3.3 Verify Installation
The analytics script is already included in your `index.html`:
```html
<script defer src="/_vercel/insights/script.js"></script>
```

## 🔧 Step 4: Configure Environment Variables

### 4.1 Add Analytics ID (Optional)
1. Go to Project Settings → Environment Variables
2. Add variable:
   - **Name**: `VERCEL_ANALYTICS_ID`
   - **Value**: Your analytics ID (if provided by Vercel)

## 📈 Step 5: Test Analytics

### 5.1 Verify Tracking
1. Visit your deployed website
2. Open browser developer tools
3. Check Console for analytics events
4. Interact with forms and buttons
5. Check Vercel Analytics dashboard for data

### 5.2 Test Events
Your website tracks these events:
- **Page Views**: Automatic
- **Form Submissions**: Booking form
- **CTA Clicks**: Primary buttons
- **Gallery Views**: Image clicks
- **Custom Events**: User interactions

## 🎨 Step 6: Custom Domain (Optional)

### 6.1 Add Domain
1. Go to Project Settings → Domains
2. Add your custom domain
3. Configure DNS settings as instructed

### 6.2 SSL Certificate
Vercel automatically provides SSL certificates for all domains.

## 📱 Step 7: Performance Optimization

### 7.1 Vercel Configuration
Your `vercel.json` includes:
- **Caching**: Static assets cached for 1 year
- **Security Headers**: XSS protection, content type options
- **Compression**: Automatic gzip compression
- **CDN**: Global edge network

### 7.2 Performance Monitoring
- **Core Web Vitals**: Tracked automatically
- **Page Speed**: Monitored in Analytics
- **Error Tracking**: Built-in error monitoring

## 🔍 Step 8: Analytics Dashboard

### 8.1 Available Metrics
- **Page Views**: Traffic overview
- **Performance**: Core Web Vitals
- **Events**: Custom event tracking
- **Errors**: JavaScript errors
- **Real-time**: Live user activity

### 8.2 Custom Events
Your website tracks:
```javascript
// Form submissions
window.va('event', {
    name: 'booking_form_submitted',
    data: { package: 'premium', event_type: 'wedding' }
});

// Page interactions
window.va('event', {
    name: 'gallery_view',
    data: { category: 'portrait' }
});
```

## 🛠️ Step 9: Advanced Configuration

### 9.1 Custom Analytics
Add more tracking in `assets/js/main.js`:
```javascript
// Track specific user actions
function trackUserAction(action, data) {
    if (typeof window.va !== 'undefined') {
        window.va('event', {
            name: action,
            data: data
        });
    }
}

// Example usage
trackUserAction('service_viewed', { service: 'wedding' });
```

### 9.2 Performance Monitoring
Monitor Core Web Vitals:
- **LCP** (Largest Contentful Paint)
- **FID** (First Input Delay)
- **CLS** (Cumulative Layout Shift)

## 🔒 Step 10: Security & Privacy

### 10.1 Privacy Compliance
- **GDPR**: Configure data retention
- **CCPA**: Respect user privacy
- **Cookie Consent**: Add if needed

### 10.2 Security Headers
Your `vercel.json` includes security headers:
- X-Content-Type-Options
- X-Frame-Options
- X-XSS-Protection
- Referrer-Policy

## 📊 Step 11: Monitoring & Alerts

### 11.1 Set Up Alerts
1. Go to Analytics → Alerts
2. Configure alerts for:
   - High error rates
   - Performance degradation
   - Traffic spikes

### 11.2 Regular Monitoring
- Check Analytics dashboard weekly
- Monitor Core Web Vitals
- Review user behavior patterns
- Track conversion rates

## 🆘 Troubleshooting

### Common Issues

**Analytics Not Working**
- Check if script is loaded in browser console
- Verify domain is correct in Vercel settings
- Ensure no ad blockers are interfering

**Performance Issues**
- Optimize images (use WebP format)
- Minimize JavaScript bundle size
- Enable compression in Vercel settings

**Form Not Working**
- Check Formspree configuration
- Verify form action URL
- Test in incognito mode

### Support Resources
- [Vercel Documentation](https://vercel.com/docs)
- [Analytics Guide](https://vercel.com/docs/analytics)
- [Performance Optimization](https://vercel.com/docs/performance)

## 🎉 Success Checklist

- [ ] Website deployed to Vercel
- [ ] Analytics enabled and tracking
- [ ] Custom domain configured (if applicable)
- [ ] Forms working correctly
- [ ] Performance optimized
- [ ] Security headers applied
- [ ] Monitoring alerts set up
- [ ] Regular analytics review scheduled

## 📞 Support

For technical support:
- **Vercel Support**: [support.vercel.com](https://support.vercel.com)
- **Analytics Issues**: Check Vercel Analytics documentation
- **Website Issues**: Review browser console for errors

---

**Your Sky Photography website is now live with full analytics and performance monitoring!** 🚀

**Live URL**: `https://your-project-name.vercel.app`
**Analytics Dashboard**: Available in your Vercel project dashboard
