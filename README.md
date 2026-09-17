# Sri Lanka G.C.E. Advanced Level Performance Analysis Dashboard

An interactive full-stack analytics dashboard for exploring Sri Lankan G.C.E. Advanced Level examination performance. The platform transforms official examination PDF reports and CSV datasets into clear, comparable, and actionable insights through data processing, REST APIs, and interactive visualizations.

![Sri Lanka G.C.E. Advanced Level Performance Analysis Dashboard](src/assets/logo.png)

## Overview

Examination reports contain valuable statistics, but their PDF and tabular formats can make analysis slow and difficult. This project brings that information together in one analytical workspace, allowing users to explore eligibility, performance, pass rates, grade distributions, and geographic trends across years.

The goal is not simply to display examination statistics. It is to make complex education data easier to explore, compare, and understand, while demonstrating how software engineering and data analytics can support more informed decision-making.

## Key Features

- Year-wise eligibility and performance trends
- Province-level and district-level performance analysis
- Stream-wise performance comparisons
- Subject-wise pass percentages and grade distributions
- School candidate versus private candidate analysis
- Year-to-year performance comparison
- Interactive charts, tables, filters, and summary cards
- PDF and CSV upload with data processing workflows
- Exportable analytical data

## Dashboard Flow

The dashboard follows a practical workflow from source data to user-facing insight:

![Analysis and Dashboard Flow](src/assets/Analysis%20and%20Dashboard%20Flow.png)

## Data Upload and Processing

Official PDF reports and CSV files can be uploaded for processing. The backend extracts, cleans, transforms, and stores the data before making it available to the dashboard through API endpoints.

![Data Upload and Processing Flow](src/assets/Data%20Upload%20and%20Processing%20Flow.png)

## Main Analytical Modules

The dashboard is organized around the questions users are most likely to ask about Advanced Level performance:

![Main Analytical Modules](src/assets/Main%20Analytical%20Modules.png)

## Overall System Architecture

The complete system connects the data ingestion pipeline, analytical backend, database, and React frontend into a single workflow.

![Overall System Flow](src/assets/Overall%20System%20Flow.png)

## Technology Stack

### Backend

- Python
- FastAPI
- Pandas
- PDFPlumber
- SQLite

### Frontend

- React
- Vite
- Tailwind CSS
- Recharts
- Axios

## What This Project Demonstrates

Building this dashboard strengthened practical experience in:

- Full-stack web development
- Data analysis and preprocessing
- PDF data extraction and parsing
- REST API development
- Database design and management
- Interactive data visualization
- Building analytical dashboards from real-world datasets

## Getting Started

### Frontend

Install the frontend dependencies and start the Vite development server:

```bash
npm install
npm run dev
```

The application will be available at the local URL shown by Vite.

### Backend

The backend is implemented with Python and FastAPI. Configure the backend environment and start the API service according to the backend project setup. The frontend API base URL is configured in `src/services/api.js`.

## Project Structure

```text
src/
├── assets/       # Logos and system flow diagrams
├── components/   # Reusable charts, tables, filters, and layout components
├── pages/        # Dashboard analysis and data workflow views
├── services/     # API communication
└── styles/       # Global application styles
```

## Project Purpose

This project focuses on Sri Lankan education data and shows how a combination of data extraction, preprocessing, API development, and visual analytics can turn complex official reports into an accessible decision-support tool.
