import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const TermsOfService: React.FC = () => {
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
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Terms of Service (Pre-Launch)</h1>
        <div className="max-w-3xl mx-auto text-muted-foreground space-y-6">
          <p><strong>Effective Date:</strong> June 22, 2025</p>
          <p><strong>Last Updated:</strong> June 22, 2025</p>

          <p>
            Welcome to Livora's pre-launch website. By accessing or using our site, you agree to these Terms of
            Service.
          </p>

          <div>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">1. Website Purpose</h2>
            <p>
              This website is intended to provide visitors with a preview of Livora's upcoming health-focused food
              services and to collect early interest via email signups.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">2. Use of Content</h2>
            <p>
              All branding, text, images, and design elements on this site belong to Livora and may not be used
              without permission.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">3. No Guarantees</h2>
            <p>
              All products, features, and timelines shared are subject to change. Signing up for updates does not
              guarantee product availability, launch dates, or pricing.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">4. Limitation of Liability</h2>
            <p>
              Livora is not responsible for any damages or losses resulting from the use or misuse of the site or its
              content.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">5. External Links</h2>
            <p>
              We may include links to third-party websites. We are not responsible for their content or privacy
              practices.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">6. Modifications</h2>
            <p>
              We may update these terms at any time. By continuing to use the site, you agree to the latest version.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService; 