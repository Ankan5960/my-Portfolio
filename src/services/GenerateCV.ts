import jsPDF from "jspdf";
//import autoTable from "jspdf-autotable";
import { portfolioData } from "../data/PortfolioData";

export const generateCV = (): void => {
//   const doc = new jsPDF();
//   const margin = 15;
//   const pageWidth = doc.internal.pageSize.getWidth();
//   let y = margin;

//   // Header - Name & Tagline
//   doc.setFontSize(22);
//   doc.setFont("helvetica", "bold");
//   doc.text(portfolioData.name, margin, y);
//   y += 7;

//   doc.setFontSize(12);
//   doc.setFont("helvetica", "normal");
//   doc.text(portfolioData.tagline, margin, y);
//   y += 10;
  
//   doc.setFillColor(0, 0, 255); // Blue
//   doc.rect(80, 20, 50, 30, 'F');

//   // Contact
//   doc.setFontSize(10);
//   doc.text(`${portfolioData.contact.email}`, margin, y);
//   y += 5;
//   doc.text(`${portfolioData.contact.phone}`, margin, y);
//   y += 5;
//   doc.text(`GitHub: ${portfolioData.contact.github}`, margin, y);
//   y += 5;
//   doc.text(`LinkedIn: ${portfolioData.contact.linkedin}`, margin, y);
//   y += 5;
//   doc.text(`Twitter: ${portfolioData.contact.twitter}`, margin, y);
//   y += 10;

//   // About Me
//   doc.setFontSize(14);
//   doc.setFont("helvetica", "bold");
//   doc.text("About Me", margin, y);
//   y += 8;

//   doc.setFontSize(10);
//   doc.setFont("helvetica", "normal");
//   const aboutLines = doc.splitTextToSize(portfolioData.about, pageWidth - 2 * margin);
//   doc.text(aboutLines, margin, y);
//   y += aboutLines.length * 6;

//   // Skills
//   doc.setFontSize(14);
//   doc.setFont("helvetica", "bold");
//   doc.text("Skills", margin, y);
//   y += 8;

//   doc.setFont("helvetica", "normal");
//   portfolioData.skills.forEach((skill) => {
//     doc.setFontSize(11);
//     doc.text(`• ${skill.title}: ${skill.items.join(", ")}`, margin, y);
//     y += 6;
//   });

//   // Projects
//   y += 6;
//   doc.setFontSize(14);
//   doc.setFont("helvetica", "bold");
//   doc.text("Projects", margin, y);
//   y += 8;

//   doc.setFont("helvetica", "normal");
//   portfolioData.projects.forEach((project) => {
//     if (y > 260) {
//       doc.addPage();
//       y = margin;
//     }

//     doc.setFontSize(11);
//     doc.setFont("helvetica", "bold");
//     doc.text(`${project.title}`, margin, y);
//     y += 5;

//     doc.setFont("helvetica", "normal");
//     const descLines = doc.splitTextToSize(project.description, pageWidth - 2 * margin);
//     doc.text(descLines, margin + 4, y);
//     y += descLines.length * 6;
//   });

//   doc.save("Ankan_Maity_CV.pdf");

const doc = new jsPDF();

    // Set initial y-position for content
    let yPos = 15;
    const leftMargin = 20;
    const sectionSpacing = 10;
    const lineHeight = 7;

    // --- ANKAN MAITY (Name) ---
    doc.setFont("helvetica", "bold");
    doc.setFontSize(24);
    doc.text("ANKAN MAITY", leftMargin, yPos);
    yPos += lineHeight + 5; // Add more space after the name

    // --- Contact Information ---
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text(`Ph.No: 8509640363`, leftMargin, yPos);
    doc.text(`Email: maityankan55@gmail.com`, leftMargin + 60, yPos);
    yPos += lineHeight - 2;
    doc.setFont("helvetica", "bold");
    doc.text(`Github:`, leftMargin, yPos);
    doc.setFont("helvetica", "normal");
    doc.text(`https://github.com/Ankan5960`, leftMargin + 13 , yPos);
    doc.text(`LinkedIn: www.linkedin.com/in/ankan-maity-a1b44927a`, leftMargin + 60, yPos);
    yPos += lineHeight - 2;
    doc.text(`Kolkata, India`, leftMargin, yPos);
    yPos += sectionSpacing;

    // --- Horizontal Line Separator ---
    doc.line(leftMargin, yPos, 190, yPos); // x1, y1, x2, y2
    yPos += sectionSpacing;

    // --- PROJECTS ---
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("PROJECTS", leftMargin, yPos);
    yPos += lineHeight + 3;

    // EcoBin Project
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text("EcoBin – IoT-Based Smart Waste Management System:", leftMargin, yPos); 
    yPos += lineHeight;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    let ecoBinDesc = `EcoBin is a full-stack waste management solution designed using a microservices architecture. [cite: 3] [cite_start]The backend is built with .NET Web API and PostgreSQL, while the frontend uses React (TypeScript) and Tailwind CSS. [cite: 4] [cite_start]The system is containerized with Docker and implements role-based authentication for Admins, Collectors, Users, and Guests.`;
    let splitEcoBinDesc = doc.splitTextToSize(ecoBinDesc, 170);
    doc.text(splitEcoBinDesc, leftMargin, yPos);
    yPos += splitEcoBinDesc.length * lineHeight;

    let ecoBinTech = `EcoBin integrates with smart hardware using ESP32, MQ-135 (air quality), Ultrasonic Sensor (waste level), DHT11 (temperature/humidity), Load Cell (weight), and Neo GSM for communication. [cite: 6] [cite_start]It enables real-time dustbin monitoring and data collection. [cite: 7] [cite_start]Key features include:`;
    let splitEcoBinTech = doc.splitTextToSize(ecoBinTech, 170);
    doc.text(splitEcoBinTech, leftMargin, yPos);
    yPos += splitEcoBinTech.length * lineHeight;

    doc.text(`- Users can locate and navigate to the nearest available dustbin.`, leftMargin + 5, yPos); 
    yPos += lineHeight;
    doc.text(`- Collectors receive optimized routes to bins marked full or hazardous.`, leftMargin + 5, yPos); 
    yPos += lineHeight;
    doc.text(`- Admins manage bin data, users, and collector operations.`, leftMargin + 5, yPos); 
    yPos += lineHeight;

    let ecoBinSummary = `EcoBin enhances urban cleanliness by automating monitoring, reducing overflow, and optimizing collection routes based on real-time environmental and waste data. [cite: 12]`;
    let splitEcoBinSummary = doc.splitTextToSize(ecoBinSummary, 170);
    doc.text(splitEcoBinSummary, leftMargin, yPos);
    yPos += splitEcoBinSummary.length * lineHeight;
    yPos += sectionSpacing;

    // Fingerprint Based EVM Machine
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text("Fingerprint Based EVM Machine:", leftMargin, yPos); 
    yPos += lineHeight;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    let evmDesc = `A Fingerprint Based Electronic Voting Machine (EVM) integrated biometric technology for enhanced security. [cite: 13] [cite_start]Voters authenticate their identity using fingerprints, ensuring that only eligible voters can cast their votes. [cite: 14] [cite_start]This system aims to prevent electoral fraud, improve accuracy, and streamline the voting process, making elections more secure and efficient. [cite: 15]`;
    let splitEvmDesc = doc.splitTextToSize(evmDesc, 170);
    doc.text(splitEvmDesc, leftMargin, yPos);
    yPos += splitEvmDesc.length * lineHeight;
    doc.text(`Technologies used: Arduino Microcontroller, fingerprint sensor, TFT display`, leftMargin, yPos);
    yPos += sectionSpacing;

    // Frontend Website for Business
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text("Fronted Website for Business:", leftMargin, yPos); 
    yPos += lineHeight;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    let websiteDesc = `A fronted website for "Maity Enterprise" which is providing fiber optic connection to users. [cite: 17] [cite_start]Users can see their location on this website, and also find the plans. [cite: 18] [cite_start]New users can find the nearest Optical splitters from it. [cite: 19]`;
    let splitWebsiteDesc = doc.splitTextToSize(websiteDesc, 170);
    doc.text(splitWebsiteDesc, leftMargin, yPos);
    yPos += splitWebsiteDesc.length * lineHeight;
    doc.text(`Technologies used: ReactJs, Tailwind css`, leftMargin, yPos);
    yPos += lineHeight;
    doc.text(`Project Link: https://maity-enterprise.netlify.app/`, leftMargin, yPos); 
    yPos += sectionSpacing + 5;

    // --- Horizontal Line Separator ---
    doc.line(leftMargin, yPos, 190, yPos);
    yPos += sectionSpacing;

    // --- SKILLS ---
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("SKILLS", leftMargin, yPos); 
    yPos += lineHeight + 3;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.text("BACK END DEVELOPMENT |", leftMargin, yPos); 
    doc.setFont("helvetica", "normal");
    doc.text(" C#, Dotnet core/framework, Express, NodeJS.", leftMargin + 50, yPos);
    yPos += lineHeight;

    doc.setFont("helvetica", "bold");
    doc.text("FRONT END DEVELOPMENT |", leftMargin, yPos); 
    doc.setFont("helvetica", "normal");
    doc.text(" React, Tailwind, Bootstrap, Material UI, JavaScript, TypeScript, HTML, CSS.", leftMargin + 50, yPos); 
    yPos += lineHeight;

    doc.setFont("helvetica", "bold");
    doc.text("DATABASE DEVELOPMENT |", leftMargin, yPos);
    doc.setFont("helvetica", "normal");
    doc.text(" Postgres, MySQL.", leftMargin + 50, yPos);
    yPos += lineHeight;

    doc.setFont("helvetica", "bold");
    doc.text("VERSION CONTROL |", leftMargin, yPos);
    doc.setFont("helvetica", "normal");
    doc.text(" Git, Github.", leftMargin + 50, yPos); 
    yPos += lineHeight;

    doc.setFont("helvetica", "bold");
    doc.text("TESTING |", leftMargin, yPos); 
    doc.setFont("helvetica", "normal");
    doc.text(" Postman(api).", leftMargin + 50, yPos); 
    yPos += lineHeight;

    doc.setFont("helvetica", "bold");
    doc.text("CLOUD |", leftMargin, yPos); 
    doc.setFont("helvetica", "normal");
    doc.text(" AWS, Google cloud.", leftMargin + 50, yPos); 
    yPos += lineHeight;

    doc.setFont("helvetica", "bold");
    doc.text("OTHERS |", leftMargin, yPos); 
    doc.setFont("helvetica", "normal");
    doc.text(" DSA, C/C++, python, linux, Docker.", leftMargin + 50, yPos); 
    yPos += sectionSpacing + 5;

    // --- Horizontal Line Separator ---
    doc.line(leftMargin, yPos, 190, yPos);
    yPos += sectionSpacing;

    // --- CERTIFICATES ---
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("CERTIFICATES", leftMargin, yPos); 
    yPos += lineHeight + 3;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text("Udemy: The Complete Full-Stack Web Development Bootcamp", leftMargin, yPos); 
    yPos += lineHeight;
    doc.text("Dr. Angela Yu, Developer and Lead Instructor.", leftMargin, yPos); 
    yPos += sectionSpacing + 5;

    // --- Horizontal Line Separator ---
    doc.line(leftMargin, yPos, 190, yPos);
    yPos += sectionSpacing;

    // --- EDUCATION ---
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("EDUCATION", leftMargin, yPos);
    yPos += lineHeight + 3;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text("Bachelors in ECE (TINT), CGPA: 7.57", leftMargin, yPos); 
    doc.text("2021 - present", leftMargin + 140, yPos); 
    yPos += lineHeight;

    doc.text("10+2 (WBCHSE), Marks: 78.6 %", leftMargin, yPos); 
    doc.text("2019 - 2021", leftMargin + 140, yPos); 
    yPos += lineHeight;

    doc.text("Secondary (WBBSE), Marks: 77.85 %", leftMargin, yPos); 
    doc.text("Pass out Year: 2019", leftMargin + 140, yPos);
    yPos += sectionSpacing + 5;

    // --- Horizontal Line Separator ---
    doc.line(leftMargin, yPos, 190, yPos);
    yPos += sectionSpacing;

    // --- LANGUAGES ---
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("LANGUAGES", leftMargin, yPos); 
    yPos += lineHeight + 3;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text("English, Hindi, Bengali", leftMargin, yPos); 
    yPos += sectionSpacing + 5;

    // --- Horizontal Line Separator ---
    doc.line(leftMargin, yPos, 190, yPos);
    yPos += sectionSpacing;

    // --- HOBBIES ---
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("HOBBIES", leftMargin, yPos); 
    yPos += lineHeight + 3;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text("Traveling, Photography, Cricket, Anime", leftMargin, yPos);
    yPos += sectionSpacing + 5;


    // Save the PDF
    doc.save("Ankan_Maity_Resume.pdf");
};
