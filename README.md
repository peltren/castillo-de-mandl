# El Castillo de Mandl

Website for El Castillo de Mandl hotel and resort located in La Cumbre, Córdoba, Argentina.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `src/pages/` - All page components
- `src/styles/` - Global styles
- `public/images/` - Static images and assets

## Technologies Used

- Next.js 15
- React 19
- Tailwind CSS 4
- ESLint
- SendGrid (for email functionality)

## Features

- **Multilingual Support**: Spanish and English translations
- **Contact Form**: Functional contact form with email sending capability
- **Responsive Design**: Mobile-first responsive design
- **Image Gallery**: Interactive image carousels
- **Room Categories**: Detailed suite information and photos

## Development

The project uses the Pages Router pattern of Next.js with Tailwind CSS for styling.

## Email Configuration

For the contact form to send emails automatically, you need to configure SendGrid:

### SendGrid Setup (Recommended)

1. **Create a SendGrid account:**

   - Go to [SendGrid](https://sendgrid.com) and create a free account
   - Verify your domain or use a verified email

2. **Get API Key:**

   - Go to Settings > API Keys in your SendGrid dashboard
   - Create a new API Key with "Mail Send" permissions

3. **Configure environment variables:**
   - Create a `.env.local` file in the project root
   - Add the following variables:

```env
SENDGRID_API_KEY=your_sendgrid_api_key_here
FROM_EMAIL=noreply@elcastillodemandl.com
TO_EMAIL=reservas@elcastillodemandl.com
```

4. **Verify domain (optional but recommended):**
   - In SendGrid, go to Settings > Sender Authentication
   - Verify your domain to improve email delivery

### Manual Fallback

If SendGrid is not configured, the form will work with a fallback that:

- Processes form data
- Opens the user's email client with a pre-filled message
- Allows manual sending

### Testing

To test the contact form:

1. Run the development server: `npm run dev`
2. Go to the contact page
3. Fill out the form and submit
4. Verify that you receive the email or your email client opens

### Important Notes

- The email `noreply@elcastillodemandl.com` must be verified in SendGrid
- For production, consider using a verified domain
- Emails are sent to `reservas@elcastillodemandl.com`
- The form includes validation for required fields
