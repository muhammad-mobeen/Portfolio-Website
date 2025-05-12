import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Muhammad-Mobeen-Resume.pdf"; // Assuming this path is correct
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// import "react-pdf/dist/esm/Page/TextLayer.css"; // Import for text layer styling

// Setup PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// const resumeLink = // This was unused in your original rendering logic, so I'm keeping it commented
//   "https://raw.githubusercontent.com/soumyajit4419/portfolio/master/src/Assets/Soumyajit_Behera-BIT_MESRA.pdf";

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null); // State to store total number of pages

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial width

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }} className="py-3">
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            rel="noopener noreferrer" // Good practice for target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
             Download CV
          </Button>
        </Row>

        <Row className="resume">
          {/*
            The Document component will be centered by its parent Row if it's not full width.
            To center the pages themselves if they are narrower than the Document,
            we make Document a flex container that arranges its children (Pages) in a column
            and centers them along the cross-axis (horizontally).
          */}
          <Document
            file={pdf}
            onLoadSuccess={onDocumentLoadSuccess}
            className="d-flex flex-column align-items-center" // Centers the Page components
            loading={<div>Loading PDF... Please wait!</div>} // Optional: loading indicator
            error={<div>Error loading PDF. Please try again later.</div>} // Optional: error message
          >
            {/*
              Only attempt to render pages if numPages is known (not null)
              Create an array of page numbers [1, 2, ..., numPages]
            */}
            {numPages && Array.from(new Array(numPages), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                scale={width > 786 ? 1.7 : (width > 500 ? 1.1 : 0.6)} // Adjusted scaling for more breakpoints
                renderTextLayer={true} // Keep text layer for accessibility and selection (ensure CSS is imported)
                renderAnnotationLayer={true} // Keep annotation layer (ensure CSS is imported)
                className="mb-3 pdf-page" // Add some margin between pages and a custom class if needed
              />
            ))}
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }} className="py-3">
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
             Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;