"use client";

import { useState } from "react";
import { Printer } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PrintResume() {
  const [isPrinting, setIsPrinting] = useState(false);

  const handlePrint = () => {
    setIsPrinting(true);

    // Add a small delay to ensure the state change has taken effect
    setTimeout(() => {
      window.print();

      // Reset the state after printing dialog closes
      setTimeout(() => {
        setIsPrinting(false);
      }, 500);
    }, 100);
  };

  return (
    <>
      <Button variant="outline" onClick={handlePrint}>
        <Printer className="mr-2 h-4 w-4" />
        Print Resume
      </Button>

      {/* Print-specific styles */}
      <style jsx global>{`
        @media print {
          /* Hide non-essential elements when printing */
          header,
          footer,
          nav,
          button,
          .no-print {
            display: none !important;
          }

          /* Ensure the resume takes up the full page */
          body,
          html {
            width: 100%;
            margin: 0;
            padding: 0;
            background: white;
          }

          /* Reset background colors for printing */
          * {
            background-color: white !important;
            color: black !important;
            box-shadow: none !important;
          }

          /* Adjust layout for print */
          .container {
            max-width: 100% !important;
            padding: 0 !important;
          }

          /* Ensure borders are visible in print */
          .border,
          .border-b {
            border-color: #ddd !important;
          }

          /* Adjust spacing for print */
          .py-8,
          .py-12,
          .py-20 {
            padding-top: 1rem !important;
            padding-bottom: 1rem !important;
          }

          .space-y-8 > * + * {
            margin-top: 1rem !important;
          }

          /* Make text slightly smaller to fit more on a page */
          body {
            font-size: 12px !important;
          }

          h1 {
            font-size: 24px !important;
          }

          h2 {
            font-size: 20px !important;
          }

          h3 {
            font-size: 16px !important;
          }

          h4 {
            font-size: 14px !important;
          }
        }
      `}</style>
    </>
  );
}
