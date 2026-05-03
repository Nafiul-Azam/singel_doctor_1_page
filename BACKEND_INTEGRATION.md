# Backend Integration Guide

## Overview

This guide provides everything needed to easily integrate the backend with the frontend.

## Quick Start

### 1. API Configuration

All API configuration is centralized in `src/lib/backend-integration-guide.ts` and `src/lib/api-response-handler.ts`.

Set the backend URL in your `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

### 2. Making API Calls

Use the provided HTTP client helpers for all API requests:

```typescript
import { httpGet, httpPost, ApiResponseHandler } from "@/lib";

// GET request
const response = await httpGet("/doctors");
if (ApiResponseHandler.isSuccess(response)) {
  const doctors = ApiResponseHandler.getData(response);
  console.log(doctors);
}

// POST request with data
const newAppointment = {
  doctorId: "1",
  patientName: "John Doe",
  appointmentDate: "2024-06-01",
};
const response = await httpPost("/appointments", newAppointment);
```

### 3. Response Format

All backend responses should follow this format:

```typescript
{
  "success": true,
  "message": "Operation successful",
  "data": {
    // Your actual data
  }
}
```

or for errors:

```typescript
{
  "success": false,
  "message": "Error description"
}
```

## API Endpoints

### Doctors

- `GET /api/doctors` - List all doctors
- `GET /api/doctors/{id}` - Get doctor details
- `GET /api/doctors/search?q=keyword` - Search doctors

### Appointments

- `GET /api/appointments` - List appointments
- `POST /api/appointments` - Create appointment
- `GET /api/appointments/slots/available?date=2024-06-01` - Get available slots
- `DELETE /api/appointments/{id}` - Cancel appointment

### Services

- `GET /api/services` - List all services
- `GET /api/services/{id}` - Get service details

### Blog

- `GET /api/blog` - List blog posts
- `GET /api/blog/{slug}` - Get blog post

### Reviews

- `GET /api/reviews` - List reviews
- `POST /api/reviews` - Submit review

### Contact

- `POST /api/contact` - Submit contact form

## Service Pattern

Create services in `src/services/` following this pattern:

```typescript
import { httpGet, httpPost } from "@/lib";
import { API_ENDPOINTS } from "@/lib/backend-integration-guide";
import type { ApiResponse } from "@/types/api.types";

export class DoctorService {
  static async getDoctors(): Promise<ApiResponse<Doctor[]>> {
    return httpGet<Doctor[]>(API_ENDPOINTS.DOCTORS.LIST);
  }

  static async getDoctorById(id: string): Promise<ApiResponse<Doctor>> {
    return httpGet<Doctor>(API_ENDPOINTS.DOCTORS.GET(id));
  }

  static async createDoctor(
    data: CreateDoctorDTO,
  ): Promise<ApiResponse<Doctor>> {
    return httpPost<Doctor>(API_ENDPOINTS.DOCTORS.CREATE, data);
  }

  static async updateDoctor(
    id: string,
    data: UpdateDoctorDTO,
  ): Promise<ApiResponse<Doctor>> {
    return httpPut<Doctor>(API_ENDPOINTS.DOCTORS.UPDATE(id), data);
  }

  static async deleteDoctor(id: string): Promise<ApiResponse<void>> {
    return httpDelete<void>(API_ENDPOINTS.DOCTORS.DELETE(id));
  }
}
```

## Component Integration

### Using Data in Components

```typescript
"use client";

import { useEffect, useState } from "react";
import { DoctorService } from "@/services/doctor.service";
import { ApiResponseHandler } from "@/lib";
import type { Doctor } from "@/types/doctor.types";

export function DoctorsList() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadDoctors() {
      try {
        const response = await DoctorService.getDoctors();
        if (ApiResponseHandler.isSuccess(response)) {
          setDoctors(ApiResponseHandler.getData(response) || []);
        } else {
          setError(ApiResponseHandler.getErrorMessage(response));
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    }

    loadDoctors();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {doctors.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}
    </div>
  );
}
```

## Error Handling

Use predefined error messages from `ERROR_MESSAGES` constant:

```typescript
import { ERROR_MESSAGES } from "@/lib";

try {
  await someApiCall();
} catch (error) {
  console.error(ERROR_MESSAGES.NETWORK_ERROR);
}
```

## Type Safety

### Required Types

Ensure these types are defined in `src/types/`:

- `ApiResponse<T>` - API response wrapper
- `Doctor`
- `Appointment`
- `ClinicService`
- `BlogPost`
- `Review`
- `Contact`

### Creating New Types

```typescript
// src/types/doctor.types.ts
export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  title: string;
  experienceYears: number;
  slug: string;
}

export interface CreateDoctorDTO {
  name: string;
  specialty: string;
  title: string;
  experienceYears: number;
}
```

## Testing

Use the provided mock data in `src/data/mock/` while backend is being developed:

```typescript
import { MOCK_DOCTORS } from "@/data/mock/doctor.mock";

// Replace with real API call later
const doctors = MOCK_DOCTORS;
```

## Debugging

Enable request logging by setting environment variable:

```env
NEXT_PUBLIC_DEBUG_API=true
```

## File Structure Summary

```
src/
├── components/          # React components (organized by type)
├── lib/                # Utility functions & API helpers
│   ├── http-client.ts      # HTTP request utilities
│   ├── api-response-handler.ts
│   └── backend-integration-guide.ts
├── services/           # API service classes
├── types/              # TypeScript types & interfaces
└── data/
    └── mock/          # Mock data for development
```

## Migration Path

1. **Phase 1**: Keep using mock data
2. **Phase 2**: Add API_ENDPOINTS constants
3. **Phase 3**: Create Service classes
4. **Phase 4**: Update components to use Services
5. **Phase 5**: Remove mock data imports

## Support

For questions or issues with backend integration:

1. Check the service class in `src/services/`
2. Verify response format matches `ApiResponse<T>`
3. Check error handling in components
4. Review environment variables
