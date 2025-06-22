import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background text-foreground min-h-screen">
      <div className="container mx-auto px-4 py-12 md:py-20 relative">
        <Button
            variant="ghost"
            className="absolute top-8 left-4 md:left-8"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Privacy Policy (Pre-Launch)</h1>
        <div className="max-w-3xl mx-auto text-muted-foreground space-y-6">
          <p><strong>Effective Date:</strong> June 22, 2025</p>
          <p><strong>Last Updated:</strong> June 22, 2025</p>

          <p>
            At Livora, we value your privacy. This Privacy Policy explains how we collect, use, and protect the
            information you provide when you visit our pre-launch website at{' '}
            <a href="https://www.livoralife.com" className="text-primary hover:underline">
              https://www.livoralife.com
            </a>
            .
          </p>

          <div>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">What Information We Collect</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Email address (when you sign up for early access, newsletters, or updates)</li>
              <li>Basic usage data (e.g., page views or time on site) through cookies or analytics tools</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>To send updates about Livora's launch and features</li>
              <li>To improve the user experience on our site</li>
              <li>To communicate exclusive offers or news (if you opt-in)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">Data Sharing</h2>
            <p>
              We do not sell or rent your personal data. Your information may be shared only with trusted service
              providers (e.g., email delivery tools or hosting providers) for internal purposes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">Cookies</h2>
            <p>
              We may use cookies to understand site traffic and improve functionality. You can choose to disable cookies
              in your browser settings.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">Your Rights</h2>
            <p>
              You can request to access, modify, or delete your information at any time by contacting us at [insert contact email].
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">Contact Us</h2>
            <p>If you have any questions, reach out at <a href="mailto:info@livoralife.com" className="text-primary hover:underline">info@livoralife.com</a>.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 